(function () {
  'use strict';

  // React Bits Aurora, kept as a small vanilla WebGL2 runtime for the static site.
  const VERTEX = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;
  const FRAGMENT = `#version 300 es
precision highp float;
uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;
uniform float uLightMode;
out vec4 fragColor;

vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m; m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0; vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5); vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g; g.x = a0.x * x0.x + h.x * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
struct ColorStop { vec3 color; float position; };
#define COLOR_RAMP(colors, factor, finalColor) { \\
  int index = 0; \\
  for (int i = 0; i < 2; i++) { ColorStop currentColor = colors[i]; bool isInBetween = currentColor.position <= factor; index = int(mix(float(index), float(i), float(isInBetween))); } \\
  ColorStop currentColor = colors[index]; ColorStop nextColor = colors[index + 1]; float range = nextColor.position - currentColor.position; float lerpFactor = (factor - currentColor.position) / range; finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \\
}
void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  ColorStop colors[3]; colors[0] = ColorStop(uColorStops[0], 0.0); colors[1] = ColorStop(uColorStops[1], 0.5); colors[2] = ColorStop(uColorStops[2], 1.0);
  vec3 rampColor; COLOR_RAMP(colors, uv.x, rampColor);
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height); height = (uv.y * 2.0 - height + 0.2); float intensity = 0.6 * height;
  float midPoint = 0.20; float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  vec3 auroraColor = intensity * rampColor;
  if (uLightMode > 0.5) {
    float energy = clamp(max(intensity, 0.0), 0.0, 1.0); float coverage = clamp(auroraAlpha * (0.55 + 0.45 * energy), 0.0, 0.86);
    vec3 chroma = pow(clamp(rampColor, 0.0, 1.0), vec3(1.2)); float chromaPeak = max(chroma.r, max(chroma.g, chroma.b)); chroma /= max(chromaPeak, 0.0001);
    fragColor = vec4(mix(vec3(1.0), chroma, min(coverage * 1.08, 0.94)), 1.0);
  } else { fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha); }
}
`;

  const DEFAULTS = { colorStops: ['#7cff67', '#b497cf', '#5227ff'], speed: 1, amplitude: 1, blend: .5, lightMode: false };
  let runtime = null;
  const hexToRgb = (hex) => {
    const value = String(hex || '').replace('#', '');
    return [parseInt(value.slice(0, 2), 16) / 255, parseInt(value.slice(2, 4), 16) / 255, parseInt(value.slice(4, 6), 16) / 255].map((item) => Number.isFinite(item) ? item : 0);
  };
  const compile = (gl, type, source) => {
    const shader = gl.createShader(type); gl.shaderSource(shader, source); gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) { const message = gl.getShaderInfoLog(shader); gl.deleteShader(shader); throw new Error(message || 'Aurora shader compile failed'); }
    return shader;
  };

  function init(host, options = {}) {
    if (!host) return null;
    if (runtime?.host === host) { update(options); return runtime; }
    destroy();
    const state = { host, options: { ...DEFAULTS, ...options, colorStops: [...(options.colorStops || DEFAULTS.colorStops)] }, raf: 0, startedAt: performance.now(), visible: true, fallback: false };
    host.classList.add('aurora-background');
    let gl;
    try { gl = state.gl = document.createElement('canvas').getContext('webgl2', { alpha: true, premultipliedAlpha: true, antialias: true }); } catch (_) { gl = null; }
    if (!gl) { state.fallback = true; host.classList.add('is-fallback'); runtime = state; updateFallback(); return state; }
    const canvas = state.canvas = gl.canvas; canvas.setAttribute('aria-hidden', 'true'); host.replaceChildren(canvas); gl.clearColor(0, 0, 0, 0); gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    try {
      const program = state.program = gl.createProgram(); gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERTEX)); gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAGMENT)); gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program) || 'Aurora program link failed');
      state.locations = { position: gl.getAttribLocation(program, 'position'), time: gl.getUniformLocation(program, 'uTime'), amplitude: gl.getUniformLocation(program, 'uAmplitude'), stops: [0, 1, 2].map((i) => gl.getUniformLocation(program, `uColorStops[${i}]`)), resolution: gl.getUniformLocation(program, 'uResolution'), blend: gl.getUniformLocation(program, 'uBlend'), lightMode: gl.getUniformLocation(program, 'uLightMode') };
      state.buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, state.buffer); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      state.resize = () => { const rect = host.getBoundingClientRect(); const dpr = Math.min(window.devicePixelRatio || 1, 2); const width = Math.max(1, Math.round(rect.width * dpr)); const height = Math.max(1, Math.round(rect.height * dpr)); if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; } gl.viewport(0, 0, width, height); };
      state.resize(); state.resizeObserver = new ResizeObserver(state.resize); state.resizeObserver.observe(host);
      const draw = (now) => { state.raf = requestAnimationFrame(draw); if (document.hidden || !state.visible) return; state.resize(); gl.useProgram(program); gl.bindBuffer(gl.ARRAY_BUFFER, state.buffer); gl.enableVertexAttribArray(state.locations.position); gl.vertexAttribPointer(state.locations.position, 2, gl.FLOAT, false, 0, 0); const settings = state.options; gl.uniform1f(state.locations.time, ((now - state.startedAt) / 1000) * Number(settings.speed ?? 1) * .1); gl.uniform1f(state.locations.amplitude, Number(settings.amplitude ?? 1)); gl.uniform1f(state.locations.blend, Number(settings.blend ?? .5)); gl.uniform2f(state.locations.resolution, canvas.width, canvas.height); gl.uniform1f(state.locations.lightMode, settings.lightMode ? 1 : 0); state.locations.stops.forEach((location, index) => gl.uniform3fv(location, hexToRgb(settings.colorStops[index]))); gl.drawArrays(gl.TRIANGLES, 0, 3); };
      state.raf = requestAnimationFrame(draw); host.classList.remove('is-fallback');
    } catch (_) { state.fallback = true; host.classList.add('is-fallback'); host.replaceChildren(); }
    runtime = state; updateFallback(); return state;
  }
  function update(options = {}) { if (!runtime) return; runtime.options = { ...runtime.options, ...options, colorStops: [...(options.colorStops || runtime.options.colorStops || DEFAULTS.colorStops)] }; updateFallback(); }
  function updateFallback() { if (!runtime?.fallback) return; const [a, b, c] = runtime.options.colorStops; runtime.host.style.setProperty('--aurora-a', a); runtime.host.style.setProperty('--aurora-b', b); runtime.host.style.setProperty('--aurora-c', c); runtime.host.style.setProperty('--aurora-speed', `${Math.max(.5, 4 / Math.max(Number(runtime.options.speed) || 1, .1))}s`); }
  function setVisible(visible) { if (runtime) runtime.visible = visible !== false; }
  function destroy() { if (!runtime) return; cancelAnimationFrame(runtime.raf); runtime.resizeObserver?.disconnect(); runtime.gl?.getExtension('WEBGL_lose_context')?.loseContext(); runtime.host?.classList.remove('aurora-background', 'is-fallback'); runtime = null; }
  window.linAuroraBackground = { init, update, setVisible, destroy, defaults: DEFAULTS };
})();
