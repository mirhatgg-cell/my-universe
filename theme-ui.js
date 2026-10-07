/* Theme architecture and useful author previews; all decoration stays outside pointer handling. */
(() => {
  "use strict";
  const paths = {
    cosmos:
      '<circle cx="12" cy="12" r="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-25 12 12)"/>',
    party:
      '<path d="M3 11h18v10H3zM6 11V8h12v3M8 8V4m4 4V3m4 5V4M3 16q3-3 6 0t6 0t6 0"/>',
    adventure: '<path d="M2 21 12 3l10 18ZM9 21l3-10 3 10M3 5l3-2m12 1 3 2"/>',
    spring:
      '<path d="M12 21V11m0 6-6-3m6 6 6-4"/><path d="M12 11C1 12 4 2 10 7c-2-7 8-7 5 0 7-5 10 5-3 4Z"/>',
    romance: '<path d="M12 21C-1 12 2 2 8 5l4 3 4-3c6-3 9 7-4 16Z"/>',
    flag: '<path d="M5 22V2m0 1h15v11H5"/><circle cx="12" cy="8" r="2"/><path d="m10 12 2-1 2 1"/>',
    winter:
      '<path d="M12 2v20M3 7l18 10M3 17 21 7M8 4l4 3 4-3M8 20l4-3 4 3M3 11l4-3-1-4M18 20l-1-4 4-3"/>',
    study:
      '<path d="M12 5C8 2 4 3 2 4v16c4-2 7-1 10 1 3-2 6-3 10-1V4c-2-1-6-2-10 1Zm0 0v16M5 8h4m6 0h4M5 12h4m6 0h4"/>',
    summer:
      '<circle cx="12" cy="9" r="4"/><path d="M12 1v2M4 3l2 2m12 0 2-2M2 9h2m16 0h2M2 18q5-4 10 0t10 0M2 22q5-4 10 0t10 0"/>',
    memory: '<path d="M8 10h8v11H8ZM12 10V8m0-1c-6-2-1-5 0-6 3 3 4 5 0 6Z"/>',
    baby: '<path d="M3 11h18v6H3ZM3 11q0-7 6-7v7M3 17q9 8 18 0M6 19l-2 3m14-3 2 3"/><path d="M15 3v5m-2-2h4"/>',
    nauryz:
      '<ellipse cx="12" cy="9" rx="10" ry="6"/><path d="M2 9v11h20V9M2 9l10-6 10 6M5 6l14 6M5 12l14-6M12 3v12M9 20v-7h6v7"/>',
    anniversary:
      '<circle cx="8" cy="12" r="6"/><circle cx="16" cy="12" r="6"/><path d="M11 3h2m-1-1v2"/>',
    halloween:
      '<path d="M12 5q-2-3 1-4M12 5C1 1-2 22 12 22S23 1 12 5Z"/><path d="m6 12 3-3 1 4m4 0 1-4 3 3M6 17l3 2 3-2 3 2 3-2"/>',
    wedding:
      '<circle cx="8" cy="14" r="6"/><circle cx="16" cy="14" r="6"/><path d="m12 8-4-4 4-3 4 3Z"/>',
    graduation: '<path d="m1 8 11-5 11 5-11 5ZM5 10v7q7 5 14 0v-7m4-2v10"/>',
    home: '<path d="m2 11 10-9 10 9M5 9v13h14V9M9 22v-8h6v8M4 22h16"/>',
    success:
      '<path d="M7 2h10v9q-5 7-10 0ZM7 4H3v6q0 4 5 4M17 4h4v6q0 4-5 4M12 15v5m-5 2h10"/>',
    calm: '<path d="M4 21C2 4 18 2 22 2c-1 12-6 18-18 19Zm0 0L18 6M9 16l-1-6m5 3h5"/>',
    friendship: '<path d="m9 7-4 4q-4 5 1 9t9-1l4-4q4-5-1-9t-9 1m-1 9 8-8"/>',
    custom: '<path d="m12 2 9 6-3 13H6L3 8Zm0 0v20M3 8h18M6 21l6-13 6 13"/>',
  };
  const profiles = {
    just: ["cosmos", "constellations", "22px", "serif"],
    friendship: ["friendship", "paths", "18px", "sans"],
    custom: ["custom", "facets", "8px", "serif"],
    birthday: ["party", "confetti", "18px", "serif"],
    friendbirthday: ["adventure", "paths", "6px", "sans"],
    march: ["spring", "leaves", "26px 8px 26px 8px", "serif"],
    romance: ["romance", "threads", "999px", "serif"],
    may7: ["flag", "ornament", "6px", "sans"],
    newyear: ["winter", "snow", "18px", "serif"],
    september: ["study", "notebook", "4px", "sans"],
    summer: ["summer", "waves", "26px", "serif"],
    memorial: ["memory", "quiet", "10px", "serif"],
    newborn: ["baby", "quilt", "24px", "serif"],
    nauryz: ["nauryz", "ornament", "12px", "serif"],
    anniversary: ["anniversary", "rings", "999px", "serif"],
    halloween: ["halloween", "web", "8px 22px 8px 22px", "serif"],
    wedding: ["wedding", "lace", "22px", "serif"],
    graduation: ["graduation", "blueprint", "6px", "sans"],
    housewarming: ["home", "windows", "12px", "serif"],
    success: ["success", "rays", "8px", "sans"],
    recovery: ["calm", "leaves", "24px", "serif"],
  };
  function key(c) {
    return c.holiday === "valentine"
      ? "romance"
      : c.holiday === "birthday" && c.tone === "friend"
        ? "friendbirthday"
        : c.holiday === "just" && c.tone === "love"
          ? "romance"
          : c.holiday || "just";
  }
  function svg(id) {
    return (
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
      paths[id] +
      "</svg>"
    );
  }
  function pattern(kind, motif) {
    const small = `<g transform="translate(95 95) scale(1.6)" opacity=".32">${paths[motif]}</g>`;
    const geom = {
      constellations:
        '<path d="m8 28 65 15 38-26m42 152 62-30 36 50"/><circle cx="8" cy="28" r="2"/><circle cx="73" cy="43" r="2"/><circle cx="111" cy="17" r="2"/>',
      paths:
        '<path stroke-dasharray="3 7" d="M-10 180C120 180 80 10 250 45"/><circle cx="32" cy="175" r="5"/><path d="m173 22 13-17 13 17"/>',
      facets:
        '<path d="m0 80 60-60 60 60 60-60 60 60m-240 80 60 60 60-60 60 60 60-60M60 20v200m120-200v200"/>',
      confetti:
        '<path d="m28 22 7 9m135 25 9-8m-44 151-4 10M43 148l-5 7"/><path d="m205 9 7 8-12 2Zm-95 201 9 8-12 2"/>',
      leaves:
        '<path d="M0 220Q70 160 67 50m0 66q-35 0-40-30 35 0 40 30m0 38q35 0 43-30-35 0-43 30M220 0q-60 50-50 130"/>',
      threads:
        '<path d="M-10 55C80-40 160 170 250 50M-10 155C80 60 160 270 250 150"/>',
      ornament:
        '<path d="m30 0 30 30-30 30L0 30Zm180 180 30 30-30 30-30-30ZM60 30h120M30 60v120M180 210H60M210 180V60"/>',
      snow: '<path d="M32 10v44M13 21l38 22M13 43l38-22M184 176v44m-19-33 38 22m-38 0 38-22"/>',
      notebook:
        '<path d="M0 30h240M0 60h240M0 90h240M0 120h240M0 150h240M0 180h240M0 210h240"/><path d="M30 0v240" opacity=".6"/>',
      waves:
        '<path d="M0 40q30-24 60 0t60 0t60 0t60 0M0 180q30-24 60 0t60 0t60 0t60 0"/>',
      quiet: '<path d="M0 220q120-12 240 0" opacity=".3"/>',
      quilt:
        '<path d="M0 0h120v120H0Zm120 120h120v120H120Z"/><circle cx="180" cy="60" r="20"/><path d="m60 160 20 20-20 20-20-20Z"/>',
      rings:
        '<circle cx="30" cy="30" r="15"/><circle cx="40" cy="30" r="15"/><circle cx="190" cy="190" r="15"/><circle cx="200" cy="190" r="15"/>',
      web: '<path d="M0 0 100 100M0 0v140M0 0h140M0 45q25-6 34-13t11-32M0 80q39-8 60-20t20-60M0 115q55-11 85-30t30-85"/>',
      lace: '<path d="M0 18q15-30 30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0M0 222q15-30 30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0"/>',
      blueprint:
        '<path d="M0 60h240M0 120h240M0 180h240M60 0v240M120 0v240M180 0v240"/><path d="m25 25 15 0m-8-8v16"/>',
      windows:
        '<path d="M15 15h40v55H15Zm170 170h40v55h-40ZM35 15v55M15 43h40M205 170v55M185 198h40"/>',
      rays: '<path d="m25 0 0 45M0 25h45m-37-17 34 34m0-34L8 42M200 180v40m-20-20h40"/>',
    };
    return (
      'url("data:image/svg+xml,' +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240" fill="none" opacity=".15" stroke="#dbc9e7" stroke-width=".8">${geom[kind]}${small}</svg>`,
      ) +
      '")'
    );
  }
  let decoration = document.createElement("div");
  decoration.className = "theme-decoration";
  decoration.setAttribute("aria-hidden", "true");
  document.body.prepend(decoration);
  function apply(config) {
    const topic = key(config),
      [motif, texture, radius, font] = profiles[topic] || profiles.just;
    document.body.dataset.surface = texture;
    document.body.dataset.typeface = font;
    document.documentElement.style.setProperty(
      "--theme-pattern",
      pattern(texture, motif),
    );
    document.documentElement.style.setProperty("--button-shape", radius);
    decoration.innerHTML = svg(motif);
    const brand = document.querySelector(".brand");
    if (brand) {
      let mark = brand.querySelector(".theme-mark");
      if (!mark) {
        mark = document.createElement("span");
        mark.className = "theme-mark";
        brand.prepend(mark);
      }
      mark.innerHTML = svg(motif);
    }
    for (const button of document.querySelectorAll(".primary,.secondary")) {
      let mark = button.querySelector(".button-mark");
      if (!mark) {
        mark = document.createElement("span");
        mark.className = "button-mark";
        button.prepend(mark);
      }
      mark.innerHTML = svg(motif);
    }
    document
      .querySelectorAll(".journey-chapter")
      .forEach(
        (el) =>
          (el.dataset.style =
            ["volume", "drawing", "paper"][
              Number(el.querySelector("canvas")?.dataset.sceneIndex || 0)
            ] || "drawing"),
      );
    updateComposition();
  }
  let panel = null,
    lastPreview = "";
  const previewDots = Array.from({ length: 1000 }, (_, i) => ({
    a: i * 2.399,
    s: ((i * 47) % 997) / 997,
    r: Math.sqrt(((i * 79) % 991) / 991),
    z: ((i * 19) % 983) / 491 - 1,
    x: (i * 43) % 1000,
    y: (i * 67) % 600,
  }));
  function updateComposition() {
    const select = document.getElementById("journey-input");
    if (!select) return;
    const cfg = {
      holiday: document.getElementById("holiday-input").value,
      tone: document.getElementById("tone-input").value,
      journey: select.value,
    };
    if (!panel) {
      panel = document.createElement("div");
      panel.id = "pack-composition";
      panel.className = "pack-composition";
      panel.setAttribute("aria-label", "Состав выбранного набора");
      document.getElementById("pack-description").after(panel);
    }
    const ids = AnimationPacks.select(cfg);
    panel.hidden = !ids;
    if (!ids) {
      lastPreview = "";
      return;
    }
    const signature =
      ids.join("|") + "|" + document.getElementById("to-input").value;
    if (signature === lastPreview) return;
    lastPreview = signature;
    panel.replaceChildren();
    ids.forEach((id, j) => {
      const card = document.createElement("article"),
        canvas = document.createElement("canvas"),
        title = document.createElement("p"),
        style = document.createElement("span");
      canvas.width = 300;
      canvas.height = 180;
      canvas.setAttribute("aria-hidden", "true");
      canvas.dataset.sceneIndex = String(j);
      card.className = "pack-preview";
      style.className = "pack-style";
      style.textContent = ["ОБЪЕМНАЯ 3D", "РИСОВАННАЯ 2D", "БУМАЖНАЯ"][j];
      title.textContent = AnimationPacks.info(id)[0];
      card.append(canvas, style, title);
      panel.append(card);
      const g = canvas.getContext("2d");
      if (g) {
        g.setTransform(0.3, 0, 0, 0.3, 0, 0);
        g.fillStyle = window.UniverseTheme?.canvasCenter || "#1b2034";
        g.fillRect(0, 0, 1000, 600);
        AnimationPacks.draw(
          {
            ctx: g,
            type: id,
            name: document.getElementById("to-input").value || "Для тебя",
            dots: previewDots,
            x: 0,
            y: 0,
          },
          12,
        );
      }
    });
  }
  document.addEventListener("letter-rendered", (e) => apply(e.detail));
  document.addEventListener("theme-preview", (e) => apply(e.detail));
  document
    .getElementById("journey-input")
    ?.addEventListener("change", updateComposition);
  document
    .getElementById("to-input")
    ?.addEventListener("change", updateComposition);
  window.ThemeUI = { apply, updateComposition, profiles };
})();
