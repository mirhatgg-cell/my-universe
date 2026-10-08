/* Original narrative scenes. Geometry is drawn live; no snapshots of previous themes. */
(() => {
  "use strict";
  const catalog = {
    just: [
      {
        title: "Тепло в обычном дне",
        id: "sunroom",
      },
      {
        title: "Маленькая почта добра",
        id: "postcards",
      },
      {
        title: "Карманная вселенная",
        id: "jar",
      },
    ],
    friendship: [
      {
        title: "Мост между берегами",
        id: "bridge",
      },
      {
        title: "Разговор до рассвета",
        id: "rooftop",
      },
      {
        title: "Общая мелодия",
        id: "music",
      },
    ],
    custom: [
      {
        title: "Свой маленький мир",
        id: "terrarium",
      },
      {
        title: "Момент в объективе",
        id: "camera",
      },
      {
        title: "История на ленте",
        id: "film",
      },
    ],
    birthday: [
      {
        title: "Зажигаем и задуваем свечу",
        id: "candlewish",
      },
      {
        title: "Карусель нового года жизни",
        id: "carousel",
      },
      {
        title: "Комета и её след",
        id: "comet",
      },
    ],
    friendbirthday: [
      {
        title: "Карта наших приключений",
        id: "map",
      },
      {
        title: "Вечер у костра",
        id: "camp",
      },
      {
        title: "Следующий уровень",
        id: "arcade",
      },
    ],
    march: [
      {
        title: "Оранжерея первого света",
        id: "greenhouse",
      },
      {
        title: "Танец лепестков",
        id: "petaldance",
      },
      {
        title: "Акварельная весна",
        id: "watercolor",
      },
    ],
    romance: [
      {
        title: "Вышитое признание",
        id: "embroidery",
      },
      {
        title: "Два окна под дождём",
        id: "rainwindow",
      },
      {
        title: "Бумажные журавли",
        id: "cranes",
      },
    ],
    may7: [
      {
        title: "Щит мирного неба",
        id: "shieldsky",
      },
      {
        title: "Полет над степью",
        id: "steppeflight",
      },
      {
        title: "Маяк опоры",
        id: "beacon",
      },
    ],
    newyear: [
      {
        title: "Полярный экспресс света",
        id: "wintertrain",
      },
      {
        title: "Мастерская снежинок",
        id: "snowforge",
      },
      {
        title: "Северное сияние в полночь",
        id: "aurora",
      },
    ],
    september: [
      {
        title: "Вселенная внутри книги",
        id: "bookworld",
      },
      {
        title: "Домино открытий",
        id: "schooldomino",
      },
      {
        title: "Чертеж будущего",
        id: "blueprint",
      },
    ],
    summer: [
      {
        title: "Прилив солнечного дня",
        id: "tidal",
      },
      {
        title: "Луговой оркестр",
        id: "meadowlife",
      },
      {
        title: "Воздушный змей",
        id: "kite",
      },
    ],
    memorial: [
      {
        title: "Свет на тихой воде",
        id: "memwater",
      },
      {
        title: "Альбом бережной памяти",
        id: "album",
      },
      {
        title: "Сад продолжающейся жизни",
        id: "memorygarden",
      },
    ],
    newborn: [
      {
        title: "Колыбель под созвездием",
        id: "nursery",
      },
      {
        title: "Маленький росток",
        id: "sprout",
      },
      {
        title: "Первый полет мобиля",
        id: "mobileflight",
      },
    ],
    nauryz: [
      {
        title: "Степь просыпается",
        id: "steppespring",
      },
      {
        title: "Шанырак встречает солнце",
        id: "shanyrak",
      },
      {
        title: "Река нового начала",
        id: "springriver",
      },
    ],
    anniversary: [
      {
        title: "Кольца общего времени",
        id: "treerings",
      },
      {
        title: "Наши станции",
        id: "stations",
      },
      {
        title: "Две чашки, один вечер",
        id: "teatogether",
      },
    ],
    halloween: [
      {
        title: "Тыквенный театр теней",
        id: "shadowtheatre",
      },
      {
        title: "Лунная обсерватория",
        id: "hauntedmoon",
      },
      {
        title: "Алхимия доброго чуда",
        id: "cauldron",
      },
    ],
    wedding: [
      {
        title: "Два пути к одной арке",
        id: "weddingpath",
      },
      {
        title: "Вальс светящихся колец",
        id: "ringwaltz",
      },
      {
        title: "Парус на двоих",
        id: "sailboat",
      },
    ],
    graduation: [
      {
        title: "Бумажный самолет за горизонт",
        id: "paperplane",
      },
      {
        title: "Лестница из книг",
        id: "bookstairs",
      },
      {
        title: "Шапочки в небе",
        id: "capsky",
      },
    ],
    housewarming: [
      {
        title: "Дом зажигается изнутри",
        id: "homelights",
      },
      {
        title: "Ключ поворачивает мир",
        id: "keydoor",
      },
      {
        title: "Комната становится своей",
        id: "furnish",
      },
    ],
    success: [
      {
        title: "Механизм результата",
        id: "gears",
      },
      {
        title: "Вершина после пути",
        id: "mountain",
      },
      {
        title: "Запуск нового горизонта",
        id: "rocket",
      },
    ],
    recovery: [
      {
        title: "Дождь отпускает сад",
        id: "rainclears",
      },
      {
        title: "Тепло в ладонях",
        id: "warmhands",
      },
      {
        title: "Море ровного дыхания",
        id: "breathingsea",
      },
    ],
  };
  const clamp = (x) => Math.max(0, Math.min(1, x)),
    smooth = (x) => {
      x = clamp(x);
      return x * x * (3 - 2 * x);
    },
    TAU = Math.PI * 2;
  function key(c) {
    return c.holiday === "valentine"
      ? "romance"
      : c.holiday === "birthday" && c.tone === "friend"
        ? "friendbirthday"
        : c.holiday === "just" && c.tone === "love"
          ? "romance"
          : c.holiday;
  }
  const names = Object.fromEntries(
    Object.entries(catalog).map(([k, v]) => [
      k,
      v.map((s, i) => AnimationArt.catalog[k][i].title),
    ]),
  );
  function options(c) {
    return (catalog[key(c)] || []).map((s, i) => [
      "pack_" + i,
      AnimationArt.catalog[key(c)][i].title +
        " · 3 анимации · 3D / 2D / бумага",
    ]);
  }
  function select(c) {
    return /^pack_[0-2]$/.test(c.journey) && catalog[key(c)]
      ? [0, 1, 2].map(
          (j) => "pack:" + key(c) + ":" + c.journey.slice(-1) + ":" + j,
        )
      : null;
  }
  function info(id) {
    const [, topic, pack, scene] = id.split(":"),
      i = +pack,
      j = +scene;
    const art = AnimationArt.catalog[topic][i],
      flat = catalog[topic][i];
    const titles = [art.volume, flat.title, art.paper];
    const thoughts = {
      just:["В обычном дне тоже есть место маленькому чуду.","Пусть сегодня найдётся повод улыбнуться.","Иногда самое важное помещается в маленьком письме."],
      friendship:["Когда держимся вместе, равновесие найти проще.","Даже разные орбиты могут связывать близких людей.","У дружбы есть свой ритм. Я рад, что мы его нашли."],
      custom:["Ты умеешь замечать свет там, где его не видят другие.","Пусть у тебя будет время на то, что любишь.","Из маленьких деталей складывается твой неповторимый мир."],
      birthday:["Пусть желания находят дорогу в жизнь.","Ещё один круг — и столько хорошего впереди.","Этот маленький праздник — только для тебя."],
      friendbirthday:["За новые приключения, которые мы ещё будем вспоминать.","С хорошей компанией любой маршрут становится особенным.","Пусть следующий уровень принесёт больше радости."],
      march:["Пусть забота возвращается к тебе теплом.","Желаю лёгкости, которая остаётся с тобой весь день.","Пусть вокруг будет больше света и любимых оттенков."],
      romance:["Мне дорого всё, что связывает нас.","Порой целое чувство умещается в одном тёплом вечере.","Пусть у наших историй будет долгое продолжение."],
      may7:["Сила — это ещё и умение беречь.","Пусть рядом всегда будут люди, которым доверяешь.","Мира твоему дому и уверенности в завтрашнем дне."],
      newyear:["Пусть в новом году будет больше уютных вечеров.","Новому счастью найдётся место рядом со старыми мечтами.","Самые тёплые зимние воспоминания мы создаём вместе."],
      september:["Каждое открытие начинается с любопытства.","Пусть сложное постепенно становится понятным.","Для новых мыслей всегда найдётся свободная страница."],
      summer:["Пусть лето оставит воспоминания, к которым хочется вернуться.","Можно выдохнуть и побыть там, где хорошо.","Пусть даже маленький ветер приносит добрые перемены."],
      memorial:["Можно никуда не спешить.","То, что было дорого, остаётся частью нас.","Пусть рядом найдётся тихая поддержка."],
      newborn:["В маленьком мире начинается большая история.","Пусть каждый день приносит немного нового тепла.","Спокойных ночей и нежных утренних встреч."],
      nauryz:["Пусть дом встречает весну добром и достатком.","С новым теплом приходят новые надежды.","Пусть всё хорошее растёт и крепнет."],
      anniversary:["Мне дороги все наши маленькие «помнишь?».","Счастье остаётся в деталях прожитых вместе дней.","Две дороги — и столько общего впереди."],
      halloween:["Немного загадки для этого необычного вечера.","Пусть за каждым шорохом скрывается только доброе чудо.","У самых странных историй бывает тёплый финал."],
      wedding:["Пусть рядом друг с другом будет спокойно и радостно.","Берегите нежность в самых обычных днях.","Большая история строится из маленьких совместных дел."],
      graduation:["За этой дверью — твоя следующая история.","Ты уже сделал больше, чем когда-то казалось возможным.","Пусть следующий шаг приведёт туда, где интересно."],
      housewarming:["Пусть здесь будет легко быть собой.","Пусть свет в окнах всегда означает: тебя ждут.","Уют растёт из внимания к маленьким вещам."],
      success:["Эта победа состоит из твоих настоящих усилий.","Дай себе минуту заметить, как далеко ты продвинулся.","Пусть радость от результата останется надолго."],
      recovery:["Можно двигаться в своём темпе.","Пусть сил понемногу становится больше.","Пусть этот день окажется чуть легче вчерашнего."]
    };
    return [
      titles[j],
      (thoughts[topic]||thoughts.just)[j],
      [
        "Коснись — повтори движение. Проведи указателем, чтобы повернуть объёмную сцену.",
        "Коснись — проиграй рисунок заново, от начала до финала.",
        "Коснись — посмотри бумажную историю ещё раз.",
      ][j],
    ];
  }
  function draw(s, t) {
    t *= playbackRate(s.type);
    const [, topic, pack, phase] = s.type.split(":"),
      story = catalog[topic][+pack],
      g = s.ctx;
    if (+phase !== 2) SceneSetting.draw(g,t,topic,+pack,+phase===0?"volume":"drawing");
    if (+phase === 0) {
      AnimationArt.volume(s, t, topic, +pack);
      return;
    }
    if (+phase === 2 && topic==='newyear' && +pack===2) {
      SnowWorkshop.draw(s,t);return;
    }
    if (+phase === 2) {
      PaperStories.draw(s,t,topic,+pack);
      return;
    }
    // Every scene has its own complete timeline from beginning to final pose.
    const p = clamp(t / 14);
    s.artStats = { style: "drawing" };
    const q = (a, b) => smooth((p - a) / (b - a));
    const clock = t,
      drift = Math.sin(clock * 0.7),
      C = {
        gold: "#ffd58d",
        cream: "#fff0d8",
        pink: "#ff9cbc",
        blue: "#8fd9f7",
        green: "#8edbb1",
        ink: "#18263d",
        purple: "#b3a3ff",
        orange: "#ff986b",
      };
    g.shadowBlur = 0;
    g.lineCap = "round";
    g.lineJoin = "round";
    g.globalAlpha = 1;
    function shade(c, amount) {
      const n = parseInt(c.slice(1), 16);
      return (
        "#" +
        [n >> 16, (n >> 8) & 255, n & 255]
          .map((v) =>
            Math.max(0, Math.min(255, Math.round(v + amount)))
              .toString(16)
              .padStart(2, "0"),
          )
          .join("")
      );
    }
    function material(c, x, y, w, h) {
      const v = g.createLinearGradient(x, y, x + w * 0.35, y + Math.max(1, h));
      v.addColorStop(0, shade(c, 23));
      v.addColorStop(0.38, c);
      v.addColorStop(1, shade(c, -34));
      return v;
    }
    function disk(x, y, r, c, a = 1) {
      g.save();
      g.globalAlpha = a;
      g.fillStyle = r > 7 ? material(c, x - r, y - r, r * 2, r * 2) : c;
      g.beginPath();
      g.arc(x, y, Math.max(0.001, r), 0, TAU);
      g.fill();
      g.restore();
    }
    function ellipse(x, y, rx, ry, c, a = 1, rot = 0) {
      g.save();
      g.globalAlpha = a;
      g.fillStyle = rx > 7 ? material(c, x - rx, y - ry, rx * 2, ry * 2) : c;
      g.beginPath();
      g.ellipse(x, y, Math.max(0.001, rx), Math.max(0.001, ry), rot, 0, TAU);
      g.fill();
      g.restore();
    }
    function line(x, y, xx, yy, c, w = 2, a = 1) {
      g.save();
      g.globalAlpha = a;
      g.strokeStyle = c;
      g.lineWidth = w;
      g.beginPath();
      g.moveTo(x, y);
      g.lineTo(xx, yy);
      g.stroke();
      g.restore();
    }
    function poly(pts, c, a = 1) {
      g.save();
      g.globalAlpha = a;
      const xs = pts.map((v) => v[0]),
        ys = pts.map((v) => v[1]);
      g.fillStyle = material(
        c,
        Math.min(...xs),
        Math.min(...ys),
        Math.max(...xs) - Math.min(...xs),
        Math.max(...ys) - Math.min(...ys),
      );
      g.beginPath();
      pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y)));
      g.closePath();
      g.fill();
      g.restore();
    }
    function rect(x, y, w, h, c, a = 1) {
      g.save();
      g.globalAlpha = a;
      g.fillStyle =
        Math.abs(w) > 15 && Math.abs(h) > 15 ? material(c, x, y, w, h) : c;
      g.fillRect(x, y, w, h);
      g.restore();
    }
    function arc(x, y, r, start, end, c, w = 2, a = 1) {
      g.save();
      g.globalAlpha = a;
      g.strokeStyle = c;
      g.lineWidth = w;
      g.beginPath();
      g.arc(x, y, r, start, end);
      g.stroke();
      g.restore();
    }
    function glow(x, y, r, c, a = 0.4) {
      g.save();
      g.globalAlpha = a;
      const v = g.createRadialGradient(x, y, 0, x, y, Math.max(1, r));
      v.addColorStop(0, c);
      v.addColorStop(1, c + "00");
      g.fillStyle = v;
      g.fillRect(x - r, y - r, r * 2, r * 2);
      g.restore();
    }
    function star(x, y, r, c, a = 1, rot = 0) {
      const pts = [];
      for (let i = 0; i < 10; i++) {
        const z = -Math.PI / 2 + (i * Math.PI) / 5 + rot,
          rr = i % 2 ? r * 0.42 : r;
        pts.push([x + Math.cos(z) * rr, y + Math.sin(z) * rr]);
      }
      poly(pts, c, a);
    }
    function curve(pts, c, w = 2, alpha = 1, progress = 1) {
      g.save();
      g.globalAlpha = alpha;
      g.strokeStyle = c;
      g.lineWidth = w;
      g.beginPath();
      const n = Math.max(1, Math.ceil((pts.length - 1) * clamp(progress)));
      pts
        .slice(0, n + 1)
        .forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y)));
      g.stroke();
      g.restore();
    }
    function heart(x, y, r, c, a = 1) {
      g.save();
      g.translate(x, y);
      g.scale(r / 30, r / 30);
      g.globalAlpha = a;
      g.fillStyle = c;
      g.beginPath();
      g.moveTo(0, 24);
      g.bezierCurveTo(-58, -8, -18, -48, 0, -16);
      g.bezierCurveTo(18, -48, 58, -8, 0, 24);
      g.fill();
      g.restore();
    }
    function label(text, x, y, size = 20, c = C.cream, a = 1) {
      g.save();
      g.globalAlpha = a;
      g.fillStyle = c;
      g.font = `${size}px Georgia, serif`;
      g.textAlign = "center";
      g.fillText(text, x, y, 760);
      g.restore();
    }
    function flower(x, y, r, c, open = 1) {
      line(x, y + 6, x, y + 65, C.green, 2);
      ellipse(x - 10, y + 37, 12, 4, C.green, 0.7, -0.5);
      for (let i = 0; i < 7; i++) {
        const a = (i * TAU) / 7;
        ellipse(
          x + Math.cos(a) * r * 0.6 * open,
          y + Math.sin(a) * r * 0.6 * open,
          r * 0.48,
          Math.max(2, r * 0.26 * open),
          c,
          0.85,
          a,
        );
      }
      disk(x, y, r * 0.23, C.gold);
      for (let j = 0; j < 7; j++) {
        const a = (j * TAU) / 7;
        disk(
          x + Math.cos(a) * r * 0.14,
          y + Math.sin(a) * r * 0.14,
          0.8,
          C.cream,
          0.7,
        );
      }
      line(x - 18, y + 41, x - 5, y + 35, C.cream, 0.6, 0.25);
      for (let j = 0; j < 7; j++) {
        const a = (j * TAU) / 7;
        line(
          x + Math.cos(a) * r * 0.24,
          y + Math.sin(a) * r * 0.24,
          x + Math.cos(a) * r * 0.83 * open,
          y + Math.sin(a) * r * 0.83 * open,
          C.cream,
          0.5,
          0.24,
        );
      }
    }
    function bird(x, y, r, c, flap = 0) {
      poly(
        [
          [x - r, y],
          [x, y - r * (0.7 + flap * 0.25)],
          [x + r, y],
          [x, y + r * 0.15],
        ],
        c,
      );
      line(x, y, x + r * 0.55, y + r * 0.3, c, 2);
    }
    function mountain(x, y, w, h, c) {
      poly(
        [
          [x - w / 2, y],
          [x, y - h],
          [x + w / 2, y],
        ],
        c,
      );
      poly(
        [
          [x - w * 0.14, y - h * 0.72],
          [x, y - h],
          [x + w * 0.13, y - h * 0.74],
          [x + w * 0.03, y - h * 0.66],
        ],
        C.cream,
        0.6,
      );
      poly(
        [
          [x, y - h],
          [x + w * 0.12, y - h * 0.51],
          [x + w * 0.28, y - h * 0.28],
          [x + w * 0.5, y],
          [x, y],
        ],
        shade(c, -18),
        0.36,
      );
      curve(
        [
          [x, y - h],
          [x - w * 0.03, y - h * 0.72],
          [x + w * 0.04, y - h * 0.57],
          [x - w * 0.08, y - h * 0.3],
          [x - w * 0.12, y],
        ],
        C.cream,
        1,
        0.13,
      );
      for (let j = 0; j < 5; j++) {
        const yy = y - h * (0.12 + j * 0.1),
          ww = w * (0.4 - j * 0.035);
        line(
          x - ww * 0.5,
          yy,
          x + ww * 0.7,
          yy + h * 0.025,
          C.cream,
          0.6,
          0.035,
        );
      }
    }
    function pine(x, y, r, c) {
      rect(x - 3, y - r * 0.15, 6, r * 0.35, C.gold, 0.5);
      for (let i = 0; i < 3; i++)
        poly(
          [
            [x - r * (0.55 - i * 0.12), y - i * r * 0.23],
            [x, y - r * (0.8 + i * 0.2)],
            [x + r * (0.55 - i * 0.12), y - i * r * 0.23],
          ],
          c,
        );
    }
    function snow(n = 55, fall = 1) {
      for (let i = 0; i < n; i++) {
        const d = s.dots[i];
        disk(
          100 + d.s * 800,
          80 + ((d.y + clock * 18 * fall) % 430),
          1 + d.r * 2,
          C.cream,
          0.3 + d.s * 0.4,
        );
      }
    }
    function skyline(y = 450, color = "#23314a") {
      for (let i = 0; i < 14; i++) {
        const h = 45 + s.dots[i].s * 100,
          x = 110 + i * 57;
        rect(x, y - h, 44, h, color);
        for (let j = 0; j < 3; j++)
          for (let k = 0; k < 2; k++)
            rect(
              x + 9 + k * 17,
              y - h + 12 + j * 27,
              6,
              11,
              C.gold,
              q(0.25 + i * 0.025, 0.55 + i * 0.02) * 0.8,
            );
      }
    }
    function burst(x, y, r, c, age) {
      if (age <= 0 || age >= 1) return;
      for (let j = 0; j < 45; j++) {
        const a = (j * TAU) / 45,
          rr = r * (1 - (1 - age) ** 3),
          fall = age * age * 55;
        line(
          x + Math.cos(a) * rr * 0.82,
          y + Math.sin(a) * rr * 0.82 + fall,
          x + Math.cos(a) * rr,
          y + Math.sin(a) * rr + fall,
          c,
          2,
          (1 - age) ** 0.6,
        );
      }
    }
    function flame(x, y, r, alpha = 1) {
      glow(x, y - r * 0.5, r * 4, C.orange, 0.18 * alpha);
      ellipse(x, y - r * 0.5, r * 0.5, r, C.orange, alpha, drift * 0.07);
      ellipse(x, y - r * 0.35, r * 0.24, r * 0.6, C.cream, alpha);
    }
    function boat(x, y, k = 1, alpha = 1) {
      g.save();
      g.translate(x, y);
      g.scale(k, k);
      poly(
        [
          [-42, 0],
          [42, 0],
          [25, 18],
          [-25, 18],
        ],
        C.gold,
        alpha,
      );
      line(0, 0, 0, -90, C.cream, 2, alpha);
      poly(
        [
          [3, -88],
          [3, -5],
          [57, -5],
        ],
        C.cream,
        alpha * 0.9,
      );
      poly(
        [
          [-4, -67],
          [-4, -5],
          [-37, -5],
        ],
        C.blue,
        alpha * 0.7,
      );
      g.restore();
    }
    function book(x, y, w, h, open = 1) {
      poly(
        [
          [x, y],
          [x - w * open, y - 14],
          [x - w * open, y + h - 14],
          [x, y + h],
        ],
        C.cream,
      );
      poly(
        [
          [x, y],
          [x + w * open, y - 14],
          [x + w * open, y + h - 14],
          [x, y + h],
        ],
        "#d5cee9",
      );
      line(x, y, x, y + h, C.gold, 3);
      for (let j = 0; j < 6; j++) {
        line(
          x - w * open * 0.83,
          y + 15 + j * 15,
          x - w * open * 0.18,
          y + 23 + j * 15,
          "#8394ac",
          1,
          0.7,
        );
        line(
          x + w * open * 0.18,
          y + 23 + j * 15,
          x + w * open * 0.83,
          y + 15 + j * 15,
          "#8394ac",
          1,
          0.7,
        );
      }
    }
    // Atmosphere is restrained. The action, not a general particle overlay, owns the scene.
    const quiet = topic === "memorial";
    g.save();
    g.translate(s.x * 9, s.y * 6);
    // Bodies are present before an action. Hands, hinges and tools explain the force.
    function palm(x,y,c=C.cream,angle=0){g.save();g.translate(x,y);g.rotate(angle);line(0,0,36,30,c,10);ellipse(0,0,12,8,c);for(let n=0;n<3;n++)line(-8+n*5,-3,-15+n*5,-12,c,3);g.restore();}
    function walker(x,ground,c,walk=0,reach=null){return MotionRig.draw(g,{x,ground,color:c,height:80,cycle:walk,walking:Math.abs(walk)>0,dir:reach&&reach[0]<x?-1:1,hands:reach?[null,reach]:undefined});}
    function watering(x,y,amount){rect(x-21,y-15,42,25,C.blue);arc(x-25,y-7,14,Math.PI/2,Math.PI*1.5,C.blue,4);line(x+15,y-8,x+58,y+5,C.blue,8);for(let j=0;j<12;j++){const u=(clock*.8+j/12)%1;disk(x+58+u*25,y+5+u*u*80,1.7,C.blue,amount*.8);}}
    function plant(x,ground,height,open=1){line(x,ground,x,ground-height,C.green,3);for(let j=0;j<4;j++){const yy=ground-height*(.25+j*.18),dir=j%2?1:-1;ellipse(x+dir*12,yy,15,5,C.green,.9,dir*.4);}for(let j=0;j<7;j++){const a=j*TAU/7;ellipse(x+Math.cos(a)*12*open,ground-height+Math.sin(a)*12*open,12,5,C.pink,1,a);}disk(x,ground-height,5,C.gold);}
    function hangingCrane(x,y,targetY){line(110,110,890,110,C.blue,6,.6);line(x,110,x,targetY-9,C.cream,2);rect(x-15,99,30,20,C.gold);arc(x,targetY-4,7,0,Math.PI,C.gold,3);}
    switch (story.id) {
      case "candlewish": {
        rect(400,380,200,72,'#d993b8');ellipse(500,380,100,20,C.cream);rect(492,304,16,73,C.gold);line(500,304,500,292,C.cream,2);const ignite=q(.08,.18),blow=q(.48,.64);flame(500,290,17,ignite*(1-blow));if(p<.23){const u=q(.02,.14),x=680-180*u,y=250+40*u;line(x,y,x+35,y-30,C.gold,3);flame(x,y,5,1);palm(x+35,y-30);}walker(660,410,C.blue,0);if(p>.46&&p<.66)for(let j=0;j<3;j++)curve([[650,338+j*5],[580,312+j*5],[510,291+j*5]],C.blue,1,.35);for(let j=0;j<7;j++){const u=(clock*.35+j/7)%1;if(blow>0)ellipse(500+Math.sin(u*5)*8,289-u*90,4+u*8,3+u*6,C.cream,(1-u)*.15*blow);}label('Зажигаем свечу, загадываем желание и задуваем',500,515,20,C.cream,1);
        break;
      }
      case "carousel": {
        const build = 1,
          spin = q(0.32, 0.68),
          lights = q(0.65, 1);
        line(500, 158, 500, 447, C.gold, 6, build);
        poly(
          [
            [320, 230],
            [500, 126],
            [680, 230],
          ],
          C.pink,
          build,
        );
        for (let j = 0; j < 8; j++)
          line(320 + j * 45, 230, 500, 126, C.cream, 2, build * 0.6);
        ellipse(500, 448, 210, 32, C.purple, build * 0.6);
        for (let j = 0; j < 5; j++) {
          const a = (j * TAU) / 5 + spin * 4 + clock * 0.13,
            depth = (Math.sin(a) + 1) / 2,
            x = 500 + Math.cos(a) * 165,
            y = 302 + Math.sin(a) * 42;
          line(x, 220, x, y + 63, C.gold, 3, build);
          g.save();
          g.translate(x, y + Math.sin(a * 2 + clock) * 10);
          g.scale(0.7 + depth * 0.35, 0.7 + depth * 0.35);
          poly(
            [
              [-34, 18],
              [-25, -12],
              [13, -18],
              [34, -45],
              [42, -42],
              [31, -11],
              [38, 18],
            ],
            j % 2 ? C.blue : C.cream,
            build,
          );
          line(-23, 17, -25, 39, C.gold, 5, build);
          line(25, 17, 21, 39, C.gold, 5, build);
          g.restore();
        }
        for (let j = 0; j < 15; j++) {
          disk(
            327 + j * 25,
            234,
            4,
            C.gold,
            lights * (0.65 + 0.3 * Math.sin(clock * 2 + j)),
          );
        }
        rect(475,443,50,34,C.gold);disk(500,460,8,C.blue);
        label("Ещё один прекрасный круг", 500, 510, 22, C.cream, lights);
        break;
      }
      case "comet": {
        const u=q(.02,.94),x=-100+1200*u,y=120+240*u;for(let j=0;j<65;j++){const z=Math.max(0,u-j*.0025);line(-100+1200*z,120+240*z,-100+1200*(z+.0025),120+240*(z+.0025),j%2?C.blue:C.pink,3,(1-j/65)*.65);}glow(x,y,45,C.blue,.5);star(x,y,10,C.cream);for(let j=0;j<8;j++){const z=Math.max(0,u-.35),xx=320+1200*z-j*8,yy=204+240*z+z*z*(j+1)*18;if(u>.35)disk(xx,yy,2,C.gold,.8);}label('Один источник движения: комета, её след и отделившиеся частицы',500,520,18,C.cream,1);
        break;
      }
      case "map": {
        const unfold = 1,
          route = q(0.3, 0.78),
          end = q(0.78, 1);
        g.save();
        g.translate(500, 300);
        g.scale(Math.max(0.02, unfold), 1);
        rect(-350, -195, 700, 365, "#dcc4a0");
        for (let j = 0; j < 5; j++) {
          poly(
            [
              [-350 + j * 140, -195],
              [-210 + j * 140, -195],
              [-210 + j * 140, 170],
              [-350 + j * 140, 170],
            ],
            j % 2 ? "#b59d7f" : "#ead7b7",
            0.4,
          );
        }
        g.restore();
        mountain(310, 284, 150, 100, "#777d75");
        mountain(360, 300, 130, 125, "#6e7775");
        curve(
          Array.from({ length: 70 }, (_, i) => [
            175 + i * 9.2,
            370 - 95 * Math.sin((i / 69) * Math.PI * 1.7),
          ]),
          "#a34f57",
          4,
          unfold,
          route,
        );
        const rx = 175 + 635 * route,
          ry = 370 - 95 * Math.sin(route * Math.PI * 1.7);
        line(rx,ry,rx+22,ry-32,C.gold,6);palm(rx+25,ry-35);
        line(810, 350, 810, 250, "#a34f57", 3, end);
        poly(
          [
            [810, 250],
            [860, 267],
            [810, 282],
          ],
          "#a34f57",
          1,
        );
        arc(800, 175, 26, 0, TAU, "#74624f", 2, unfold);
        line(800, 145, 800, 205, "#74624f", 1, unfold);
        label("До следующего приключения", 500, 505, 22, C.cream, end);
        break;
      }
      case "camp": {
        const dusk = 1,
          fire = q(0.32, 0.62),
          milky = q(0.65, 1);
        mountain(240, 405, 370, 210, "#24344a");
        mountain(700, 410, 390, 245, "#273049");
        poly(
          [
            [210, 446],
            [330, 315],
            [446, 446],
          ],
          C.orange,
          dusk,
        );
        poly(
          [
            [284, 446],
            [330, 347],
            [370, 446],
          ],
          C.ink,
          dusk,
        );
        line(475, 440, 535, 419, C.gold, 7, 1);
        line(478, 419, 535, 440, C.gold, 7, 1);
        if(p<.38){const u=q(.06,.30);line(600-95*u,350+70*u,630-95*u,325+70*u,C.gold,3);flame(600-95*u,350+70*u,5,1);palm(630-95*u,325+70*u);}
        flame(505, 420, 25 + drift * 2, fire);
        for (let j = 0; j < 40; j++) {
          const d = s.dots[j],
            a = (clock * 0.16 + d.s) % 1;
          disk(
            505 + Math.sin(a * 7 + d.a) * a * 65,
            407 - a * 220,
            2 * (1 - a),
            C.gold,
            fire * (1 - a),
          );
        }
        for (let j = 0; j < 150; j++) {
          const d = s.dots[j];
          disk(
            170 + d.s * 650,
            80 + d.s * 80 + d.z * 45,
            1 + d.r,
            C.blue,
            milky * 0.65,
          );
        }
        label("Свои люди. Хороший вечер.", 500, 512, 22, C.cream, milky);
        break;
      }
      case "arcade": {
        const on = 1,
          run = q(0.32, 0.68),
          win = q(0.68, 1);
        rect(250, 95, 500, 390, "#2d2856", on);
        rect(280, 130, 440, 255, "#101928", on);
        rect(285, 345, 430, 12, C.purple, on);
        for (let j = 0; j < 6; j++) {
          rect(310 + j * 65, 305 - (j % 3) * 30, 40, 8, C.blue, on);
        }
        const step=Math.min(4,Math.floor(run*5)),u=run===1?1:run*5-step,
          x=330+(step+u)*65,
          startY=305-(step%3)*30,endY=305-((step+1)%3)*30,
          y=startY+(endY-startY)*u-Math.sin(u*Math.PI)*70;
        rect(x - 10, y - 30, 20, 23, C.gold, on);
        rect(x - 13, y - 13, 7, 13, C.orange, on);
        rect(x + 6, y - 13, 7, 13, C.orange, on);
        star(650, 210, 25, C.gold, win);
        label(win > 0.4 ? "LEVEL UP" : "PLAYER 1", 500, 177, 22, C.green, on);
        palm(660,424+Math.sin(clock*5)*3);
        disk(660, 435, 18, C.pink, on);
        disk(610, 445, 12, C.gold, on);
        line(355, 442, 355, 415, C.blue, 5, on);
        disk(355, 408, 13, C.blue, on);
        break;
      }
      case "greenhouse": {
        const water=q(.04,.23),grow=q(.27,.83);curve([[170,455],[170,190],[500,80],[830,190],[830,455]],C.blue,3,.65);for(let j=0;j<7;j++)line(200+j*100,445,200+j*100,185,C.blue,1,.2);
        ellipse(500,465,340,20,'#795f4e');for(let j=0;j<6;j++){const x=240+j*105,h=(40+65*grow),ground=455;ellipse(x,453,8,4,C.gold);plant(x,ground,h,.18+.82*q(.55,.9));}
        const canX=190+520*water;watering(canX,370,p<.27?1:0);palm(canX-10,352);disk(760,115,30,C.gold,.9);
        for(let j=0;j<5;j++){const u=clamp((p-.84)*6+j*.035),x=-50+1000*u,y=230+Math.sin(u*TAU*2+j)*25;if(p>.84){ellipse(x,y,8,5,C.gold);ellipse(x,y-7,7,3,C.cream,.7,Math.sin(clock*18));}}
        label('Поливаем почву → побег из семени → раскрытие листьев · ускоренное время',500,535,17,C.cream,1);
        break;
      }
      case "petaldance": {
        const wind=q(.12,.88);for(let j=0;j<8;j++)plant(160+j*92,460,60+(j%3)*25,1);for(let j=0;j<48;j++){const seed=j%8,release=.10+j*.009,u=clamp((p-release)/.55),sx=160+seed*92,sy=400-(seed%3)*25,x=sx+u*300,y=sy-80*Math.sin(Math.PI*u)+u*120;ellipse(x,y,7,3,j%2?C.pink:C.cream,1,j*.3+u*4);}for(let j=0;j<5;j++)curve([[140,210+j*15],[300+wind*300,195+j*15],[740,210+j*15]],C.blue,1,.12);label('Ветер снимает лепестки с цветов и несёт к земле',500,545,20,C.cream,1);
        break;
      }
      case "watercolor": {
        rect(160,100,680,380,'#e8dfe0');const pts=Array.from({length:140},(_,j)=>[240+j*3.8,285+Math.sin(j*.075)*85]);const u=q(.05,.85),n=Math.min(139,Math.floor(u*139));for(let j=0;j<=n;j++)ellipse(pts[j][0],pts[j][1],17,22,j<46?'#b7cbbb':j<94?'#d9a5b5':'#cbb7d7',.12);const [x,y]=pts[n];line(x,y,x+45,y-65,C.gold,9);line(x,y,x+7,y-11,C.pink,13);palm(x+38,y-55);for(const [xx,c] of [[225,'#b7cbbb'],[290,'#d9a5b5'],[355,'#cbb7d7']])disk(xx,440,20,c);label('Кисть оставляет пигмент на влажной бумаге',500,520,22,C.cream,1);
        break;
      }
      case "embroidery": {
        const hoop = 1,
          stitch = q(0.3, 0.8),
          finish = q(0.8, 1);
        arc(500, 280, 175, 0, TAU, C.gold, 10, hoop);
        disk(500, 280, 165, "#34334b", hoop);
        const pts = Array.from({ length: 170 }, (_, j) => {
          const a = (j / 169) * TAU;
          return [
            500 + 9 * 16 * Math.sin(a) ** 3,
            260 -
              9 *
                (13 * Math.cos(a) -
                  5 * Math.cos(2 * a) -
                  2 * Math.cos(3 * a) -
                  Math.cos(4 * a)),
          ];
        });
        for (let j = 0; j < Math.floor(stitch * 169); j += 2)
          line(...pts[j], ...pts[j + 1], C.pink, 3, hoop);
        const n = Math.min(169, Math.floor(stitch * 169)),
          [x, y] = pts[n];
        line(
          x,
          y,
          x + 28 * (1 - finish),
          y - 42 * (1 - finish),
          C.cream,
          2,
          hoop * (1 - finish),
        );
        curve(
          [
            [x, y],
            [x + 35, y + 30],
            [x + 70, y - 15],
            [760, 150],
          ],
          C.pink,
          1.3,
          hoop * (1 - finish),
        );
        if(finish<1)palm(x+28*(1-finish),y-42*(1-finish));
        rect(483, 91, 34, 24, C.gold, hoop);
        label(s.name, 500, 510, 24, C.pink, finish);
        break;
      }
      case "rainwindow": {
        const lit=q(.15,.6);skyline(432);rect(190,170,250,285,'#343849');rect(560,145,250,310,'#3b4054');
        // Two actual rooms: figures behind glass, with floors, lintels and sill occlusion.
        for(let j=0;j<2;j++){const x=j?590:220,y=j?220:245,w=190,h=145;rect(x,y,w,h,'#dcc193',.65+.25*lit);g.save();g.beginPath();g.rect(x+8,y+8,w-16,h-16);g.clip();const u=q(.1+j*.12,.55+j*.12);walker(x+40+40*u,y+h-12,j?C.blue:C.pink,u*6);walker(x+145-20*u,y+h-12,j?C.pink:C.blue,-u*4);g.restore();rect(x-8,y-7,w+16,8,C.cream);rect(x-8,y+h-9,w+16,13,C.cream);line(x+w/2,y,x+w/2,y+h,C.cream,6);}
        for(let j=0;j<55;j++){const d=s.dots[j],x=175+d.s*650,y=110+(d.y+clock*35)%350;line(x,y,x-3,y+14,C.blue,1,.35);}
        label('Два окна. Два тёплых вечера.',500,515,22,C.cream,1);
        break;
      }
      case "cranes": {
        const fold = 1,
          fly = q(0.3, 0.7),
          meet = q(0.7, 1);
        for (let j = 0; j < 2; j++) {
          const dir = j ? 1 : -1,
            x = 500 + dir * (260 - 170 * meet),
            y = 380 - 150 * fly + Math.sin(clock * 1.4 + j) * 12 * fly;
          g.save();
          g.translate(x, y);
          g.scale(dir, 1);
          const r = 65;
          poly(
            [
              [-r, 0],
              [0, -r * (0.1 + 0.65 * fold)],
              [r * 0.8, 0],
              [0, r * 0.28],
            ],
            j ? C.pink : C.cream,
          );
          poly(
            [
              [0, 0],
              [
                -r * 0.7,
                -r * (0.15 + 0.75 * fold + fly * Math.sin(clock * 2) * 0.18),
              ],
              [-r * 0.2, r * 0.2],
            ],
            j ? C.purple : C.blue,
          );
          poly(
            [
              [20, 0],
              [45, -36 * fold],
              [62, -30 * fold],
              [38, -22 * fold],
            ],
            C.gold,
            0.8,
          );
          line(-60, 4, -90, 20, C.cream, 1, 0.4 * fly);
          g.restore();
        }
        if(p<.4){palm(240-150*q(.3,.45),399);palm(760+150*q(.3,.45),399);}
        disk(500, 180, 40, C.gold, 0.12 * meet);
        bird(500, 155, 12, C.gold, drift);
        break;
      }
      case "shieldsky": {
        const shield = q(0.28, 0.66),
          peace = q(0.66, 1);
        skyline(449);
        for (let j = 0; j < 8; j++)
          ellipse(
            180 + j * 95,
            180 + Math.sin(j) * 20,
            65,
            30,
            "#65728a",
            0.4 * (1 - peace),
          );
        g.save();
        g.strokeStyle = C.blue;
        g.lineWidth = 4;
        g.beginPath();
        g.ellipse(500,440,330,280,0,Math.PI,Math.PI+Math.PI*shield);
        g.stroke();
        g.restore();
        rect(480,430,40,30,C.blue);line(500,430,500,160,C.blue,2,.1*shield);
        glow(500, 210, 170, C.blue, 0.13 * shield);
        disk(720, 150, 38, C.gold, peace);
        for (let j = 0; j < 9; j++)
          bird(280 + j * 45, 210 + Math.sin(j) * 25, 7, C.cream, drift);
        label("Сила, которая бережёт", 500, 510, 22, C.blue, peace);
        break;
      }
      case "steppeflight": {
        const breeze = q(0, 0.32),
          flight = q(0.32, 0.73),
          sun = q(0.72, 1);
        disk(740, 160, 45, C.gold, sun * 0.8);
        for (let j = 0; j < 100; j++) {
          const x = 100 + j * 8,
            y = 450 + Math.sin(j * 0.1) * 20;
          line(
            x,
            y,
            x + Math.sin(clock + j * 0.3) * 9 * breeze,
            y - 22 - s.dots[j].r * 22,
            C.green,
            2,
            0.5,
          );
        }
        const x = -100 + 950 * flight,
          y = 425 - 245 * flight*flight;
        curve(
          Array.from({ length: 45 }, (_, j) => [180 + j * 14, 330 - j * 3.9]),
          C.cream,
          2,
          0.3 * flight,
          flight,
        );
        g.save();
        g.translate(x, y);
        g.rotate(-0.26);
        poly(
          [
            [-36, 0],
            [40, -3],
            [50, 2],
            [10, 8],
            [-30, 8],
          ],
          C.cream,
        );
        poly(
          [
            [-6, 0],
            [-20, -32],
            [8, -32],
            [25, 2],
          ],
          C.blue,
        );
        poly(
          [
            [-30, 0],
            [-37, -16],
            [-27, -16],
            [-13, 0],
          ],
          C.gold,
        );
        g.restore();
        line(80,445,880,445,C.cream,2,.25);
        break;
      }
      case "beacon": {
        const light = q(0.3, 0.67),
          harbour = q(0.66, 1);
        for (let j = 0; j < 9; j++)
          curve(
            Array.from({ length: 45 }, (_, i) => [
              100 + i * 18,
              385 + j * 12 + Math.sin(i * 0.4 - clock) * 3,
            ]),
            C.blue,
            1,
            0.12,
          );
        poly(
          [
            [685, 450],
            [712, 180],
            [745, 180],
            [775, 450],
          ],
          C.cream,
          0.7,
        );
        rect(702, 164, 55, 33, C.gold, light);
        poly(
          [
            [688, 164],
            [730, 132],
            [772, 164],
          ],
          C.pink,
        );
        const a = -0.4 + Math.sin(clock * 0.4) * 0.3;
        poly(
          [
            [730, 180],
            [
              730 + Math.cos(a + Math.PI) * 640,
              180 + Math.sin(a + Math.PI) * 640,
            ],
            [
              730 + Math.cos(a + Math.PI + 0.18) * 640,
              180 + Math.sin(a + Math.PI + 0.18) * 640,
            ],
          ],
          C.gold,
          0.11 * light,
        );
        disk(730,180,7,C.gold,1);
        boat(190 + 385 * harbour, 415 + drift * 3, 0.65);
        poly(
          [
            [590, 448],
            [900, 448],
            [900, 481],
            [650, 481],
          ],
          "#314652",
        );
        glow(730, 182, 75, C.gold, 0.3 * light);
        break;
      }
      case "wintertrain": {
        const rail = 1,
          travel = q(0.3, 0.69),
          city = 1;
        mountain(260, 372, 300, 170, "#283953");
        mountain(710, 372, 400, 225, "#23314a");
        line(90, 440, 900, 440, C.blue, 3, rail);
        line(90, 450, 900, 450, C.blue, 2, rail);
        for (let j = 0; j < 45; j++)
          line(90 + j * 18, 436, 98 + j * 18, 455, C.gold, 1, rail * 0.4);
        const x = 70 + 650 * travel;
        for (let j = 0; j < 3; j++) {
          rect(x - j * 100, 374, 88, 53, j ? C.purple : C.pink, rail);
          rect(x - j * 100 - 3, 368, 94, 7, C.cream, rail * 0.65);
          line(
            x - j * 100 + 3,
            420,
            x - j * 100 + 85,
            420,
            C.gold,
            2,
            rail * 0.6,
          );
          rect(x - j * 100 + 69, 385, 12, 34, C.blue, rail * 0.45);
          for (let w = 0; w < 2; w++)
            line(
              x - j * 100 + 18 + w * 31,
              385,
              x - j * 100 + 18 + w * 31,
              405,
              C.cream,
              1,
              rail * 0.5,
            );
          if (j === 0) {
            rect(x + 63, 352, 15, 21, C.ink, rail);
            rect(x + 60, 348, 21, 5, C.gold, rail);
            glow(x + 87, 402, 22, C.gold, rail * 0.2);
          }
          rect(x - j * 100 + 8, 385, 20, 20, C.gold, rail);
          rect(x - j * 100 + 39, 385, 20, 20, C.gold, rail);
          for (let k = 0; k < 2; k++) {
            disk(x - j * 100 + 18 + k * 48, 431, 9, C.ink, rail);
            line(
              x - j * 100 + 18 + k * 48,
              431,
              x - j * 100 + 18 + k * 48 + Math.cos(travel * (650/9)) * 7,
              431 + Math.sin(travel * (650/9)) * 7,
              C.cream,
              2,
              rail,
            );
          }
        }
        for (let j = 0; j < 8; j++)
          ellipse(
            x + 60 - j * 16,
            350 - j * 14,
            8 + j * 2,
            5 + j * 2,
            C.cream,
            0.12 * (1 - j / 8) * rail,
          );
        for (let j = 0; j < 5; j++) {
          rect(640 + j * 47, 290 - (j % 2) * 30, 38, 82, C.blue, 0.3 * city);
          poly(
            [
              [635 + j * 47, 290 - (j % 2) * 30],
              [659 + j * 47, 270 - (j % 2) * 30],
              [683 + j * 47, 290 - (j % 2) * 30],
            ],
            C.cream,
            0.6 * city,
          );
          rect(650 + j * 47, 310 - (j % 2) * 30, 12, 18, C.gold, city);
          line(
            656 + j * 47,
            310 - (j % 2) * 30,
            656 + j * 47,
            328 - (j % 2) * 30,
            C.cream,
            0.8,
            city * 0.4,
          );
          rect(665 + j * 47, 270 - (j % 2) * 30, 6, 16, C.pink, city);
          for (let z = 0; z < 3; z++)
            disk(646 + j * 47 + z * 10, 292 - (j % 2) * 30, 1.5, C.gold, city);
        }
        snow(45);
        break;
      }
      case "snowforge": {
        const grow=q(.1,.88);disk(500,280,4,C.cream);for(let j=0;j<6;j++){const a=j*TAU/6;line(500,280,500+Math.cos(a)*150*grow,280+Math.sin(a)*150*grow,C.blue,3);for(let k=1;k<=3;k++){const u=clamp((grow-k*.19)*4),r=k*35;for(const dir of [-1,1])if(grow*150>=r)line(500+Math.cos(a)*r,280+Math.sin(a)*r,500+Math.cos(a)*r+Math.cos(a+dir*Math.PI/3)*32*u,280+Math.sin(a)*r+Math.sin(a+dir*Math.PI/3)*32*u,C.cream,2);}for(let n=0;n<12;n++){const u=(clock*.24+n/12)%1,r=150*grow+100*(1-u);disk(500+Math.cos(a)*r,280+Math.sin(a)*r,1.7,C.blue,.8);}}label('Частицы подходят к граням; ветви растут от центра · условная микросъёмка',500,520,17,C.cream,1);
        break;
      }
      case "aurora": {
        const night = 1,
          lights = q(0.3, 0.72),
          midnight = q(0.72, 1);
        for (let j = 0; j < 45; j++)
          pine(100 + j * 18, 460, 45 + s.dots[j].s * 40, "#182d37");
        for (let band = 0; band < 14; band++) {
          const pts = [];
          for (let j = 0; j < 75; j++) {
            const x = 100 + j * 10.8,
              y =
                185 +
                band * 5 +
                Math.sin(j * 0.08 + clock * 0.18 + band * 0.08) * 48 +
                Math.cos(j * 0.16) * 15;
            pts.push([x, y]);
          }
          curve(
            pts,
            band < 7 ? C.green : C.purple,
            4,
            0.025 * lights * (14 - band),
          );
          for (let j = 0; j < 75; j += 3) {
            const [x, y] = pts[j];
            line(
              x,
              y,
              x + 12,
              y - 60 - (j % 5) * 9,
              C.green,
              2,
              0.035 * lights,
            );
          }
        }
        // Light varies while the landscape and moon remain present.
        disk(760, 110, 28, C.cream, night * 0.7);
        label("00:00", 500, 390, 32, C.cream, midnight);
        snow(25, 0.3);
        break;
      }
      case "bookworld": {
        const open = q(0, 0.33),
          world = q(0.33, 0.72),
          sky = q(0.72, 1);
        book(500, 362, 185, 98, 0.03 + 0.97 * open);
        for (let j = 0; j < 5; j++) {
          g.save();
          g.translate(500, 290 - world * 75);
          g.rotate(j * 0.42 + clock * 0.04);
          g.strokeStyle = j % 2 ? C.blue : C.gold;
          g.globalAlpha = world * 0.55;
          g.lineWidth = 1.3;
          g.beginPath();
          g.ellipse(0, 0, 90 + j * 20, 25 + j * 9, 0, 0, TAU);
          g.stroke();
          g.restore();
        }
        for(const xx of [460,540])line(xx,350,500,210,C.blue,1,.22*world);
        label("Световая проекция из книги",500,510,20,C.cream,1);
        glow(500, 210, 70, C.blue, 0.3 * world);
        disk(500, 210, 25, C.blue, world);
        for (let j = 0; j < 10; j++) {
          const a = j * 2.4 + clock * 0.12;
          star(500 + Math.cos(a) * 145, 210 + Math.sin(a) * 92, 4, C.gold, sky);
        }
        break;
      }
      case "schooldomino": {
        const ready = 1,
          chain = q(0.3, 0.85),
          answer = q(0.84, 1);
        for (let j = 0; j < 12; j++) {
          const x = 190 + j * 54,
            y = 420,
            fall = smooth((chain*12.8-j*.8)/2);
          g.save();
          g.translate(x, y);
          g.rotate(fall * Math.acos(24/54));
          rect(-12, -80, 24, 80, j % 2 ? C.blue : C.purple, ready);
          label(j === 0 ? "?" : String(j), 0, -43, 17, C.ink, ready);
          g.restore();
        }
        line(170,420,875,420,C.cream,2,.5);palm(178+Math.min(20,chain*50),355,C.cream,.1);
        glow(820, 245, 100, C.gold, 0.3 * answer);
        star(820, 245, 38, C.gold, answer);
        label("Один вопрос открывает следующий", 500, 510, 20, C.cream, answer);
        break;
      }
      case "blueprint": {
        const draw=q(.02,.30),install=q(.34,.90);for(let i=0;i<17;i++)line(140+i*45,110,140+i*45,455,C.blue,1,.08);const points=[[220,410],[220,200],[780,200],[780,410]];curve(points,C.blue,2,.5,draw);const n=Math.min(2,Math.floor(draw*3)),u=draw===1?1:draw*3-n,x=points[n][0]+(points[n+1][0]-points[n][0])*u,y=points[n][1]+(points[n+1][1]-points[n][1])*u;if(draw<1){line(x,y,x+20,y-35,C.gold,5);palm(x+20,y-35);}line(150,445,850,445,C.cream,3);for(let j=0;j<6;j++){const u=clamp(install*6-j),tx=250+j*95,xx=tx+(850+j*20-tx)*(1-u),yy=410-200*Math.sin(Math.PI*u);rect(xx-8,yy-180,16,180,C.gold);if(u>0&&u<1)hangingCrane(xx,0,yy-180);}label('Чертёж → подъём готовых стоек → установка на основание',500,530,19,C.cream,1);
        break;
      }
      case "tidal": {
        const rise = q(0, 0.3),
          wave = q(0.3, 0.7),
          shore = q(0.7, 1);
        disk(500, 270 - rise * 110, 44, C.gold, rise);
        glow(500, 200, 150, C.gold, 0.13 * rise);
        for (let j = 0; j < 13; j++) {
          const y = 320 + j * 13 + Math.sin(clock * 0.65 + j * 0.4) * 4;
          curve(
            Array.from({ length: 65 }, (_, i) => [
              100 + i * 12.5,
              y + Math.sin(i * 0.17 - clock + j) * 3,
            ]),
            j % 3 ? C.blue : C.cream,
            2,
            0.25,
          );
        }
        poly(
          [
            [100, 475 - wave * 25],
            [900, 448 - wave * 10],
            [900, 550],
            [100, 550],
          ],
          "#bc9b7e",
        );
        curve(
          Array.from({ length: 75 }, (_, i) => [
            100 + i * 10.8,
            466 - wave * 30 + Math.sin(i * 0.19 + clock * 0.5) * 7,
          ]),
          C.cream,
          5,
          0.45,
        );
        for (let j = 0; j < 7; j++) {
          ellipse(
            420 + j * 22,
            493 + (j % 2) * 20,
            4,
            9,
            "#6b655f",
            clamp(shore*7-j),
            Math.PI * 0.25,
          );
        }
        walker(410+154*shore,513,C.cream,shore*23);
        poly(
          [
            [730, 463],
            [754, 449],
            [779, 465],
            [754, 477],
          ],
          C.pink,
          1,
        );
        break;
      }
      case "meadowlife": {
        const water=q(.04,.23),grow=q(.27,.83);
        ellipse(500,465,410,40,'#476857');for(let j=0;j<12;j++){const x=160+j*62,h=(40+65*grow),ground=455;ellipse(x,453,8,4,C.gold);plant(x,ground,h,.18+.82*q(.55,.9));}
        const canX=190+520*water;watering(canX,370,p<.27?1:0);palm(canX-10,352);disk(760,115,30,C.gold,.9);
        for(let j=0;j<5;j++){const u=clamp((p-.84)*6+j*.035),x=-50+1000*u,y=230+Math.sin(u*TAU*2+j)*25;if(p>.84){ellipse(x,y,8,5,C.gold);ellipse(x,y-7,7,3,C.cream,.7,Math.sin(clock*18));}}
        label('Поливаем луг → побег из семени → раскрытие листьев · ускоренное время',500,535,17,C.cream,1);
        break;
      }
      case "kite": {
        const lift = q(0.25, 0.67),
          free = q(0.67, 1),
          x = 360 + 250 * lift + s.x * 10,
          y = 430 - 275 * lift + drift * 8 * lift;
        line(225, 462, 260, 389, C.gold, 3);
        disk(257, 381, 10, C.cream);
        curve(
          Array.from({ length: 55 }, (_, i) => {
            const a = i / 54;
            return [
              250 + (x - 250) * a,
              395 + (y - 395) * a + Math.sin(a * Math.PI) * 50,
            ];
          }),
          C.cream,
          1.5,
          0.7,
        );
        poly(
          [
            [x, y - 38],
            [x + 31, y],
            [x, y + 49],
            [x - 31, y],
          ],
          C.pink,
        );
        poly(
          [
            [x, y - 38],
            [x, y + 49],
            [x - 31, y],
          ],
          C.purple,
        );
        line(257,399,250,395,C.cream,4);
        const tail = Array.from({ length: 55 }, (_, i) => [
          x + Math.sin(i * 0.15 - clock) * i * 0.7 * free,
          y + 45 + i * 2,
        ]);
        curve(tail, C.gold, 2, 0.8);
        for (let i = 8; i < 55; i += 8) {
          const [xx, yy] = tail[i];
          poly(
            [
              [xx - 8, yy - 4],
              [xx + 8, yy + 4],
              [xx + 8, yy - 4],
              [xx - 8, yy + 4],
            ],
            C.blue,
            1,
          );
        }
        break;
      }
      case "memwater": {
        const flameOn = 1,
          away = q(0.33, 0.75),
          lasting = q(0.75, 1),
          x = 320 + 310 * away,
          y = 385 - 110 * away;
        for (let j = 0; j < 15; j++)
          curve(
            Array.from({ length: 55 }, (_, i) => [
              100 + i * 15,
              310 + j * 13 + Math.sin(i * 0.16 + clock * 0.15) * 2,
            ]),
            "#b7a99a",
            1,
            0.13,
          );
        poly(
          [
            [x - 26, y],
            [x + 26, y],
            [x + 15, y + 14],
            [x - 15, y + 14],
          ],
          "#b7a99a",
        );
        rect(x - 5, y - 23, 10, 23, C.cream);
        flame(x, y - 30, 8, flameOn);
        for (let j = 0; j < 18; j++)
          line(
            x - 10 - j * 0.7,
            y + 20 + j * 5,
            x + 10 + j * 0.7,
            y + 20 + j * 5,
            C.gold,
            (1 - j / 18) * 2,
            (1 - j / 18) * 0.2 * flameOn,
          );
        if(p<.4)palm(320-160*q(.33,.48),402);
        glow(640, 200, 95, C.gold, 0.09 * lasting);
        break;
      }
      case "album": {
        book(500,225,240,220,1);for(let j=0;j<4;j++){const u=q(.08+j*.18,.24+j*.18),tx=320+(j%2)*250,ty=250+Math.floor(j/2)*83,x=tx+(840-tx)*(1-u),y=ty+(465-ty)*(1-u)-Math.sin(Math.PI*u)*90;rect(x,y,100,66,'#9c9794');disk(x+74,y+18,10,'#ead6b2',.65);poly([[x,y+57],[x+30,y+27],[x+60,y+50],[x+84,y+32],[x+100,y+57]],'#65776f');if(u>0&&u<1)palm(x+85,y+55);if(u===1){line(x-2,y,x+12,y,C.cream,3);line(x+88,y+66,x+102,y+66,C.cream,3);}}label('Вкладываем снимки в уголки альбома',500,520,22,C.cream,1);
        break;
      }
      case "memorygarden": {
        const water=q(.04,.23),grow=q(.27,.83);
        ellipse(500,465,180,20,'#795f4e');const top=455-240*grow;line(500,455,500,top,'#ac8d70',8);for(let j=0;j<12;j++){const u=clamp((grow-.12-j*.035)*3),yy=440-j*15,dir=j%2?1:-1,xx=500+dir*(40+j%3*18)*u;if(top<yy){line(500,yy,xx,yy-25*u,'#ac8d70',3);ellipse(xx,yy-25*u,Math.max(.1,20*u),Math.max(.1,8*u),C.green,1,dir*-.4);}}
        const canX=190+520*water;watering(canX,370,p<.27?1:0);palm(canX-10,352);disk(760,115,30,C.gold,.9);
        for(let j=0;j<5;j++){const u=clamp((p-.84)*6+j*.035),x=-50+1000*u,y=230+Math.sin(u*TAU*2+j)*25;if(p>.84){ellipse(x,y,8,5,C.gold);ellipse(x,y-7,7,3,C.cream,.7,Math.sin(clock*18));}}
        label('Поливаем почву → побег из семени → раскрытие листьев · ускоренное время',500,535,17,C.cream,1);
        break;
      }
      case "nursery": {
        const room = 1,
          rock = q(0.3, 0.7),
          stars = q(0.7, 1);
        rect(650, 115, 130, 160, C.blue, 0.1 * room);
        line(715, 115, 715, 275, C.cream, 2, room * 0.4);
        disk(750, 154, 17, C.cream, room * 0.65);
        g.save();
        g.translate(480, 380);
        g.rotate(Math.sin(clock * 0.8) * 0.025 * rock);
        arc(0, 0, 112, 0.25, Math.PI - 0.25, C.gold, 5, room);
        rect(-110, -35, 220, 70, "#aaa2c4", room);
        ellipse(0, -36, 110, 27, C.cream, room);
        for (let j = 0; j < 11; j++)
          line(-95 + j * 19, -20, -95 + j * 19, 31, C.cream, 3, room * 0.8);
        line(-65, 35, -80, 76, C.gold, 4, room);
        line(65, 35, 80, 76, C.gold, 4, room);
        g.restore();
        palm(365,364+Math.sin(clock*.8)*3);
        for (let j = 0; j < 14; j++)
          star(300+j*30,155+Math.sin(j*.65)*35,5,C.gold,.6+.3*Math.sin(clock+j));
        break;
      }
      case "sprout": {
        const water=q(.04,.23),grow=q(.27,.83);
        ellipse(500,465,340,20,'#795f4e');for(let j=0;j<1;j++){const x=500,h=(40+150*grow),ground=455;ellipse(x,453,8,4,C.gold);line(x,ground,x,ground-170*grow,C.green,5);for(let n=0;n<4;n++){const u=clamp((grow-.2-n*.15)*5),yy=430-n*30,dir=n%2?1:-1;if(455-170*grow<yy){line(x,yy,x+dir*24*u,yy-10*u,C.green,2);ellipse(x+dir*24*u,yy-10*u,Math.max(.1,28*u),Math.max(.1,11*u),C.green,1,dir*-.3);}}}
        const canX=190+520*water;watering(canX,370,p<.27?1:0);palm(canX-10,352);disk(760,115,30,C.gold,.9);
        for(let j=0;j<5;j++){const u=clamp((p-.84)*6+j*.035),x=-50+1000*u,y=230+Math.sin(u*TAU*2+j)*25;if(p>.84){ellipse(x,y,8,5,C.gold);ellipse(x,y-7,7,3,C.cream,.7,Math.sin(clock*18));}}
        label('Поливаем почву → побег из семени → раскрытие листьев · ускоренное время',500,535,17,C.cream,1);
        break;
      }
      case "mobileflight": {
        const balance = 1,
          spin = q(0.3, 0.7),
          shine = q(0.7, 1);
        line(500, 70, 500, 170, C.cream, 2, balance);
        for (let j = 0; j < 5; j++) {
          const a = (j * TAU) / 5 + clock * 0.2 * spin,
            x = 500 + Math.cos(a) * 180,
            y = 185 + Math.sin(a) * 34;
          line(500, 170, x, y, C.gold, 2, balance);
          line(x, y, x, y + 100, C.cream, 1, balance);
          if (j % 3 === 0) star(x, y + 118, 24, C.gold, balance);
          else if (j % 3 === 1) {
            disk(x, y + 118, 24, C.blue, balance);
            arc(x, y + 118, 33, -0.3, Math.PI + 0.3, C.pink, 2, balance);
          } else {
            poly(
              [
                [x - 27, y + 115],
                [x, y + 88],
                [x + 27, y + 115],
                [x, y + 139],
              ],
              C.pink,
              balance,
            );
          }
        }
        rect(486,72,28,25,C.gold);disk(500,85,7,C.blue);
        glow(500, 300, 160, C.blue, 0.1 * shine);
        break;
      }
      case "steppespring": {
        const water=q(.04,.23),grow=q(.27,.83);disk(740,135,42,C.gold);for(let j=0;j<8;j++)ellipse(170+j*95,465,35*(1-q(0,.28)),8,C.cream,.9);
        ellipse(500,465,340,20,'#795f4e');for(let j=0;j<6;j++){const x=240+j*105,h=(40+65*grow),ground=455;ellipse(x,453,8,4,C.gold);line(x,ground,x,ground-h,C.green,3);const yy=ground-h,open=.2+.8*q(.55,.9);poly([[x-13*open,yy-18],[x-10,yy+6],[x,yy+12],[x+10,yy+6],[x+13*open,yy-18],[x+4,yy-6],[x,yy-20],[x-4,yy-6]],j%2?C.pink:C.gold);}
        const canX=190+520*water;watering(canX,370,p<.27?1:0);palm(canX-10,352);disk(760,115,30,C.gold,.9);
        for(let j=0;j<5;j++){const u=clamp((p-.84)*6+j*.035),x=-50+1000*u,y=230+Math.sin(u*TAU*2+j)*25;if(p>.84){ellipse(x,y,8,5,C.gold);ellipse(x,y-7,7,3,C.cream,.7,Math.sin(clock*18));}}
        label('Поливаем почву → побег из семени → раскрытие листьев · ускоренное время',500,535,17,C.cream,1);
        break;
      }
      case "shanyrak": {
        const frame = 1,
          rays = q(0.33, 0.7),
          sun = q(0.7, 1);
        g.save();
        g.translate(500, 290);
        g.scale(1, 0.65);
        arc(0, 0, 190, 0, TAU, C.gold, 8, frame);
        arc(0, 0, 176, 0, TAU, C.orange, 3, frame);
        for (let j = 0; j < 32; j++) {
          const a = (j * TAU) / 32;
          line(
            Math.cos(a) * 176,
            Math.sin(a) * 176,
            Math.cos(a) * 54,
            Math.sin(a) * 54,
            C.gold,
            3,
            frame,
          );
        }
        for (let j = 0; j < 4; j++)
          line(-145, -60 + j * 40, 145, -60 + j * 40, C.gold, 4, frame);
        g.restore();
        for (let j = 0; j < 9; j++)
          poly(
            [
              [465 + j * 9, 240],
              [485 + j * 8, 250],
              [200 + j * 70, 467],
              [170 + j * 70, 467],
            ],
            C.gold,
            0.025 * rays,
          );
        const sx=420+160*sun;disk(sx,120,24,C.gold);
        glow(500, 250, 140, C.gold, 0.18 * sun);
        label("Жаңа күн. Жаңа өмір.", 500, 510, 22, C.gold, sun);
        break;
      }
      case "springriver": {
        const ice = 1,
          crack = q(0.3, 0.7),
          flow = q(0.7, 1);
        poly(
          [
            [420, 130],
            [590, 130],
            [750, 480],
            [270, 480],
          ],
          C.blue,
          0.25,
        );
        for (let j = 0; j < 11; j++) {
          const y = 155+j*28+flow*460,
            w = 80 + j * 9;
          poly(
            [
              [500 - w, y],
              [500 + w, y - 8],
              [510 + w, y + 18],
              [480 - w, y + 28],
            ],
            C.cream,
            ice*.7,
          );
          curve(
            [
              [500 - w, y + 10],
              [490, y + 13],
              [515, y + 25],
              [500 + w, y + 5],
            ],
            "#689ec4",
            1.5,
            crack * (1 - flow),
          );
        }
        for (let j = 0; j < 17; j++) {
          const a = (j / 17 + clock * 0.03) % 1;
          line(
            460 - a * 90,
            140 + a * 330,
            500 - a * 60,
            144 + a * 330,
            C.cream,
            2,
            flow * 0.35,
          );
        }
        for (let j = 0; j < 8; j++)
          flower(235 + j * 76, 422 + (j % 2) * 25, 12, C.pink, flow);
        break;
      }
      case "treerings": {
        disk(500,280,175,'#8b6e60');const u=q(.04,.90),total=24,active=Math.min(total-1,Math.floor(u*total));for(let j=0;j<=active;j++){const f=j<active?1:clamp(u*total-j),r=14+j*6.3;curve(Array.from({length:101},(_,k)=>{const a=k/100*TAU;return[500+Math.cos(a)*r,280+Math.sin(a)*r]}),C.gold,1.5,.6,f);}const r=14+active*6.3,a=(u*total-active)*TAU,x=500+Math.cos(a)*r,y=280+Math.sin(a)*r;line(x,y,x+26,y-38,C.cream,4);palm(x+26,y-38);label('Гравируем историю — линия следует за резцом',500,520,22,C.gold,1);
        break;
      }
      case "stations": {
        const first = 1,
          travel = q(0.33, 0.8),
          future = q(0.8, 1);
        line(140, 370, 850, 370, C.blue, 3, first);
        for (let j = 0; j < 5; j++) {
          const x = 180 + j * 150;
          disk(x, 370, 8, C.gold, 1);
          line(x, 370, x, 280, C.gold, 2, 1);
          rect(
            x - 34,
            238,
            68,
            35,
            C.purple,
            1,
          );
          label(
            j === 0 ? "Встреча" : j === 4 ? "Впереди" : String(j),
            x,
            260,
            13,
            C.cream,
            1,
          );
        }
        const x = 180 + 600 * travel;
        rect(x - 25, 330, 50, 27, C.pink, first);
        disk(x - 15, 364, 6, C.ink, first);
        disk(x + 15, 364, 6, C.ink, first);
        rect(x - 16, 337, 12, 10, C.gold, first);
        for(const wx of [x-15,x+15])line(wx,364,wx+Math.cos(travel*100)*5,364+Math.sin(travel*100)*5,C.cream,1);
        curve(
          [
            [780, 370],
            [825, 370],
            [880, 335],
          ],
          C.gold,
          2,
          future,
        );
        break;
      }
      case "teatogether": {
        ellipse(500,440,300,28,'#665063',.7);for(let j=0;j<2;j++){const u=q(.06+j*.3,.30+j*.3),target=420+j*170,x=target+(j?350:-350)*(1-u),y=350-45*Math.sin(Math.PI*u);rect(x-44,y,88,70,j?C.blue:C.pink);ellipse(x,y,44,13,C.cream);ellipse(x,y+3,35,8,'#6b4e42');arc(x+43,y+32,24,-Math.PI/2,Math.PI/2,j?C.blue:C.pink,8);if(u<1)palm(x+65,y+43);for(let a=0;a<3;a++)curve(Array.from({length:35},(_,i)=>[x+(a-1)*15+Math.sin(i*.15+clock)*8,y-10-i*3]),C.cream,2,.16);}label('Приносим две чашки к одному столу',500,520,22,C.cream,1);
        break;
      }
      case "shadowtheatre": {
        const curtain = q(0, 0.33),
          light = q(0.33, 0.68),
          play = q(0.68, 1);
        rect(230, 125, 540, 300, "#d9b790", 0.8);
        for (let side = 0; side < 2; side++) {
          const x = side ? 770 : 150;
          rect(x + (side ? -60 : 0) * (1 - curtain), 100, 80, 370, "#783c60");
          for (let j = 0; j < 7; j++)
            line(x + j * 11, 100, x + j * 11, 470, "#432c4c", 3, 0.5);
        }
        ellipse(500, 405, 65, 43, C.orange);
        line(500, 354, 506, 342, C.green, 7);
        poly(
          [
            [468, 388],
            [483, 373],
            [485, 392],
          ],
          C.gold,
          light,
        );
        poly(
          [
            [515, 392],
            [517, 373],
            [532, 388],
          ],
          C.gold,
          light,
        );
        poly(
          [
            [472, 416],
            [483, 405],
            [499, 416],
            [515, 405],
            [530, 416],
            [518, 430],
            [483, 430],
          ],
          C.gold,
          light,
        );
        glow(500, 397, 90, C.orange, 0.3 * light);
        for (let j = 0; j < 5; j++) {
          const x = 320 + j * 88,
            y = 240 + Math.sin(clock + j) * 10;
          bird(x, y, 17, "#49334d", drift);
          line(
            x,
            y + 15,
            x + Math.sin(clock + j) * 12,
            y + 55,
            "#49334d",
            2,
            1,
          );
        }
        line(660,190,660,100,C.ink,1);
        disk(660, 190, 28, "#49334d", play);
        break;
      }
      case "hauntedmoon": {
        const aim = q(0, 0.34),
          moon = 1,
          magic = q(0.7, 1);
        disk(625, 205, 105, C.cream, moon * 0.9);
        disk(596, 192, 98, "#24233f", moon * 0.9);
        for (let j = 0; j < 8; j++) {
          const a = j * 0.8 + clock * 0.2;
          bird(
            620 + Math.cos(a) * 140,
            205 + Math.sin(a) * 80,
            8,
            C.purple,
            1,
          );
        }
        g.save();
        g.translate(345, 374);
        g.rotate(-0.4 - aim * 0.2);
        rect(-80, -22, 160, 44, C.purple);
        ellipse(80, 0, 10, 23, C.blue);
        g.restore();
        line(345, 380, 280, 462, C.gold, 4);
        line(345, 380, 410, 462, C.gold, 4);
        line(345, 380, 345, 468, C.gold, 3);
        for (let j = 0; j < 20; j++)
          star(
            450 + s.dots[j].s * 300,
            110 + s.dots[j].r * 210,
            3,
            C.gold,
            1,
          );
        break;
      }
      case "cauldron": {
        const heat = q(0, 0.33),
          brew = q(0.33, 0.7),
          spirits = q(0.7, 1);
        ellipse(500, 399, 95, 70, "#343e55");
        ellipse(500,350,95,22,C.green,1);line(420,482,580,482,C.gold,7);
        arc(500, 390, 113, 0, Math.PI, C.purple, 3);
        line(435, 448, 420, 478, C.gold, 5);
        line(565, 448, 580, 478, C.gold, 5);
        flame(500, 478, 20, heat);
        for (let j = 0; j < 25; j++) {
          const a = (clock * 0.18 + s.dots[j].s) % 1;
          disk(
            435 + s.dots[j].r * 130,
            350 - a * 150,
            3 + s.dots[j].r * 6,
            C.green,
            brew * (1 - a) * 0.5,
          );
        }
        for (let j = 0; j < 5; j++) {
          const x = 500+(j-2)*80*spirits,
            y = 330-140*spirits+Math.sin(clock+j)*10*spirits;
          g.save();
          g.globalAlpha = spirits * 0.7;
          g.fillStyle = j % 2 ? C.purple : C.cream;
          g.beginPath();
          g.arc(x, y, 18, Math.PI, TAU);
          g.lineTo(x + 18, y + 28);
          for (let k = 0; k < 4; k++)
            g.lineTo(x + 18 - k * 12, y + 24 + (k % 2) * 7);
          g.closePath();
          g.fill();
          g.restore();
          disk(x - 6, y, 2, C.ink, spirits);
          disk(x + 6, y, 2, C.ink, spirits);
        }
        break;
      }
      case "weddingpath": {
        for(const dir of [-1,1])curve([[500+dir*350,455],[500+dir*180,430],[500+dir*70,365]],dir<0?C.pink:C.blue,3,.7);arc(500,285,100,Math.PI,TAU,C.gold,5);line(400,285,400,430,C.gold,5);line(600,285,600,430,C.gold,5);for(let j=0;j<16;j++){const a=Math.PI+j*Math.PI/15;flower(500+Math.cos(a)*100,285+Math.sin(a)*100,13,j%2?C.pink:C.cream,1);}const u=q(.05,.85);walker(180+295*u,455-25*u,C.pink,u*25,u>.85?[500,395]:null);walker(820-295*u,455-25*u,C.blue,-u*25,u>.85?[500,395]:null);label('Идём навстречу и берёмся за руки',500,530,22,C.cream,1);
        break;
      }
      case "ringwaltz": {
        const separate = q(0, 0.33),
          dance = q(0.33, 0.7),
          join = q(0.7, 1);
        for (let j = 0; j < 2; j++) {
          const dir = j ? 1 : -1,
            x = 500 + dir * (160 - 95 * join),
            y = 275 + dir * Math.sin(dance * Math.PI) * 60;
          g.save();
          g.translate(x, y);
          g.rotate(dir * (0.3 + Math.sin(clock * 0.3) * 0.12) * (1 - join));
          g.strokeStyle = j ? C.cream : C.gold;
          g.lineWidth = 13;
          g.beginPath();
          g.ellipse(0, 0, 74, 95, 0, 0, TAU);
          g.stroke();
          g.lineWidth = 2;
          g.strokeStyle = C.cream;
          g.beginPath();
          g.ellipse(-3, -3, 71, 92, 0, Math.PI, TAU);
          g.stroke();
          g.restore();
        }
        for(const dir of [-1,1])palm(500+dir*(160-95*join),378+dir*Math.sin(dance*Math.PI)*60);
        glow(500, 275, 140, C.gold, 0.14 * join);
        for (let j = 0; j < 20; j++)
          star(
            500 + Math.cos(j * 2.4) * 170,
            275 + Math.sin(j * 2.4) * 120,
            3,
            C.gold,
            join * 0.65,
          );
        break;
      }
      case "sailboat": {
        const launch = q(0, 0.33),
          wind = q(0.33, 0.7),
          horizon = q(0.7, 1);
        for (let j = 0; j < 12; j++)
          curve(
            Array.from({ length: 60 }, (_, i) => [
              100 + i * 13.5,
              350 + j * 12 + Math.sin(i * 0.18 + clock * 0.4) * 4,
            ]),
            C.blue,
            1,
            0.2,
          );
        poly(
          [
            [100, 439],
            [300, 439],
            [300, 461],
            [100, 461],
          ],
          "#5f4d57",
          1,
        );
        const x = 300 + 350 * launch,
          y = 430 - 85 * horizon+Math.sin(clock*1.2)*3;
        line(275,420,300+350*launch,430-85*horizon,C.cream,1,Math.max(0,1-launch*8));
        boat(x, y, 1 - horizon * 0.45);
        g.save();
        g.translate(x, y);
        g.scale(1-horizon*.45,1-horizon*.45);
        poly(
          [
            [-6, -80],
            [-6, -7],
            [-61, -7],
          ],
          C.pink,
          1,
        );
        g.restore();
        disk(740, 180, 40, C.gold, horizon * 0.6);
        curve(
          [
            [x - 40, y + 23],
            [x - 110, y + 28],
            [x - 180, y + 39],
          ],
          C.cream,
          2,
          0.25 * launch,
        );
        break;
      }
      case "paperplane": {
        const fold = 1,
          flight = q(0.33, 0.75),
          beyond = q(0.75, 1);
        rect(210, 416, 290, 13, C.gold, 1);
        line(240, 429, 240, 481, C.gold, 4, 1);
        line(470, 429, 470, 481, C.gold, 4, 1);
        palm(330-190*q(.34,.55),390+100*q(.34,.55));
        const x = 330 + 430 * flight,
          y = 365 - 230 * flight;
        g.save();
        g.translate(x, y);
        g.rotate(-0.25 * flight);
        poly(
          [
            [-70, -30],
            [75, 0],
            [-55, 35],
            [-16, 4],
          ],
          C.cream,
        );
        poly(
          [
            [-70, -30],
            [75, 0],
            [-16, 4],
          ],
          C.blue,
          fold,
        );
        line(-16, 4, -26, 30, C.purple, 2, fold);
        g.restore();
        curve(
          [
            [280, 350],
            [460, 292],
            [560, 210],
            [750, 139],
          ],
          C.blue,
          1.5,
          0.25,
          flight,
        );
        for (let j = 0; j < 13; j++)
          rect(
            160 + j * 54,
            470 - (j % 4) * 12,
            42,
            45 + (j % 4) * 12,
            "#26354b",
            1,
          );
        break;
      }
      case "bookstairs": {
        const u=q(.08,.90);for(let j=0;j<8;j++){const x=220+j*66,y=450-j*32;rect(x,y,100,22,j%2?C.purple:C.blue);rect(x+6,y+5,88,12,C.cream);for(const xx of [x+8,x+90])line(xx,y+22,xx,486,C.gold,2,.3);}const step=Math.min(6,Math.floor(u*7)),f=u===1?1:u*7-step,x=250+(step+f)*66,y=450-step*32-32*f-40*Math.sin(Math.PI*f);walker(x,y,C.gold,f*Math.PI);rect(738,120,68,98,C.gold,.5);label('Шаг, перенос веса, следующая ступень',500,525,22,C.cream,1);
        break;
      }
      case "capsky": {
        const u=q(.18,.82);for(let j=0;j<10;j++){const x=190+j*67,ground=465;walker(x,ground,j%2?C.blue:C.purple,0,[x+18,ground-75-12*Math.sin(Math.PI*u)]);const y=ground-91-220*4*u*(1-u);g.save();g.translate(x,y);g.rotate(Math.sin(Math.PI*u)*.4*(j%2?1:-1));poly([[-25,0],[0,-13],[25,0],[0,13]],j%2?C.purple:C.blue);rect(-16,6,32,12,C.ink);line(20,2,26,25,C.gold,1);g.restore();}label('Бросок — подъём — вершина — возвращение',500,525,21,C.cream,1);
        break;
      }
      case "homelights": {
        const home = 1,
          lights = q(0.33, 0.74),
          cozy = q(0.74, 1);
        rect(340, 236, 320, 215, "#3b4055", home);
        poly(
          [
            [300, 244],
            [500, 103],
            [700, 244],
          ],
          C.purple,
          home,
        );
        rect(474, 356, 52, 95, C.gold, lights * 0.6);
        for (let j = 0; j < 6; j++) {
          const x = 375 + (j % 3) * 100,
            y = 270 + Math.floor(j / 3) * 66,
            k = q(0.33 + j * 0.05, 0.5 + j * 0.05);
          rect(x, y, 46, 40, C.gold, k);
          line(x + 23, y, x + 23, y + 40, C.cream, 2, k);
          glow(x + 23, y + 20, 40, C.gold, k * 0.1);
        }
        walker(150+340*q(0,.33),451,C.blue,clock*4);
        rect(610, 145, 25, 67, C.pink, home);
        for (let j = 0; j < 7; j++)
          ellipse(
            623 + Math.sin(j * 0.8 + clock * 0.2) * 10,
            135 - j * 13,
            10 + j * 2,
            6 + j,
            C.cream,
            0.04 * cozy,
          );
        flower(315,415,13,C.pink,1);
        flower(698,415,13,C.pink,1);
        break;
      }
      case "keydoor": {
        const insert=q(.06,.32),turn=q(.34,.48),withdraw=q(.49,.6),open=q(.62,.94);rect(410,140,190,310,C.gold,.4);rect(425,150,160,295,'#d9b790');const angle=open*Math.PI*.43,w=150*Math.cos(angle);rect(430,150,w,295,'#574964');line(430,150,430,445,C.gold,4);const lockX=430+w*.82;disk(lockX,306,6,C.gold);const x=300+238*insert-150*withdraw,y=306;g.save();g.translate(x,y);g.scale(1,.3+.7*Math.abs(Math.cos(turn*Math.PI)));arc(-38,0,20,0,TAU,C.gold,6);line(-18,0,15,0,C.gold,7);line(7,0,7,13,C.gold,5);g.restore();palm(x-54,y+15);if(open>0)palm(lockX,312);label('Вставляем ключ → поворачиваем → вынимаем → открываем дверь',500,530,18,C.cream,1);
        break;
      }
      case "furnish": {
        const push=q(.08,.55),light=q(.62,.78);line(100,440,900,440,C.cream,2,.4);rect(257,194,85,103,C.cream);flower(298,245,15,C.pink,1);
        const dx=-390*(1-push);g.save();g.translate(dx,0);rect(350,351,250,74,C.purple);rect(330,349,35,80,C.pink);rect(586,349,35,80,C.pink);rect(365,330,98,49,C.blue);rect(482,330,98,49,C.blue);for(const x of [365,587]){disk(x,433,7,C.ink);line(x,433,x+Math.cos(push*390/7)*5,433+Math.sin(push*390/7)*5,C.gold,2);}g.restore();walker(300+dx,440,C.blue,push*35,[330+dx,379]);
        line(702,440,702,220,C.gold,4);poly([[663,224],[679,170],[724,170],[742,224]],C.gold);line(702,430,770,430,C.cream,2);disk(770,430,8,C.pink);poly([[663,224],[742,224],[800,435],[610,435]],C.gold,.12*light);glow(700,235,95,C.gold,.2*light);
        if(p>.54)walker(640+110*q(.54,.7),440,C.pink,clock*3,[770,425]);
        break;
      }
      case "gears": {
        const first = 1,drive=q(.33,.74),result=q(.74,1);
        const dx=Math.sqrt(126*126-60*60),alpha=Math.atan2(-60,dx),beta=-alpha;
        const rot0=(clock*.3+3)*drive,
          rot1=alpha+Math.PI-Math.PI/16+20/16*alpha-20/16*rot0,
          rot2=beta+Math.PI-Math.PI/20+16/20*beta-16/20*rot1;
        for(let j=0;j<3;j++){
          const x=340+j*dx,y=340-(j%2)*60,r=j===1?56:70,teeth=j===1?16:20;
          g.save();g.translate(x,y);g.rotate([rot0,rot1,rot2][j]);
          for(let k=0;k<teeth;k++){
            const a=k*TAU/teeth,d=TAU/teeth;
            poly([[r-5,a-d*.31],[r+4,a-d*.19],[r+4,a+d*.19],[r-5,a+d*.31]].map(([R,A])=>[Math.cos(A)*R,Math.sin(A)*R]),j%2?C.blue:C.gold,first);
          }
          arc(0,0,r-9,0,TAU,j%2?C.blue:C.gold,10,first);
          disk(0,0,14,C.cream,first);line(-r*.55,0,r*.55,0,C.cream,3,first);line(0,-r*.55,0,r*.55,C.cream,3,first);g.restore();
        }
        rect(280,395,60,45,C.purple);line(310,395,340,340,C.gold,5);arc(310,415,10,0,TAU,C.gold,2);
        line(340+2*dx,340,670,340,C.gold,4,drive);
        line(670,340,670,340-155*result,C.gold,4,drive);
        star(670,340-155*result,28,C.gold,drive);glow(670,185,80,C.gold,.2*result);
        break;
      }
      case "mountain": {
        const see = q(0, 0.33),
          climb = q(0.33, 0.77),
          sun = q(0.77, 1);
        mountain(500, 456, 540, 310, "#35445c");
        mountain(250, 456, 300, 150, "#25354a");
        const pts = Array.from({ length: 90 }, (_, i) => {
          const z = i / 89;
          return [
            270 + 230 * z + Math.sin(z * 12) * 25 * (1 - z),
            450 - 285 * z,
          ];
        });
        curve(pts, C.gold, 2, 0.7, climb);
        const k = Math.min(89, Math.floor(climb * 89));
        glow(...pts[k], 24, C.gold, 0.4 * see);
        walker(pts[k][0],pts[k][1]+4,C.gold,climb*38);
        disk(690, 160, 47, C.gold, sun * 0.7);
        line(500, 164, 500, 128, C.cream, 2, 1);
        poly(
          [
            [500, 128],
            [535, 136],
            [500, 146],
          ],
          C.pink,
          1,
        );
        break;
      }
      case "rocket": {
        const ready = 1,
          launch = q(0.33, 0.74),
          orbit = q(0.74, 1);
        const x = 500 + 180 * orbit,
          y = 415 - 215 * launch*launch;
        line(470, 445, 530, 445, C.blue, 5, 1);
        g.save();
        g.translate(x, y);
        g.rotate(orbit * 0.7);
        poly(
          [
            [-22, 15],
            [-22, -75],
            [0, -117],
            [22, -75],
            [22, 15],
          ],
          C.cream,
          ready,
        );
        disk(0, -55, 12, C.blue, ready);
        poly(
          [
            [-22, -10],
            [-45, 24],
            [-22, 15],
          ],
          C.pink,
          ready,
        );
        poly(
          [
            [22, -10],
            [45, 24],
            [22, 15],
          ],
          C.pink,
          ready,
        );
        poly(
          [
            [-12, 18],
            [0, 18 + 60 * launch + drift * 8],
            [12, 18],
          ],
          C.gold,
          launch * (1 - orbit),
        );
        rect(-22 - 75 * Math.sin(orbit*Math.PI/2), -36, Math.max(2,75*Math.sin(orbit*Math.PI/2)),26,C.blue);
        rect(22,-36,Math.max(2,75*Math.sin(orbit*Math.PI/2)),26,C.blue);
        g.restore();
        for (let j = 0; j < 10; j++)
          ellipse(
            500 + Math.sin(j) * 25,
            456 + j * 2,
            15 + j * 7,
            6 + j * 3,
            C.cream,
            0.03 * launch * (1 - orbit),
          );
        disk(320, 330, 90, C.blue, orbit * 0.12);
        arc(320, 330, 110, -0.8, 1.8, C.green, 2, orbit * 0.4);
        break;
      }
      case "rainclears": {
        const rain = 1,
          less = q(0.33, 0.72),
          sun = q(0.72, 1);
        for (let j = 0; j < 60; j++) {
          const d = s.dots[j],
            x = 150 + d.s * 700,
            y = 110 + ((d.y + clock * 55) % 310);
          line(x, y, x - 7, y + 22, C.blue, 1, 0.3 * rain * (1 - less));
        }
        for (let j = 0; j < 8; j++)
          ellipse(
            220+j*80+less*680,
            140 + Math.sin(j) * 20,
            70,
            28,
            "#778498",
            0.25 * (1 - less),
          );
        disk(720, 160, 43, C.gold, sun * 0.7);
        for (let j = 0; j < 13; j++)
          flower(
            210 + j * 47,
            410 + (j % 3) * 13,
            12,
            j % 2 ? C.pink : C.gold,
            0.4 + 0.6 * sun,
          );
        arc(500, 360, 180, Math.PI, TAU, C.pink, 4, sun * 0.24);
        arc(500, 360, 174, Math.PI, TAU, C.gold, 4, sun * 0.24);
        arc(500, 360, 168, Math.PI, TAU, C.blue, 4, sun * 0.24);
        break;
      }
      case "warmhands": {
        const u=q(.08,.78),x=260+460*u,y=335-Math.sin(Math.PI*u)*12;line(140,450,400,450,C.gold,5);line(600,450,880,450,C.gold,5);rect(x-50,y,100,92,C.blue);ellipse(x,y,50,14,C.cream);ellipse(x,y+3,40,9,'#80604b');arc(x+51,y+36,26,-Math.PI/2,Math.PI/2,C.blue,8);const left=u<.5?x-40:490-220*q(.5,.8),right=u>.4?x+54:760;line(80,480,left,y+90,'#c79c94',16);palm(left,y+83,'#c79c94');line(920,480,right,y+90,'#c79c94',16);palm(right,y+83,'#c79c94',2.5);for(let j=0;j<3;j++)curve(Array.from({length:32},(_,i)=>[x-20+j*20+Math.sin(i*.17+clock)*7,y-18-i*3]),C.cream,2,.2);label('Передаём чашку: сначала принимаем вес, затем отпускаем',500,535,19,C.cream,1);
        break;
      }
      case "breathingsea": {
        const calm = 1,
          breath = q(0.33, 0.72),
          sail = q(0.72, 1);
        const cycle = (1 - Math.cos(clock * 0.65)) / 2;
        for (let j = 0; j < 14; j++)
          curve(
            Array.from({ length: 70 }, (_, i) => [
              100 + i * 11.6,
              290 +
                j * 12 +
                Math.sin(i * 0.11 - clock * 0.35 + j * 0.1) *
                  (3 + cycle * breath * 5),
            ]),
            C.blue,
            1,
            0.14,
          );
        disk(710, 160, 33, C.cream, calm * 0.65);
        boat(-90+640*sail,370+cycle*4,.62,1);
        glow(500, 300, 130 + cycle * 50, C.blue, 0.05 * breath);
        label("В своём ритме", 500, 510, 22, C.cream, sail);
        break;
      }
      case "sunroom": {
        const dawn=q(.05,.8);rect(275,145,150,205,C.blue,.12);disk(390,320-130*dawn,25,C.gold);line(350,145,350,350,C.cream,3,.6);line(275,247,425,247,C.cream,3,.6);poly([[285,200],[415,200],[760,447],[410,447]],C.gold,.08*dawn);rect(590,371,110,10,C.gold,.7);line(610,381,610,450,C.gold,3);line(680,381,680,450,C.gold,3);rect(628,344,35,27,C.pink);plant(646,344,60,1);
        const u=q(.12,.72),x=1070-300*u;ellipse(x,413,45,20,C.cream);ellipse(x-35,398,20,17,C.cream);poly([[x-49,389],[x-46,373],[x-36,387]],C.cream);poly([[x-30,386],[x-18,374],[x-19,395]],C.cream);for(const dx of [-26,24])line(x+dx,423,x+dx+Math.sin(u*30+dx)*8,445,C.cream,7);arc(x+37,400,28,-1.5,.8,C.cream,7);disk(x-43,397,2,C.ink);label('Солнце поднимается; кот приходит греться у окна',500,520,20,C.cream,1);
        break;
      }
      case "postcards": {
        line(180,160,820,160,C.gold,2);const count=5;for(let j=0;j<count;j++){const u=q(.04+j*.15,.16+j*.15),x=240+j*125,y=420-250*u;g.save();g.translate(x,y);g.rotate(Math.sin(Math.PI*u)*.13);rect(-48,0,96,96,C.cream);rect(-42,7,84,59,j%2?C.blue:C.purple);if(j%2)heart(0,37,16,C.pink);else{disk(20,25,10,C.gold);mountain(-5,60,75,33,'#76869c');}line(-35,81,35,81,'#968794',1);rect(-3,-10,6,18,C.gold);g.restore();if(u>0&&u<1)palm(x,y+75,C.cream,-.3);}rect(120,516,760,9,C.gold,.4);label('Поднимаем открытки и закрепляем прищепками',500,556,20,C.cream,1);
        break;
      }
      case "jar": {
        const close=q(.84,.98);curve([[398,190],[380,240],[380,413],[395,444],[605,444],[620,413],[620,240],[602,190]],C.blue,3,.6);rect(385,205,230,232,C.blue,.035);for(let j=0;j<32;j++){const u=q(.03+j*.012,.35+j*.012),v=clamp(u*2),w=clamp(u*2-1),sx=100+(j*97%800),sy=70+(j%4)*20,tx=450+(j*31%100),ty=265+(j*47%130);const x=u<.5?sx+(500-sx)*v:500+(tx-500)*w,y=u<.5?sy+(178-sy)*v:178+(ty-178)*w;disk(x+Math.sin(clock*2+j)*2,y,2.5,C.gold);ellipse(x,y-4,4,2,C.cream,.5,Math.sin(clock*15+j));}rect(394,95+67*close,212,24,C.gold);if(close<1)palm(600,108+67*close);label('Светлячки залетают через горлышко; крышка опускается последней',500,520,18,C.cream,1);
        break;
      }
      case "bridge": {
        const lower=q(.08,.55),meet=q(.58,.92);
        for(const side of [0,1])poly(side?[[650,370],[900,370],[900,490],[610,490]]:[[100,370],[350,370],[390,490],[100,490]],'#44605b');
        for(let j=0;j<6;j++)curve(Array.from({length:40},(_,i)=>[370+i*7,410+j*12+Math.sin(i*.3-clock)*3]),C.blue,1,.3);
        for(const dir of [-1,1]){const pivot=dir<0?350:650,angle=dir<0?-Math.PI/2*(1-lower):Math.PI/2*(1-lower);g.save();g.translate(pivot,370);g.rotate(angle);const reach=-dir*150;line(0,0,reach,0,C.gold,8);line(0,-35,reach,-35,C.gold,3);for(let j=0;j<7;j++)line(-dir*j*25,0,-dir*j*25,-35,C.gold,2);g.restore();disk(pivot,370,8,C.cream);line(pivot,370,pivot,300,C.gold,5);const ex=pivot+Math.cos(angle)*-dir*150,ey=370+Math.sin(angle)*-dir*150;line(pivot,300,ex,ey,C.cream,2);arc(pivot,345,12,0,TAU,C.gold,3);line(pivot,345,pivot+Math.cos(lower*TAU*2)*12,345+Math.sin(lower*TAU*2)*12,C.cream,3);}
        walker(260+215*meet,370,C.pink,meet*22);walker(740-215*meet,370,C.blue,-meet*22);
        label('Опускаем пролёты на шарнирах — встречаемся посередине',500,525,19,C.cream,1);
        break;
      }
      case "rooftop": {
        const dawn=q(.55,.95);skyline(455,'#283449');disk(760,130,28,C.cream,1-dawn);disk(520,350-160*dawn,36,C.gold);glow(500,230,270,C.orange,.08*dawn);
        rect(250,330,500,155,'#424659');rect(235,325,530,12,C.cream);rect(245,285,12,40,C.blue);rect(743,285,12,40,C.blue);line(245,285,755,285,C.blue,3);
        rect(425,305,150,8,C.gold);line(440,313,440,330,C.gold,3);line(560,313,560,330,C.gold,3);
        walker(390,325,C.pink,0,[419,277+Math.sin(clock)*2]);walker(610,325,C.blue,0,[581,277-Math.sin(clock)*2]);
        label('Разговор на крыше до рассвета',500,520,22,C.cream,1);
        break;
      }
      case "music": {
        for(let j=0;j<5;j++)line(220,190+j*22,780,190+j*22,C.cream,1,.18);ellipse(295,382,38,53,C.gold);ellipse(295,329,29,35,C.gold);rect(288,180,14,147,C.gold);disk(295,342,12,C.ink);for(let j=0;j<4;j++)curve([[291+j*3,190],[291+j*3+Math.sin(clock*24+j)*2,340],[291+j*3,410]],C.cream,1,.8);palm(306+Math.sin(clock*5)*12,365);rect(640,306,115,84,C.purple);for(let j=0;j<8;j++){const down=(Math.floor(clock*3)%8===j);rect(648+j*12,358+(down?5:0),11,30-(down?5:0),C.cream);}palm(655+(Math.floor(clock*3)%8)*12,355);for(let j=0;j<12;j++){const u=(clock*.2+j/12)%1,side=j%2,x=(side?690:305)+(500-(side?690:305))*u,y=340-u*170;ellipse(x,y,7,5,side?C.blue:C.pink,1-u);line(x+6,y,x+6,y-25,side?C.blue:C.pink,2,1-u);}label('Струны и клавиши двигаются в ритме',500,520,22,C.cream,1);
        break;
      }
      case "terrarium": {
        const water=q(.04,.23),grow=q(.27,.83);curve([[200,450],[180,210],[370,95],[650,95],[820,210],[800,450],[200,450]],C.blue,3,.7);
        ellipse(500,465,340,20,'#795f4e');for(let j=0;j<6;j++){const x=240+j*105,h=(40+65*grow),ground=455;ellipse(x,453,8,4,C.gold);pine(x,ground,20+75*grow,j%2?C.green:C.blue);ellipse(x,460,34,6,C.green,.7);}
        const canX=190+520*water;watering(canX,370,p<.27?1:0);palm(canX-10,352);disk(760,115,30,C.gold,.9);
        for(let j=0;j<5;j++){const u=clamp((p-.84)*6+j*.035),x=-50+1000*u,y=230+Math.sin(u*TAU*2+j)*25;if(p>.84){ellipse(x,y,8,5,C.gold);ellipse(x,y-7,7,3,C.cream,.7,Math.sin(clock*18));}}
        label('Поливаем почву → побег из семени → раскрытие листьев · ускоренное время',500,535,17,C.cream,1);
        break;
      }
      case "camera": {
        const press=q(.10,.20),eject=q(.32,.74),develop=q(.55,.95),x=500;rect(x-130,150,260,145,'#4b4a65');rect(x-93,119,77,31,C.purple);disk(x,218,62,C.ink);arc(x,218,48,0,TAU,C.blue,6);arc(x,218,32,0,TAU,C.purple,4);disk(x+80,181,11,C.gold);rect(565,139+press*4,24,8,C.gold);palm(577,130+press*4);glow(580,181,100,C.cream,.35*Math.sin(q(.18,.28)*Math.PI));
        g.save();g.beginPath();g.rect(390,295,220,230);g.clip();const y=65+230*eject;rect(400,y,200,220,C.cream);rect(412,y+12,176,163,'#829fa8',develop);disk(545,y+50,18,C.gold,develop);g.save();g.globalAlpha=develop;mountain(485,y+170,170,95,'#5b7b79');g.restore();g.restore();rect(389,285,222,10,C.ink);label('Нажатие → снимок выходит из щели → проявление',500,550,20,C.cream,1);
        break;
      }
      case "film": {
        const length=520*q(.05,.85),radius=100;disk(240,280,radius,'#6e6a87');for(let j=0;j<5;j++){const a=j*TAU/5-length/radius;disk(240+Math.cos(a)*60,280+Math.sin(a)*60,23,C.ink);}disk(240,280,12,C.gold);g.save();g.beginPath();g.rect(340,202,length,152);g.clip();rect(340,202,540,152,'#3d3d53');for(let j=0;j<6;j++){const x=340+length-j*106;rect(x-96,224,90,107,j%2?C.blue:C.purple);for(let k=0;k<3;k++){rect(x-91+k*30,210,9,7,C.cream);rect(x-91+k*30,340,9,7,C.cream);}star(x-50,274,20,C.gold);}g.restore();palm(340+length,352);label('Тянем ленту: катушка вращается вслед за ней',500,515,22,C.cream,1);
        break;
      }

    }
    g.restore();
    g.globalAlpha = 1;
    // A thin progress track exposes the deliberate beginning/change/finale without covering the art.
    const duration = 14;
    line(400, 565, 600, 565, C.cream, 1, 0.12);
    line(400, 565, 400 + 200 * clamp(t / duration), 565, C.gold, 2, 0.45);
  }
  function playbackRate(id){
 const [,topic,,phase]=id.split(":");
 if(id==="pack:newyear:2:2")return 1.7;
 if(phase==="2")return 2.2;
 return topic==="memorial"?1.25:1.6;
}
  function duration(id){return sourceDuration(id)/playbackRate(id);}
  function sourceDuration(id){
 if(id==='pack:newyear:2:2')return SnowWorkshop.duration;
 const [,topic,index,phase]=id.split(':');
 if(phase==='2')return PaperStories.duration(topic,+index);
 return 16;
}
  window.AnimationPacks = { names, options, select, info, draw, catalog, duration };
})();
