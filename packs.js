/* Original narrative scenes. Geometry is drawn live; no snapshots of previous themes. */
(() => {
  "use strict";
  const catalog = {
    just: [
      {
        title: "Тепло в обычном дне",
        id: "sunroom",
        acts: [
          "Окно просыпается",
          "Свет проходит через комнату",
          "Тёплый день остаётся с тобой",
        ],
      },
      {
        title: "Маленькая почта добра",
        id: "postcards",
        acts: [
          "Карточки отправляются в путь",
          "Слова находят адресата",
          "Стена хороших воспоминаний",
        ],
      },
      {
        title: "Карманная вселенная",
        id: "jar",
        acts: [
          "Один светлячок",
          "Свет собирается в банке",
          "Внутри появляется свой космос",
        ],
      },
    ],
    friendship: [
      {
        title: "Мост между берегами",
        id: "bridge",
        acts: [
          "Два далёких берега",
          "Каждый строит со своей стороны",
          "Встреча посередине",
        ],
      },
      {
        title: "Разговор до рассвета",
        id: "rooftop",
        acts: [
          "Ночные крыши",
          "Окна отвечают друг другу",
          "Над городом светает",
        ],
      },
      {
        title: "Общая мелодия",
        id: "music",
        acts: [
          "Один инструмент начинает",
          "Второй подхватывает мотив",
          "Из двух голосов получается музыка",
        ],
      },
    ],
    custom: [
      {
        title: "Свой маленький мир",
        id: "terrarium",
        acts: [
          "Стеклянный дом",
          "Внутри появляются жизнь и вода",
          "Целый мир под стеклом",
        ],
      },
      {
        title: "Момент в объективе",
        id: "camera",
        acts: [
          "Объектив ищет свет",
          "Затвор сохраняет мгновение",
          "Снимок проявляется",
        ],
      },
      {
        title: "История на ленте",
        id: "film",
        acts: [
          "Первый кадр",
          "Лента наполняется моментами",
          "История продолжается за краем",
        ],
      },
    ],
    birthday: [
      {
        title: "Желание становится созвездием",
        id: "candlewish",
        acts: [
          "Свеча загорается",
          "Огонь выпускает искры желания",
          "Искры складываются в созвездие",
        ],
      },
      {
        title: "Карусель нового года жизни",
        id: "carousel",
        acts: [
          "Открывается праздничная площадка",
          "Карусель набирает ход",
          "Огни обрамляют новый круг",
        ],
      },
      {
        title: "Комета твоего желания",
        id: "comet",
        acts: [
          "Ночное небо ждёт",
          "Комета оставляет светящийся след",
          "След раскрывается звездным букетом",
        ],
      },
    ],
    friendbirthday: [
      {
        title: "Карта наших приключений",
        id: "map",
        acts: [
          "Карта раскрывается",
          "Маршрут проходит через горы",
          "Впереди новая точка встречи",
        ],
      },
      {
        title: "Вечер у костра",
        id: "camp",
        acts: [
          "Закат над палаткой",
          "Костёр загорается",
          "Искры поднимаются к Млечному Пути",
        ],
      },
      {
        title: "Следующий уровень",
        id: "arcade",
        acts: [
          "Аркада включается",
          "Герой проходит препятствия",
          "Открывается новый уровень",
        ],
      },
    ],
    march: [
      {
        title: "Оранжерея первого света",
        id: "greenhouse",
        acts: [
          "Утро за стеклом",
          "Бутоны раскрываются один за другим",
          "Сад наполняет пространство",
        ],
      },
      {
        title: "Танец лепестков",
        id: "petaldance",
        acts: [
          "Лепесток подхватывает ветер",
          "Потоки лепестков переплетаются",
          "Цветочная мандала",
        ],
      },
      {
        title: "Акварельная весна",
        id: "watercolor",
        acts: [
          "Первые капли цвета",
          "Цвет растекается по бумаге",
          "Из пятен проступает весна",
        ],
      },
    ],
    romance: [
      {
        title: "Вышитое признание",
        id: "embroidery",
        acts: [
          "Игла находит начало",
          "Нить оставляет рисунок",
          "Признание вышито светом",
        ],
      },
      {
        title: "Два окна под дождём",
        id: "rainwindow",
        acts: [
          "Капли закрывают город",
          "Тёплый свет появляется в двух окнах",
          "Дождь стихает, свет остаётся",
        ],
      },
      {
        title: "Бумажные журавли",
        id: "cranes",
        acts: [
          "Лист складывается",
          "Журавли встречаются в полёте",
          "Вместе над утренним небом",
        ],
      },
    ],
    may7: [
      {
        title: "Щит мирного неба",
        id: "shieldsky",
        acts: [
          "Над городом проходит тень",
          "Поднимается прозрачный щит",
          "Возвращается ясное небо",
        ],
      },
      {
        title: "Полет над степью",
        id: "steppeflight",
        acts: [
          "Ветер проходит по траве",
          "Самолёт поднимается над степью",
          "Солнце и свободный горизонт",
        ],
      },
      {
        title: "Маяк опоры",
        id: "beacon",
        acts: [
          "Тёмный берег",
          "Маяк находит корабль",
          "Корабль входит в тихую гавань",
        ],
      },
    ],
    newyear: [
      {
        title: "Полярный экспресс света",
        id: "wintertrain",
        acts: [
          "В снегу появляется путь",
          "Поезд привозит теплый свет",
          "Город встречает Новый год",
        ],
      },
      {
        title: "Мастерская снежинок",
        id: "snowforge",
        acts: [
          "Кристалл рождается в воздухе",
          "Ветви снежинки растут",
          "Снежинки собирают зимний витраж",
        ],
      },
      {
        title: "Северное сияние в полночь",
        id: "aurora",
        acts: [
          "Северная ночь",
          "Сияние расправляет ленты",
          "Полночь над зимним лесом",
        ],
      },
    ],
    september: [
      {
        title: "Вселенная внутри книги",
        id: "bookworld",
        acts: [
          "Книга открывается",
          "Со страниц поднимаются орбиты",
          "Знания становятся целым миром",
        ],
      },
      {
        title: "Домино открытий",
        id: "schooldomino",
        acts: [
          "Появляется первый вопрос",
          "Ответ запускает цепочку",
          "Последняя плитка открывает звезду",
        ],
      },
      {
        title: "Чертеж будущего",
        id: "blueprint",
        acts: [
          "Карандаш начинает линию",
          "Из линий растет конструкция",
          "Чертеж превращается в мост",
        ],
      },
    ],
    summer: [
      {
        title: "Прилив солнечного дня",
        id: "tidal",
        acts: [
          "Солнце поднимается над морем",
          "Волна приближается к берегу",
          "Песок сохраняет летний след",
        ],
      },
      {
        title: "Луговой оркестр",
        id: "meadowlife",
        acts: [
          "Трава тянется к свету",
          "Пчела посещает цветы",
          "Над лугом появляется рой бабочек",
        ],
      },
      {
        title: "Воздушный змей",
        id: "kite",
        acts: [
          "Змей лежит у берега",
          "Ветер поднимает его",
          "Лента рисует свободный путь",
        ],
      },
    ],
    memorial: [
      {
        title: "Свет на тихой воде",
        id: "memwater",
        acts: [
          "Один огонёк у берега",
          "Вода бережно несёт отражение",
          "Свет остается на горизонте",
        ],
      },
      {
        title: "Альбом бережной памяти",
        id: "album",
        acts: [
          "Альбом открывается",
          "Страницы сохраняют моменты",
          "Для воспоминаний остается место",
        ],
      },
      {
        title: "Сад продолжающейся жизни",
        id: "memorygarden",
        acts: [
          "Семечко в тихой земле",
          "Поднимается молодое дерево",
          "Дерево хранит свет рядом",
        ],
      },
    ],
    newborn: [
      {
        title: "Колыбель под созвездием",
        id: "nursery",
        acts: [
          "Комната ждет нового света",
          "Колыбель мягко качается",
          "Звёзды зажигаются над ней",
        ],
      },
      {
        title: "Маленький росток",
        id: "sprout",
        acts: [
          "Семечко под землей",
          "Первый лист находит свет",
          "Жизнь раскрывается дальше",
        ],
      },
      {
        title: "Первый полет мобиля",
        id: "mobileflight",
        acts: [
          "Фигурки ждут движения",
          "Мобиль приходит в равновесие",
          "Маленькая вселенная вращается",
        ],
      },
    ],
    nauryz: [
      {
        title: "Степь просыпается",
        id: "steppespring",
        acts: [
          "Отступает снег",
          "Талая вода открывает землю",
          "Степь наполняется тюльпанами",
        ],
      },
      {
        title: "Шанырак встречает солнце",
        id: "shanyrak",
        acts: [
          "Круг собирается из опор",
          "Солнечные лучи проходят внутрь",
          "Дом наполняется весенним светом",
        ],
      },
      {
        title: "Река нового начала",
        id: "springriver",
        acts: [
          "Лёд удерживает реку",
          "По льду проходят трещины",
          "Вода свободно идет вперед",
        ],
      },
    ],
    anniversary: [
      {
        title: "Кольца общего времени",
        id: "treerings",
        acts: [
          "Первое кольцо",
          "Время добавляет слои",
          "Годы становятся рисунком",
        ],
      },
      {
        title: "Наши станции",
        id: "stations",
        acts: [
          "Первая встреча на платформе",
          "Поезд соединяет важные остановки",
          "Впереди остается дорога",
        ],
      },
      {
        title: "Две чашки, один вечер",
        id: "teatogether",
        acts: [
          "Одна чашка на столе",
          "Рядом появляется вторая",
          "Пар рисует общее тепло",
        ],
      },
    ],
    halloween: [
      {
        title: "Тыквенный театр теней",
        id: "shadowtheatre",
        acts: [
          "Занавес раздвигается",
          "Тыква включает театр",
          "Тени разыгрывают ночную сказку",
        ],
      },
      {
        title: "Лунная обсерватория",
        id: "hauntedmoon",
        acts: [
          "Телескоп поворачивается",
          "Луна открывает силуэты",
          "Ночь полна добрых странностей",
        ],
      },
      {
        title: "Алхимия доброго чуда",
        id: "cauldron",
        acts: [
          "Котел начинает кипеть",
          "Ингредиенты меняют свет",
          "Из зелья вылетают светящиеся духи",
        ],
      },
    ],
    wedding: [
      {
        title: "Два пути к одной арке",
        id: "weddingpath",
        acts: [
          "Две тропинки",
          "Тропинки встречаются у арки",
          "Над аркой раскрывается сад",
        ],
      },
      {
        title: "Вальс светящихся колец",
        id: "ringwaltz",
        acts: [
          "Два кольца в пространстве",
          "Кольца сходятся в вальсе",
          "Один свет между ними",
        ],
      },
      {
        title: "Парус на двоих",
        id: "sailboat",
        acts: [
          "Лодка у причала",
          "Два паруса принимают ветер",
          "Вместе к открытому горизонту",
        ],
      },
    ],
    graduation: [
      {
        title: "Бумажный самолет за горизонт",
        id: "paperplane",
        acts: [
          "Лист с последней задачей",
          "Самолет отделяется от стола",
          "Город остается внизу",
        ],
      },
      {
        title: "Лестница из книг",
        id: "bookstairs",
        acts: [
          "Первая ступень",
          "Книги складываются в лестницу",
          "Открытая дверь над облаками",
        ],
      },
      {
        title: "Шапочки в небе",
        id: "capsky",
        acts: [
          "Зал перед финалом",
          "Шапочки поднимаются",
          "В небе остается новый маршрут",
        ],
      },
    ],
    housewarming: [
      {
        title: "Дом зажигается изнутри",
        id: "homelights",
        acts: [
          "Пустой дом",
          "Комнаты обретают теплый свет",
          "Окна складываются в уют",
        ],
      },
      {
        title: "Ключ поворачивает мир",
        id: "keydoor",
        acts: [
          "Ключ находит замок",
          "Дверь раскрывается",
          "За дверью начинается сад",
        ],
      },
      {
        title: "Комната становится своей",
        id: "furnish",
        acts: [
          "Первые коробки",
          "Мебель находит место",
          "Последняя лампа завершает вечер",
        ],
      },
    ],
    success: [
      {
        title: "Механизм результата",
        id: "gears",
        acts: [
          "Первый механизм",
          "Шестерни передают движение",
          "Механизм поднимает звезду",
        ],
      },
      {
        title: "Вершина после пути",
        id: "mountain",
        acts: [
          "Гора перед тобой",
          "Огонек поднимается по маршруту",
          "Солнце встречает на вершине",
        ],
      },
      {
        title: "Запуск нового горизонта",
        id: "rocket",
        acts: [
          "Обратный отсчет",
          "Ракета поднимается",
          "Раскрываются солнечные панели",
        ],
      },
    ],
    recovery: [
      {
        title: "Дождь отпускает сад",
        id: "rainclears",
        acts: [
          "Дождливый день",
          "Дождь становится тише",
          "Сад снова видит солнце",
        ],
      },
      {
        title: "Тепло в ладонях",
        id: "warmhands",
        acts: [
          "Две ладони",
          "Между ними появляется чашка",
          "Тепло медленно заполняет пространство",
        ],
      },
      {
        title: "Море ровного дыхания",
        id: "breathingsea",
        acts: [
          "Тихая вода",
          "Волна приходит и уходит",
          "Парусник находит свой ритм",
        ],
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
    Object.entries(catalog).map(([k, v]) => [k, v.map((s) => s.title)]),
  );
  function options(c) {
    return (catalog[key(c)] || []).map((s, i) => [
      "pack_" + i,
      s.title + " · 3 главы",
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
    const [, topic, pack, phase] = id.split(":"),
      story = catalog[topic][+pack],
      j = +phase;
    return [
      story.title + " — " + story.acts[j],
      topic === "memorial"
        ? "Здесь можно остановиться, вспомнить и побыть со своими чувствами."
        : story.acts.join(" → ") + ". Эта история — для тебя.",
      "Коснись сцены, чтобы повторить эту главу. Движение указателя меняет ракурс.",
    ];
  }
  function draw(s, t) {
    const [, topic, pack, phase] = s.type.split(":"),
      story = catalog[topic][+pack],
      g = s.ctx;
    // Each chapter carries the previous chapter's result into the next one.
    const p = (+phase + smooth(t / (topic === "memorial" ? 10 : 7))) / 3;
    const q = (a, b) => smooth((p - a) / (b - a));
    const clock = Universe.paused ? 0 : t,
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
    switch (story.id) {
      case "candlewish": {
        const fire = q(0.05, 0.25),
          release = q(0.34, 0.67),
          sky = q(0.66, 0.95);
        ellipse(500, 462, 160, 18, C.pink, 0.18);
        rect(400, 380, 200, 72, "#d993b8");
        ellipse(500, 380, 100, 20, C.cream);
        for (let j = 0; j < 24; j++) {
          const x = 405 + j * 8;
          line(x, 405, x, 438, C.cream, 0.7, 0.12);
          disk(x, 385 + Math.sin(j * 0.6) * 5, 1.3, j % 2 ? C.pink : C.gold);
        }
        ellipse(500, 450, 107, 9, C.cream, 0.14);
        line(496, 309, 496, 371, C.cream, 1.2, 0.6);
        for (let i = 0; i < 9; i++) disk(420 + i * 20, 397, 5, C.pink);
        rect(492, 304, 16, 73, C.gold);
        line(500, 304, 500, 292, C.cream);
        flame(500, 290, 17, fire * (1 - release));
        const pts = [
          [290, 140],
          [420, 105],
          [530, 164],
          [670, 112],
          [728, 225],
          [598, 259],
          [451, 220],
        ];
        pts.forEach(([x, y], i) => {
          const f = q(0.36 + i * 0.027, 0.65 + i * 0.027);
          const xx = 500 + (x - 500) * f,
            yy = 282 + (y - 282) * f;
          glow(xx, yy, 22, C.gold, 0.3 * f);
          star(xx, yy, 4 + 4 * sky, C.gold, f, clock * 0.08);
          if (i)
            line(pts[i - 1][0], pts[i - 1][1], x, y, C.blue, 1.5, sky * 0.7);
        });
        label("Загадай своё", 500, 510, 22, C.cream, 1 - sky);
        label(s.name, 500, 510, 24, C.gold, sky);
        break;
      }
      case "carousel": {
        const build = q(0, 0.3),
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
        label("Ещё один прекрасный круг", 500, 510, 22, C.cream, lights);
        break;
      }
      case "comet": {
        const fly = q(0.12, 0.68),
          finish = q(0.65, 1),
          x = 130 + 650 * fly,
          y = 150 + 150 * Math.sin(fly * Math.PI);
        for (let j = 0; j < 80; j++) {
          const z = Math.max(0, fly - j * 0.004);
          line(
            130 + 650 * z,
            150 + 150 * Math.sin(z * Math.PI),
            130 + 650 * (z + 0.004),
            150 + 150 * Math.sin((z + 0.004) * Math.PI),
            j % 2 ? C.blue : C.pink,
            3,
            (1 - j / 80) * (1 - finish),
          );
        }
        glow(x, y, 55, C.blue, (1 - finish) * 0.6);
        star(x, y, 10, C.cream, 1 - finish);
        for (let j = 0; j < 50; j++) {
          const a = j * 2.399,
            r = 160 * Math.sqrt(j / 50) * finish;
          star(
            500 + Math.cos(a) * r,
            285 + Math.sin(a) * r,
            3 + (j % 4),
            C.gold,
            finish,
            clock * 0.05,
          );
        }
        burst(500, 280, 170, C.pink, clamp((p - 0.67) * 2));
        label("Пусть найдёт тебя", 500, 500, 24, C.gold, finish);
        break;
      }
      case "map": {
        const unfold = q(0, 0.3),
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
        disk(rx, ry, 8, C.orange, unfold);
        line(810, 350, 810, 250, "#a34f57", 3, end);
        poly(
          [
            [810, 250],
            [860, 267],
            [810, 282],
          ],
          "#a34f57",
          end,
        );
        arc(800, 175, 26, 0, TAU, "#74624f", 2, unfold);
        line(800, 145, 800, 205, "#74624f", 1, unfold);
        label("До следующего приключения", 500, 505, 22, C.cream, end);
        break;
      }
      case "camp": {
        const dusk = q(0, 0.3),
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
        line(475, 440, 535, 419, C.gold, 7, fire);
        line(478, 419, 535, 440, C.gold, 7, fire);
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
        const on = q(0, 0.3),
          run = q(0.32, 0.68),
          win = q(0.68, 1);
        rect(250, 95, 500, 390, "#2d2856", on);
        rect(280, 130, 440, 255, "#101928", on);
        rect(285, 345, 430, 12, C.purple, on);
        for (let j = 0; j < 6; j++) {
          rect(310 + j * 65, 305 - (j % 3) * 30, 40, 8, C.blue, on);
        }
        const x = 310 + 340 * run,
          y = 326 - Math.abs(Math.sin(run * Math.PI * 4)) * 80;
        rect(x - 10, y - 20, 20, 20, C.gold, on);
        rect(x - 13, y - 7, 7, 13, C.orange, on);
        rect(x + 6, y - 7, 7, 13, C.orange, on);
        star(650, 210, 25, C.gold, win);
        label(win > 0.4 ? "LEVEL UP" : "PLAYER 1", 500, 177, 22, C.green, on);
        disk(660, 435, 18, C.pink, on);
        disk(610, 445, 12, C.gold, on);
        line(355, 442, 355, 415, C.blue, 5, on);
        disk(355, 408, 13, C.blue, on);
        break;
      }
      case "greenhouse": {
        const glass = q(0, 0.3),
          grow = q(0.3, 0.68),
          bloom = q(0.68, 1);
        glow(750, 140, 150, C.gold, 0.2);
        poly(
          [
            [220, 435],
            [220, 208],
            [500, 85],
            [780, 208],
            [780, 435],
          ],
          C.blue,
          0.06 * glass,
        );
        curve(
          [
            [220, 435],
            [220, 208],
            [500, 85],
            [780, 208],
            [780, 435],
          ],
          C.blue,
          3,
          glass,
        );
        for (let j = 0; j < 5; j++) {
          const x = 280 + j * 110;
          line(x, 435, x, 180 - Math.abs(j - 2) * 8, C.blue, 1, glass * 0.4);
          flower(
            x,
            370 - grow * (70 + (j % 2) * 45),
            24 + 10 * bloom,
            j % 2 ? C.pink : C.gold,
            grow,
          );
        }
        line(220, 435, 780, 435, C.gold, 3, glass);
        for (let j = 0; j < 12; j++) {
          const a = j * 0.9 + clock * 0.3;
          bird(
            280 + j * 37 + Math.sin(a) * 15,
            160 + Math.sin(a * 1.3) * 35,
            5,
            C.pink,
            bloom,
          );
        }
        break;
      }
      case "petaldance": {
        const wind = q(0, 0.34),
          braid = q(0.34, 0.7),
          mandala = q(0.7, 1);
        for (let j = 0; j < 120; j++) {
          const d = s.dots[j],
            a = j * 2.399 + clock * 0.15;
          const r = 25 + Math.sqrt(j / 120) * 175;
          const sx = 140 + d.s * 700,
            sy = 400 - d.r * 200;
          const mx = 500 + Math.cos(a) * r,
            my = 280 + Math.sin(a) * r;
          const k = mandala;
          const x =
              sx * (1 - k) + mx * k + Math.sin(clock + j) * wind * (1 - k) * 45,
            y =
              sy * (1 - k) +
              my * k +
              Math.sin(j * 0.2 + clock) * braid * (1 - k) * 80;
          ellipse(
            x,
            y,
            5 + d.s * 5,
            2 + d.r * 3,
            j % 3 ? C.pink : C.cream,
            wind,
            a,
          );
        }
        glow(500, 280, 230, C.pink, 0.12 * mandala);
        disk(500, 280, 13, C.gold, mandala);
        break;
      }
      case "watercolor": {
        const wet = q(0, 0.32),
          color = q(0.3, 0.69),
          reveal = q(0.67, 1);
        rect(190, 105, 620, 365, "#e8dfe0", 0.95 * wet);
        for (let j = 0; j < 35; j++) {
          const d = s.dots[j],
            a = q(0.15 + j * 0.008, 0.47 + j * 0.008);
          ellipse(
            260 + d.s * 480,
            160 + d.r * 220,
            15 + 40 * a,
            10 + 25 * a,
            j % 3 === 0 ? "#b7cbbb" : j % 3 === 1 ? "#d9a5b5" : "#cbb7d7",
            0.075 * color,
          );
        }
        for (let j = 0; j < 9; j++)
          flower(260 + j * 60, 385 - (j % 3) * 42, 17, "#c37d94", reveal);
        label("У каждого цветка свой ритм", 500, 510, 22, C.cream, reveal);
        break;
      }
      case "embroidery": {
        const hoop = q(0, 0.3),
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
        rect(483, 91, 34, 24, C.gold, hoop);
        label(s.name, 500, 510, 24, C.pink, finish);
        break;
      }
      case "rainwindow": {
        const lit = q(0.3, 0.68),
          clear = q(0.67, 1);
        skyline(432);
        rect(160, 95, 680, 362, C.blue, 0.07);
        line(500, 95, 500, 457, C.cream, 6, 0.5);
        line(160, 270, 840, 270, C.cream, 5, 0.5);
        for (let j = 0; j < 65; j++) {
          const d = s.dots[j],
            x = 180 + d.s * 640,
            y = 100 + ((d.y + clock * 35) % 335);
          ellipse(x, y, 2.5, 7, C.blue, 0.6 * (1 - clear));
          line(x, y, x - 3, y + 20, C.blue, 1, 0.2 * (1 - clear));
        }
        rect(354, 308, 22, 32, C.gold, lit);
        rect(624, 273, 22, 32, C.gold, lit);
        glow(365, 324, 55, C.gold, 0.32 * lit);
        glow(635, 289, 55, C.gold, 0.32 * lit);
        curve(
          [
            [365, 324],
            [430, 240],
            [535, 205],
            [635, 289],
          ],
          C.pink,
          1.5,
          clear * 0.7,
        );
        heart(500, 235, 18, C.pink, clear);
        break;
      }
      case "cranes": {
        const fold = q(0, 0.3),
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
        g.ellipse(500, 440, 330 * shield, 280 * shield, 0, Math.PI, TAU);
        g.stroke();
        g.restore();
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
        const x = 180 + 610 * flight,
          y = 330 - 170 * flight;
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
        const rail = q(0, 0.3),
          travel = q(0.3, 0.69),
          city = q(0.69, 1);
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
            disk(x - j * 100 + 18 + k * 48, 433, 9, C.ink, rail);
            line(
              x - j * 100 + 18 + k * 48,
              433,
              x - j * 100 + 18 + k * 48 + Math.cos(travel * 35) * 7,
              433 + Math.sin(travel * 35) * 7,
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
        const seed = q(0, 0.3),
          grow = q(0.3, 0.67),
          glass = q(0.67, 1);
        for (let f = 0; f < 7; f++) {
          const a = (f * TAU) / 6,
            xx = f === 6 ? 500 : 500 + Math.cos(a) * 220 * glass,
            yy = f === 6 ? 280 : 280 + Math.sin(a) * 150 * glass;
          g.save();
          g.translate(xx, yy);
          g.rotate(clock * 0.035 * (f % 2 ? 1 : -1));
          const r = f === 6 ? 95 : 50;
          for (let j = 0; j < 6; j++) {
            const a = (j * TAU) / 6;
            line(
              0,
              0,
              Math.cos(a) * r * grow,
              Math.sin(a) * r * grow,
              C.blue,
              2,
              seed,
            );
            for (let k = 1; k < 4; k++) {
              const len = (r * k) / 4,
                b = q(0.32 + k * 0.04, 0.64 + k * 0.03);
              for (const sign of [-1, 1])
                line(
                  Math.cos(a) * len,
                  Math.sin(a) * len,
                  Math.cos(a) * len +
                    Math.cos(a + (sign * Math.PI) / 3) * r * 0.18 * b,
                  Math.sin(a) * len +
                    Math.sin(a + (sign * Math.PI) / 3) * r * 0.18 * b,
                  C.cream,
                  1.5,
                  seed,
                );
            }
          }
          disk(0, 0, 4, C.cream, seed);
          g.restore();
        }
        arc(500, 280, 210, 0, TAU, C.purple, 1, glass * 0.4);
        break;
      }
      case "aurora": {
        const night = q(0, 0.3),
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
        glow(500, 210, 70, C.blue, 0.3 * world);
        disk(500, 210, 25, C.blue, world);
        for (let j = 0; j < 10; j++) {
          const a = j * 2.4 + clock * 0.12;
          star(500 + Math.cos(a) * 145, 210 + Math.sin(a) * 92, 4, C.gold, sky);
        }
        break;
      }
      case "schooldomino": {
        const ready = q(0, 0.3),
          chain = q(0.3, 0.85),
          answer = q(0.84, 1);
        for (let j = 0; j < 12; j++) {
          const x = 190 + j * 54,
            y = 400 - Math.sin((j / 11) * Math.PI) * 80,
            fall = smooth((chain * 14 - j) / 2);
          g.save();
          g.translate(x, y);
          g.rotate(fall * Math.PI * 0.43);
          rect(-12, -80, 24, 80, j % 2 ? C.blue : C.purple, ready);
          label(j === 0 ? "?" : String(j), 0, -43, 17, C.ink, ready);
          g.restore();
        }
        glow(820, 245, 100, C.gold, 0.3 * answer);
        star(820, 245, 38, C.gold, answer);
        label("Один вопрос открывает следующий", 500, 510, 20, C.cream, answer);
        break;
      }
      case "blueprint": {
        const draft = q(0, 0.34),
          raise = q(0.34, 0.71),
          built = q(0.71, 1);
        for (let i = 0; i < 17; i++)
          line(140 + i * 45, 110, 140 + i * 45, 455, C.blue, 1, 0.07);
        for (let i = 0; i < 8; i++)
          line(140, 110 + i * 45, 860, 110 + i * 45, C.blue, 1, 0.07);
        const pts = [
          [180, 410],
          [300, 410],
          [350, 190],
          [650, 190],
          [700, 410],
          [820, 410],
        ];
        curve(pts, C.blue, 2, 0.7, draft);
        const n = Math.min(5, Math.floor(draft * 5));
        line(
          pts[n][0],
          pts[n][1],
          pts[n][0] + 20,
          pts[n][1] - 32,
          C.gold,
          5,
          1 - raise,
        );
        line(170, 410, 830, 410, C.cream, 6, raise);
        for (let j = 0; j < 11; j++) {
          const x = 230 + j * 54,
            y = 220 + ((x - 500) / 300) ** 2 * 150;
          line(x, 410, x, 410 + (y - 410) * raise, C.gold, 2, raise);
          if (j)
            line(
              x - 54,
              220 + ((x - 554) / 300) ** 2 * 150,
              x,
              y,
              C.blue,
              4,
              raise,
            );
        }
        boat(500, 448, 0.35, built);
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
            shore,
            Math.PI * 0.25,
          );
        }
        poly(
          [
            [730, 463],
            [754, 449],
            [779, 465],
            [754, 477],
          ],
          C.pink,
          shore,
        );
        break;
      }
      case "meadowlife": {
        const grow = q(0, 0.33),
          bee = q(0.33, 0.7),
          flutter = q(0.7, 1);
        for (let j = 0; j < 24; j++) {
          const x = 140 + j * 31,
            y = 400 + Math.sin(j) * 20;
          line(
            x,
            y + 50,
            x + Math.sin(clock + j) * 3,
            y + 50 - 70 * grow,
            C.green,
            2,
            0.6,
          );
          if (j % 3 === 0)
            flower(x, y + 30 - 60 * grow, 13, j % 2 ? C.pink : C.gold, grow);
        }
        const x = 170 + 650 * bee,
          y = 220 + Math.sin(bee * TAU * 2) * 60;
        ellipse(x, y, 12, 7, C.gold, bee);
        line(x - 3, y - 6, x - 3, y + 6, C.ink, 3, bee);
        ellipse(x - 5, y - 11, 8, 4, C.cream, bee * 0.7, drift);
        for (let j = 0; j < 14; j++) {
          const a = clock * 0.5 + j,
            x = 190 + j * 45,
            y = 190 + Math.sin(a) * 35;
          ellipse(x - 5, y, 7, 11, C.pink, flutter, Math.sin(a) * 0.7);
          ellipse(x + 5, y, 7, 11, C.blue, flutter, -Math.sin(a) * 0.7);
        }
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
            free,
          );
        }
        break;
      }
      case "memwater": {
        const flameOn = q(0, 0.33),
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
        glow(640, 200, 95, C.gold, 0.09 * lasting);
        break;
      }
      case "album": {
        const open = q(0, 0.33),
          photos = q(0.33, 0.7),
          memory = q(0.7, 1);
        book(500, 225, 240, 220, 0.04 + 0.96 * open);
        for (let j = 0; j < 4; j++) {
          const x = 320 + (j % 2) * 250,
            y = 250 + Math.floor(j / 2) * 83,
            a = q(0.34 + j * 0.045, 0.6 + j * 0.045);
          rect(x, y, 100, 66, "#9c9794", a);
          disk(x + 74, y + 18, 10, "#ead6b2", a * 0.65);
          poly(
            [
              [x, y + 57],
              [x + 30, y + 27],
              [x + 60, y + 50],
              [x + 84, y + 32],
              [x + 100, y + 57],
            ],
            "#65776f",
            a,
          );
          line(x + 8, y + 73, x + 89, y + 73, "#979194", 1, a);
        }
        glow(500, 337, 130, C.gold, 0.07 * memory);
        label("То, что дорого, остаётся", 500, 516, 22, C.cream, memory);
        break;
      }
      case "memorygarden": {
        const sprout = q(0.1, 0.4),
          tree = q(0.4, 0.78),
          warm = q(0.78, 1);
        ellipse(500, 449, 150, 16, "#849587", 0.22);
        line(500, 449, 500, 449 - 215 * tree, "#b0a493", 5);
        for (let j = 0; j < 12; j++) {
          const a = j * 0.75,
            len = (45 + (j % 4) * 13) * tree,
            y = 405 - j * 12;
          line(
            500,
            y,
            500 + Math.cos(a) * len,
            y - Math.abs(Math.sin(a)) * len,
            "#b0a493",
            2,
          );
          ellipse(
            500 + Math.cos(a) * len,
            y - Math.abs(Math.sin(a)) * len,
            20 * sprout,
            9 * sprout,
            "#9bbba9",
            0.6,
            a,
          );
        }
        glow(500, 292, 180, C.gold, 0.1 * warm);
        disk(620, 207, 17, C.gold, 0.45 * warm);
        break;
      }
      case "nursery": {
        const room = q(0, 0.3),
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
        for (let j = 0; j < 14; j++)
          star(300 + j * 30, 155 + Math.sin(j * 0.65) * 35, 5, C.gold, stars);
        break;
      }
      case "sprout": {
        const seed = q(0, 0.3),
          stem = q(0.3, 0.68),
          leaves = q(0.68, 1);
        ellipse(500, 442, 135, 22, "#835f57", seed);
        ellipse(500, 431, 10, 7, C.gold, seed * (1 - stem));
        const y = 429 - 180 * stem;
        line(500, 429, 500, y, C.green, 5, seed);
        for (let j = 0; j < 4; j++) {
          const k = q(0.45 + j * 0.09, 0.65 + j * 0.1),
            dir = j % 2 ? 1 : -1,
            yy = 390 - j * 32;
          ellipse(
            500 + dir * 26 * k,
            yy,
            35 * k,
            13 * k,
            C.green,
            0.8,
            dir * -0.5,
          );
        }
        glow(500, 240, 140, C.gold, 0.12 * leaves);
        for (let j = 0; j < 5; j++)
          disk(440 + j * 30, 155 + (j % 2) * 30, 3, C.gold, leaves);
        break;
      }
      case "mobileflight": {
        const balance = q(0, 0.3),
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
        glow(500, 300, 160, C.blue, 0.1 * shine);
        break;
      }
      case "steppespring": {
        const thaw = q(0, 0.34),
          water = q(0.34, 0.67),
          flowers = q(0.67, 1);
        poly(
          [
            [100, 380],
            [900, 355],
            [900, 490],
            [100, 490],
          ],
          "#849b88",
        );
        poly(
          [
            [100, 380],
            [900, 355],
            [900, 470 - thaw * 110],
            [100, 490 - thaw * 100],
          ],
          C.cream,
          0.8 * (1 - thaw),
        );
        curve(
          [
            [100, 430],
            [280, 420],
            [390, 375],
            [590, 397],
            [900, 363],
          ],
          C.blue,
          12,
          0.4 * water,
        );
        for (let j = 0; j < 26; j++) {
          const x = 145 + j * 28,
            y = 400 + (j % 4) * 17;
          const f = q(0.65 + j * 0.005, 0.88 + j * 0.004);
          line(x, y + 40, x, y, C.green, 2, f);
          poly(
            [
              [x - 10, y - 10],
              [x - 9, y + 4],
              [x, y + 10],
              [x + 9, y + 4],
              [x + 10, y - 10],
              [x + 3, y - 3],
              [x, y - 14],
              [x - 3, y - 3],
            ],
            j % 2 ? C.pink : C.gold,
            f,
          );
        }
        disk(740, 150, 37, C.gold, flowers);
        break;
      }
      case "shanyrak": {
        const frame = q(0, 0.33),
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
        glow(500, 250, 140, C.gold, 0.18 * sun);
        label("Жаңа күн. Жаңа өмір.", 500, 510, 22, C.gold, sun);
        break;
      }
      case "springriver": {
        const ice = q(0, 0.3),
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
          const y = 155 + j * 28,
            w = 80 + j * 9;
          poly(
            [
              [500 - w, y],
              [500 + w, y - 8],
              [510 + w, y + 18],
              [480 - w, y + 28],
            ],
            C.cream,
            ice * (1 - flow) * 0.7,
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
        const core = q(0, 0.33),
          years = q(0.33, 0.8),
          together = q(0.8, 1);
        disk(500, 280, 175, "#8b6e60", core * 0.6);
        for (let j = 0; j < 24; j++) {
          const f = q(0.1 + j * 0.025, 0.3 + j * 0.025);
          const pts = Array.from({ length: 101 }, (_, k) => {
            const a = (k / 100) * TAU,
              r = (14 + j * 6.3) * (1 + 0.023 * Math.sin(a * 5 + j));
            return [500 + Math.cos(a) * r, 280 + Math.sin(a) * r];
          });
          curve(pts, j % 4 ? C.gold : C.cream, 1.2, 0.25 * core, f);
        }
        heart(500, 280, 21, C.pink, together);
        label("Год за годом — рядом", 500, 510, 22, C.gold, together);
        break;
      }
      case "stations": {
        const first = q(0, 0.33),
          travel = q(0.33, 0.8),
          future = q(0.8, 1);
        line(140, 370, 850, 370, C.blue, 3, first);
        for (let j = 0; j < 5; j++) {
          const x = 180 + j * 150;
          disk(x, 370, 8, C.gold, q(0.05 + j * 0.13, 0.2 + j * 0.13));
          line(x, 370, x, 280, C.gold, 2, q(0.05 + j * 0.13, 0.2 + j * 0.13));
          rect(
            x - 34,
            238,
            68,
            35,
            C.purple,
            q(0.05 + j * 0.13, 0.2 + j * 0.13),
          );
          label(
            j === 0 ? "Встреча" : j === 4 ? "Впереди" : String(j),
            x,
            260,
            13,
            C.cream,
            q(0.05 + j * 0.13, 0.2 + j * 0.13),
          );
        }
        const x = 180 + 600 * travel;
        rect(x - 25, 330, 50, 27, C.pink, first);
        disk(x - 15, 360, 6, C.ink, first);
        disk(x + 15, 360, 6, C.ink, first);
        rect(x - 16, 337, 12, 10, C.gold, first);
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
        const one = q(0, 0.33),
          two = q(0.33, 0.7),
          steam = q(0.7, 1);
        ellipse(500, 440, 250, 28, "#665063", 0.4);
        for (let j = 0; j < 2; j++) {
          const x = 420 + j * 170,
            k = j ? two : one;
          rect(x - 44, 350, 88, 70, j ? C.blue : C.pink, k);
          ellipse(x, 350, 44, 13, C.cream, k);
          ellipse(x, 353, 35, 8, "#6b4e42", k);
          arc(
            x + 43,
            382,
            24,
            -Math.PI / 2,
            Math.PI / 2,
            j ? C.blue : C.pink,
            8,
            k,
          );
          for (let a = 0; a < 3; a++)
            curve(
              Array.from({ length: 35 }, (_, i) => [
                x + (a - 1) * 15 + Math.sin(i * 0.15 + clock * 0.4) * 8,
                340 - i * 3,
              ]),
              C.cream,
              2,
              0.15 * k,
            );
        }
        heart(505, 220, 28, C.pink, steam * 0.55);
        break;
      }
      case "shadowtheatre": {
        const curtain = q(0, 0.33),
          light = q(0.33, 0.68),
          play = q(0.68, 1);
        rect(230, 125, 540, 300, "#d9b790", curtain * 0.8);
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
            play,
          );
        }
        disk(660, 190, 28, "#49334d", play);
        break;
      }
      case "hauntedmoon": {
        const aim = q(0, 0.34),
          moon = q(0.34, 0.7),
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
            magic,
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
            magic,
          );
        break;
      }
      case "cauldron": {
        const heat = q(0, 0.33),
          brew = q(0.33, 0.7),
          spirits = q(0.7, 1);
        ellipse(500, 399, 95, 70, "#343e55");
        ellipse(500, 350, 95, 22, C.green, brew);
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
          const x = 340 + j * 80,
            y = 250 - spirits * 60 + Math.sin(clock + j) * 10;
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
        const paths = q(0, 0.33),
          meet = q(0.33, 0.7),
          garden = q(0.7, 1);
        curve(
          [
            [150, 454],
            [280, 438],
            [420, 365],
            [500, 350],
          ],
          C.pink,
          3,
          0.7,
          paths,
        );
        curve(
          [
            [850, 454],
            [720, 438],
            [580, 365],
            [500, 350],
          ],
          C.blue,
          3,
          0.7,
          paths,
        );
        arc(500, 285, 100, Math.PI, TAU, C.gold, 5, meet);
        line(400, 285, 400, 430, C.gold, 5, meet);
        line(600, 285, 600, 430, C.gold, 5, meet);
        for (let j = 0; j < 16; j++) {
          const a = Math.PI + (j * Math.PI) / 15;
          flower(
            500 + Math.cos(a) * 100,
            285 + Math.sin(a) * 100,
            13,
            j % 2 ? C.pink : C.cream,
            garden,
          );
        }
        for (let j = 0; j < 12; j++)
          flower(320 + j * 33, 455, 10, C.pink, garden);
        heart(500, 325, 25, C.pink, garden);
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
          1 - launch,
        );
        const x = 300 + 350 * launch,
          y = 430 - 125 * horizon;
        boat(x, y, 1 - horizon * 0.45);
        g.save();
        g.translate(x, y);
        poly(
          [
            [-6, -80],
            [-6, -7],
            [-61, -7],
          ],
          C.pink,
          wind,
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
        const fold = q(0, 0.33),
          flight = q(0.33, 0.75),
          beyond = q(0.75, 1);
        rect(210, 416, 290, 13, C.gold, 1 - flight);
        line(240, 429, 240, 481, C.gold, 4, 1 - flight);
        line(470, 429, 470, 481, C.gold, 4, 1 - flight);
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
            beyond,
          );
        break;
      }
      case "bookstairs": {
        const step = q(0, 0.33),
          climb = q(0.33, 0.77),
          door = q(0.77, 1);
        for (let j = 0; j < 8; j++) {
          const f = q(0.05 + j * 0.075, 0.25 + j * 0.075),
            x = 220 + j * 66,
            y = 450 - j * 32;
          rect(x, y, 100, 22, j % 2 ? C.purple : C.blue, f);
          rect(x + 6, y + 5, 88, 12, C.cream, f);
          line(x + 8, y + 9, x + 86, y + 9, "#a59cba", 1, f);
        }
        const x = 235 + 455 * climb,
          y = 437 - 224 * climb;
        star(x, y, 9, C.gold, step);
        rect(738, 120, 68, 98, C.gold, door);
        rect(748, 128, 48, 90, C.cream, door);
        glow(771, 166, 100, C.gold, 0.3 * door);
        for (let j = 0; j < 6; j++)
          ellipse(620 + j * 34, 470, 70, 18, C.cream, 0.05 * door);
        break;
      }
      case "capsky": {
        const ceremony = q(0, 0.33),
          toss = q(0.33, 0.74),
          future = q(0.74, 1);
        for (let j = 0; j < 14; j++) {
          const d = s.dots[j],
            x = 180 + j * 47,
            y = 410 - toss * (190 + d.s * 70) + toss * toss * 60;
          g.save();
          g.translate(x, y);
          g.rotate(Math.sin(clock * 0.5 + j) * 0.15 * toss);
          poly(
            [
              [-28, 0],
              [0, -14],
              [28, 0],
              [0, 14],
            ],
            j % 2 ? C.purple : C.blue,
            ceremony,
          );
          rect(-17, 7, 34, 14, C.ink, ceremony);
          line(22, 2, 28, 26, C.gold, 1, ceremony);
          disk(28, 27, 3, C.gold, ceremony);
          g.restore();
        }
        curve(
          [
            [200, 160],
            [360, 115],
            [530, 156],
            [730, 97],
            [850, 144],
          ],
          C.gold,
          1.5,
          future,
        );
        for (const [x, y] of [
          [200, 160],
          [360, 115],
          [530, 156],
          [730, 97],
          [850, 144],
        ])
          star(x, y, 5, C.gold, future);
        break;
      }
      case "homelights": {
        const home = q(0, 0.33),
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
        flower(315, 415, 13, C.pink, cozy);
        flower(698, 415, 13, C.pink, cozy);
        break;
      }
      case "keydoor": {
        const keyOn = q(0, 0.33),
          turn = q(0.33, 0.7),
          open = q(0.7, 1);
        rect(420, 150, 170, 300, C.gold, 0.55);
        rect(432, 161, 145 * (1 - open * 0.9), 285, "#574964");
        disk(555 - open * 110, 306, 7, C.gold);
        g.save();
        g.translate(340 + 185 * keyOn, 310);
        g.rotate((turn * Math.PI) / 2);
        arc(-45, 0, 23, 0, TAU, C.gold, 7, 1 - open);
        line(-20, 0, 45, 0, C.gold, 8, 1 - open);
        line(25, 0, 25, 18, C.gold, 8, 1 - open);
        line(43, 0, 43, 18, C.gold, 8, 1 - open);
        g.restore();
        glow(520, 300, 130, C.gold, 0.14 * open);
        for (let j = 0; j < 7; j++)
          flower(455 + j * 17, 375 + (j % 2) * 22, 9, C.pink, open);
        disk(520, 210, 23, C.gold, open * 0.7);
        break;
      }
      case "furnish": {
        const boxes = q(0, 0.33),
          arrange = q(0.33, 0.74),
          lamp = q(0.74, 1);
        line(220, 437, 805, 437, C.cream, 2, 0.3);
        rect(215, 370, 70, 67, C.gold, boxes * (1 - arrange));
        line(250, 370, 250, 437, C.ink, 2, boxes * (1 - arrange));
        rect(350, 351 + 80 * (1 - arrange), 250, 74, C.purple, arrange);
        rect(330, 349, 35, 80, C.pink, arrange);
        rect(586, 349, 35, 80, C.pink, arrange);
        rect(365, 330, 98, 49, C.blue, arrange);
        rect(482, 330, 98, 49, C.blue, arrange);
        line(702, 440, 702, 220, C.gold, 4, arrange);
        poly(
          [
            [663, 224],
            [679, 170],
            [724, 170],
            [742, 224],
          ],
          C.gold,
          arrange,
        );
        poly(
          [
            [663, 224],
            [742, 224],
            [800, 435],
            [610, 435],
          ],
          C.gold,
          0.08 * lamp,
        );
        glow(700, 235, 95, C.gold, 0.2 * lamp);
        rect(257, 194, 85, 103, C.cream, arrange);
        flower(298, 245, 15, C.pink, arrange);
        break;
      }
      case "gears": {
        const first = q(0, 0.33),
          drive = q(0.33, 0.74),
          result = q(0.74, 1);
        for (let j = 0; j < 3; j++) {
          const x = 325 + j * 140,
            y = 340 - (j % 2) * 70,
            r = j === 1 ? 57 : 70;
          g.save();
          g.translate(x, y);
          g.rotate(clock * 0.3 * (j % 2 ? -1 : 1) * drive + drive * 3);
          for (let k = 0; k < 16; k++) {
            const a = (k * TAU) / 16;
            g.save();
            g.rotate(a);
            rect(r - 8, -8, 22, 16, j % 2 ? C.blue : C.gold, first);
            g.restore();
          }
          arc(0, 0, r - 4, 0, TAU, j % 2 ? C.blue : C.gold, 14, first);
          disk(0, 0, 14, C.cream, first);
          line(-r * 0.55, 0, r * 0.55, 0, C.cream, 3, first);
          line(0, -r * 0.55, 0, r * 0.55, C.cream, 3, first);
          g.restore();
        }
        line(620, 340, 670, 340, C.gold, 4, drive);
        line(670, 340, 670, 340 - 155 * result, C.gold, 4, drive);
        star(670, 340 - 155 * result, 28, C.gold, drive);
        glow(670, 185, 80, C.gold, 0.2 * result);
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
        disk(...pts[k], 5, C.gold, see);
        disk(690, 160, 47, C.gold, sun * 0.7);
        line(500, 164, 500, 128, C.cream, 2, sun);
        poly(
          [
            [500, 128],
            [535, 136],
            [500, 146],
          ],
          C.pink,
          sun,
        );
        break;
      }
      case "rocket": {
        const ready = q(0, 0.33),
          launch = q(0.33, 0.74),
          orbit = q(0.74, 1);
        const x = 500 + 180 * orbit,
          y = 415 - 215 * launch;
        line(470, 445, 530, 445, C.blue, 5, 1 - launch);
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
        rect(-22 - 75 * orbit, -36, 75 * orbit, 26, C.blue, orbit);
        rect(22, -36, 75 * orbit, 26, C.blue, orbit);
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
        const rain = q(0, 0.33),
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
            220 + j * 80,
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
        const hands = q(0, 0.33),
          cup = q(0.33, 0.73),
          warm = q(0.73, 1);
        poly(
          [
            [225, 450],
            [375, 364],
            [420, 371],
            [480, 415],
            [460, 453],
            [352, 439],
            [264, 490],
          ],
          "#c79c94",
          hands,
        );
        poly(
          [
            [775, 450],
            [625, 364],
            [580, 371],
            [520, 415],
            [540, 453],
            [648, 439],
            [736, 490],
          ],
          "#c79c94",
          hands,
        );
        rect(450, 321, 100, 92, C.blue, cup);
        ellipse(500, 321, 50, 14, C.cream, cup);
        ellipse(500, 324, 40, 9, "#80604b", cup);
        arc(551, 357, 26, -Math.PI / 2, Math.PI / 2, C.blue, 8, cup);
        for (let j = 0; j < 3; j++)
          curve(
            Array.from({ length: 35 }, (_, k) => [
              480 + j * 20 + Math.sin(k * 0.16 + clock * 0.3) * 8,
              303 - k * 3,
            ]),
            C.cream,
            2,
            0.17 * warm,
          );
        glow(500, 350, 185, C.gold, 0.14 * warm);
        break;
      }
      case "breathingsea": {
        const calm = q(0, 0.33),
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
        boat(460 + 90 * sail, 370 + cycle * 4, 0.62, sail);
        glow(500, 300, 130 + cycle * 50, C.blue, 0.05 * breath);
        label("В своём ритме", 500, 510, 22, C.cream, sail);
        break;
      }
      case "sunroom": {
        const dawn = q(0, 0.33),
          beam = q(0.33, 0.73),
          day = q(0.73, 1);
        rect(275, 145, 150, 205, C.blue, 0.12);
        line(350, 145, 350, 350, C.cream, 3, 0.6);
        line(275, 247, 425, 247, C.cream, 3, 0.6);
        disk(390, 188, 25, C.gold, dawn);
        poly(
          [
            [285, 200],
            [415, 200],
            [760, 447],
            [410, 447],
          ],
          C.gold,
          0.08 * beam,
        );
        rect(590, 371, 110, 10, C.gold, 0.7);
        line(610, 381, 610, 450, C.gold, 3);
        line(680, 381, 680, 450, C.gold, 3);
        rect(628, 344, 35, 27, C.pink, day);
        flower(646, 302, 20, C.pink, day);
        ellipse(770, 425, 45, 20, C.cream, day * 0.7);
        ellipse(799, 411, 20, 17, C.cream, day * 0.7);
        poly(
          [
            [785, 400],
            [787, 385],
            [797, 398],
          ],
          C.cream,
          day * 0.7,
        );
        poly(
          [
            [803, 397],
            [814, 385],
            [813, 405],
          ],
          C.cream,
          day * 0.7,
        );
        arc(738, 415, 28, 2.4, 4.8, C.cream, 7, day * 0.7);
        break;
      }
      case "postcards": {
        const mail = q(0, 0.33),
          arrive = q(0.33, 0.72),
          wall = q(0.72, 1);
        line(180, 157, 820, 157, C.gold, 2, mail);
        for (let j = 0; j < 5; j++) {
          const a = q(0.08 + j * 0.07, 0.32 + j * 0.07),
            x = 250 + j * 125,
            y = 170 + 240 * (1 - a);
          g.save();
          g.translate(x, y);
          g.rotate(Math.sin(j) * 0.12 * (1 - wall));
          rect(-50, 0, 100, 100, "#e0d4ca", mail);
          rect(-44, 7, 88, 61, j % 2 ? "#a2b5b5" : "#bcb0cf", mail);
          if (j % 2) heart(0, 38, 16, C.pink, mail);
          else {
            disk(20, 25, 10, C.gold, mail);
            mountain(-5, 60, 75, 33, "#76869c");
          }
          line(-35, 83, 35, 83, "#968794", 1, mail);
          rect(-3, -8, 6, 16, C.gold, arrive);
          g.restore();
        }
        label("Хорошее находит свой адрес", 500, 510, 22, C.cream, wall);
        break;
      }
      case "jar": {
        const catchLight = q(0, 0.33),
          gather = q(0.33, 0.73),
          cosmos = q(0.73, 1);
        rect(394, 162, 212, 24, C.gold, 0.6);
        curve(
          [
            [398, 190],
            [380, 240],
            [380, 413],
            [395, 444],
            [605, 444],
            [620, 413],
            [620, 240],
            [602, 190],
          ],
          C.blue,
          3,
          0.5,
        );
        rect(385, 205, 230, 232, C.blue, 0.035);
        for (let j = 0; j < 90; j++) {
          const d = s.dots[j],
            a = j * 2.4 + clock * 0.14,
            k = q(0.15 + j * 0.005, 0.46 + j * 0.005),
            r = 20 + 75 * d.r;
          const x =
              150 + d.s * 700 + (500 + Math.cos(a) * r - (150 + d.s * 700)) * k,
            y =
              100 + d.r * 400 + (315 + Math.sin(a) * r - (100 + d.r * 400)) * k;
          disk(
            x,
            y,
            1.5 + d.s * 1.5,
            j % 2 ? C.gold : C.blue,
            catchLight * (0.25 + 0.6 * gather),
          );
          if (j < 12) glow(x, y, 10, C.gold, 0.08 * gather);
        }
        arc(500, 315, 75, 0, TAU, C.purple, 1, cosmos * 0.4);
        disk(500, 315, 14, C.blue, cosmos);
        label("Маленькая вселенная — твоя", 500, 510, 22, C.cream, cosmos);
        break;
      }
      case "bridge": {
        const banks = q(0, 0.33),
          build = q(0.33, 0.73),
          meet = q(0.73, 1);
        poly(
          [
            [100, 360],
            [350, 368],
            [390, 468],
            [100, 480],
          ],
          "#44605b",
          banks,
        );
        poly(
          [
            [650, 368],
            [900, 360],
            [900, 480],
            [610, 468],
          ],
          "#44605b",
          banks,
        );
        for (let j = 0; j < 7; j++)
          curve(
            Array.from({ length: 35 }, (_, i) => [
              380 + i * 7,
              390 + j * 13 + Math.sin(i * 0.4 + clock * 0.4) * 2,
            ]),
            C.blue,
            1,
            0.2,
          );
        for (let side = 0; side < 2; side++) {
          const dir = side ? -1 : 1;
          line(
            side ? 650 : 350,
            367,
            (side ? 650 : 350) + dir * 150 * build,
            367,
            C.gold,
            5,
            banks,
          );
          for (let j = 0; j < 6; j++) {
            const x = (side ? 650 : 350) + dir * j * 25;
            line(x, 367, x, 335, C.gold, 2, build);
          }
          line(
            side ? 650 : 350,
            335,
            (side ? 650 : 350) + dir * 150 * build,
            335,
            C.gold,
            2,
            build,
          );
        }
        star(350 + 150 * meet, 315, 10, C.pink, banks);
        star(650 - 150 * meet, 315, 10, C.blue, banks);
        glow(500, 315, 65, C.gold, 0.15 * meet);
        break;
      }
      case "rooftop": {
        const night = q(0, 0.33),
          talk = q(0.33, 0.73),
          dawn = q(0.73, 1);
        skyline(456, "#293246");
        disk(760, 140, 28, C.cream, night * (1 - dawn));
        glow(500, 210, 280, C.orange, 0.08 * dawn);
        rect(255, 305, 35, 43, C.gold, talk);
        rect(690, 266, 35, 43, C.gold, talk);
        for (let j = 0; j < 7; j++) {
          const a = q(0.3 + j * 0.045, 0.48 + j * 0.045),
            x = 280 + j * 64,
            y = 250 - Math.sin((j / 6) * Math.PI) * 80;
          arc(x, y, 9, 0, TAU, C.blue, 1.5, a * (1 - dawn) * 0.65);
        }
        disk(525, 168, 37, C.gold, dawn * 0.65);
        label("Есть с кем встретить утро", 500, 520, 22, C.cream, dawn);
        break;
      }
      case "music": {
        const first = q(0, 0.33),
          duet = q(0.33, 0.73),
          song = q(0.73, 1);
        for (let j = 0; j < 5; j++)
          line(220, 210 + j * 22, 780, 210 + j * 22, C.cream, 1, 0.18);
        ellipse(295, 382, 38, 53, C.gold, first);
        ellipse(295, 329, 29, 35, C.gold, first);
        rect(288, 180, 14, 147, C.gold, first);
        disk(295, 342, 12, C.ink, first);
        for (let j = 0; j < 4; j++)
          line(291 + j * 3, 190, 291 + j * 3, 410, C.cream, 1, first * 0.5);
        rect(640, 306, 115, 84, C.purple, duet);
        for (let j = 0; j < 8; j++) {
          rect(648 + j * 12, 358, 11, 30, C.cream, duet);
          if (j % 3 !== 1) rect(655 + j * 12, 358, 7, 17, C.ink, duet);
        }
        for (let j = 0; j < 14; j++) {
          const x = 340 + j * 25,
            y = 270 + Math.sin(j * 0.7 - clock * 0.4) * 36,
            k = q(0.4 + j * 0.015, 0.63 + j * 0.015);
          ellipse(x, y, 7, 5, j % 2 ? C.pink : C.blue, k);
          line(x + 6, y, x + 6, y - 27, j % 2 ? C.pink : C.blue, 2, k);
        }
        curve(
          Array.from({ length: 100 }, (_, i) => [
            220 + i * 5.6,
            455 + Math.sin(i * 0.22 - clock) * song * 18,
          ]),
          C.gold,
          2,
          0.55 * song,
        );
        break;
      }
      case "terrarium": {
        const glass = q(0, 0.33),
          life = q(0.33, 0.73),
          world = q(0.73, 1);
        poly(
          [
            [280, 436],
            [240, 238],
            [420, 111],
            [620, 111],
            [760, 238],
            [720, 436],
          ],
          C.blue,
          0.05 * glass,
        );
        curve(
          [
            [280, 436],
            [240, 238],
            [420, 111],
            [620, 111],
            [760, 238],
            [720, 436],
            [280, 436],
          ],
          C.blue,
          2,
          0.6 * glass,
        );
        line(420, 111, 500, 436, C.blue, 1, 0.2 * glass);
        line(620, 111, 500, 436, C.blue, 1, 0.2 * glass);
        poly(
          [
            [280, 390],
            [440, 370],
            [600, 383],
            [720, 370],
            [720, 436],
            [280, 436],
          ],
          "#5f8170",
          life,
        );
        for (let j = 0; j < 6; j++)
          flower(325 + j * 65, 355 - (j % 3) * 21, 14, C.pink, life);
        ellipse(535, 412, 90, 12, C.blue, 0.5 * world);
        for (let j = 0; j < 14; j++)
          disk(
            330 + s.dots[j].s * 340,
            200 + s.dots[j].r * 170,
            2,
            C.gold,
            world,
          );
        break;
      }
      case "camera": {
        const lens = q(0, 0.33),
          snap = q(0.33, 0.73),
          photo = q(0.73, 1);
        const x = 380 - 90 * photo;
        rect(x - 130, 235, 260, 145, "#4b4a65", lens);
        rect(x - 93, 204, 77, 31, C.purple, lens);
        disk(x, 303, 62, C.ink, lens);
        arc(x, 303, 48, 0, TAU, C.blue, 6, lens);
        arc(x, 303, 32, 0, TAU, C.purple, 4, lens);
        disk(x + 80, 266, 11, C.gold, lens);
        const flash = Math.sin(clamp((p - 0.42) / 0.2) * Math.PI) * snap;
        glow(x + 83, 265, 100, C.cream, 0.24 * flash);
        g.save();
        g.translate(650, 290);
        g.rotate(-0.08 * photo);
        rect(-100, -110, 200, 250, C.cream, photo);
        rect(-88, -98, 176, 185, "#839fa8", photo);
        disk(45, -57, 20, C.gold, photo);
        if (photo > 0) {
          g.save();
          g.globalAlpha = photo;
          mountain(-15, 75, 170, 115, "#5b7b79");
          g.restore();
        }
        label("Этот момент", 0, 121, 17, "#625b6e", photo);
        g.restore();
        break;
      }
      case "film": {
        const reel = q(0, 0.33),
          frames = q(0.33, 0.73),
          more = q(0.73, 1);
        disk(260, 280, 105, "#6e6a87", reel);
        for (let j = 0; j < 5; j++) {
          const a = (j * TAU) / 5 + clock * 0.08 * frames;
          disk(260 + Math.cos(a) * 62, 280 + Math.sin(a) * 62, 24, C.ink, reel);
        }
        disk(260, 280, 12, C.gold, reel);
        rect(365, 205, 470 * frames, 152, "#3d3d53", reel);
        for (let j = 0; j < 4; j++) {
          const x = 380 + j * 110,
            k = q(0.33 + j * 0.07, 0.55 + j * 0.07);
          rect(x, 229, 96, 105, j % 2 ? "#7b959c" : "#a78c9f", k);
          for (let a = 0; a < 3; a++) {
            rect(x + a * 33, 214, 8, 7, C.cream, k);
            rect(x + a * 33, 340, 8, 7, C.cream, k);
          }
          if (j % 2) star(x + 47, 278, 19, C.gold, k);
          else flower(x + 47, 265, 15, C.pink, k);
        }
        curve(
          [
            [835, 205],
            [870, 190],
            [905, 165],
          ],
          C.gold,
          2,
          more * 0.6,
        );
        label("У истории есть продолжение", 500, 510, 22, C.cream, more);
        break;
      }
    }
    g.restore();
    g.globalAlpha = 1;
    // A thin progress track exposes the deliberate beginning/change/finale without covering the art.
    const duration = topic === "memorial" ? 10 : 7;
    line(400, 565, 600, 565, C.cream, 1, 0.12);
    line(400, 565, 400 + 200 * clamp(t / duration), 565, C.gold, 2, 0.45);
  }
  window.AnimationPacks = { names, options, select, info, draw, catalog };
})();
