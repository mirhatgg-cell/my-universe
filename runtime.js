/* One frame scheduler and one pause state for every visual effect. */
(() => {
  "use strict";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  let paused = reduce.matches,
    frame = 0,
    last = 0;
  const tasks = new Set();
  function request() {
    if (!frame && !document.hidden) frame = requestAnimationFrame(tick);
  }
  function tick(now) {
    frame = 0;
    const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
    last = now;
    let animate = false;
    for (const task of tasks) {
      try {
        animate = task(dt, now, paused) || animate;
      } catch (error) {
        tasks.delete(task);
        console.error("Отключён сбойный визуальный эффект", error);
      }
    }
    if (animate && !paused && !document.hidden) request();
    else last = 0;
  }
  function sync() {
    document.body.classList.toggle("paused", paused);
    const b = document.getElementById("motion-toggle");
    if (b) {
      b.setAttribute("aria-pressed", String(paused));
      b.setAttribute(
        "aria-label",
        paused ? "Включить анимацию" : "Приостановить анимацию",
      );
      b.textContent = paused ? "▷ Продолжить" : "Ⅱ Пауза";
    }
    document.dispatchEvent(
      new CustomEvent("motion-change", { detail: { paused } }),
    );
    request();
  }
  window.Universe = {
    add(task) {
      tasks.add(task);
      request();
      return () => tasks.delete(task);
    },
    wake: request,
    get paused() {
      return paused;
    },
    get reduced() {
      return reduce.matches;
    },
  };
  document.getElementById("motion-toggle")?.addEventListener("click", () => {
    paused = !paused;
    sync();
  });
  reduce.addEventListener("change", () => {
    paused = reduce.matches;
    sync();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(frame);
      frame = 0;
      last = 0;
    } else request();
  });
  addEventListener("resize", request, { passive: true });
  sync();
})();
