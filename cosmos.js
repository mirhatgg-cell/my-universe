(() => {
  "use strict";
  const canvas = document.getElementById("cosmos");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let width = 0,
    height = 0,
    dpr = 0,
    time = 0,
    stars = [],
    meteors = [],
    nextMeteor = 4,
    dirty = true,
    px = 0,
    py = 0,
    targetX = 0,
    targetY = 0;
  const pc = document.getElementById("planet"),
    scene = document.getElementById("planet-scene");
  let gl = null,
    program = null,
    buffer = null,
    uniforms = {},
    planetInView = false;
  const vertex = `attribute vec2 aPosition;void main(){gl_Position=vec4(aPosition,0.,1.);}`;
  const fragment = `precision mediump float;
uniform vec2 uResolution;uniform float uTime;uniform vec2 uPointer;
mat3 rx(float a){float c=cos(a),s=sin(a);return mat3(1.,0.,0.,0.,c,s,0.,-s,c);}mat3 rz(float a){float c=cos(a),s=sin(a);return mat3(c,s,0.,-s,c,0.,0.,0.,1.);}
float hash(vec3 p){p=fract(p*.3183099+vec3(.11,.27,.39));p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
float sphere(vec3 ro,vec3 rd,float radius){float b=dot(ro,rd),c=dot(ro,ro)-radius*radius,h=b*b-c;if(h<0.)return -1.;return -b-sqrt(h);}
void main(){vec2 uv=(gl_FragCoord.xy-.5*uResolution)/uResolution.y;uv*=1.0;vec3 ro=vec3(0.,0.,5.8),rd=normalize(vec3(uv*4.7,-4.));mat3 tilt=rx(.93+uPointer.y*.10)*rz(-.38+uPointer.x*.10);vec3 qr=tilt*ro,qd=tilt*rd;vec3 light=normalize(vec3(-3.,3.8,4.));float ts=sphere(ro,rd,1.);float closeD=length(cross(ro,rd));float glow=exp(-max(0.,closeD-1.)*6.)*.13;vec3 col=vec3(.40,.27,.77)*glow;float alpha=glow;
float tr=abs(qd.y)>.0001?-qr.y/qd.y:-1.;vec3 rp=qr+qd*tr;float r=length(rp.xz);float ra=0.;vec3 rc=vec3(0.);if(tr>0.&&r>1.28&&r<2.18){float edge=smoothstep(1.28,1.34,r)*(1.-smoothstep(2.10,2.18,r));float bands=.62+.14*sin(r*145.)+.08*sin(r*360.)+.12*sin(r*38.);float gap=1.-.80*exp(-pow((r-1.78)*56.,2.));ra=edge*bands*gap*.78;vec3 worldp=ro+rd*tr;float shadow=sphere(worldp+light*.015,light,1.);float lit=shadow>0.?.16:1.;rc=mix(vec3(.36,.49,.72),vec3(.82,.54,.76),smoothstep(1.3,2.18,r))*lit;rc+=vec3(.38,.22,.45)*pow(max(0.,1.-abs(r-1.4)*8.),3.);}
if(ra>0.&&(ts<0.||tr>ts)){col=mix(col,rc,ra);alpha=max(alpha,ra);}
if(ts>0.){vec3 p=ro+rd*ts;vec3 n=normalize(p);vec3 q=tilt*p;float a=uTime*.055;vec3 tex=vec3(q.x*cos(a)+q.z*sin(a),q.y,-q.x*sin(a)+q.z*cos(a));float turbulence=noise(tex*5.)*.4+noise(tex*12.)*.14;float bands=.5+.5*sin(tex.y*24.+turbulence*8.);vec3 base=mix(vec3(.20,.28,.49),vec3(.65,.47,.76),bands);base=mix(base,vec3(.75,.68,.87),smoothstep(.62,.92,noise(tex*vec3(3.,26.,3.)))*.55);base+=.08*noise(tex*50.);float day=max(0.,dot(n,light));float rim=pow(1.-max(0.,dot(n,-rd)),3.);col=base*(.075+day*.95)+vec3(.42,.51,1.)*rim*.55;col+=vec3(.94,.70,.88)*pow(max(0.,dot(reflect(-light,n),-rd)),28.)*.12;alpha=1.;}
if(ra>0.&&ts>0.&&tr<ts){col=mix(col,rc,ra);alpha=1.;}
float halo=exp(-abs(closeD-1.025)*34.)*.10;if(ts<0.){col+=vec3(.32,.35,.82)*halo;alpha=max(alpha,halo);}
gl_FragColor=vec4(col,alpha);}`;

  function clearGL() {
    if (gl) {
      if (buffer) gl.deleteBuffer(buffer);
      if (program) gl.deleteProgram(program);
    }
    buffer = program = null;
    gl = null;
    scene?.classList.remove("webgl-ready");
  }
  function initPlanet() {
    if (!pc || !scene) return;
    let vs, fs;
    try {
      gl = pc.getContext("webgl", {
        alpha: true,
        antialias: false,
        premultipliedAlpha: false,
        powerPreference: "low-power",
      });
      if (!gl) return;
      const compile = (type, src) => {
        const sh = gl.createShader(type);
        if (!sh) throw Error("Shader allocation");
        gl.shaderSource(sh, src);
        gl.compileShader(sh);
        if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
          gl.deleteShader(sh);
          throw Error("Shader unavailable");
        }
        return sh;
      };
      vs = compile(gl.VERTEX_SHADER, vertex);
      fs = compile(gl.FRAGMENT_SHADER, fragment);
      program = gl.createProgram();
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS))
        throw Error("Link failed");
      gl.useProgram(program);
      buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW,
      );
      const pos = gl.getAttribLocation(program, "aPosition");
      if (pos < 0) throw Error("Attribute missing");
      gl.enableVertexAttribArray(pos);
      gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
      for (const key of ["uResolution", "uTime", "uPointer"])
        uniforms[key] = gl.getUniformLocation(program, key);
      scene.classList.add("webgl-ready");
      dirty = true;
    } catch {
      if (gl) {
        if (vs) gl.deleteShader(vs);
        if (fs) gl.deleteShader(fs);
      }
      vs = fs = null;
      clearGL();
    } finally {
      if (gl) {
        if (vs) gl.deleteShader(vs);
        if (fs) gl.deleteShader(fs);
      }
    }
  }
  function resize() {
    const nw = innerWidth,
      nh = innerHeight,
      nd = Math.min(devicePixelRatio || 1, 1.5);
    if (nw !== width || nh !== height || nd !== dpr) {
      width = nw;
      height = nh;
      dpr = nd;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from({ length: width < 700 ? 100 : 200 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 0.5 + Math.random() * 1.2,
        phase: Math.random() * Math.PI * 2,
      }));
      dirty = true;
    }
    if (gl && planetInView) {
      const r = pc.getBoundingClientRect(),
        scale = Math.min(dpr, 1.2);
      if (r.width > 0 && r.height > 0) {
        const w = Math.round(r.width * scale),
          h = Math.round(r.height * scale);
        if (pc.width !== w || pc.height !== h) {
          pc.width = w;
          pc.height = h;
          gl.viewport(0, 0, w, h);
          dirty = true;
        }
      }
    }
  }
  function draw(dt) {
    ctx.clearRect(0, 0, width, height);
    for (const s of stars) {
      ctx.fillStyle = `rgba(200,185,255,${0.25 + 0.45 * (0.5 + 0.5 * Math.sin(time * 0.5 + s.phase))})`;
      ctx.beginPath();
      ctx.arc(s.x + px * 8, s.y + py * 6, s.size, 0, Math.PI * 2);
      ctx.fill();
    }
    if (dt && time > nextMeteor) {
      meteors.push({
        x: width * (0.3 + Math.random() * 0.7),
        y: height * Math.random() * 0.4,
        life: 0,
      });
      nextMeteor = time + 8;
    }
    meteors = meteors.filter((m) => m.life < 1.4);
    for (const m of meteors) {
      m.life += dt;
      const x = m.x - m.life * 280,
        y = m.y + m.life * 140,
        a = Math.sin(Math.min(1, m.life / 1.4) * Math.PI);
      const gradient = ctx.createLinearGradient(x, y, x + 90, y - 45);
      gradient.addColorStop(0, `rgba(210,200,255,${a})`);
      gradient.addColorStop(1, "rgba(180,150,255,0)");
      ctx.strokeStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 90, y - 45);
      ctx.stroke();
    }
    if (gl && planetInView && pc.width && pc.height) {
      gl.useProgram(program);
      gl.uniform2f(uniforms.uResolution, pc.width, pc.height);
      gl.uniform1f(uniforms.uTime, time);
      gl.uniform2f(uniforms.uPointer, px, py);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
  }
  let since = 0;
  Universe.add((dt, now, paused) => {
    resize();
    since += dt;
    if (!dirty && since < 1 / 30 && !paused) return true;
    if (paused && !dirty) return false;
    if (!paused) {
      time += since;
      px += (targetX - px) * 0.1;
      py += (targetY - py) * 0.1;
    }
    draw(paused ? 0 : since);
    since = 0;
    dirty = false;
    return !paused;
  });
  if (scene) {
    scene.addEventListener(
      "pointermove",
      (e) => {
        const r = scene.getBoundingClientRect();
        if (!r.width || !r.height) return;
        targetX = ((e.clientX - r.left) / r.width) * 2 - 1;
        targetY = ((e.clientY - r.top) / r.height) * 2 - 1;
        dirty = true;
        Universe.wake();
      },
      { passive: true },
    );
    scene.addEventListener("pointerleave", () => {
      targetX = targetY = 0;
      dirty = true;
      Universe.wake();
    });
    if ("IntersectionObserver" in window)
      new IntersectionObserver((entries) => {
        planetInView = entries[0].isIntersecting;
        dirty = true;
        Universe.wake();
      }).observe(scene);
    else planetInView = true;
  }
  pc?.addEventListener("webglcontextlost", (e) => {
    e.preventDefault();
    gl = null;
    program = buffer = null;
    scene?.classList.remove("webgl-ready");
  });
  pc?.addEventListener("webglcontextrestored", () => {
    initPlanet();
    Universe.wake();
  });
  document.addEventListener("motion-change", () => {
    dirty = true;
  });
  document.addEventListener("letter-rendered", () => {
    dirty = true;
    Universe.wake();
  });
  addEventListener("resize", () => (dirty = true), { passive: true });
  initPlanet();
})();
