/* Narrative packs reuse thematic motifs, but have their own three-part choreography. */
(() => {
  "use strict";
  const names = {
    just: [
      "Тепло без повода",
      "Маленькое доброе чудо",
      "История для одного человека",
    ],
    friendship: [
      "Связь между нами",
      "За разговоры и поддержку",
      "Наши хорошие истории",
    ],
    custom: ["Особенный момент", "Сюрприз в твою честь", "Память об этом дне"],
    birthday: [
      "Желание становится светом",
      "Праздник из маленьких чудес",
      "Новая глава твоей жизни",
    ],
    friendbirthday: [
      "Карта наших приключений",
      "Вечер для своих",
      "Следующий уровень",
    ],
    march: ["Сад твоих желаний", "Весна в движении", "Бережный подарок"],
    romance: [
      "От первого сигнала до признания",
      "Нежность в маленьких поступках",
      "Наша общая история",
    ],
    may7: [
      "Сила, которая поддерживает",
      "Под мирным небом",
      "Достоинство и путь",
    ],
    newyear: ["Новогоднее чудо", "Зимняя сказка", "Новая глава календаря"],
    september: [
      "Как рождается открытие",
      "Путешествие по знаниям",
      "Шаги к своей мечте",
    ],
    summer: [
      "Навстречу длинному дню",
      "Лето без спешки",
      "Коллекция летних мгновений",
    ],
    memorial: [
      "Свет, который остаётся",
      "Бережное воспоминание",
      "Тихая история памяти",
    ],
    newborn: [
      "Первый свет новой жизни",
      "Маленькие открытия",
      "История первых мгновений",
    ],
    nauryz: [
      "Пробуждение весны",
      "Тепло общего дома",
      "Новая жизнь после зимы",
    ],
    anniversary: [
      "Наши моменты вместе",
      "Снова выбирая друг друга",
      "История, которую продолжаем",
    ],
    halloween: [
      "Послание из загадочной ночи",
      "Добрые чудеса полуночи",
      "Тайная книга вечера",
    ],
    wedding: [
      "Из двух путей — одна история",
      "Бережное обещание",
      "Альбом будущих воспоминаний",
    ],
    graduation: [
      "Открывая следующий мир",
      "За пределами привычного",
      "От усилия к результату",
    ],
    housewarming: [
      "Дом наполняется теплом",
      "Маленькие вещи большого уюта",
      "История нового адреса",
    ],
    success: [
      "От первого шага до вершины",
      "Момент заслуженной радости",
      "Твой результат в большой истории",
    ],
    recovery: [
      "Тепло возвращается",
      "Без спешки, в своём ритме",
      "Маленькие хорошие моменты",
    ],
  };
  const phases = [
    [
      "Сигнал становится рисунком",
      "Частицы находят своё место",
      "Свет открывает пространство",
    ],
    [
      "Движение рождает узор",
      "Встреча в общем пространстве",
      "Один огонёк меняет картину",
    ],
    [
      "Открывается новая страница",
      "Моменты складываются вместе",
      "История получает продолжение",
    ],
  ];
  function key(config) {
    return config.holiday === "valentine"
      ? "romance"
      : config.holiday === "birthday" && config.tone === "friend"
        ? "friendbirthday"
        : config.holiday === "just" && config.tone === "love"
          ? "romance"
          : config.holiday;
  }
  function topicFor(key) {
    return (
      ThemeScenes.catalog[key] ||
      ThemeScenes.catalog[
        key === "friendship"
          ? "friendbirthday"
          : key === "custom"
            ? "success"
            : "anniversary"
      ]
    );
  }
  function options(config) {
    return (names[key(config)] || []).map((title, i) => [
      "pack_" + i,
      title + " · 3 сцены",
    ]);
  }
  function select(config) {
    if (!/^pack_[0-2]$/.test(config.journey) || !names[key(config)])
      return null;
    return [0, 1, 2].map(
      (phase) =>
        "pack:" + key(config) + ":" + config.journey.slice(-1) + ":" + phase,
    );
  }
  function info(id) {
    const [, topic, pack, phase] = id.split(":");
    const p = Number(pack),
      j = Number(phase),
      t = topicFor(topic);
    return [
      names[topic][p] + " — " + phases[p][j],
      topic === "memorial"
        ? [
            "Память собирается из небольших моментов. Можно возвращаться к ним в своём ритме.",
            "Не нужно находить правильные слова. Здесь есть место для того, что ты чувствуешь.",
            "То, что было важно, можно сохранять бережно.",
          ][j]
        : t.scenes[j][2],
      [
        "Проведи пальцем — световые линии откликаются.",
        "Коснись — повтори сборку сцены.",
        "Коснись — история начнётся заново.",
      ][j],
    ];
  }
  function draw(s, t) {
    const [, topic, pack, phase] = s.type.split(":"),
      mode = Number(pack) * 3 + Number(phase),
      g = s.ctx,
      quiet = topic === "memorial";
    const clamp = (x) => Math.max(0, Math.min(1, x)),
      ease = (x) => {
        x = clamp(x);
        return x * x * (3 - 2 * x);
      },
      f = ease(t / (quiet ? 8 : 5));
    if (!s.packArt) {
      const c = document.createElement("canvas");
      c.width = 1000;
      c.height = 600;
      const q = c.getContext("2d");
      if (!q) return;
      ThemeScenes.draw(
        topicFor(topic).scenes[Number(phase)][0],
        { ...s, ctx: q, clicked: false },
        8.4,
      );
      s.packArt = c;
      const data = q.getImageData(0, 0, 1000, 600).data;
      s.packPixels = [];
      for (let y = 90; y < 520; y += 7)
        for (let x = 100; x < 900; x += 7) {
          const k = (y * 1000 + x) * 4;
          if (data[k + 3] > 100)
            s.packPixels.push({
              x,
              y,
              color: `rgb(${data[k]},${data[k + 1]},${data[k + 2]})`,
            });
        }
      if (s.packPixels.length > 1700) {
        const step = Math.ceil(s.packPixels.length / 1700);
        s.packPixels = s.packPixels.filter((_, i) => i % step === 0);
      }
    }
    g.shadowBlur = 0;
    const accent =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim() || "#dbbbec";
    const dot = (x, y, r, c, a = 1) => {
      g.globalAlpha = a;
      g.fillStyle = c;
      g.beginPath();
      g.arc(x, y, Math.max(0.2, r), 0, Math.PI * 2);
      g.fill();
      g.globalAlpha = 1;
    };
    const stroke = (points, c = accent, width = 1) => {
      g.strokeStyle = c;
      g.lineWidth = width;
      g.beginPath();
      points.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y)));
      g.stroke();
    };
    const art = (x = 500, y = 300, scale = 1, alpha = 1, rotation = 0) => {
      g.save();
      g.translate(x, y);
      g.rotate(rotation);
      g.globalAlpha = alpha;
      g.drawImage(
        s.packArt,
        -500 * scale,
        -300 * scale,
        1000 * scale,
        600 * scale,
      );
      g.restore();
    };
    const caption = (text, y = 530) => {
      g.fillStyle = accent;
      g.font = "22px Georgia";
      g.textAlign = "center";
      g.fillText(text, 500, y);
    };
    switch (mode) {
      case 0: {
        for (let j = 0; j < 24; j++) {
          const d = s.dots[j],
            a = d.a,
            rad = 260 * (1 - f) + 80,
            points = [];
          for (let k = 0; k < 40; k++) {
            const q = k / 39;
            points.push([
              500 + Math.cos(a + q * 2) * (rad * (1 - q)) + s.x * 30,
              300 + Math.sin(a + q * 2) * rad * (1 - q),
            ]);
          }
          g.globalAlpha = (1 - f) * 0.3;
          stroke(points, accent, 1);
        }
        g.globalAlpha = 1;
        art(500, 300, 0.3 + 0.7 * f, f);
        dot(500, 300, 4, accent, 1 - f);
        break;
      }
      case 1:
        for (let j = 0; j < s.packPixels.length; j++) {
          const p = s.packPixels[j],
            d = s.dots[j % s.dots.length],
            q = ease((t - d.s * 1.5) / 4);
          dot(
            p.x * q + d.x * (1 - q) + s.x * 12 * (1 - q),
            p.y * q + d.y * (1 - q),
            1.8,
            p.color,
            q * 0.9,
          );
        }
        if (f > 0.95) art(500, 300, 1, (f - 0.95) * 15);
        break;
      case 2: {
        const radius = 40 + 230 * f;
        for (let j = 0; j < 6; j++) {
          g.strokeStyle = accent;
          g.globalAlpha = (1 - f) * 0.18;
          g.lineWidth = 1.5;
          g.beginPath();
          g.ellipse(
            500,
            300,
            radius + j * 30,
            (radius + j * 30) * 0.68,
            0,
            0,
            Math.PI * 2,
          );
          g.stroke();
        }
        g.globalAlpha = 1;
        g.save();
        g.beginPath();
        g.ellipse(500, 300, radius * 1.5, radius, 0, 0, Math.PI * 2);
        g.clip();
        art(500, 300, 1, f);
        g.restore();
        break;
      }
      case 3: {
        for (let j = 0; j < 42; j++) {
          const d = s.dots[j],
            x = 150 + d.s * 700,
            y = 480 - ((t * (quiet ? 7 : 28) + j * 37) % 380),
            a = d.a + Math.sin(t * 0.3) * 0.2;
          g.save();
          g.translate(x + s.x * 30, y);
          g.rotate(a);
          g.fillStyle = accent;
          g.globalAlpha = 0.18;
          g.fillRect(-4, -12, 8, 24);
          g.restore();
        }
        art(500, 300, 0.8 + 0.2 * f, f);
        break;
      }
      case 4: {
        for (let j = 0; j < 3; j++) {
          const a = t * 0.25 + (j * Math.PI * 2) / 3;
          const x = 500 + Math.cos(a) * 190 * (1 - f * 0.6),
            y = 310 + Math.sin(a) * 95;
          g.globalAlpha = 0.25;
          g.strokeStyle = accent;
          g.beginPath();
          g.ellipse(500, 310, 190 * (1 - f * 0.6), 95, 0, 0, Math.PI * 2);
          g.stroke();
          g.globalAlpha = 1;
          dot(x, y, 5, accent);
        }
        art(500, 300, 0.4 + 0.5 * f, f);
        break;
      }
      case 5: {
        const grid = 20;
        for (let y = 0; y < 12; y++)
          for (let x = 0; x < grid; x++) {
            const sx = x * 50,
              sy = y * 50,
              q = ease((t - Math.hypot(x - 10, y - 6) * 0.1) / 4);
            if (!q) continue;
            g.globalAlpha = q;
            g.drawImage(
              s.packArt,
              sx,
              sy,
              50,
              50,
              sx,
              sy + (1 - q) * 60,
              50,
              50,
            );
          }
        g.globalAlpha = 1;
        break;
      }
      case 6: {
        g.save();
        g.translate(500, 300);
        g.scale(0.15 + 0.85 * f, 1);
        g.rotate((1 - f) * -0.15);
        g.fillStyle = window.UniverseTheme?.canvasCenter || "#2b2238";
        g.fillRect(-380, -220, 760, 440);
        g.strokeStyle = accent;
        g.lineWidth = 1;
        g.strokeRect(-380, -220, 760, 440);
        g.drawImage(s.packArt, -420, -250, 840, 500);
        g.restore();
        caption(quiet ? "Сохраняя память" : s.name);
        break;
      }
      case 7: {
        const tiles = [
          [100, 155],
          [355, 95],
          [610, 170],
          [355, 355],
        ];
        tiles.forEach(([x, y], j) => {
          const q = ease((t - j * 0.7) / 4);
          g.save();
          g.translate(x + 110, y + 65);
          g.rotate((1 - q) * (0.5 - j * 0.2));
          g.globalAlpha = q;
          g.fillStyle = window.UniverseTheme?.canvasCenter || "#211b31";
          g.fillRect(-120, -75, 240, 150);
          g.strokeStyle = accent;
          g.strokeRect(-120, -75, 240, 150);
          g.drawImage(
            s.packArt,
            Math.min(j, 2) * 250,
            100,
            400,
            360,
            -110,
            -65,
            220,
            125,
          );
          g.restore();
        });
        break;
      }
      case 8: {
        const points = [];
        for (let j = 0; j < 100; j++) {
          const q = j / 99;
          if (q > f) break;
          points.push([
            140 + 720 * q,
            420 - 100 * Math.sin(q * Math.PI) - 60 * q,
          ]);
        }
        stroke(points, accent, 2);
        for (let j = 0; j < 3; j++) {
          const q = j / 2,
            visible = clamp(f * 3 - j);
          dot(
            140 + 720 * q,
            420 - 100 * Math.sin(q * Math.PI) - 60 * q,
            6,
            accent,
            visible,
          );
        }
        art(500, 260, 0.65, f);
        caption(
          quiet ? "Память остаётся с нами" : "Продолжение — впереди",
          545,
        );
        break;
      }
    }
  }
  window.AnimationPacks = { names, options, select, info, draw };
})();
