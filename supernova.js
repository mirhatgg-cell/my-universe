/* One bounded effect, driven by the shared clock. */
(() => {
  "use strict";
  let canvas = null,
    g = null,
    sparks = [],
    age = 0,
    cx = 0,
    cy = 0,
    w = 0,
    h = 0;
  function clear() {
    canvas?.remove();
    canvas = g = null;
    sparks = [];
    age = 0;
  }
  document.addEventListener("supernova", () => {
    clear();
    if (Universe.paused) return;
    canvas = document.createElement("canvas");
    canvas.className = "supernova-canvas";
    canvas.setAttribute("aria-hidden", "true");
    document.body.append(canvas);
    g = canvas.getContext("2d");
    if (!g) {
      clear();
      return;
    }
    w = innerWidth;
    h = innerHeight;
    const d = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = w * d;
    canvas.height = h * d;
    g.scale(d, d);
    const r = document.getElementById("hug").getBoundingClientRect();
    cx = r.left + r.width / 2;
    cy = r.top + r.height / 2;
    sparks = Array.from({ length: 200 }, (_, i) => ({
      a: i * 2.39996,
      v: 80 + Math.random() * 220,
      r: 0.8 + Math.random() * 1.8,
    }));
    Universe.wake();
  });
  document.addEventListener("motion-change", () => {
    if (Universe.paused) clear();
  });
  addEventListener("resize", clear, { passive: true });
  Universe.add((dt, now, paused) => {
    if (!g || paused) return false;
    age += dt;
    g.clearRect(0, 0, w, h);
    if (age > 3.2) {
      clear();
      return false;
    }
    const radius = 8 + age * 180;
    const glow = g.createRadialGradient(cx, cy, 0, cx, cy, radius);
    glow.addColorStop(0, `rgba(255,243,220,${Math.max(0, 1 - age)})`);
    glow.addColorStop(
      0.12,
      `rgba(208,165,255,${Math.max(0, 0.65 - age * 0.2)})`,
    );
    glow.addColorStop(1, "rgba(80,130,255,0)");
    g.fillStyle = glow;
    g.fillRect(0, 0, w, h);
    g.strokeStyle = `rgba(220,200,255,${Math.max(0, 1 - age / 3)})`;
    g.lineWidth = 2;
    g.beginPath();
    g.arc(cx, cy, radius, 0, Math.PI * 2);
    g.stroke();
    for (const s of sparks) {
      g.fillStyle = `rgba(226,208,255,${Math.max(0, 1 - age / 3.2)})`;
      g.beginPath();
      g.arc(
        cx + Math.cos(s.a) * s.v * age,
        cy + Math.sin(s.a) * s.v * age + age * age * 12,
        s.r,
        0,
        Math.PI * 2,
      );
      g.fill();
    }
    return true;
  });
})();
