(() => {
  "use strict";
  const styles = {
    birthday: ["#151022", "#39253f", "#e9bad3", "#e4d3e7", "party"],
    friendbirthday: ["#0e1c25", "#233644", "#a9d9d4", "#d4e9e5", "adventure"],
    march: ["#1b1120", "#3b233a", "#efb6d3", "#f0d9e8", "spring"],
    romance: ["#1d101c", "#412039", "#edb6cf", "#efd4e1", "romance"],
    may7: ["#0d2028", "#214957", "#dfcc95", "#d5ecec", "flag"],
    newyear: ["#0b1d26", "#173b47", "#bbdfdd", "#dcecef", "winter"],
    september: ["#141c2b", "#243450", "#c6d3a9", "#dde5ef", "study"],
    summer: ["#122522", "#2d5149", "#f0d5a1", "#e3ebd9", "summer"],
    memorial: ["#131821", "#232d38", "#c9c2af", "#d5d6d8", "memory"],
    newborn: ["#1b192c", "#3b354f", "#c7c1e6", "#e5dded", "baby"],
    nauryz: ["#10231f", "#2b4a37", "#dcca9b", "#e2e6d6", "spring"],
    anniversary: ["#211827", "#45314c", "#d7badb", "#eedce8", "romance"],
    halloween: ["#190f22", "#382039", "#e8b078", "#dfd1e5", "halloween"],
    wedding: ["#211d2a", "#41384f", "#e7d4ad", "#eee7e1", "wedding"],
    graduation: ["#142335", "#293d53", "#d9c79c", "#e1e7ee", "study"],
    housewarming: ["#211b1c", "#423236", "#dfc3a4", "#ebe0d6", "home"],
    success: ["#1c1b26", "#3b3549", "#e2cd9d", "#eae2d7", "celebrate"],
    recovery: ["#132425", "#2b4644", "#b7d8cb", "#e0e9e4", "calm"],
  };
  let art = null,
    time = 0,
    dirty = true,
    inView = false,
    kind = "",
    state = null;
  function apply(config) {
    const key =
      config.holiday === "valentine"
        ? "romance"
        : config.holiday === "birthday" && config.tone === "friend"
          ? "friendbirthday"
          : config.holiday === "just" && config.tone === "love"
            ? "romance"
            : config.holiday;
    const values = styles[key] || [
      "#080913",
      "#211b31",
      "#d9b3f6",
      "#f3eafa",
      "cosmos",
    ];
    const [base, card, accent, ink, style] = values;
    document.body.dataset.theme = style;
    document.body.dataset.occasion = key;
    for (const [k, v] of Object.entries({
      "--page": base,
      "--card": card,
      "--accent": accent,
      "--ink": ink,
      "--line": accent + "35",
      "--muted": ink + "b8",
    }))
      document.documentElement.style.setProperty(k, v);
    window.UniverseTheme = { canvasCenter: card, canvasEdge: base };
    const host = document.getElementById("planet-scene");
    const selected = ThemeScenes.select(config);
    kind = selected?.[0]?.slice(6) || "";
    host.classList.toggle("theme-art", !!kind);
    if (!art) {
      art = document.createElement("canvas");
      art.id = "theme-hero";
      art.setAttribute("aria-hidden", "true");
      host.append(art);
      if ("IntersectionObserver" in window)
        new IntersectionObserver((entries) => {
          inView = entries[0].isIntersecting;
          dirty = true;
          Universe.wake();
        }).observe(host);
      else inView = true;
    }
    art.hidden = !kind;
    time = 0;
    state = {
      ctx: art.getContext("2d"),
      x: 0,
      y: 0,
      pulse: 0,
      clicked: false,
      dots: Array.from({ length: 100 }, (_, i) => ({
        x: (i * 127) % 1000,
        y: (i * 97) % 600,
        s: (i * 0.37) % 1,
        r: (i * 0.23) % 1,
        a: i * 2.3999,
      })),
    };
    if (!state.ctx) {
      art.hidden = true;
      host.classList.remove("theme-art");
    }
    dirty = true;
    Universe.wake();
  }
  document.addEventListener("letter-rendered", (e) => apply(e.detail));
  document.addEventListener("theme-preview", (e) => apply(e.detail));
  document.addEventListener("motion-change", () => {
    dirty = true;
  });
  addEventListener("resize", () => {
    dirty = true;
  });
  let since = 0;
  Universe.add((dt, now, paused) => {
    if (!art || !kind || !state?.ctx || !inView) return false;
    since += dt;
    if (paused && !dirty) return false;
    if (!dirty && !paused && since < 1 / 24) return true;
    if (!paused) time += since;
    since = 0;
    const rect = art.getBoundingClientRect();
    if (!rect.width || !rect.height) return false;
    const d = Math.min(devicePixelRatio || 1, 1.3),
      w = Math.round(rect.width * d),
      h = Math.round(rect.height * d);
    if (art.width !== w || art.height !== h) {
      art.width = w;
      art.height = h;
    }
    const g = state.ctx;
    g.setTransform(w / 1000, 0, 0, h / 600, 0, 0);
    g.clearRect(0, 0, 1000, 600);
    g.shadowBlur = 8;
    g.shadowColor = "#bfa5cd";
    ThemeScenes.draw(kind, state, paused && Universe.reduced ? 12 : time);
    dirty = false;
    return !paused;
  });
  const light = document.createElement("div");
  light.className = "memory-light";
  light.hidden = true;
  document.body.append(light);
  document.addEventListener("memory-light", () => {
    light.hidden = false;
  });
  document.addEventListener("letter-rendered", () => (light.hidden = true));
})();
