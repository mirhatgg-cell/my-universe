(() => {
  "use strict";

  const copy = {
    sun: [
      "Твой свет",
      "Тепло начинается с одного человека и постепенно доходит до другого.",
      "Коснись звезды, чтобы послать волну тепла.",
    ],
    support: [
      "Я поддержу",
      "Когда тяжело, рядом появляется опора.",
      "Коснись сцены — опора поднимет звезду.",
    ],
    path: [
      "Шаг за шагом",
      "Твой первый шаг оставляет дорогу для следующего.",
      "Коснись сцены — начни путь заново.",
    ],
    balance: [
      "Оставаясь собой",
      "Быть рядом — значит слышать друг друга, сохраняя своё пространство.",
      "Проведи пальцем — у каждой звезды остаётся своя орбита.",
    ],
    orbits: [
      "Наши траектории",
      "У каждого был свой путь. А потом в нём появилось место для другого.",
      "Две отдельные орбиты постепенно становятся одной системой.",
    ],
    tree: [
      "Хорошее растёт",
      "Большое начинается с малого: с разговора, внимания, одного доброго поступка.",
      "Коснись дерева — на ветвях расцветёт ещё немного тепла.",
    ],
    heart: [
      "То, что не помещается в слова",
      "Из сотен маленьких моментов складывается одно большое чувство.",
      "Коснись сердца: оно рассыплется и снова соберётся.",
    ],
    flower: [
      "Пусть всё расцветает",
      "Пусть у тебя будет время расти в своём ритме и раскрывать то, что делает тебя собой.",
      "Коснись цветка, чтобы раскрыть его заново.",
    ],
    name: [
      "Среди миллиардов звёзд",
      "Всё это пространство — и одно имя, к которому возвращаются мысли.",
      "Проведи пальцем: звёзды отзываются на твоё прикосновение.",
    ],
    gift: [
      "Немного чуда для тебя",
      "Есть подарки, которые нельзя завернуть. Внимание. Время. И эти слова.",
      "Нажми на подарок — внутри маленькая светящаяся Вселенная.",
    ],
  };
  let states = [],
    observer,
    dirty = true;
  const clamp = (x) => Math.max(0, Math.min(1, x)),
    ease = (x) => {
      x = clamp(x);
      return x * x * (3 - 2 * x);
    };
  function mount(config = {}) {
    observer?.disconnect();
    states = [];
    dirty = true;
    document.getElementById("visual-journey")?.remove();
    const root = document.createElement("section");
    root.id = "visual-journey";
    root.className = "visual-journey";
    root.setAttribute("aria-label", "Твоя история в движении");
    const romantic =
      config.journey === "love" ||
      (config.journey !== "birthday" &&
        config.journey !== "gentle" &&
        config.tone === "love");
    const birthday =
      config.journey === "birthday" ||
      (config.journey !== "gentle" && config.holiday === "birthday");
    let types = romantic
      ? ["orbits", "tree", "heart", "flower", "name"]
      : birthday
        ? ["gift", "tree", "flower", "name"]
        : ["orbits", "tree", "flower", "name"];
    if (config.journey === "auto" && config.holiday === "newyear")
      types.splice(0, 1, "gift");
    const themed =
      config.journey === "auto" ? ThemeScenes.select(config) : null;
    if (themed) types = [...themed, "name"];
    const packed = AnimationPacks.select(config);
    if (packed) types = [...packed];
    const personalType =
      config.holiday === "memorial"
        ? "theme:candle"
        : config.holiday === "newborn"
          ? "theme:cradle"
          : {
              warmth: "sun",
              together: "orbits",
              support: "support",
              dream: "path",
              love: "heart",
              respect: "balance",
            }[config.scene] || "orbits";
    if (config.message) types.splice(types.length - 1, 0, "personal");
    types.forEach((entry, i) => {
      const personal = entry === "personal",
        type = personal ? personalType : entry;
      const sceneCopy = type.startsWith("pack:")
        ? AnimationPacks.info(type)
        : type.startsWith("theme:")
          ? ThemeScenes.scenes[type.slice(6)].slice(1)
          : copy[type];
      const section = document.createElement("article");
      section.className = "journey-chapter";
      const eyebrow = document.createElement("p");
      eyebrow.className = "eyebrow";
      eyebrow.textContent = type.startsWith("pack:")
        ? "АНИМАЦИЯ " +
          (i + 1) +
          " / 3 · " +
          ["ОБЪЕМ", "РИСУНОК", "БУМАГА"][Number(type.split(":")[3])]
        : "ТВОЯ ИСТОРИЯ / 0" + (i + 1);
      const h = document.createElement("h2");
      h.textContent = personal ? "От меня — тебе" : sceneCopy[0];
      const text = document.createElement("p");
      text.className = "journey-copy";
      text.textContent = personal ? config.message : sceneCopy[1];
      const stage = document.createElement("button");
      stage.type = "button";
      stage.className = "journey-stage";
      stage.setAttribute("aria-label", sceneCopy[2]);
      const canvas = document.createElement("canvas");
      canvas.setAttribute("aria-hidden", "true");
      if (type.startsWith("pack:"))
        canvas.dataset.sceneIndex = type.split(":")[3];
      stage.append(canvas);
      const hint = document.createElement("p");
      hint.className = "journey-hint";
      hint.textContent = sceneCopy[2];
      const replay = document.createElement("button");
      replay.type = "button";
      replay.className = "text-button";
      replay.textContent = "↻ Ещё раз";
      section.append(eyebrow, h, text, stage, hint, replay);
      root.append(section);
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        stage.hidden = true;
        hint.hidden = true;
        replay.hidden = true;
        return;
      }
      let seed = 17 + i * 37;
      const rand = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const state = {
        section,
        canvas,
        ctx,
        type,
        time: 0,
        visible: false,
        x: 0,
        y: 0,
        pulse: 0,
        opened: false,
        name: config.to || "Для тебя",
        dots: Array.from({ length: 1000 }, () => ({
          a: rand() * Math.PI * 2,
          r: Math.sqrt(rand()),
          z: rand() * 2 - 1,
          s: rand(),
          x: rand() * 1000,
          y: rand() * 600,
        })),
        branches: [],
        targets: [],
      };
      function branch(x, y, len, a, depth, start) {
        const ex = x + Math.cos(a) * len,
          ey = y + Math.sin(a) * len;
        state.branches.push({ x, y, ex, ey, depth, start });
        if (depth < 8) {
          branch(
            ex,
            ey,
            len * (0.66 + rand() * 0.1),
            a - 0.3 - rand() * 0.35,
            depth + 1,
            start + 0.53,
          );
          branch(
            ex,
            ey,
            len * (0.66 + rand() * 0.1),
            a + 0.3 + rand() * 0.35,
            depth + 1,
            start + 0.53,
          );
        }
      }
      if (type === "tree") branch(500, 530, 125, -Math.PI / 2, 0, 0);
      if (type === "name") {
        const c = document.createElement("canvas");
        c.width = 1000;
        c.height = 600;
        const q = c.getContext("2d");
        if (q) {
          const font = 78;
          q.font = "600 " + font + "px Georgia";
          const words = state.name.split(/\s+/);
          const lines = [];
          let current = "";
          for (const word of words) {
            const candidate = current ? current + " " + word : word;
            if (q.measureText(candidate).width <= 820) {
              current = candidate;
              continue;
            }
            if (current) {
              lines.push(current);
              current = "";
            }
            for (const char of [...word]) {
              if (q.measureText(current + char).width > 820) {
                lines.push(current);
                current = "";
              }
              current += char;
            }
          }
          if (current.trim()) lines.push(current.trim());
          state.nameLines = lines;
          state.nameFont = font;
          q.textAlign = "center";
          for (let j = 0; j < lines.length; j++)
            q.fillText(lines[j], 500, 300 + (j - (lines.length - 1) / 2) * 90);
          const d = q.getImageData(0, 0, 1000, 600).data;
          for (let y = 90; y < 470; y += 3)
            for (let x = 65; x < 935; x += 3)
              if (d[(y * 1000 + x) * 4 + 3] > 100) state.targets.push({ x, y });
          if (state.targets.length > 1800) {
            const step = Math.ceil(state.targets.length / 1800);
            state.targets = state.targets.filter((_, i) => i % step === 0);
          }
        }
      }

      stage.onclick = () => {
        state.pulse = 1;
        if (type === "theme:cake") state.clicked = !state.clicked;
        else if (type.startsWith("theme:") || type.startsWith("pack:"))
          state.time = Universe.paused ? 12 : 0;
        dirty = true;
        if (type === "gift") state.opened = !state.opened;
        else if (["flower", "path", "support"].includes(type))
          state.time = Universe.paused ? 12 : 0;
        wake();
      };
      replay.onclick = () => {
        state.time = Universe.paused ? 12 : 0;
        state.opened = false;
        state.clicked = false;
        state.pulse = 0;
        dirty = true;
        wake();
      };
      stage.addEventListener("pointermove", (e) => {
        const r = stage.getBoundingClientRect();
        state.x = (e.clientX - r.left) / r.width - 0.5;
        state.y = (e.clientY - r.top) / r.height - 0.5;
        wake();
      });
      stage.addEventListener("pointerleave", () => {
        state.x = state.y = 0;
        wake();
      });
      states.push(state);
    });
    if (packed) {
      const nav = document.createElement("nav");
      nav.className = "journey-nav";
      nav.setAttribute("aria-label", "Перейти к анимации");
      for (let j = 0; j < 3; j++) {
        const target = states.find((s) => s.type === packed[j]);
        if (!target) continue;
        const button = document.createElement("button");
        button.type = "button";
        button.className = "secondary";
        button.textContent = ["1 · Объем", "2 · Рисунок", "3 · Бумага"][j];
        button.title = AnimationPacks.info(packed[j])[0];
        button.onclick = () =>
          target.section.scrollIntoView({
            behavior: Universe.reduced ? "auto" : "smooth",
            block: "start",
          });
        nav.append(button);
      }
      root.prepend(nav);
    }
    document.querySelector(".letter-section").after(root);
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            const s = states.find((s) => s.section === e.target);
            if (s) {
              s.visible = e.isIntersecting;
              if (s.visible) s.section.classList.add("journey-visible");
            }
          });
          wake();
        },
        { threshold: 0.05 },
      );
      states.forEach((s) => observer.observe(s.section));
    } else {
      states.forEach((s) => {
        s.visible = true;
        s.section.classList.add("journey-visible");
      });
      wake();
    }
  }
  function draw(s) {
    const { canvas: c, ctx: g } = s;
    const r = c.getBoundingClientRect();
    if (!r.width) return;
    const dpr = Math.min(devicePixelRatio || 1, 1.6),
      w = Math.round(r.width * dpr),
      h = Math.round(r.height * dpr);
    if (c.width !== w || c.height !== h) {
      c.width = w;
      c.height = h;
    }
    g.setTransform(w / 1000, 0, 0, h / 600, 0, 0);
    g.clearRect(0, 0, 1000, 600);
    const t = Universe.reduced && Universe.paused ? 12 : s.time;
    const grad = g.createRadialGradient(500, 300, 0, 500, 300, 530);
    grad.addColorStop(0, window.UniverseTheme?.canvasCenter || "#181730");
    grad.addColorStop(1, window.UniverseTheme?.canvasEdge || "#040610");
    g.fillStyle = grad;
    g.fillRect(0, 0, 1000, 600);
    function dot(x, y, r, color, alpha = 1) {
      g.globalAlpha = alpha;
      g.fillStyle = color;
      g.beginPath();
      g.arc(x, y, Math.max(0.2, r), 0, Math.PI * 2);
      g.fill();
      g.globalAlpha = 1;
    }
    function line(x, y, ex, ey, color, width = 1) {
      g.strokeStyle = color;
      g.lineWidth = width;
      g.beginPath();
      g.moveTo(x, y);
      g.lineTo(ex, ey);
      g.stroke();
    }
    s.dots
      .slice(0, 95)
      .forEach((d) =>
        dot(
          d.x,
          d.y,
          0.6 + d.s,
          "#b9c9ff",
          0.2 + 0.3 * Math.sin(t * 0.5 + d.a) ** 2,
        ),
      );
    g.save();
    if (!s.type.startsWith("pack:") || s.type.endsWith(":1"))
      g.translate(s.x * 18, s.y * 12);
    g.shadowBlur = 12;
    g.shadowColor = "#a889ff";
    if (s.type.startsWith("pack:")) AnimationPacks.draw(s, t);
    if (s.type.startsWith("theme:")) ThemeScenes.draw(s.type.slice(6), s, t);
    if (s.type === "tree") {
      s.branches.forEach((b) => {
        const f = ease((t - b.start) / 0.9);
        if (!f) return;
        line(
          b.x,
          b.y,
          b.x + (b.ex - b.x) * f,
          b.y + (b.ey - b.y) * f,
          b.depth < 4 ? "#dcb590" : "#ba9ceb",
          Math.max(0.6, 8 - b.depth),
        );
        if (b.depth === 8 && f > 0.9) {
          dot(b.ex, b.ey, 2.5 + s.pulse * 3, "#ffb9da", clamp(t - 5));
          dot(b.ex + 4, b.ey - 3, 1.5, "#d7c5ff", clamp(t - 5));
        }
      });
    }
    if (s.type === "heart") {
      const f = ease(t / 6);
      const angle = Math.sin(t * 0.35) * 0.35 + s.x * 0.5;
      s.dots.forEach((d) => {
        const a = d.a;
        const hx = 16 * Math.sin(a) ** 3,
          hy = -(
            13 * Math.cos(a) -
            5 * Math.cos(2 * a) -
            2 * Math.cos(3 * a) -
            Math.cos(4 * a)
          );
        const z = d.z * Math.sqrt(Math.max(0, 1 - d.r * d.r)) * 65;
        const px = hx * d.r * 14;
        const x =
          500 +
          (px * Math.cos(angle) + z * Math.sin(angle)) * f +
          (d.x - 500) * (1 - f) +
          Math.cos(a) * s.pulse * 180;
        const y =
          265 +
          hy * d.r * 14 * f +
          (d.y - 265) * (1 - f) +
          Math.sin(a) * s.pulse * 130;
        dot(
          x,
          y,
          0.6 + d.s * 1.5,
          d.s > 0.6 ? "#d7f5ff" : "#69baff",
          0.55 + d.s * 0.45,
        );
      });
      g.strokeStyle = "#67d7ff";
      g.lineWidth = 2;
      g.beginPath();
      g.ellipse(500, 490, 140, 21, 0, 0, Math.PI * 2);
      g.stroke();
    }
    if (s.type === "orbits") {
      const f = ease(t / 8);
      for (let j = 0; j < 2; j++) {
        const cx = 280 + 440 * j + (j ? -1 : 1) * 220 * f,
          rx = 135 - 35 * f;
        g.strokeStyle = j ? "#e2a2cc55" : "#9faeff55";
        g.lineWidth = 1.4;
        g.beginPath();
        g.ellipse(cx, 300, rx, 70, j ? -0.4 : 0.4, 0, Math.PI * 2);
        g.stroke();
        const a = t * 0.7 + j * Math.PI;
        const x = cx + Math.cos(a) * rx,
          y = 300 + Math.sin(a) * 70;
        dot(x, y, 8, j ? "#ffb4ce" : "#accfff");
        dot(x, y, 24, j ? "#ffb4ce" : "#accfff", 0.08);
        if (f > 0.4) line(x, y, 500, 300, "#c5b6ff33");
      }
      dot(500, 300, 4, "#fff", f);
    }
    if (s.type === "flower") {
      const f = ease(t / 4);
      g.strokeStyle = "#82b69e";
      g.lineWidth = 4;
      g.beginPath();
      g.moveTo(500, 530);
      g.quadraticCurveTo(460, 390, 500, 530 - 250 * f);
      g.stroke();
      for (let j = 0; j < 12; j++) {
        const a = (j * Math.PI) / 6 + t * 0.025;
        g.save();
        g.translate(500, 280);
        g.rotate(a);
        g.scale(ease((t - 2 - j * 0.09) / 3), ease((t - 2 - j * 0.09) / 3));
        const petal = g.createLinearGradient(0, 0, 0, -150);
        petal.addColorStop(0, "#b674ae");
        petal.addColorStop(1, "#fbc8e5");
        g.fillStyle = petal;
        g.beginPath();
        g.moveTo(0, 0);
        g.bezierCurveTo(-50, -60, -40, -145, 0, -158);
        g.bezierCurveTo(40, -145, 50, -60, 0, 0);
        g.fill();
        g.restore();
      }
      dot(500, 280, 20 * ease((t - 3) / 2), "#f5dbaa");
    }
    if (s.type === "name") {
      const f = ease(t / 6);
      s.targets.forEach((p, i) => {
        const d = s.dots[i % s.dots.length];
        const x = p.x * f + d.x * (1 - f),
          y = p.y * f + d.y * (1 - f);
        dot(
          x + s.x * 10 * Math.sin(i),
          y + s.y * 10 * Math.cos(i),
          1.1 + d.s,
          "#e2c5ff",
          0.7 + 0.3 * Math.sin(t + d.a) ** 2,
        );
      });
      if (f > 0.95 && s.nameLines) {
        g.globalAlpha = 0.35;
        g.font = "600 " + s.nameFont + "px Georgia";
        g.textAlign = "center";
        g.fillStyle = "#e2c5ff";
        s.nameLines.forEach((line, j) =>
          g.fillText(line, 500, 300 + (j - (s.nameLines.length - 1) / 2) * 90),
        );
        g.globalAlpha = 1;
      }
      if (f > 0.9) {
        g.font = "16px Georgia";
        g.textAlign = "center";
        g.fillStyle = "#c9b8d5";
        g.fillText("Это пространство посвящено тебе", 500, 510);
      }
    }
    if (s.type === "sun") {
      const f = ease(t / 5);
      dot(270, 300, 22, "#ffd2a0");
      for (let j = 0; j < 3; j++) {
        g.strokeStyle = "#ffd2a055";
        g.lineWidth = 1.5;
        g.beginPath();
        g.arc(270, 300, 35 + ((t * 30 + j * 45) % 180), 0, Math.PI * 2);
        g.stroke();
      }
      line(300, 300, 300 + 420 * f, 300, "#ffd8a055", 2);
      dot(730, 300, 16, "#c3b5ed");
      dot(730, 300, 35 + 10 * s.pulse, "#ffc891", f * 0.25);
    }
    if (s.type === "support") {
      const f = ease(t / 6),
        fall = ease(t / 2),
        lift = ease((t - 2) / 4);
      const y = 180 + fall * 180 - lift * 95;
      dot(500, y, 15, "#bfe7ff");
      g.strokeStyle = "#99e4d5";
      g.lineWidth = 5;
      g.beginPath();
      g.moveTo(410, 390 - 105 * lift);
      g.quadraticCurveTo(500, 440 - 105 * lift, 590, 390 - 105 * lift);
      g.stroke();
      line(300, 440, 410, 390 - 105 * lift, "#9cdac755", 2);
      dot(300, 440, 10, "#9ce9d8");
      dot(500, y, 40, "#9ce9d8", f * 0.1);
    }
    if (s.type === "path") {
      const f = ease(t / 7);
      const points = [
        [200, 430],
        [350, 360],
        [480, 315],
        [650, 240],
        [800, 180],
      ];
      for (let j = 1; j < points.length; j++) {
        const a = points[j - 1],
          b = points[j],
          part = clamp(f * 4 - (j - 1));
        if (part)
          line(
            a[0],
            a[1],
            a[0] + (b[0] - a[0]) * part,
            a[1] + (b[1] - a[1]) * part,
            "#c9a6f4",
            2,
          );
      }
      points.forEach((p, j) =>
        dot(p[0], p[1], 4, "#ddbdff", clamp(f * 4 - j + 1)),
      );
      const index = Math.min(3, Math.floor(f * 4)),
        part = f === 1 ? 1 : f * 4 - index,
        a = points[index],
        b = points[index + 1];
      dot(
        a[0] + (b[0] - a[0]) * part,
        a[1] + (b[1] - a[1]) * part,
        10,
        "#ffe0ae",
      );
    }
    if (s.type === "balance") {
      for (let j = 0; j < 2; j++) {
        const cx = 300 + j * 400;
        g.strokeStyle = j ? "#8ce2d855" : "#d5b6ff55";
        g.beginPath();
        g.ellipse(cx, 300, 135, 105, 0, 0, Math.PI * 2);
        g.stroke();
        dot(
          cx + Math.cos(t * 0.6 + j * 2) * 95,
          300 + Math.sin(t * 0.6 + j * 2) * 75,
          12,
          j ? "#a3eee3" : "#d5b6ff",
        );
      }
      line(450, 300, 550, 300, "#b6d3e744", 1);
    }
    if (s.type === "gift") {
      const f = ease(t / 3),
        open = s.opened || (Universe.reduced && Universe.paused);
      g.fillStyle = "#7963a6";
      g.fillRect(350, 310, 300, 180 * f);
      g.fillStyle = "#dcc095";
      g.fillRect(480, 310, 40, 180 * f);
      g.save();
      g.translate(500, 300 - (open ? 100 : 0));
      g.rotate(open ? -0.16 : 0);
      g.fillStyle = "#a78bc8";
      g.fillRect(-160, -25, 320, 45);
      g.fillStyle = "#eed2ac";
      g.fillRect(-20, -25, 40, 45);
      g.restore();
      if (open)
        s.dots
          .slice(0, 160)
          .forEach((d) =>
            dot(
              500 + Math.cos(d.a) * d.r * 230,
              265 + Math.sin(d.a) * d.r * 170 + Math.sin(t + d.a) * 12,
              1 + d.s * 2,
              "#f7d9ae",
            ),
          );
    }
    g.restore();
    g.shadowBlur = 0;
  }
  let elapsed = 0;
  Universe.add((dt, now, paused) => {
    elapsed += dt;
    const active = states.filter((s) => s.visible);
    if (!active.length) return false;
    if (paused && !dirty) return false;
    if (!dirty && !paused && elapsed < 1 / 30) return true;
    active.forEach((s) => {
      if (!paused) {
        s.time += elapsed;
        s.pulse = Math.max(0, s.pulse - elapsed * 0.65);
      }
      draw(s);
    });
    elapsed = 0;
    dirty = false;
    return !paused;
  });
  function wake() {
    dirty = true;
    Universe.wake();
  }
  addEventListener("resize", wake, { passive: true });
  document.addEventListener("motion-change", wake);
  document.addEventListener("letter-rendered", (e) => mount(e.detail));
})();
