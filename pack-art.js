/* Two independent art engines: projected polygonal 3D and layered paper craft. */
(() => {
  "use strict";
  const catalog = {
    just: [
      {
        title: "Обычный день с чудом",
        volume: "Шкатулка тихой музыки",
        paper: "Почтовая птица",
      },
      {
        title: "Тепло вокруг",
        volume: "Острова над облаками",
        paper: "Солнечный зонтик",
      },
      {
        title: "Маленький мир для тебя",
        volume: "Чашка утреннего света",
        paper: "Открытка с садом",
      },
    ],
    friendship: [
      {
        title: "Поддержка в движении",
        volume: "Эстафета шариков",
        paper: "Ладони из бумаги",
      },
      {
        title: "Связь через расстояния",
        volume: "Двойная система",
        paper: "Фонарики над площадью",
      },
      {
        title: "Общий ритм",
        volume: "Подъем вдвоём",
        paper: "Бумажный аккордеон",
      },
    ],
    custom: [
      {
        title: "Уникальный момент",
        volume: "Призма преломленного света",
        paper: "Мозаика особенного дня",
      },
      {
        title: "Время для своего",
        volume: "Песочные часы",
        paper: "Оригами-лиса",
      },
      {
        title: "Галерея добрых слов",
        volume: "Галерея в пространстве",
        paper: "Вертушка из пожеланий",
      },
    ],
    birthday: [
      {
        title: "Свет твоего праздника",
        volume: "Торт раскрывает праздник",
        paper: "Вырезанный праздничный город",
      },
      {
        title: "Еще один прекрасный круг",
        volume: "Часы нового круга",
        paper: "Корона из пожеланий",
      },
      {
        title: "Желания впереди",
        volume: "Подарок внутри подарка",
        paper: "Шарики на бумажных нитях",
      },
    ],
    friendbirthday: [
      {
        title: "Наши приключения",
        volume: "Настольный матч",
        paper: "Билеты в новые приключения",
      },
      {
        title: "Вечер своих людей",
        volume: "Компас следующей встречи",
        paper: "Палатка из складок",
      },
      {
        title: "Новый уровень дружбы",
        volume: "Скейт над рампой",
        paper: "Комикс о победе",
      },
    ],
    march: [
      {
        title: "Весна раскрывается",
        volume: "Хрустальный цветок",
        paper: "Букет из гофрированной бумаги",
      },
      {
        title: "Красота в движении",
        volume: "Ваза в весеннем ветре",
        paper: "Балерина из лепестков",
      },
      {
        title: "Утро с нежностью",
        volume: "Флакон первого утра",
        paper: "Весенний витраж",
      },
    ],
    romance: [
      {
        title: "То, что дорого",
        volume: "Медальон с сердцем",
        paper: "Город бумажных встреч",
      },
      {
        title: "Быть ближе",
        volume: "Маятники притяжения",
        paper: "Письмо складывается в сердце",
      },
      {
        title: "Вдвоем под одним небом",
        volume: "Два фонаря на террасе",
        paper: "Звездная лодочка",
      },
    ],
    may7: [
      {
        title: "Сила и спокойствие",
        volume: "Флаг над степью",
        paper: "Бумажный беркут",
      },
      {
        title: "Свободный горизонт",
        volume: "Крыло свободного неба",
        paper: "Орден из слоев",
      },
      {
        title: "Беречь близких",
        volume: "Башня наблюдения",
        paper: "Панорама мирного города",
      },
    ],
    newyear: [
      {
        title: "Зимнее чудо",
        volume: "Снежный шар",
        paper: "Домики зимнего календаря",
      },
      {
        title: "Мастерская зимы",
        volume: "Ледяная ель",
        paper: "Складная рождественская звезда",
      },
      {
        title: "Ночь новых надежд",
        volume: "Часы полуночи",
        paper: "Снеговик из бумажных кругов",
      },
    ],
    september: [
      {
        title: "Открывая мир",
        volume: "Планеты на школьном столе",
        paper: "Рюкзак открытий",
      },
      {
        title: "Любопытство ведет вперед",
        volume: "Счеты в движении",
        paper: "Геометрический танграм",
      },
      {
        title: "Следующий шаг знаний",
        volume: "Механическая модель орбит",
        paper: "Закладка превращается в птицу",
      },
    ],
    summer: [
      {
        title: "Медленное солнечное утро",
        volume: "Гамак в тени",
        paper: "Слоеный морской пейзаж",
      },
      {
        title: "Живое лето",
        volume: "Ракушка в солнечных бликах",
        paper: "Бумажная мельница",
      },
      {
        title: "Свобода теплого дня",
        volume: "Утка на волнах бассейна",
        paper: "Веер летнего ветра",
      },
    ],
    memorial: [
      {
        title: "Свет доброй памяти",
        volume: "Свеча в стеклянной чаше",
        paper: "Белый журавль памяти",
      },
      {
        title: "Бережно сохранить",
        volume: "Камни тихого берега",
        paper: "Вырезанный незабудковый венок",
      },
      {
        title: "Тихое присутствие",
        volume: "Скамья под ветвями",
        paper: "Тихий силуэт горизонта",
      },
    ],
    newborn: [
      {
        title: "Добро пожаловать, малыш",
        volume: "Деревянная лошадка",
        paper: "Аист над маленьким домом",
      },
      {
        title: "Маленькая новая жизнь",
        volume: "Погремушка в равновесии",
        paper: "Бумажные пинетки",
      },
      {
        title: "Мир первых открытий",
        volume: "Первые деревянные кубики",
        paper: "Облачко с маленькими звездами",
      },
    ],
    nauryz: [
      {
        title: "Дом встречает весну",
        volume: "Юрта в утреннем свете",
        paper: "Казахский орнамент из слоев",
      },
      {
        title: "Тепло традиций",
        volume: "Звучащая домбра",
        paper: "Тюльпан из складок",
      },
      {
        title: "Новый ветер степи",
        volume: "Беркут над степью",
        paper: "Праздничная вертушка",
      },
    ],
    anniversary: [
      {
        title: "Годы рядом",
        volume: "Два дерева в одном саду",
        paper: "Календарь общих моментов",
      },
      {
        title: "Наш вечер",
        volume: "Пластинка нашего вечера",
        paper: "Фоторамки на гирлянде",
      },
      {
        title: "Дорога вдвоем",
        volume: "Мобиль любимых фотографий",
        paper: "Две бумажные дорожки",
      },
    ],
    halloween: [
      {
        title: "Добрые тайны ночи",
        volume: "Дом с добрыми тайнами",
        paper: "Летучая мышь из складок",
      },
      {
        title: "Лунные странности",
        volume: "Тыква с теплым огнем",
        paper: "Черный кот на бумажной луне",
      },
      {
        title: "Маленькая магия",
        volume: "Шляпа и маленькие чудеса",
        paper: "Паутинка из вырезанного кружева",
      },
    ],
    wedding: [
      {
        title: "Рядом в новом мире",
        volume: "Кольца в пространстве",
        paper: "Арка из бумажного кружева",
      },
      {
        title: "Два голоса одного дня",
        volume: "Музыкальная шкатулка на двоих",
        paper: "Два голубя из оригами",
      },
      {
        title: "Праздник на двоих",
        volume: "Бокалы праздничного света",
        paper: "Бумажный свадебный торт",
      },
    ],
    graduation: [
      {
        title: "Первый свободный полет",
        volume: "Диплом в золотой ленте",
        paper: "Дверь за пределы тетради",
      },
      {
        title: "Выше привычных ступеней",
        volume: "Глобус и академическая шапочка",
        paper: "Розетка выпускного",
      },
      {
        title: "Дальний горизонт",
        volume: "Телескоп дальних целей",
        paper: "Бумажный мост во взрослый мир",
      },
    ],
    housewarming: [
      {
        title: "Твой новый дом",
        volume: "Дом с обстановкой",
        paper: "Домик раскрывается из открытки",
      },
      {
        title: "Уют в деталях",
        volume: "Лестница к зеленому уголку",
        paper: "Бумажное окно с занавесками",
      },
      {
        title: "Место, где хорошо",
        volume: "Ключ нового адреса",
        paper: "Комнатный сад из бумаги",
      },
    ],
    success: [
      {
        title: "Результат в твоих руках",
        volume: "Кубок заслуженного результата",
        paper: "Лавровый венок из слоев",
      },
      {
        title: "Усилие дает полет",
        volume: "Полет после усилия",
        paper: "Звезда из пяти складок",
      },
      {
        title: "Энергия нового дела",
        volume: "Ветер запускает свет",
        paper: "Лента личного рекорда",
      },
    ],
    recovery: [
      {
        title: "Тепло и забота",
        volume: "Травяной чай и пар",
        paper: "Бумажная птица добрых вестей",
      },
      {
        title: "Спокойствие без спешки",
        volume: "Камни и круги на воде",
        paper: "Раскрывающийся лотос",
      },
      {
        title: "Возвращение ясного дня",
        volume: "Облако выпускает последний дождь",
        paper: "Радуга из полос бумаги",
      },
    ],
  };
  const TAU = Math.PI * 2,
    clamp = (x) => Math.max(0, Math.min(1, x)),
    ease = (x) => {
      x = clamp(x);
      return x * x * (3 - 2 * x);
    };
  const C = {
    gold: "#edc578",
    ivory: "#ede5d9",
    rose: "#d88a9f",
    blue: "#86b9d2",
    green: "#83b49c",
    violet: "#a79abd",
    wood: "#b88c66",
    dark: "#283747",
    orange: "#da9467",
  };
  function rgb(c) {
    const n = parseInt(c.slice(1), 16);
    return [n >> 16, (n >> 8) & 255, n & 255];
  }
  function shade(c, k, add = 0) {
    return (
      "#" +
      rgb(c)
        .map((v) =>
          Math.round(Math.max(0, Math.min(255, v * k + add)))
            .toString(16)
            .padStart(2, "0"),
        )
        .join("")
    );
  }
  function volume(s, t, topic, index) {
    const g = s.ctx,
      p = ease(t / (topic === "memorial" ? 11 : 8)),
      q = (a, b) => ease((p - a) / (b - a)),
      clock = t,
      faces = [];
    g.shadowBlur = 0;
    const fine = (g.canvas?.width || 1000) >= 700;
    let groupRotation = [0, 0, 0],
      groupOrigin = [0, 0, 0],
      groupOffset = [0, 0, 0];
    function group(v) {
      const r = rotate(
        v.map((x, i) => x - groupOrigin[i]),
        groupRotation,
      );
      return r.map((x, i) => x + groupOrigin[i] + groupOffset[i]);
    }

    const yaw =
        0.37 +
        s.x * 0.28 +
        Math.sin(clock * 0.22) * (topic === "memorial" ? 0.025 : 0.1),
      pitch = -0.29 + s.y * 0.12;
    function view([x, y, z]) {
      const a = x * Math.cos(yaw) + z * Math.sin(yaw),
        b = -x * Math.sin(yaw) + z * Math.cos(yaw);
      return [
        a,
        y * Math.cos(pitch) - b * Math.sin(pitch),
        y * Math.sin(pitch) + b * Math.cos(pitch),
      ];
    }
    function proj(v) {
      const [x, y, z] = view(v),
        k = 1000 / (1000 + z);
      return [500 + x * k, 320 - y * k, z];
    }
    function rotate(v, r) {
      let [x, y, z] = v;
      const [ax, ay, az] = r;
      let a = y * Math.cos(ax) - z * Math.sin(ax),
        b = y * Math.sin(ax) + z * Math.cos(ax);
      y = a;
      z = b;
      a = x * Math.cos(ay) + z * Math.sin(ay);
      b = -x * Math.sin(ay) + z * Math.cos(ay);
      x = a;
      z = b;
      a = x * Math.cos(az) - y * Math.sin(az);
      b = x * Math.sin(az) + y * Math.cos(az);
      return [a, b, z];
    }
    function mesh(
      verts,
      indices,
      pos,
      color,
      alpha = 1,
      rot = [0, 0, 0],
      orient = true,
    ) {
      if (alpha <= 0) return;
      const v = verts.map((pt) => {
        const r = rotate(pt, rot);
        return group([r[0] + pos[0], r[1] + pos[1], r[2] + pos[2]]);
      });
      const groupPos = group(pos);
      for (const ids of indices) {
        const pts = ids.map((i) => v[i]),
          u = pts[1].map((x, i) => x - pts[0][i]),
          w = pts[2].map((x, i) => x - pts[0][i]);
        let n = [
            u[1] * w[2] - u[2] * w[1],
            u[2] * w[0] - u[0] * w[2],
            u[0] * w[1] - u[1] * w[0],
          ],
          len = Math.hypot(...n);
        if (len < 1e-7) continue;
        n = n.map((x) => x / len);
        const center = pts.reduce(
          (a, b) => a.map((v, i) => v + b[i] / pts.length),
          [0, 0, 0],
        );
        if (
          orient &&
          n.reduce((a, v, i) => a + v * (center[i] - groupPos[i]), 0) < 0
        )
          n = n.map((x) => -x);
        const nv = view(n),
          lit = Math.max(0, nv[0] * -0.43 + nv[1] * 0.72 + nv[2] * -0.55),
          shine =
            Math.max(0, nv[0] * -0.2 + nv[1] * 0.36 + nv[2] * -0.91) ** 22;
        const screen = pts.map(proj);
        faces.push({
          pts: screen,
          z: screen.reduce((a, b) => a + b[2] / screen.length, 0),
          c: shade(color, 0.33 + lit * 0.78, shine * 48),
          alpha,
        });
      }
    }
    function box(x, y, z, w, h, d, c, alpha = 1, rot = [0, 0, 0]) {
      const verts = [
        [-w / 2, -h / 2, -d / 2],
        [w / 2, -h / 2, -d / 2],
        [w / 2, h / 2, -d / 2],
        [-w / 2, h / 2, -d / 2],
        [-w / 2, -h / 2, d / 2],
        [w / 2, -h / 2, d / 2],
        [w / 2, h / 2, d / 2],
        [-w / 2, h / 2, d / 2],
      ];
      mesh(
        verts,
        [
          [0, 1, 2, 3],
          [4, 7, 6, 5],
          [0, 4, 5, 1],
          [3, 2, 6, 7],
          [0, 3, 7, 4],
          [1, 5, 6, 2],
        ],
        [x, y, z],
        c,
        alpha,
        rot,
      );
    }
    function cylinder(
      x,
      y,
      z,
      r,
      h,
      c,
      alpha = 1,
      top = r,
      rot = [0, 0, 0],
      n = fine ? 24 : 18,
    ) {
      const v = [],
        ids = [];
      for (let j = 0; j < n; j++) {
        const a = (j * TAU) / n;
        v.push(
          [Math.cos(a) * r, -h / 2, Math.sin(a) * r],
          [Math.cos(a) * top, h / 2, Math.sin(a) * top],
        );
      }
      for (let j = 0; j < n; j++) {
        const k = (j + 1) % n;
        ids.push([j * 2, k * 2, k * 2 + 1, j * 2 + 1]);
      }
      ids.push(
        Array.from({ length: n }, (_, j) => j * 2).reverse(),
        Array.from({ length: n }, (_, j) => j * 2 + 1),
      );
      mesh(v, ids, [x, y, z], c, alpha, rot);
    }
    function sphere(
      x,
      y,
      z,
      r,
      c,
      alpha = 1,
      scale = [1, 1, 1],
      rot = [0, 0, 0],
      n = fine ? 12 : 10,
      m = fine ? 8 : 6,
    ) {
      const v = [],
        ids = [];
      for (let j = 0; j <= m; j++) {
        const a = (j * Math.PI) / m;
        for (let i = 0; i < n; i++) {
          const b = (i * TAU) / n;
          v.push([
            r * Math.sin(a) * Math.cos(b) * scale[0],
            r * Math.cos(a) * scale[1],
            r * Math.sin(a) * Math.sin(b) * scale[2],
          ]);
        }
      }
      for (let j = 0; j < m; j++)
        for (let i = 0; i < n; i++) {
          const k = (i + 1) % n;
          ids.push([j * n + i, j * n + k, (j + 1) * n + k, (j + 1) * n + i]);
        }
      mesh(v, ids, [x, y, z], c, alpha, rot);
    }
    function torus(
      x,
      y,
      z,
      R,
      r,
      c,
      alpha = 1,
      rot = [0, 0, 0],
      n = fine ? 28 : 20,
      m = fine ? 8 : 6,
    ) {
      const v = [],
        ids = [];
      for (let j = 0; j < n; j++)
        for (let i = 0; i < m; i++) {
          const a = (j * TAU) / n,
            b = (i * TAU) / m;
          v.push([
            (R + r * Math.cos(b)) * Math.cos(a),
            r * Math.sin(b),
            (R + r * Math.cos(b)) * Math.sin(a),
          ]);
        }
      for (let j = 0; j < n; j++)
        for (let i = 0; i < m; i++)
          ids.push([
            j * m + i,
            ((j + 1) % n) * m + i,
            ((j + 1) % n) * m + ((i + 1) % m),
            j * m + ((i + 1) % m),
          ]);
      mesh(
        v,
        ids.map((f) => f.reverse()),
        [x, y, z],
        c,
        alpha,
        rot,
        false,
      );
    }
    function segment(a, b, r, c, alpha = 1) {
      const d = b.map((v, i) => v - a[i]),
        len = Math.hypot(...d);
      if (len < 0.01) return;
      const rot = [Math.acos(d[1] / len), Math.atan2(d[0], d[2]), 0];
      cylinder(
        (a[0] + b[0]) / 2,
        (a[1] + b[1]) / 2,
        (a[2] + b[2]) / 2,
        r,
        len,
        c,
        alpha,
        r,
        rot,
        8,
      );
    }
    function plate(points, pos, c, alpha = 1, rot = [0, 0, 0], thick = 4) {
      const verts = points
          .map(([x, y]) => [x, y, -thick / 2])
          .concat(points.map(([x, y]) => [x, y, thick / 2])),
        n = points.length,
        ids = [
          Array.from({ length: n }, (_, i) => i).reverse(),
          Array.from({ length: n }, (_, i) => n + i),
        ];
      for (let i = 0; i < n; i++)
        ids.push([i, (i + 1) % n, ((i + 1) % n) + n, i + n]);
      mesh(verts, ids, pos, c, alpha, rot);
    }
    function star(x, y, z, r, c, alpha = 1, rot = [0, 0, 0]) {
      plate(
        Array.from({ length: 10 }, (_, i) => {
          const a = Math.PI / 2 + (i * Math.PI) / 5,
            k = i % 2 ? 0.43 : 1;
          return [Math.cos(a) * r * k, Math.sin(a) * r * k];
        }),
        [x, y, z],
        c,
        alpha,
        rot,
        7,
      );
    }
    function tree(x, z, h = 150, c = C.green, base = -150) {
      cylinder(x, base + h * 0.18, z, 7, h * 0.4, C.wood);
      for (let j = 0; j < 3; j++)
        cylinder(
          x,
          base + 20 + h * (0.35 + j * 0.18),
          z,
          h * (0.34 - j * 0.06),
          h * 0.4,
          c,
          1,
          0,
        );
    }
    function house(x, z, w = 100, h = 110, lit = 1) {
      box(x, -150 + h / 2, z, w, h, w * 0.8, C.ivory);
      plate(
        [
          [-w * 0.6, 0],
          [0, h * 0.55],
          [w * 0.6, 0],
        ],
        [x, -150 + h, z - w * 0.43],
        C.rose,
        1,
        [0, 0, 0],
        w * 0.9,
      );
      for (let j = 0; j < 2; j++)
        box(
          x - w * 0.25 + j * w * 0.5,
          -150 + h * 0.57,
          z - w * 0.41 - 1,
          w * 0.22,
          h * 0.25,
          3,
          C.gold,
          lit,
        );
      box(x, -150 + h * 0.2, z - w * 0.41 - 2, w * 0.18, h * 0.4, 4, C.wood);
    }
    function bowl(x, y, z, r, c) {
      cylinder(x, y, z, r * 0.72, 45, c, 1, r);
      torus(x, y + 23, z, r, 3, C.ivory);
    }
    function cup(x, y, z, r = 43, c = C.blue) {
      cylinder(x, y, z, r, 66, c, 1, r * 0.9);
      cylinder(x, y + 34, z, r * 0.79, 2, C.wood);
      torus(x + r * 0.92, y + 4, z, 22, 5, c, 1, [Math.PI / 2, 0, 0]);
      torus(x, y - 35, z, r + 8, 3, C.ivory);
    }
    function steam(x, y, z, strength = 1) {
      for (let j = 0; j < 9; j++) {
        const age = (clock * 0.08 + j / 9) % 1;
        sphere(
          x + Math.sin(age * 5 + j) * 12,
          y + age * 115,
          z,
          4 + age * 10,
          C.ivory,
          0.07 * (1 - age) * strength,
          [1, 0.4, 1],
        );
      }
    }
    function flowers(x, y, z, n = 7) {
      for (let j = 0; j < n; j++) {
        const a = j * 2.399,
          xx = x + Math.cos(a) * 35,
          zz = z + Math.sin(a) * 35,
          h = 50 + (j % 3) * 14;
        segment([xx, y, zz], [xx, y + h, zz], 1.5, C.green);
        for (let k = 0; k < 5; k++) {
          const b = (k * TAU) / 5;
          sphere(
            xx + Math.cos(b) * 9,
            y + h,
            zz + Math.sin(b) * 9,
            8,
            j % 2 ? C.rose : C.gold,
            1,
            [1, 0.4, 1],
          );
        }
        sphere(xx, y + h + 2, zz, 4, C.gold);
      }
    }
    function glassSphere(x, y, z, r) {
      sphere(x, y, z, r, C.blue, 0.035, [1, 1, 1], [0, 0, 0], 20, 12);
      torus(x, y, z, r, 1, C.ivory, 0.18, [Math.PI / 2, 0, 0]);
      torus(x, y, z, r, 1, C.ivory, 0.1, [0, 0, Math.PI / 2]);
    }
    // Ground establishes contact. Moving objects keep their geometry above it.
    const grd = g.createRadialGradient(500, 440, 10, 500, 440, 300);
    grd.addColorStop(0, "#7c72812e");
    grd.addColorStop(1, "#00000000");
    g.fillStyle = grd;
    g.fillRect(170, 270, 660, 290);
    cylinder(0, -165, 0, 265, 12, "#354656", 0.7, 265, [0, 0, 0], 48);
    const k = q(0, 0.38),
      a = q(0.2, 0.75),
      b = q(0.6, 1),
      rot = clock * 0.12;
    switch (topic + ":" + index) {
      case "just:0": {
        box(0, -110, 0, 190, 75, 130, C.wood);
        box(0, -61, 58, 194, 12, 135, C.gold, 1, [-a * 1.15, 0, 0]);
        cylinder(0, -58, 0, 46, 7, C.violet);
        sphere(0, 2, 0, 24, C.ivory, 1, [1.3, 0.7, 0.65]);
        plate(
          [
            [-5, 0],
            [-70, 45],
            [-50, -5],
          ],
          [0, 7, 0],
          C.blue,
          1,
          [0, Math.sin(clock) * 0.2, 0],
        );
        plate(
          [
            [5, 0],
            [70, 45],
            [50, -5],
          ],
          [0, 7, 0],
          C.rose,
          1,
          [0, -Math.sin(clock) * 0.2, 0],
        );
        segment([0, -55, 0], [0, -10, 0], 3, C.gold);
        break;
      }
      case "just:1": {
        for (let j = 0; j < 3; j++) {
          const x = -150 + j * 150,
            y = -25 + Math.sin(clock * 0.6 + j) * 12;
          cylinder(x, y, 40 - j * 35, 55, 60, C.wood, 1, 80);
          cylinder(x, y + 35, 40 - j * 35, 82, 9, C.green);
          tree(x, 40 - j * 35, 65 + j * 12, C.green, y + 40);
          for (let z = 0; z < 4; z++)
            sphere(
              x + Math.sin(z) * 45,
              y - 75 - z * 5,
              35,
              20,
              C.ivory,
              0.25,
              [1, 0.3, 1],
            );
        }
        break;
      }
      case "just:2": {
        cup(0, -93, 0, 55, C.rose);
        steam(0, -50, 0, a);
        box(125, -145, 15, 65, 9, 55, C.wood);
        for (let j = 0; j < 3; j++)
          box(113 + j * 13, -138, 15, 9, 5, 35, C.gold);
        torus(0, -129, 0, 92, 4, C.ivory);
        break;
      }
      case "friendship:0": {
        for (let j = 0; j < 3; j++) {
          const x = -155 + j * 155;
          box(x, -135, 0, 110, 20, 70, j % 2 ? C.blue : C.wood);
          segment([x - 50, -120, 0], [x + 55, -104, 0], 3, C.gold);
          const u = (clock * 0.17 + j / 3) % 1;
          sphere(
            x - 45 + 100 * u,
            -99 + 16 * u + Math.sin(u * Math.PI) * 50,
            0,
            12,
            j % 2 ? C.gold : C.rose,
          );
        }
        break;
      }
      case "friendship:1": {
        const orbital = clock * 0.28;
        sphere(
          -55 * Math.cos(orbital),
          15,
          -55 * Math.sin(orbital),
          62,
          C.blue,
        );
        sphere(
          135 * Math.cos(orbital),
          15,
          135 * Math.sin(orbital),
          46,
          C.rose,
        );
        for (let j = 0; j < 30; j++) {
          const u = (j * TAU) / 30 + rot;
          star(
            Math.cos(u) * 170,
            15 + Math.sin(u) * 55,
            Math.sin(u) * 90,
            3,
            C.gold,
            0.8,
          );
        }
        torus(0, 15, 0, 195, 1, C.ivory, 0.25);
        break;
      }
      case "friendship:2": {
        box(0, -10, 40, 300, 12, 30, C.wood);
        for (const x of [-110, 110]) {
          box(x, -79, 40, 13, 152, 18, C.wood);
          torus(x, -4, 10, 25, 6, C.gold, 1, [Math.PI / 2, 0, 0]);
          segment([x, -24, 10], [x, -125 + 80 * a, 10], 2, C.ivory);
        }
        box(0, -126 + 80 * a, 10, 190, 15, 80, C.blue);
        star(0, -90 + 80 * a, 10, 25, C.gold);
        break;
      }
      case "custom:0": {
        plate(
          [
            [-90, -85],
            [90, -85],
            [0, 90],
          ],
          [0, 0, 0],
          C.blue,
          0.65,
          [0, rot, 0],
          115,
        );
        for (let j = 0; j < 7; j++)
          segment(
            [-220, 80 - j * 3, -30],
            [-35, 30 - j * 3, -30],
            1,
            C.ivory,
            0.5,
          );
        for (let j = 0; j < 7; j++)
          segment(
            [30, 20 - j * 6, -30],
            [230, -60 + j * 26, -30],
            1.7,
            [C.rose, C.gold, C.green, C.blue, C.violet][j % 5],
            a,
          );
        break;
      }
      case "custom:1": {
        cylinder(0, -140, 0, 86, 12, C.wood);
        cylinder(0, 140, 0, 86, 12, C.wood);
        for (let j = 0; j < 4; j++) {
          const u = (j * TAU) / 4;
          segment(
            [Math.cos(u) * 70, -134, Math.sin(u) * 70],
            [Math.cos(u) * 70, 134, Math.sin(u) * 70],
            4,
            C.gold,
          );
        }
        cylinder(0, 62, 0, 3, 132, C.blue, 0.09, 60);
        cylinder(0, -66, 0, 62, 132, C.blue, 0.09, 3);
        cylinder(
          0,
          95 + 35 * a,
          0,
          50 * (1 - a) + 1,
          20 + 25 * (1 - a),
          C.gold,
        );
        cylinder(0, -127 + 30 * a, 0, 20 + 35 * a, 35 * a + 0.1, C.gold, 1, 1);
        for (let j = 0; j < 14; j++)
          sphere(
            0,
            50 - ((clock * 45 + j * 12) % 166),
            0,
            2,
            C.gold,
            0.8 * (1 - a),
          );
        break;
      }
      case "custom:2": {
        for (let j = 0; j < 3; j++) {
          const x = -155 + j * 155;
          box(x, -100, 0, 10, 100, 10, C.gold);
          box(x, 15, 0, 105, 135, 8, C.wood, 1, [
            0,
            Math.sin(rot + j) * 0.25,
            0,
          ]);
          star(x, 20, -10, 27, [C.rose, C.blue, C.gold][j], 1, [
            0,
            Math.sin(rot + j) * 0.25,
            0,
          ]);
        }
        break;
      }
      case "birthday:0": {
        cylinder(0, -125, 0, 120, 12, C.ivory);
        cylinder(0, -76, 0, 98, 87, C.rose);
        cylinder(0, -31, 0, 99, 7, C.ivory);
        for (let j = 0; j < 18; j++) {
          const u = (j * TAU) / 18;
          sphere(Math.cos(u) * 94, -28, Math.sin(u) * 94, 6, C.ivory);
          star(Math.cos(u) * 103, -70, Math.sin(u) * 103, 5, C.gold, 1, [
            0,
            -u,
            0,
          ]);
        }
        for (let j = 0; j < 5; j++) {
          const u = (j * TAU) / 5,
            x = Math.cos(u) * 45,
            z = Math.sin(u) * 45;
          cylinder(x, 3, z, 4, 62, C.gold);
          sphere(
            x,
            42 + Math.sin(clock * 2 + j) * 2,
            z,
            7,
            C.orange,
            a,
            [0.5, 1.7, 0.5],
          );
        }
        torus(0, -128, 0, 135, 4, C.gold);
        break;
      }
      case "birthday:1": {
        torus(0, 0, 0, 110, 13, C.gold, 1, [Math.PI / 2, 0, 0]);
        cylinder(0, 0, 0, 102, 8, C.dark, 1, 102, [Math.PI / 2, 0, 0]);
        for (let j = 0; j < 12; j++) {
          const u = (j * TAU) / 12;
          box(Math.sin(u) * 88, Math.cos(u) * 88, -8, 4, 12, 4, C.ivory, 1, [
            0,
            0,
            -u,
          ]);
        }
        box(0, 35, -12, 7, 70, 4, C.gold, 1, [0, 0, -a * TAU]);
        box(24, 15, -16, 7, 60, 4, C.rose, 1, [0, 0, -a * Math.PI]);
        for (let j = 0; j < 3; j++)
          torus(-160 + j * 155, -105, 60, 30, 6, C.violet, 1, [
            Math.PI / 2,
            0,
            0,
          ]);
        break;
      }
      case "birthday:2": {
        box(0, -90, 0, 135, 110, 135, C.rose);
        box(0, -31 + 130 * a, 0, 143, 12, 143, C.gold, 1, [
          a * 0.35,
          rot * a,
          0,
        ]);
        box(0, -20 + 45 * b, 0, 76, 72, 76, C.blue, b);
        box(0, 22 + 80 * b, 0, 80, 8, 80, C.ivory, b);
        star(0, 82 + 55 * b, 0, 28, C.gold, b, [0, rot, 0]);
        for (const x of [-48, 48]) box(x, -90, -68, 8, 110, 3, C.ivory);
        break;
      }
      case "friendbirthday:0": {
        box(0, -70, 0, 350, 32, 210, C.wood);
        box(0, -50, 0, 320, 8, 180, C.green);
        for (const z of [-98, 98]) box(0, -37, z, 345, 27, 6, C.wood);
        for (let j = 0; j < 4; j++) {
          const z = -66 + j * 44;
          segment([-185, -24, z], [185, -24, z], 3, C.gold);
          for (let n = 0; n < 3; n++) {
            const x = -95 + n * 95,
              angle = Math.sin(clock * 0.8 + j) * 0.32;
            box(x, -34, z, 14, 25, 12, j % 2 ? C.rose : C.blue, 1, [
              angle,
              0,
              0,
            ]);
            sphere(x, -14, z, 6, C.ivory);
          }
        }
        sphere(
          Math.sin(clock * 0.8) * 120,
          -37,
          Math.cos(clock * 1.1) * 65,
          9,
          C.ivory,
        );
        break;
      }
      case "friendbirthday:1": {
        cylinder(0, -35, 0, 120, 25, C.gold);
        cylinder(0, -20, 0, 112, 3, C.dark);
        plate(
          [
            [-14, -80],
            [0, 98],
            [14, -80],
          ],
          [0, -10, 0],
          C.rose,
          1,
          [Math.PI / 2, rot + Math.sin(clock * 0.4) * 0.7, 0],
        );
        torus(0, -18, 0, 118, 5, C.ivory);
        for (let j = 0; j < 16; j++) {
          const u = (j * TAU) / 16;
          box(Math.cos(u) * 99, -15, Math.sin(u) * 99, 4, 4, 12, C.ivory, 1, [
            0,
            -u,
            0,
          ]);
        }
        break;
      }
      case "friendbirthday:2": {
        box(0, -151, 0, 370, 8, 170, C.wood);
        const u = q(0.1, 0.92),
          x = -150 + 300 * u,
          ramp = -100 + ((u - 0.5) / 0.5) ** 2 * 70,
          y = ramp + 17 + Math.sin(u * Math.PI) * 110;
        box(x, y, 0, 90, 8, 28, C.blue, 1, [
          0,
          0,
          Math.cos(u * Math.PI) * 0.18,
        ]);
        for (const z of [-16, 16])
          for (const xx of [-28, 28]) sphere(x + xx, y - 10, z, 7, C.dark);
        for (let j = 0; j < 10; j++) {
          const z = (j - 4.5) / 4.5;
          box(-157.5 + j * 35, -100 + z * z * 70, 0, 36, 7, 130, C.gold, 1, [
            0,
            0,
            z * 0.65,
          ]);
        }
        break;
      }
      case "march:0": {
        cylinder(0, -119, 0, 55, 70, C.blue, 0.7, 27);
        segment([0, -80, 0], [0, 60, 0], 3, C.green);
        for (let j = 0; j < 9; j++) {
          const u = (j * TAU) / 9 + rot;
          sphere(
            Math.cos(u) * 40 * a,
            65 + Math.sin(u * 2) * 5,
            Math.sin(u) * 40 * a,
            28,
            C.rose,
            0.9,
            [1, 0.28, 0.6],
            [0, -u, Math.sin(u) * 0.2],
          );
        }
        sphere(0, 66, 0, 13, C.gold);
        break;
      }
      case "march:1": {
        cylinder(0, -88, 0, 62, 120, C.ivory, 1, 31);
        torus(0, -25, 0, 33, 4, C.gold);
        for (let j = 0; j < 11; j++) {
          const u = j * 2.399,
            x = Math.cos(u) * (30 + 10 * a) + Math.sin(clock + j) * 8,
            z = Math.sin(u) * 30,
            y = 65 + (j % 3) * 18;
          segment([0, -18, 0], [x, y, z], 2, C.green);
          for (let n = 0; n < 5; n++) {
            const v = (n * TAU) / 5;
            sphere(
              x + Math.cos(v) * 11,
              y,
              z + Math.sin(v) * 11,
              9,
              j % 2 ? C.rose : C.gold,
              1,
              [1, 0.4, 1],
            );
          }
        }
        break;
      }
      case "march:2": {
        box(0, -58, 0, 105, 160, 65, C.blue, 0.8);
        box(0, 30, 0, 60, 18, 45, C.gold);
        cylinder(0, 50, 0, 24, 25, C.dark);
        sphere(0, 77, 0, 15, C.gold, 1, [1, 0.4, 1]);
        for (let j = 0; j < 16; j++) {
          const u = j * 2.4 + rot;
          sphere(
            Math.cos(u) * 100,
            80 + j * 3 + Math.sin(clock + j) * 8,
            Math.sin(u) * 60,
            3,
            C.rose,
            a,
          );
        }
        box(0, -58, -34, 53, 68, 3, C.ivory);
        star(0, -58, -38, 15, C.rose);
        break;
      }
      case "romance:0": {
        torus(0, 2, 0, 88, 8, C.gold, 1, [Math.PI / 2, 0, 0]);
        cylinder(0, 2, 0, 83, 8, C.rose, 1, 83, [Math.PI / 2, 0, 0]);
        cylinder(
          -85 + 85 * Math.cos(a * 1.8),
          2,
          -85 * Math.sin(a * 1.8),
          83,
          8,
          C.gold,
          1,
          83,
          [Math.PI / 2, a * 1.8, 0],
        );
        const pts = Array.from({ length: 48 }, (_, j) => {
          const u = (j * TAU) / 48;
          return [
            3.5 * 16 * Math.sin(u) ** 3,
            3.5 *
              (13 * Math.cos(u) -
                5 * Math.cos(2 * u) -
                2 * Math.cos(3 * u) -
                Math.cos(4 * u)),
          ];
        });
        plate(pts, [0, 8, -8], C.ivory);
        torus(0, 109, 0, 17, 4, C.gold, 1, [Math.PI / 2, 0, 0]);
        break;
      }
      case "romance:1": {
        box(0, 130, 0, 260, 13, 45, C.wood);
        for (let j = 0; j < 2; j++) {
          const x = j ? 75 : -75,
            angle = (j ? -1 : 1) * (0.22 - Math.sin(clock * 0.65) * 0.12) * a,
            xx = x + Math.sin(angle) * 130,
            yy = 130 - Math.cos(angle) * 130;
          segment([x, 130, 0], [xx, yy, 0], 2, C.gold);
          sphere(xx, yy, 0, 28, j ? C.rose : C.blue);
          torus(x, 125, 0, 9, 3, C.gold, 1, [Math.PI / 2, 0, 0]);
        }
        for (const x of [-130, 130]) box(x, -10, 0, 10, 270, 35, C.wood);
        break;
      }
      case "romance:2": {
        box(0, -148, 0, 350, 8, 195, C.wood);
        for (const x of [-85, 85]) {
          box(x, -113, 0, 58, 10, 58, C.gold);
          for (const dx of [-25, 25])
            for (const z of [-25, 25]) box(x + dx, -35, z, 4, 150, 4, C.gold);
          box(x, -35, -26, 48, 136, 1, C.blue, 0.055);
          box(x, -35, 26, 48, 136, 1, C.blue, 0.055);
          sphere(
            x,
            -28 + Math.sin(clock * 1.4) * 1.5,
            0,
            15,
            C.orange,
            a,
            [0.45, 1.6, 0.45],
          );
          cylinder(x, 47, 0, 47, 25, C.wood, 1, 12);
          torus(x, 71, 0, 13, 3, C.gold, 1, [Math.PI / 2, 0, 0]);
        }
        for (let j = 0; j < 14; j++)
          sphere(
            -150 + j * 23,
            120 - Math.sin((j / 13) * Math.PI) * 40,
            15,
            3,
            C.gold,
            b,
          );
        break;
      }
      case "may7:0": {
        segment([-110, -150, 0], [-110, 165, 0], 4, C.gold);
        sphere(-110, 170, 0, 9, C.gold);
        for (let j = 0; j < 20; j++) {
          const x = -105 + j * 13,
            z = Math.sin(j * 0.23 + clock * 0.8) * 13 * a;
          box(x, 90, z, 14, 110, 3, C.blue);
          if (j === 10) star(x, 90, z - 3, 22, C.gold, 1, [0, 0, rot * 0.1]);
        }
        break;
      }
      case "may7:1": {
        groupOffset = [-70 + 140 * a, -30 + 60 * a, 0];
        sphere(0, 20, 0, 45, C.ivory, 1, [3, 0.35, 0.5], [0, rot * 0.2, 0.07]);
        plate(
          [
            [-60, -10],
            [40, 0],
            [70, 120],
            [-30, 100],
          ],
          [0, 20, 0],
          C.blue,
          1,
          [Math.PI / 2, 0, 0],
        );
        plate(
          [
            [-60, -10],
            [40, 0],
            [70, -120],
            [-30, -100],
          ],
          [0, 20, 0],
          C.blue,
          1,
          [Math.PI / 2, 0, 0],
        );
        sphere(70, 30, 0, 16, C.dark, 1, [1, 0.3, 0.5]);
        for (let j = 0; j < 10; j++)
          sphere(-180 - j * 8, 18, 0, 2, C.ivory, a * (1 - j / 10));
        break;
      }
      case "may7:2": {
        for (const x of [-65, 65])
          for (const z of [-65, 65])
            segment([x, -150, z], [x * 0.5, 110, z * 0.5], 7, C.wood);
        box(0, 70, 0, 140, 45, 140, C.blue);
        cylinder(0, 105, 0, 85, 45, C.gold, 1, 0);
        sphere(0, 96, 0, 13, C.ivory);
        for (let j = 0; j < 12; j++) {
          const u = rot * 2,
            xx = Math.cos(u) * (30 + j * 13),
            zz = Math.sin(u) * (30 + j * 13);
          sphere(xx, 85 - j * 3, zz, 3 + j * 0.2, C.gold, a * 0.1);
        }
        break;
      }
      case "newyear:0": {
        cylinder(0, -120, 0, 112, 44, C.wood);
        glassSphere(0, 10, 0, 140);
        tree(0, 15, 145);
        cylinder(0, -92, 0, 97, 8, C.ivory);
        for (let j = 0; j < 50; j++) {
          const d = s.dots[j],
            u = j * 2.4;
          sphere(
            Math.cos(u) * 100 * d.r,
            -80 + ((clock * 10 + j * 13) % 200),
            Math.sin(u) * 100 * d.r,
            1.6,
            C.ivory,
            0.6,
          );
        }
        break;
      }
      case "newyear:1": {
        for (let j = 0; j < 4; j++) {
          const r = 110 - j * 24,
            y = -95 + j * 58;
          cylinder(0, y, 0, r, 77, C.blue, 0.83, 0, [0, rot * 0.25, 0], 6);
          for (let z = 0; z < 8; z++) {
            const u = (z * TAU) / 8;
            star(
              Math.cos(u) * r * 0.7,
              y - 8,
              Math.sin(u) * r * 0.7,
              6,
              C.gold,
              a,
              [0, -u, 0],
            );
          }
        }
        star(0, 138, 0, 24, C.gold, b, [0, rot, 0]);
        break;
      }
      case "newyear:2": {
        box(0, 0, 0, 210, 235, 75, C.wood);
        cylinder(0, 10, -41, 85, 5, C.dark, 1, 85, [Math.PI / 2, 0, 0]);
        torus(0, 10, -44, 88, 5, C.gold, 1, [Math.PI / 2, 0, 0]);
        box(0, 42, -49, 5, 64, 3, C.ivory, 1, [0, 0, -a * TAU]);
        box(16, 27, -51, 5, 45, 3, C.gold, 1, [0, 0, (-a * Math.PI) / 2]);
        sphere(0, -115, 0, 23, C.gold, 1, [1, 1, 0.35]);
        segment([0, -78, 0], [Math.sin(clock * 0.9) * 24, -115, 0], 2, C.gold);
        break;
      }
      case "september:0": {
        box(0, -103, 0, 340, 14, 190, C.wood);
        for (let j = 0; j < 5; j++) {
          const x = -125 + j * 63;
          segment([x, -94, 0], [x, -30 + (j % 2) * 25, 0], 2, C.gold);
          sphere(
            x,
            -8 + (j % 2) * 25,
            0,
            18 + j * 4,
            [C.gold, C.blue, C.rose, C.green, C.violet][j],
          );
          if (j === 3) torus(x, 17, 0, 43, 3, C.ivory, 1, [0.25, 0, 0.2]);
        }
        box(0, -80, 70, 135, 14, 70, C.blue);
        break;
      }
      case "september:1": {
        for (const x of [-160, 160]) box(x, -5, 0, 16, 240, 28, C.wood);
        for (let j = 0; j < 5; j++) {
          const y = -85 + j * 43;
          segment([-153, y, 0], [153, y, 0], 2, C.gold);
          for (let n = 0; n < 6; n++) {
            const shift = Math.sin(clock * 0.5 + j) * 20 * a;
            torus(
              -100 + n * 33 + shift,
              y,
              0,
              13,
              7,
              j % 2 ? C.rose : C.blue,
              1,
              [0, 0, Math.PI / 2],
              12,
              6,
            );
          }
        }
        break;
      }
      case "september:2": {
        cylinder(0, -115, 0, 100, 48, C.wood);
        segment([0, -90, 0], [0, 45, 0], 5, C.gold);
        sphere(0, 45, 0, 38, C.gold);
        for (let j = 0; j < 4; j++) {
          const u = rot * (1 + j * 0.25) + j,
            R = 65 + j * 34;
          torus(0, 45, 0, R, 1.4, C.ivory, 0.4);
          segment(
            [0, 45, 0],
            [Math.cos(u) * R, 45, Math.sin(u) * R],
            2,
            C.gold,
          );
          sphere(
            Math.cos(u) * R,
            45,
            Math.sin(u) * R,
            8 + j * 3,
            [C.blue, C.rose, C.green, C.violet][j],
          );
        }
        break;
      }
      case "summer:0": {
        for (const x of [-155, 155]) {
          cylinder(x, -32, 0, 10, 236, C.wood);
          sphere(x, 103, 0, 50, C.green, 1, [1.3, 0.7, 1]);
        }
        for (let j = 0; j < 24; j++) {
          const x = -150 + j * 13,
            y = 35 - Math.sin((j / 23) * Math.PI) * 100;
          box(
            x,
            y,
            Math.sin(clock * 0.5) * 8 * Math.sin((j * Math.PI) / 23),
            14,
            3,
            65,
            j % 2 ? C.ivory : C.blue,
            1,
            [0, 0, Math.cos((j / 23) * Math.PI) * -0.4],
          );
        }
        break;
      }
      case "summer:1": {
        groupRotation = [0, clock * 0.25, 0];
        for (let j = 0; j < 70; j++) {
          const u = j * 0.18,
            r = 7 + j * 0.9,
            x = Math.cos(u) * r,
            y = Math.sin(u) * r,
            z = j * 0.7;
          sphere(x, y, z, 7 + j * 0.22, C.ivory, 1, [1, 0.8, 0.7]);
          if (j % 5 === 0)
            torus(
              x,
              y,
              z,
              9 + j * 0.22,
              1,
              C.rose,
              0.3,
              [Math.PI / 2, 0, u],
              12,
              4,
            );
        }
        break;
      }
      case "summer:2": {
        cylinder(0, -137, 0, 185, 14, C.blue);
        torus(0, -128, 0, 188, 12, C.ivory);
        const y = -97 + Math.sin(clock * 0.8) * 3;
        sphere(0, y, 0, 36, C.gold, 1, [1.4, 0.8, 1]);
        sphere(32, y + 33, -2, 19, C.gold);
        plate(
          [
            [0, 8],
            [27, 0],
            [0, -8],
          ],
          [45, y + 31, -5],
          C.orange,
        );
        sphere(40, y + 40, -17, 2, C.dark);
        for (let j = 0; j < 5; j++)
          torus(
            0,
            -128,
            0,
            50 + j * 25 + ((clock * 8) % 25),
            1,
            C.ivory,
            0.2 * (1 - j / 5),
          );
        break;
      }
      case "memorial:0": {
        cylinder(0, -88, 0, 67, 120, C.blue, 0.08);
        torus(0, -26, 0, 67, 2, C.ivory, 0.3);
        cylinder(0, -85, 0, 24, 112, C.ivory);
        sphere(0, -15, 0, 8, C.gold, k, [0.4, 1.6, 0.4]);
        cylinder(0, -147, 0, 84, 5, C.wood);
        break;
      }
      case "memorial:1": {
        for (let j = 0; j < 5; j++)
          sphere(
            j % 2 ? 5 : -5,
            -125 + j * 27,
            0,
            55 - j * 7,
            "#889a9e",
            1,
            [1, 0.28, 0.8],
            [0, j * 0.3, 0],
          );
        for (let j = 0; j < 5; j++)
          torus(0, -151, 0, 90 + j * 28, 1, C.blue, 0.13);
        break;
      }
      case "memorial:2": {
        box(0, -67, 0, 230, 13, 67, C.wood);
        box(0, -12, 35, 230, 60, 9, C.wood);
        for (const x of [-85, 85])
          for (const z of [-20, 25]) box(x, -109, z, 7, 85, 7, C.dark);
        segment([150, -150, 65], [145, 115, 65], 8, C.wood);
        for (let j = 0; j < 9; j++) {
          const u = j * 2.4;
          sphere(
            125 + Math.cos(u) * 65,
            100 + Math.sin(u) * 30,
            65 + Math.sin(u) * 50,
            34,
            C.green,
            0.8,
            [1, 0.4, 1],
          );
        }
        break;
      }
      case "newborn:0": {
        groupOrigin = [0, -120, 0];
        groupRotation = [0, 0, Math.sin(clock * 0.7) * 0.035];
        const rocker = Array.from({ length: 30 }, (_, j) => {
          const u = (j * Math.PI) / 29;
          return [Math.cos(u) * 105, -120 - Math.sin(u) * 30];
        }).concat(
          Array.from({ length: 30 }, (_, j) => {
            const u = Math.PI - (j * Math.PI) / 29;
            return [Math.cos(u) * 105, -110 - Math.sin(u) * 30];
          }),
        );
        for (const z of [-29, 29])
          plate(rocker, [0, 0, z], C.wood, 1, [0, 0, 0], 7);
        box(0, -53, 0, 120, 55, 45, C.wood);
        box(50, -15, 0, 26, 100, 35, C.wood, 1, [0, 0, -0.25]);
        sphere(64, 37, 0, 25, C.wood, 1, [1.2, 0.6, 0.65]);
        for (const x of [-43, 43]) box(x, -108, 0, 12, 64, 30, C.wood);
        sphere(78, 43, -18, 3, C.dark);
        box(-66, -33, 0, 8, 45, 8, C.wood, 1, [0, 0, -0.35]);
        break;
      }
      case "newborn:1": {
        groupRotation = [0, 0, Math.sin(clock * 0.8) * 0.16];
        const angle = 0;
        segment([-62, -80, 0], [60, 90, 0], 12, C.wood);
        torus(-62, -80, 0, 40, 8, C.gold, 1, [Math.PI / 2, 0, angle]);
        sphere(60, 90, 0, 45, C.blue);
        for (let j = 0; j < 8; j++) {
          const u = (j * TAU) / 8;
          star(
            60 + Math.cos(u) * 41,
            90 + Math.sin(u) * 41,
            -12,
            5,
            C.ivory,
            1,
            [0, 0, u],
          );
        }
        break;
      }
      case "newborn:2": {
        for (let j = 0; j < 5; j++) {
          const row = j < 3 ? 0 : 1,
            x = j < 3 ? -82 + j * 82 : -41 + (j - 3) * 82,
            y = -110 + row * 82;
          box(
            x,
            y + (1 - q(0.1 + j * 0.1, 0.4 + j * 0.1)) * 80,
            0,
            77,
            77,
            77,
            [C.blue, C.rose, C.gold, C.green, C.violet][j],
          );
          star(x, y, -40, 17, C.ivory, q(0.1 + j * 0.1, 0.4 + j * 0.1));
        }
        break;
      }
      case "nauryz:0": {
        cylinder(0, -74, 0, 145, 148, C.ivory);
        cylinder(0, 30, 0, 149, 58, C.wood, 1, 40);
        torus(0, 65, 0, 40, 6, C.gold);
        for (let j = 0; j < 24; j++) {
          const u = (j * TAU) / 24;
          segment(
            [Math.cos(u) * 145, -145, Math.sin(u) * 145],
            [Math.cos(u) * 145, -4, Math.sin(u) * 145],
            2,
            C.rose,
          );
          segment(
            [Math.cos(u) * 149, 4, Math.sin(u) * 149],
            [Math.cos(u) * 40, 63, Math.sin(u) * 40],
            2,
            C.gold,
          );
        }
        box(0, -91, -147, 49, 109, 5, C.wood);
        star(0, -78, -151, 16, C.gold);
        break;
      }
      case "nauryz:1": {
        groupRotation = [0, 0, Math.sin(clock * 0.6) * 0.04];
        sphere(0, -70, 0, 69, C.wood, 1, [0.6, 1.1, 0.25]);
        box(0, 42, 0, 17, 170, 14, C.wood);
        box(0, 136, 0, 30, 23, 15, C.gold);
        for (const x of [-3, 3])
          segment([x, -114, -18], [x, 137, -10], 0.9, C.ivory);
        for (let j = 0; j < 6; j++) box(0, 20 + j * 16, -9, 17, 2, 3, C.gold);
        for (let j = 0; j < 10; j++)
          sphere(
            35 + j * 9,
            25 + Math.sin(clock + j * 0.5) * 16,
            0,
            2,
            C.gold,
            a * 0.55,
          );
        break;
      }
      case "nauryz:2": {
        sphere(0, 20, 0, 35, C.wood, 1, [0.55, 1.1, 0.6]);
        sphere(0, 61, 0, 17, C.gold);
        plate(
          [
            [0, 0],
            [160, 48],
            [180, 12],
            [80, -10],
          ],
          [0, 30, 0],
          C.wood,
          1,
          [0, Math.sin(clock * 0.8) * 0.1, -0.12],
        );
        plate(
          [
            [0, 0],
            [-160, 48],
            [-180, 12],
            [-80, -10],
          ],
          [0, 30, 0],
          C.wood,
          1,
          [0, -Math.sin(clock * 0.8) * 0.1, 0.12],
        );
        for (let j = 0; j < 7; j++) {
          box(60 + j * 16, 34 + j * 3, 6, 15, 3, 24, C.gold);
          box(-60 - j * 16, 34 + j * 3, 6, 15, 3, 24, C.gold);
        }
        break;
      }
      case "anniversary:0": {
        for (let j = 0; j < 2; j++) {
          const x = j ? 80 : -80;
          cylinder(x, -55, 0, 8, 190, C.wood);
          for (let n = 0; n < 9; n++) {
            const u = n * 2.4;
            sphere(
              x + Math.cos(u) * 40,
              45 + Math.sin(u) * 30,
              Math.sin(u) * 30,
              30,
              j ? C.rose : C.green,
            );
          }
        }
        for (let j = 0; j < 13; j++)
          sphere(-80 + j * 13, -126, -60, 5, C.gold, b);
        break;
      }
      case "anniversary:1": {
        box(0, -98, 0, 310, 90, 225, C.wood);
        cylinder(-30, -49, 0, 100, 5, C.dark);
        torus(-30, -45, 0, 79, 1, C.ivory, 0.25);
        torus(-30, -45, 0, 64, 1, C.ivory, 0.25);
        cylinder(-30, -44, 0, 30, 3, C.rose);
        segment([125, -41, 70], [75, -25, 0], 3, C.gold);
        segment([75, -25, 0], [37, -25, -30], 3, C.ivory);
        star(-30 + Math.cos(rot) * 15, -40, Math.sin(rot) * 15, 5, C.gold, 1, [
          Math.PI / 2,
          0,
          0,
        ]);
        break;
      }
      case "anniversary:2": {
        segment([0, -150, 45], [0, 155, 45], 5, C.gold);
        torus(0, 132, 0, 140, 3, C.gold);
        for (let j = 0; j < 5; j++) {
          const u = (j * TAU) / 5 + rot * 0.3,
            x = Math.cos(u) * 140,
            z = Math.sin(u) * 140;
          segment([x, 130, z], [x, 45, z], 1, C.ivory);
          box(x, 7, z, 65, 78, 5, C.wood, 1, [0, -u, 0]);
          star(x, 7, z - 4, 13, C.rose, 1, [0, -u, 0]);
        }
        break;
      }
      case "halloween:0": {
        house(0, 0, 180, 180, a);
        box(-63, 58, 0, 40, 55, 55, C.violet);
        cylinder(-63, 104, 0, 39, 40, C.dark, 1, 0);
        for (let j = 0; j < 4; j++) {
          const x = -110 + j * 72;
          box(x, -130, -100, 28, 50, 9, C.dark);
          star(x, -112, -107, 5, C.gold, b);
        }
        break;
      }
      case "halloween:1": {
        for (let j = 0; j < 10; j++) {
          const u = (j * TAU) / 10;
          sphere(
            Math.cos(u) * 32,
            -15,
            Math.sin(u) * 32,
            70,
            C.orange,
            1,
            [0.52, 1, 0.52],
          );
        }
        cylinder(0, 63, 0, 10, 35, C.green, 1, 6, [0, 0, -0.18]);
        plate(
          [
            [-39, 14],
            [-11, 18],
            [-27, -4],
          ],
          [0, 0, -74],
          C.gold,
          a,
        );
        plate(
          [
            [11, 18],
            [39, 14],
            [27, -4],
          ],
          [0, 0, -74],
          C.gold,
          a,
        );
        plate(
          [
            [-33, -26],
            [0, -38],
            [33, -26],
            [22, -44],
            [-22, -44],
          ],
          [0, 0, -73],
          C.gold,
          a,
        );
        break;
      }
      case "halloween:2": {
        cylinder(0, -95, 0, 145, 10, C.violet);
        cylinder(0, 8, 0, 96, 196, C.violet, 1, 0, [0, 0, -0.15]);
        torus(0, -60, 0, 80, 5, C.orange);
        for (let j = 0; j < 9; j++) {
          const u = rot * 2 + (j * TAU) / 9;
          star(
            Math.cos(u) * 170,
            10 + Math.sin(u) * 50,
            Math.sin(u) * 110,
            9,
            C.gold,
            a,
            [0, -u, 0],
          );
        }
        break;
      }
      case "wedding:0": {
        torus(-65 + 40 * a, 10, 0, 90, 11, C.gold, 1, [
          Math.PI / 2,
          rot * 0.35,
          0.2,
        ]);
        torus(65 - 40 * a, 10, 20, 90, 11, C.ivory, 1, [
          Math.PI / 2,
          -rot * 0.3,
          -0.2,
        ]);
        for (let j = 0; j < 10; j++)
          sphere(Math.cos(j) * 170, -140, Math.sin(j) * 70, 4, C.rose, b);
        break;
      }
      case "wedding:1": {
        cylinder(0, -122, 0, 115, 55, C.wood);
        cylinder(0, -91, 0, 111, 6, C.gold);
        groupRotation = [0, clock * 0.25, 0];
        for (const x of [-33, 33]) {
          cylinder(x, -20, 0, 17, 122, x < 0 ? C.blue : C.ivory, 1, 8);
          sphere(x, 54, 0, 13, C.ivory);
          segment([x, 9, 0], [-x, 9, -17], 3, C.gold);
        }
        torus(0, -86, 0, 95, 2, C.rose);
        break;
      }
      case "wedding:2": {
        for (const x of [-76, 76]) {
          cylinder(x, -145, 0, 50, 5, C.gold);
          segment([x, -140, 0], [x, -52, 0], 3, C.ivory);
          cylinder(x, 6, 0, 13, 105, C.blue, 0.16, 43);
          cylinder(x, -4, 0, 22, 60, C.gold, 0.8, 36);
          torus(x, 60, 0, 43, 2, C.ivory, 0.6);
          for (let j = 0; j < 9; j++)
            sphere(
              x + Math.sin(j) * 12,
              -26 + ((clock * 15 + j * 13) % 65),
              0,
              1.8,
              C.ivory,
              0.55,
            );
        }
        break;
      }
      case "graduation:0": {
        groupRotation = [
          0,
          Math.sin(clock * 0.3) * 0.4,
          Math.sin(clock * 0.2) * 0.08,
        ];
        cylinder(0, -22, 0, 37, 245, C.ivory, 1, 37, [0, 0, Math.PI / 2]);
        torus(0, -22, 0, 39, 9, C.rose, 1, [0, 0, Math.PI / 2]);
        plate(
          [
            [0, 0],
            [20, -40],
            [27, 0],
            [13, -8],
          ],
          [0, -57, -10],
          C.rose,
        );
        plate(
          [
            [0, 0],
            [-20, -40],
            [-27, 0],
            [-13, -8],
          ],
          [0, -57, -10],
          C.rose,
        );
        star(100, -26, -37, 15, C.gold);
        break;
      }
      case "graduation:1": {
        cylinder(0, -137, 0, 80, 15, C.wood);
        segment([0, -125, 0], [0, -15, 0], 6, C.gold);
        sphere(0, 29, 0, 91, C.blue);
        for (let j = 0; j < 6; j++) {
          const u = j;
          plate(
            [
              [-15, 0],
              [10, 24],
              [30, 3],
              [18, -30],
              [-8, -16],
            ],
            [Math.cos(u) * 80, 30, Math.sin(u) * 80],
            C.green,
            1,
            [0, -u, 0],
            2,
          );
        }
        box(0, 136 + 35 * a, 0, 160, 9, 160, C.dark, 1, [0, rot * 0.3, 0]);
        cylinder(0, 118 + 35 * a, 0, 50, 28, C.dark);
        segment([70, 135 + 35 * a, -60], [82, 93 + 35 * a, -65], 2, C.gold);
        break;
      }
      case "graduation:2": {
        for (const x of [-105, 105])
          segment([0, -70, 0], [x, -150, 50], 5, C.gold);
        segment([0, -70, 0], [0, -150, -80], 5, C.gold);
        segment([0, -70, 0], [0, 25, 0], 5, C.gold);
        const r = [0.9 - a * 0.15, 0, -0.55 + a * 0.25],
          end = rotate([0, 115, 0], r);
        cylinder(0, 25, 0, 34, 230, C.blue, 1, 27, r);
        cylinder(end[0], 25 + end[1], end[2], 32, 12, C.gold, 1, 32, r);
        star(170, 137, -50, 14, C.gold, b);
        break;
      }
      case "housewarming:0": {
        box(0, -150, 0, 290, 9, 230, C.wood);
        box(-145, -45, 0, 9, 210, 230, C.ivory);
        box(0, -45, 115, 290, 210, 9, C.ivory);
        box(45, -85, 40, 130, 75, 60, C.violet);
        box(45, -58, 75, 130, 27, 12, C.rose);
        box(-45, -122, -45, 75, 12, 55, C.wood);
        cylinder(-85, -98, 65, 25, 80, C.ivory);
        flowers(-85, -56, 65, 5);
        break;
      }
      case "housewarming:1": {
        for (let j = 0; j < 6; j++) {
          box(-140 + j * 52, -134 + j * 34, 0, 54, 13, 95, C.wood);
          box(-140 + j * 52, -149 + j * 17, 25, 7, 34 + j * 34, 7, C.gold);
        }
        cylinder(135, 45, 0, 32, 55, C.rose);
        flowers(135, 72, 0, 7);
        break;
      }
      case "housewarming:2": {
        torus(-85, 5, 0, 65, 12, C.gold, 1, [Math.PI / 2, a * 0.4, 0]);
        box(35, 5, 0, 155, 15, 15, C.gold, 1, [0, a * 0.4, 0]);
        box(85, -13, 0, 13, 38, 15, C.gold);
        box(115, -13, 0, 13, 38, 15, C.gold);
        cylinder(-85, 5, 0, 42, 4, C.dark, 1, 42, [Math.PI / 2, 0, 0]);
        break;
      }
      case "success:0": {
        groupRotation = [0, clock * 0.23, 0];
        cylinder(0, -133, 0, 87, 24, C.wood);
        cylinder(0, -112, 0, 55, 17, C.gold);
        segment([0, -103, 0], [0, -27, 0], 12, C.gold);
        cylinder(0, 29, 0, 38, 105, C.gold, 1, 92);
        for (const x of [-90, 90])
          torus(x, 46, 0, 45, 7, C.gold, 1, [Math.PI / 2, 0, 0]);
        star(0, 30, -62, 28, C.ivory);
        break;
      }
      case "success:1": {
        box(0, -140, 0, 170, 15, 120, C.wood);
        box(0, -86, 0, 12, 102, 25, C.gold);
        box(0, -34, 0, 170, 9, 27, C.wood, 1, [0, 0, -a * 0.7]);
        const u = clamp((t - 1.6) / 5.5),
          x = -105 + 310 * u,
          y = -15 + 420 * u - 540 * u * u;
        star(x, y, 0, 24, C.gold, 1, [0, rot * 2, 0]);
        break;
      }
      case "success:2": {
        segment([-70, -150, 0], [-70, 120, 0], 8, C.wood);
        sphere(-70, 120, 0, 14, C.gold);
        for (let j = 0; j < 3; j++) {
          const u = (j * TAU) / 3 + clock * 0.8 * a;
          plate(
            [
              [0, 0],
              [95, 20],
              [120, 0],
              [26, -13],
            ],
            [-70, 120, -20],
            C.ivory,
            1,
            [0, 0, u],
          );
        }
        box(110, -103, 0, 70, 95, 70, C.dark);
        star(110, -25, 0, 35, C.gold, a);
        segment([-70, -135, 0], [110, -135, 0], 2, C.gold);
        break;
      }
      case "recovery:0": {
        cup(0, -90, 0, 55, C.green);
        steam(0, -45, 0, a);
        for (let j = 0; j < 3; j++)
          sphere(
            -115 + j * 22,
            -147,
            25,
            13,
            C.green,
            1,
            [1, 0.2, 0.5],
            [0, j * 0.4, 0],
          );
        torus(0, -125, 0, 86, 4, C.ivory);
        break;
      }
      case "recovery:1": {
        for (let j = 0; j < 3; j++)
          sphere(
            -95 + j * 90,
            -115,
            30 - j * 25,
            48,
            C.ivory,
            1,
            [1, 0.35, 0.7],
          );
        for (let j = 0; j < 6; j++)
          torus(
            0,
            -150,
            0,
            60 + j * 28 + ((clock * 4) % 28),
            1,
            C.blue,
            0.14 * (1 - j / 6),
          );
        break;
      }
      case "recovery:2": {
        for (let j = 0; j < 7; j++)
          sphere(
            -110 + j * 37,
            55 + Math.sin(j) * 12,
            0,
            48,
            C.ivory,
            0.9,
            [1, 0.65, 1],
          );
        for (let j = 0; j < 16; j++) {
          const d = s.dots[j];
          sphere(
            -110 + d.s * 230,
            40 - ((clock * 30 + j * 23) % 160),
            0,
            2,
            C.blue,
            (1 - b) * 0.6,
          );
        }
        sphere(128, 95, 20, 42, C.gold, b);
        break;
      }
    }
    faces.sort((a, b) => b.z - a.z);
    for (const f of faces) {
      g.save();
      g.globalAlpha = f.alpha;
      g.fillStyle = f.c;
      g.beginPath();
      f.pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y)));
      g.closePath();
      g.fill();
      if (f.alpha > 0.5) {
        g.strokeStyle = shade(f.c, 0.8);
        g.lineWidth = 0.4;
        g.stroke();
      }
      g.restore();
    }
    s.artStats = { style: "volume", faces: faces.length };
  }
  let paperGrain = null;
  function paper(s, t, topic, index) {
    const g = s.ctx,
      p = ease(t / (topic === "memorial" ? 11 : 8)),
      q = (a, b) => ease((p - a) / (b - a)),
      clock = t,
      k = q(0, 0.4),
      a = q(0.15, 0.75),
      b = q(0.6, 1),
      ink = "#574e51";
    const palette = {
      red: "#c67e80",
      blue: "#81a9b6",
      yellow: "#d0b571",
      green: "#94a889",
      purple: "#ac9db8",
      white: "#eee8dc",
      brown: "#b09479",
      dark: "#5b6370",
    };
    // One stable grain tile, not random noise regenerated on every frame.
    if (!paperGrain) {
      paperGrain = document.createElement("canvas");
      paperGrain.width = 240;
      paperGrain.height = 240;
      const z = paperGrain.getContext("2d");
      z.fillStyle = "#ece3d3";
      z.fillRect(0, 0, 240, 240);
      for (let i = 0; i < 1100; i++) {
        z.fillStyle = i % 2 ? "#a5907120" : "#fffaf33b";
        z.fillRect((i * 73) % 240, (i * 137) % 240, 1, 1);
      }
    }
    g.save();
    g.shadowBlur = 0;
    g.fillStyle = g.createPattern(paperGrain, "repeat");
    g.fillRect(0, 0, 1000, 600);
    g.lineJoin = "round";
    g.lineCap = "round";
    function cut(pts, c, alpha = 1, depth = 1) {
      if (alpha <= 0) return;
      g.save();
      g.globalAlpha = alpha;
      g.beginPath();
      pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y)));
      g.closePath();
      g.shadowColor = "#74645440";
      g.shadowOffsetX = 2 * depth;
      g.shadowOffsetY = 4 * depth;
      g.shadowBlur = 1;
      g.fillStyle = c;
      g.fill();
      g.shadowColor = "transparent";
      g.shadowOffsetX = 0;
      g.shadowOffsetY = 0;
      g.shadowBlur = 0;
      g.strokeStyle = shade(c, 0.78);
      g.lineWidth = 0.65;
      g.stroke();
      g.save();
      g.clip();
      const xs = pts.map((v) => v[0]),
        ys = pts.map((v) => v[1]),
        x = Math.min(...xs),
        y = Math.min(...ys),
        w = Math.max(...xs) - x,
        h = Math.max(...ys) - y;
      const grad = g.createLinearGradient(x, y, x + w, y + h);
      grad.addColorStop(0, "#ffffff27");
      grad.addColorStop(0.5, "#ffffff00");
      grad.addColorStop(1, "#48332a14");
      g.fillStyle = grad;
      g.fillRect(x, y, w, h);
      g.strokeStyle = "#ffffff24";
      g.lineWidth = 0.4;
      for (let j = 0; j < w + h; j += 17) {
        g.beginPath();
        g.moveTo(x + j, y);
        g.lineTo(x + j - h, y + h);
        g.stroke();
      }
      g.restore();
      g.restore();
    }
    function line(x, y, xx, yy, c = ink, width = 1, alpha = 1) {
      g.save();
      g.globalAlpha = alpha;
      g.strokeStyle = c;
      g.lineWidth = width;
      g.beginPath();
      g.moveTo(x, y);
      g.lineTo(xx, yy);
      g.stroke();
      g.restore();
    }
    function disk(x, y, r, c, alpha = 1, depth = 1) {
      cut(
        Array.from({ length: 40 }, (_, j) => [
          x + Math.cos((j * TAU) / 40) * r,
          y + Math.sin((j * TAU) / 40) * r,
        ]),
        c,
        alpha,
        depth,
      );
    }
    function rect(x, y, w, h, c, alpha = 1, depth = 1) {
      cut(
        [
          [x, y],
          [x + w, y],
          [x + w, y + h],
          [x, y + h],
        ],
        c,
        alpha,
        depth,
      );
    }
    function star(x, y, r, c, alpha = 1) {
      cut(
        Array.from({ length: 10 }, (_, j) => {
          const u = -Math.PI / 2 + (j * Math.PI) / 5,
            R = j % 2 ? r * 0.43 : r;
          return [x + Math.cos(u) * R, y + Math.sin(u) * R];
        }),
        c,
        alpha,
        2,
      );
    }
    function heart(x, y, r, c, alpha = 1) {
      const pts = Array.from({ length: 70 }, (_, j) => {
        const u = (j * TAU) / 70;
        return [
          x + r * 0.055 * 16 * Math.sin(u) ** 3,
          y -
            r *
              0.055 *
              (13 * Math.cos(u) -
                5 * Math.cos(2 * u) -
                2 * Math.cos(3 * u) -
                Math.cos(4 * u)),
        ];
      });
      cut(pts, c, alpha, 2);
      line(x, y - r * 0.4, x, y + r * 0.85, shade(c, 0.8), 0.7, alpha * 0.7);
    }
    function text(str, x, y, size = 20, c = ink, alpha = 1) {
      g.save();
      g.globalAlpha = alpha;
      g.fillStyle = c;
      g.font = `${size}px Georgia,serif`;
      g.textAlign = "center";
      g.fillText(str, x, y, 770);
      g.restore();
    }
    function crane(x, y, r, c, fold = 1) {
      cut(
        [
          [x - r, y],
          [x - r * 0.14, y - r * 0.58 * fold],
          [x + r * 0.18, y],
          [x + r * 0.7, y - r * 0.85 * fold],
          [x + r, y - r * 0.72 * fold],
          [x + r * 0.53, y - r * 0.56 * fold],
          [x + r * 0.3, y + r * 0.22],
          [x - r * 0.14, y + r * 0.1],
        ],
        c,
        1,
        2,
      );
      cut(
        [
          [x - r * 0.4, y],
          [x - r * 0.1, y - r * 0.95 * fold],
          [x + r * 0.24, y],
        ],
        shade(c, 1.13),
        1,
        1,
      );
      line(x - r * 0.6, y, x + r * 0.24, y, shade(c, 0.75), 0.7);
    }
    function flower(x, y, r, c, open = 1) {
      line(x, y + 10, x, y + 60, palette.green, 2);
      for (let j = 0; j < 7; j++) {
        const u = (j * TAU) / 7;
        cut(
          [
            [x, y],
            [
              x + Math.cos(u - 0.35) * r * open,
              y + Math.sin(u - 0.35) * r * open,
            ],
            [
              x + Math.cos(u) * r * 1.15 * open,
              y + Math.sin(u) * r * 1.15 * open,
            ],
            [
              x + Math.cos(u + 0.35) * r * open,
              y + Math.sin(u + 0.35) * r * open,
            ],
          ],
          j % 2 ? c : shade(c, 1.1),
          1,
          1,
        );
      }
      disk(x, y, r * 0.17, palette.yellow);
    }
    function fan(x, y, r, c, unfold = 1) {
      for (let j = 0; j < 14; j++) {
        const u = -Math.PI / 2 + (j - 6.5) * 0.16 * unfold;
        cut(
          [
            [x, y],
            [
              x + Math.cos(u - 0.08 * unfold) * r,
              y + Math.sin(u - 0.08 * unfold) * r,
            ],
            [
              x + Math.cos(u + 0.08 * unfold) * r,
              y + Math.sin(u + 0.08 * unfold) * r,
            ],
          ],
          j % 2 ? c : shade(c, 1.13),
          1,
          1,
        );
      }
      disk(x, y, 7, palette.yellow);
    }
    function house(x, y, w, c, open = 1) {
      rect(x - w / 2, y, w, 100 * open, c);
      cut(
        [
          [x - w * 0.62, y],
          [x, y - 75 * open],
          [x + w * 0.62, y],
        ],
        palette.red,
      );
      rect(x - 14, y + 48 * open, 28, 52 * open, palette.brown);
      for (const dir of [-1, 1])
        rect(
          x + dir * w * 0.29 - 12,
          y + 20 * open,
          24,
          24 * open,
          palette.yellow,
        );
    }
    function hills() {
      for (let j = 0; j < 4; j++) {
        const y = 365 + j * 35;
        cut(
          [
            [90, y + 60],
            [210, y],
            [330, y + 30],
            [455, y - 20],
            [620, y + 35],
            [780, y - 10],
            [910, y + 50],
            [910, 490],
            [90, 490],
          ],
          j % 2 ? palette.green : shade(palette.green, 1.1),
          0.85,
          j + 1,
        );
      }
    }
    function leaf(x, y, r, rot, c = palette.green) {
      const pts = [];
      for (let j = 0; j < 30; j++) {
        const u = (j * TAU) / 30,
          xx = Math.cos(u) * r,
          yy = Math.sin(u) * r * 0.35;
        pts.push([
          x + xx * Math.cos(rot) - yy * Math.sin(rot),
          y + xx * Math.sin(rot) + yy * Math.cos(rot),
        ]);
      }
      cut(pts, c);
      line(
        x - Math.cos(rot) * r * 0.8,
        y - Math.sin(rot) * r * 0.8,
        x + Math.cos(rot) * r * 0.8,
        y + Math.sin(rot) * r * 0.8,
        shade(c, 0.78),
        0.7,
      );
    }
    function rosette(x, y, r, c) {
      for (let j = 0; j < 24; j++) {
        const u = (j * TAU) / 24;
        cut(
          [
            [x, y],
            [x + Math.cos(u) * r, y + Math.sin(u) * r],
            [x + Math.cos(u + 0.13) * r, y + Math.sin(u + 0.13) * r],
          ],
          j % 2 ? c : shade(c, 1.15),
          1,
          1,
        );
      }
      disk(x, y, r * 0.65, palette.white);
      star(x, y, r * 0.36, palette.yellow);
    }
    switch (topic + ":" + index) {
      case "just:0": {
        line(120, 395, 870, 395, palette.brown, 2);
        rect(710, 252, 115, 143, palette.red);
        cut(
          [
            [700, 252],
            [766, 214],
            [836, 252],
          ],
          palette.blue,
        );
        const x = 190 + 500 * a,
          y = 285 - Math.sin(a * Math.PI) * 100;
        crane(x, y, 55, palette.blue, 0.7 + 0.3 * Math.sin(clock * 1.3));
        rect(x - 30, y + 10, 45, 28, palette.white);
        line(x - 30, y + 10, x - 7, y + 25, palette.red);
        line(x + 15, y + 10, x - 7, y + 25, palette.red);
        break;
      }
      case "just:1": {
        disk(700, 155, 46, palette.yellow);
        hills();
        const x = 430,
          y = 330;
        fan(x, y, 145, palette.red, 0.2 + 0.8 * a);
        line(x, y, x, y + 113, palette.brown, 4);
        for (let j = 0; j < 10; j++) {
          const xx = 240 + j * 55,
            yy = 440 - (j % 3) * 15;
          flower(xx, yy, 12, palette.yellow, b);
        }
        break;
      }
      case "just:2": {
        rect(190, 130, 620, 345, palette.white);
        line(500, 135, 500, 471, palette.brown, 1, 0.4);
        for (let j = 0; j < 7; j++) {
          const x = 290 + j * 66,
            y = 350 - (j % 3) * 35;
          flower(x, y, 20, palette.red, a);
        }
        text("Для тебя", 500, 440, 22, ink, b);
        break;
      }
      case "friendship:0": {
        const d = 130 * (1 - a);
        cut(
          [
            [130, 430],
            [360 - d, 280],
            [415 - d, 300],
            [475 - d, 375],
            [435 - d, 408],
            [350 - d, 380],
            [180, 475],
          ],
          palette.red,
        );
        cut(
          [
            [870, 430],
            [640 + d, 280],
            [585 + d, 300],
            [525 + d, 375],
            [565 + d, 408],
            [650 + d, 380],
            [820, 475],
          ],
          palette.blue,
        );
        heart(500, 315, 45, palette.yellow, b);
        break;
      }
      case "friendship:1": {
        line(170, 160, 830, 160, palette.brown, 1.5);
        for (let j = 0; j < 7; j++) {
          const x = 230 + j * 90,
            y = 210 + Math.sin(clock * 0.5 + j) * 4;
          line(x, 160, x, y, palette.brown, 1);
          const w = 23 + 12 * a;
          cut(
            [
              [x - w, y],
              [x + w, y],
              [x + w * 0.7, y + 70],
              [x - w * 0.7, y + 70],
            ],
            j % 2 ? palette.red : palette.blue,
          );
          for (let n = 0; n < 6; n++)
            line(
              x - w + n * w * 0.4,
              y,
              x - w * 0.7 + n * w * 0.28,
              y + 70,
              palette.white,
              0.7,
              0.5,
            );
          rect(x - 18, y + 71, 36, 6, palette.yellow);
        }
        break;
      }
      case "friendship:2": {
        for (let j = 0; j < 14; j++) {
          const x = 225 + j * (18 + 12 * a),
            y = 240;
          cut(
            [
              [x, y + (j % 2) * 10],
              [x + 30, y + ((j + 1) % 2) * 10],
              [x + 30, y + 140 + ((j + 1) % 2) * 10],
              [x, y + 140 + (j % 2) * 10],
            ],
            j % 2 ? palette.red : palette.blue,
          );
        }
        rect(205, 240, 25, 140, palette.brown);
        rect(225 + 14 * (18 + 12 * a), 240, 25, 140, palette.brown);
        for (let j = 0; j < 8; j++) disk(218, 262 + j * 14, 3, palette.white);
        break;
      }
      case "custom:0": {
        for (let j = 0; j < 35; j++) {
          const d = s.dots[j],
            u = j * 2.4,
            x = 500 + Math.cos(u) * (30 + 150 * d.r) * a,
            y = 285 + Math.sin(u) * (30 + 150 * d.r) * a;
          cut(
            [
              [x - 18, y - 15],
              [x + 21, y - 8],
              [x + 12, y + 24],
              [x - 21, y + 14],
            ],
            [palette.red, palette.blue, palette.yellow, palette.green][j % 4],
          );
        }
        star(500, 285, 35, palette.white, b);
        break;
      }
      case "custom:1": {
        const open = 0.25 + 0.75 * a;
        cut(
          [
            [370, 358],
            [325, 180],
            [440, 228],
            [560, 228],
            [675, 180],
            [630, 358],
            [500, 427],
          ],
          palette.red,
        );
        cut(
          [
            [370, 358],
            [440, 260],
            [500, 427],
          ],
          palette.white,
        );
        cut(
          [
            [630, 358],
            [560, 260],
            [500, 427],
          ],
          palette.white,
        );
        disk(429, 301, 8, palette.dark);
        disk(571, 301, 8, palette.dark);
        cut(
          [
            [480, 375],
            [520, 375],
            [500, 400],
          ],
          palette.dark,
        );
        line(440, 228, 440 - 90 * open, 180, palette.brown);
        line(560, 228, 560 + 90 * open, 180, palette.brown);
        break;
      }
      case "custom:2": {
        const x = 500,
          y = 270;
        line(x, y, x, 465, palette.brown, 4);
        for (let j = 0; j < 4; j++) {
          const u = (j * Math.PI) / 2 + clock * 0.35 * a;
          const pts = [
            [0, 0],
            [100, -75],
            [120, 35],
            [32, 22],
          ].map(([xx, yy]) => [
            x + xx * Math.cos(u) - yy * Math.sin(u),
            y + xx * Math.sin(u) + yy * Math.cos(u),
          ]);
          cut(
            pts,
            [palette.red, palette.blue, palette.green, palette.yellow][j],
          );
        }
        disk(x, y, 10, palette.white);
        break;
      }
      case "birthday:0": {
        line(150, 452, 850, 452, palette.brown, 1.5);
        for (let j = 0; j < 5; j++) {
          const h = 70 + (j % 3) * 27;
          house(
            230 + j * 135,
            452 - 100 * a,
            85,
            [palette.blue, palette.green, palette.purple][j % 3],
            a,
          );
          for (let n = 0; n < 4; n++)
            star(
              230 + j * 135 - 35 + n * 23,
              170 + (j % 2) * 35,
              5,
              palette.yellow,
              b,
            );
        }
        break;
      }
      case "birthday:1": {
        const x = 500,
          y = 310,
          w = 210 * a;
        cut(
          [
            [x - w, y],
            [x - w, y - 85],
            [x - w * 0.55, y - 35],
            [x, y - 115],
            [x + w * 0.55, y - 35],
            [x + w, y - 85],
            [x + w, y],
            [x - w, y],
          ],
          palette.yellow,
        );
        rect(x - w, y, w * 2, 27, palette.red);
        for (let j = 0; j < 5; j++)
          disk(x - w * 0.8 + j * w * 0.4, y - 19, 5, palette.blue);
        text(s.name, 500, 420, 28, ink, b);
        break;
      }
      case "birthday:2": {
        for (let j = 0; j < 7; j++) {
          const x = 290 + j * 70,
            y = 365 - 170 * a + Math.sin(clock * 0.6 + j) * 9;
          disk(x, y, 28, j % 2 ? palette.red : palette.blue);
          cut(
            [
              [x - 4, y + 28],
              [x + 4, y + 28],
              [x, y + 35],
            ],
            palette.yellow,
          );
          line(x, y + 35, 500 + (x - 500) * 0.4, 462, palette.brown, 0.8);
          line(x - 15, y - 15, x - 10, y - 22, palette.white, 2, 0.6);
        }
        heart(500, 461, 16, palette.red, b);
        break;
      }
      case "friendbirthday:0": {
        for (let j = 0; j < 4; j++) {
          const x = 215 + j * 147,
            y = 200 + Math.sin(j) * 25;
          g.save();
          g.translate(x, y);
          g.rotate((1 - a) * (0.6 - j * 0.2));
          rect(
            -55,
            0,
            110,
            180,
            [palette.blue, palette.yellow, palette.red, palette.green][j],
          );
          line(-52, 110, 52, 110, ink, 1, 0.3);
          for (let n = 0; n < 7; n++)
            line(-45 + n * 15, 145, -45 + n * 15, 169, ink, n % 2 ? 1 : 3, 0.6);
          star(0, 55, 25, palette.white);
          text("БИЛЕТ", 0, 130, 12);
          g.restore();
        }
        break;
      }
      case "friendbirthday:1": {
        hills();
        const top = 430 - 170 * a;
        cut(
          [
            [290, 430],
            [500, top],
            [710, 430],
          ],
          palette.red,
        );
        cut(
          [
            [500, top],
            [570, 430],
            [710, 430],
          ],
          palette.yellow,
        );
        cut(
          [
            [440, 430],
            [500, top + 55],
            [560, 430],
          ],
          palette.dark,
        );
        line(500, top, 500, 430, palette.brown, 1);
        for (let j = 0; j < 9; j++)
          star(260 + j * 60, 180 + (j % 3) * 25, 4, palette.yellow, b);
        break;
      }
      case "friendbirthday:2": {
        for (let j = 0; j < 3; j++) {
          const x = 195 + j * 215;
          rect(x, 150, 190, 310, palette.white);
          star(
            x + 95,
            255,
            37,
            [palette.blue, palette.red, palette.yellow][j],
            q(0.1 + j * 0.2, 0.4 + j * 0.2),
          );
          text(
            ["СТАРТ", "ПРЫЖОК", "ДА!"][j],
            x + 95,
            405,
            22,
            ink,
            q(0.1 + j * 0.2, 0.4 + j * 0.2),
          );
          line(x + 20, 175, x + 40, 205, ink, 2);
          line(x + 160, 175, x + 140, 205, ink, 2);
        }
        break;
      }
      case "march:0": {
        cut(
          [
            [390, 285],
            [610, 285],
            [555, 465],
            [445, 465],
          ],
          palette.white,
        );
        for (let j = 0; j < 9; j++) {
          const u = j * 2.4,
            x = 500 + Math.cos(u) * 78,
            y = 238 + Math.sin(u) * 64;
          flower(x, y, 26, j % 2 ? palette.red : palette.purple, a);
        }
        cut(
          [
            [446, 393],
            [476, 378],
            [500, 397],
            [524, 378],
            [554, 393],
            [524, 412],
            [500, 397],
            [476, 412],
          ],
          palette.blue,
        );
        break;
      }
      case "march:1": {
        disk(500, 150, 17, palette.brown);
        line(500, 167, 500, 284, palette.brown, 5);
        line(500, 195, 430, 240, palette.brown, 3);
        line(500, 195, 570, 240, palette.brown, 3);
        fan(500, 292, 90, palette.red, a);
        line(500, 294, 467, 415, palette.brown, 4);
        line(500, 294, 534, 415, palette.brown, 4);
        for (let j = 0; j < 13; j++) {
          const u = (j * TAU) / 13;
          leaf(
            500 + Math.cos(u) * 150,
            270 + Math.sin(u) * 130,
            13,
            u,
            palette.purple,
          );
        }
        break;
      }
      case "march:2": {
        for (let j = 0; j < 12; j++) {
          const u = (j * TAU) / 12;
          cut(
            [
              [500, 285],
              [500 + Math.cos(u) * 170 * a, 285 + Math.sin(u) * 170 * a],
              [
                500 + Math.cos(u + 0.5) * 170 * a,
                285 + Math.sin(u + 0.5) * 170 * a,
              ],
            ],
            [palette.red, palette.blue, palette.green, palette.yellow][j % 4],
          );
        }
        disk(500, 285, 35, palette.white);
        flower(500, 285, 24, palette.red, b);
        break;
      }
      case "romance:0": {
        for (let j = 0; j < 6; j++)
          house(
            205 + j * 117,
            335 + (j % 2) * 25,
            80,
            j % 2 ? palette.blue : palette.red,
            a,
          );
        line(155, 461, 850, 461, palette.brown, 2);
        const x1 = 230 + 190 * a,
          x2 = 770 - 190 * a;
        disk(x1, 385, 12, palette.brown);
        disk(x2, 385, 12, palette.brown);
        cut(
          [
            [x1 - 15, 402],
            [x1 + 15, 402],
            [x1 + 26, 449],
            [x1 - 26, 449],
          ],
          palette.red,
        );
        cut(
          [
            [x2 - 15, 402],
            [x2 + 15, 402],
            [x2 + 26, 449],
            [x2 - 26, 449],
          ],
          palette.blue,
        );
        heart(500, 240, 35, palette.yellow, b);
        break;
      }
      case "romance:1": {
        const f = q(0.1, 0.8);
        rect(320, 170, 360, 245 * (1 - f * 0.7), palette.white);
        cut(
          [
            [320, 170],
            [500, 300 - 100 * f],
            [680, 170],
          ],
          palette.red,
          k,
        );
        heart(500, 300, 115, palette.red, f);
        line(500, 210, 500, 389, ink, 0.8, f * 0.3);
        text("Тебе", 500, 462, 27, ink, b);
        break;
      }
      case "romance:2": {
        for (let j = 0; j < 6; j++)
          cut(
            [
              [110, 390 + j * 17],
              [260, 377 + j * 17],
              [430, 401 + j * 17],
              [660, 376 + j * 17],
              [890, 394 + j * 17],
              [890, 490],
              [110, 490],
            ],
            j % 2 ? palette.blue : shade(palette.blue, 1.1),
            0.8,
            j + 1,
          );
        const x = 400 + 180 * a,
          y = 364 + Math.sin(clock * 0.5) * 4;
        cut(
          [
            [x - 100, y],
            [x + 100, y],
            [x + 55, y + 43],
            [x - 55, y + 43],
          ],
          palette.red,
        );
        cut(
          [
            [x, y],
            [x, y - 140],
            [x + 110, y],
          ],
          palette.white,
        );
        line(x, y, x, y - 142, palette.brown, 2);
        for (let j = 0; j < 13; j++)
          star(230 + j * 45, 145 + (j % 3) * 28, 5, palette.yellow, b);
        break;
      }
      case "may7:0": {
        const x = 500,
          y = 280;
        crane(x, y, 160, palette.yellow, 0.25 + 0.75 * a);
        for (let j = 0; j < 7; j++) {
          line(
            x - 130 + j * 13,
            y - 35,
            x - 155 + j * 15,
            y - 80,
            palette.brown,
            1,
            0.6,
          );
          line(
            x + 130 - j * 13,
            y - 35,
            x + 155 - j * 15,
            y - 80,
            palette.brown,
            1,
            0.6,
          );
        }
        hills();
        break;
      }
      case "may7:1": {
        rosette(500, 265, 118, palette.blue);
        cut(
          [
            [440, 353],
            [485, 335],
            [472, 478],
            [440, 455],
            [420, 475],
          ],
          palette.red,
        );
        cut(
          [
            [515, 335],
            [560, 353],
            [580, 475],
            [550, 455],
            [528, 478],
          ],
          palette.red,
        );
        star(500, 265, 40, palette.yellow, b);
        break;
      }
      case "may7:2": {
        for (let layer = 0; layer < 3; layer++) {
          const y = 440 - layer * 45;
          for (let j = 0; j < 10; j++) {
            const x = 130 + j * 76,
              h = 55 + s.dots[j + layer * 10].s * 50;
            rect(
              x,
              y - h * a,
              69,
              h * a,
              [palette.green, palette.blue, palette.white][layer],
              1,
              layer + 1,
            );
            for (let n = 0; n < 3; n++)
              rect(x + 12 + n * 16, y - h * a + 12, 7, 12, palette.yellow, b);
          }
        }
        disk(720, 145, 43, palette.yellow);
        for (let j = 0; j < 6; j++)
          crane(270 + j * 55, 160 + (j % 2) * 15, 14, palette.white, a);
        break;
      }
      case "newyear:0": {
        for (let j = 0; j < 7; j++) {
          const x = 185 + j * 100,
            y = 400;
          house(x, y - 80 * a, 75, j % 2 ? palette.blue : palette.red, a);
          disk(x, y - 55, 12, palette.white, b);
          text(String(j + 1), x, y - 51, 14, ink, b);
          cut(
            [
              [x - 43, y - 75 * a],
              [x, y - 75 * a - 52],
              [x + 43, y - 75 * a],
              [x + 31, y - 65 * a],
              [x - 30, y - 65 * a],
            ],
            palette.white,
          );
        }
        for (let j = 0; j < 25; j++)
          disk(
            180 + s.dots[j].s * 650,
            110 + ((s.dots[j].y + clock * 8) % 300),
            2,
            palette.white,
          );
        break;
      }
      case "newyear:1": {
        for (let j = 0; j < 8; j++) {
          const u = (j * TAU) / 8;
          cut(
            [
              [500, 285],
              [500 + Math.cos(u) * 150 * a, 285 + Math.sin(u) * 150 * a],
              [
                500 + Math.cos(u + 0.38) * 65 * a,
                285 + Math.sin(u + 0.38) * 65 * a,
              ],
            ],
            j % 2 ? palette.white : palette.yellow,
          );
          line(
            500,
            285,
            500 + Math.cos(u) * 150 * a,
            285 + Math.sin(u) * 150 * a,
            palette.brown,
            0.7,
          );
        }
        disk(500, 285, 13, palette.blue);
        break;
      }
      case "newyear:2": {
        disk(500, 390, 83, palette.white, k);
        disk(500, 282, 64, palette.white, a);
        disk(500, 188, 45, palette.white, b);
        rect(452, 145, 96, 15, palette.dark, b);
        rect(465, 110, 70, 39, palette.dark, b);
        for (let j = 0; j < 3; j++) disk(500, 365 + j * 28, 4, palette.dark);
        disk(485, 179, 3, palette.dark, b);
        disk(515, 179, 3, palette.dark, b);
        cut(
          [
            [499, 190],
            [548, 197],
            [500, 203],
          ],
          palette.red,
          b,
        );
        line(428, 295, 352, 254, palette.brown, 3, a);
        line(572, 295, 648, 254, palette.brown, 3, a);
        break;
      }
      case "september:0": {
        rect(355, 205, 290, 237, palette.blue);
        cut(
          [
            [355, 205],
            [390, 153],
            [610, 153],
            [645, 205],
          ],
          shade(palette.blue, 1.1),
        );
        rect(397, 292, 206, 110, palette.red, a);
        line(397, 314, 603, 314, palette.white, 2, a);
        for (let j = 0; j < 5; j++) {
          rect(405 + j * 39, 170 - 80 * a, 27, 100, palette.white);
          star(419 + j * 39, 190 - 80 * a, 8, palette.yellow, b);
        }
        line(390, 165, 390, 145, palette.brown, 8);
        line(610, 165, 610, 145, palette.brown, 8);
        break;
      }
      case "september:1": {
        const pieces = [
          [
            [350, 140],
            [650, 140],
            [500, 290],
          ],
          [
            [350, 140],
            [350, 440],
            [500, 290],
          ],
          [
            [350, 440],
            [500, 290],
            [500, 440],
          ],
          [
            [500, 290],
            [650, 440],
            [500, 440],
          ],
          [
            [575, 215],
            [650, 140],
            [650, 290],
          ],
          [
            [575, 215],
            [650, 290],
            [575, 365],
            [500, 290],
          ],
          [
            [575, 365],
            [650, 290],
            [650, 440],
          ],
        ];
        pieces.forEach((pts, j) =>
          cut(
            pts.map(([x, y]) => [
              500 + (x - 500) * a + (1 - a) * Math.cos(j) * 220,
              290 + (y - 290) * a + (1 - a) * Math.sin(j) * 180,
            ]),
            [
              palette.red,
              palette.blue,
              palette.yellow,
              palette.green,
              palette.purple,
            ][j % 5],
          ),
        );
        break;
      }
      case "september:2": {
        rect(225, 325, 265, 30, palette.red, 1 - a);
        rect(490, 320, 265, 30, palette.blue, 1 - a);
        crane(500, 280 - 75 * a, 90, palette.blue, a);
        for (let j = 0; j < 5; j++)
          cut(
            [
              [200 + j * 125, 410],
              [290 + j * 125, 410],
              [305 + j * 125, 425],
              [210 + j * 125, 425],
            ],
            palette.white,
            b,
          );
        star(720, 150, 28, palette.yellow, b);
        break;
      }
      case "summer:0": {
        disk(745, 170, 40, palette.yellow);
        for (let j = 0; j < 5; j++) {
          const yy = 300 + j * 30;
          cut(
            [
              [100, yy],
              [225, yy - 18],
              [355, yy + 11],
              [490, yy - 12],
              [650, yy + 9],
              [800, yy - 16],
              [900, yy],
              [900, 490],
              [100, 490],
            ],
            j % 2 ? palette.blue : shade(palette.blue, 1.1),
            1,
            j + 1,
          );
        }
        cut(
          [
            [100, 457],
            [410, 433],
            [730, 459],
            [900, 449],
            [900, 510],
            [100, 510],
          ],
          palette.yellow,
        );
        cut(
          [
            [330, 362],
            [495, 342],
            [653, 361],
            [590, 386],
            [389, 386],
          ],
          palette.red,
          a,
        );
        break;
      }
      case "summer:1": {
        rect(475, 265, 50, 180, palette.white);
        cut(
          [
            [470, 265],
            [500, 225],
            [530, 265],
          ],
          palette.red,
        );
        for (let j = 0; j < 4; j++) {
          const u = (j * Math.PI) / 2 + clock * 0.45 * a;
          cut(
            [
              [500, 235],
              [500 + Math.cos(u) * 145, 235 + Math.sin(u) * 145],
              [500 + Math.cos(u + 0.45) * 125, 235 + Math.sin(u + 0.45) * 125],
              [500 + Math.cos(u + 0.25) * 30, 235 + Math.sin(u + 0.25) * 30],
            ],
            j % 2 ? palette.blue : palette.yellow,
          );
        }
        disk(500, 235, 9, palette.brown);
        for (let j = 0; j < 9; j++)
          flower(220 + j * 68, 435, 12, palette.red, b);
        break;
      }
      case "summer:2": {
        fan(500, 425, 240, palette.blue, 0.04 + 0.96 * a);
        for (let j = 0; j < 5; j++) {
          const u = -Math.PI / 2 + (j - 2) * 0.28;
          flower(
            500 + Math.cos(u) * 155,
            425 + Math.sin(u) * 155,
            14,
            palette.red,
            b,
          );
        }
        break;
      }
      case "memorial:0": {
        crane(500, 280, 125, palette.white, 0.35 + 0.65 * a);
        line(250, 425, 750, 425, palette.blue, 1, 0.4);
        for (let j = 0; j < 12; j++)
          disk(280 + j * 40, 445, 1.5, palette.brown, 0.25);
        break;
      }
      case "memorial:1": {
        for (let j = 0; j < 26; j++) {
          const u = (j * TAU) / 26,
            x = 500 + Math.cos(u) * 155,
            y = 285 + Math.sin(u) * 155;
          leaf(x, y, 19, u + Math.PI / 3, palette.green);
          if (j % 2 === 0)
            flower(
              x,
              y,
              11,
              palette.blue,
              q(0.03 + j * 0.018, 0.3 + j * 0.018),
            );
        }
        text("Помним", 500, 293, 28, ink, b);
        break;
      }
      case "memorial:2": {
        for (let j = 0; j < 5; j++)
          cut(
            [
              [100, 410 + j * 17],
              [270, 345 + j * 18],
              [415, 381 + j * 17],
              [590, 330 + j * 18],
              [760, 382 + j * 16],
              [900, 361 + j * 17],
              [900, 480],
              [100, 480],
            ],
            shade(palette.blue, 0.74 + j * 0.07),
            0.9,
            j + 1,
          );
        disk(680, 185, 32, palette.white, b);
        line(260, 382, 260, 261, palette.brown, 3);
        for (let j = 0; j < 5; j++)
          leaf(260 + Math.sin(j) * 23, 288 + j * 15, 21, j, palette.green);
        break;
      }
      case "newborn:0": {
        house(500, 353, 140, palette.blue, a);
        const x = 250 + 430 * a,
          y = 170 + Math.sin(clock * 0.4) * 4;
        crane(x, y, 75, palette.white, 0.8);
        cut(
          [
            [x + 20, y + 30],
            [x + 90, y + 30],
            [x + 73, y + 91],
            [x + 37, y + 91],
          ],
          palette.red,
        );
        line(x + 53, y - 15, x + 55, y + 30, palette.brown, 1);
        heart(x + 54, y + 59, 15, palette.white, b);
        break;
      }
      case "newborn:1": {
        for (let j = 0; j < 2; j++) {
          const x = 410 + j * 180;
          cut(
            [
              [x - 52, 235],
              [x + 10, 235],
              [x + 10, 328],
              [x + 73, 354],
              [x + 73, 395],
              [x - 52, 395],
            ],
            j ? palette.red : palette.blue,
          );
          cut(
            [
              [x - 52, 235],
              [x + 10, 235],
              [x + 10, 257],
              [x - 52, 257],
            ],
            palette.white,
          );
          line(x + 10, 328, x - 52, 328, palette.white, 1.5);
          for (let n = 0; n < 4; n++)
            line(x - 15 + n * 8, 270, x - 15 + n * 8, 295, palette.white, 2);
          star(x - 20, 355, 18, palette.yellow, b);
        }
        break;
      }
      case "newborn:2": {
        for (let j = 0; j < 6; j++)
          disk(350 + j * 60, 224 + Math.sin(j) * 8, 48, palette.white);
        rect(350, 223, 300, 63, palette.white);
        for (let j = 0; j < 5; j++) {
          const x = 380 + j * 60,
            y = 310 + Math.sin(clock * 0.4 + j) * 5;
          line(x, 280, x, y + 30, palette.blue, 1);
          star(
            x,
            y + 45,
            15,
            j % 2 ? palette.yellow : palette.blue,
            q(0.08 + j * 0.1, 0.35 + j * 0.1),
          );
        }
        break;
      }
      case "nauryz:0": {
        for (let ring = 0; ring < 3; ring++)
          for (let j = 0; j < 12; j++) {
            const u = (j * TAU) / 12,
              r = 65 + ring * 50,
              x = 500 + Math.cos(u) * r,
              y = 285 + Math.sin(u) * r;
            g.save();
            g.translate(x, y);
            g.rotate(u + Math.PI / 2);
            cut(
              [
                [0, 0],
                [-20, -20],
                [-24, -5],
                [-10, 8],
                [0, 20],
                [10, 8],
                [24, -5],
                [20, -20],
              ],
              ring % 2 ? palette.blue : palette.yellow,
              q(0.05 + ring * 0.2, 0.3 + ring * 0.2),
            );
            g.restore();
          }
        break;
      }
      case "nauryz:1": {
        line(500, 385, 500, 472, palette.green, 4);
        cut(
          [
            [500, 325],
            [360, 183],
            [440, 210],
            [500, 165],
            [560, 210],
            [640, 183],
            [500, 325],
          ],
          palette.red,
          a,
        );
        cut(
          [
            [500, 325],
            [440, 210],
            [500, 165],
          ],
          shade(palette.red, 1.15),
          a,
        );
        leaf(458, 423, 58, -0.5, palette.green);
        leaf(542, 445, 58, 0.5, palette.green);
        break;
      }
      case "nauryz:2": {
        for (let j = 0; j < 8; j++) {
          const u = (j * TAU) / 8 + clock * 0.25 * a;
          cut(
            [
              [500, 285],
              [500 + Math.cos(u) * 140, 285 + Math.sin(u) * 140],
              [500 + Math.cos(u + 0.65) * 95, 285 + Math.sin(u + 0.65) * 95],
            ],
            j % 2 ? palette.blue : palette.yellow,
          );
        }
        disk(500, 285, 27, palette.white);
        star(500, 285, 15, palette.red);
        line(500, 285, 500, 485, palette.brown, 3);
        break;
      }
      case "anniversary:0": {
        rect(300, 130, 400, 350, palette.white);
        rect(300, 130, 400, 62, palette.red);
        for (let j = 0; j < 5; j++) disk(340 + j * 80, 135, 8, palette.brown);
        for (let j = 0; j < 28; j++) {
          const x = 336 + (j % 7) * 53,
            y = 225 + Math.floor(j / 7) * 53;
          if (j === 12) heart(x + 13, y + 8, 19, palette.red, b);
          else
            text(
              String(j + 1),
              x + 13,
              y + 12,
              17,
              ink,
              q(0.04 + j * 0.018, 0.3 + j * 0.018),
            );
        }
        break;
      }
      case "anniversary:1": {
        line(170, 155, 830, 155, palette.brown, 1.5);
        for (let j = 0; j < 5; j++) {
          const x = 260 + j * 125,
            y = 180 + (j % 2) * 30;
          g.save();
          g.translate(x, y);
          g.rotate(Math.sin(clock * 0.25 + j) * 0.025);
          rect(-50, 0, 100, 135, palette.white);
          rect(-42, 8, 84, 86, j % 2 ? palette.blue : palette.green);
          if (j % 2) heart(0, 50, 24, palette.red);
          else star(0, 50, 25, palette.yellow);
          line(-28, 114, 28, 114, palette.brown, 1);
          rect(-4, -14, 8, 27, palette.brown);
          g.restore();
        }
        break;
      }
      case "anniversary:2": {
        for (let j = 0; j < 13; j++) {
          const u = j / 12,
            x1 = 190 + 620 * u,
            y1 = 390 - 100 * Math.sin(u * Math.PI) * a,
            x2 = 190 + 620 * u,
            y2 = 190 + 100 * Math.sin(u * Math.PI) * a;
          cut(
            [
              [x1 - 20, y1 - 10],
              [x1 + 20, y1 - 10],
              [x1 + 20, y1 + 10],
              [x1 - 20, y1 + 10],
            ],
            palette.red,
          );
          cut(
            [
              [x2 - 20, y2 - 10],
              [x2 + 20, y2 - 10],
              [x2 + 20, y2 + 10],
              [x2 - 20, y2 + 10],
            ],
            palette.blue,
          );
        }
        heart(500, 290, 32, palette.yellow, b);
        break;
      }
      case "halloween:0": {
        const flap = 0.2 + 0.8 * a + Math.sin(clock * 0.6) * 0.08;
        cut(
          [
            [500, 250],
            [355, 160 * flap + 160],
            [240, 190 * flap + 100],
            [280, 330],
            [385, 295],
            [500, 335],
            [615, 295],
            [720, 330],
            [760, 190 * flap + 100],
            [645, 160 * flap + 160],
          ],
          palette.dark,
        );
        cut(
          [
            [463, 240],
            [470, 190],
            [491, 231],
            [509, 231],
            [530, 190],
            [537, 240],
            [528, 297],
            [472, 297],
          ],
          shade(palette.dark, 1.16),
        );
        disk(483, 255, 4, palette.yellow);
        disk(517, 255, 4, palette.yellow);
        for (const dir of [-1, 1])
          for (let j = 0; j < 3; j++)
            line(
              500 + dir * 28,
              273,
              500 + dir * (95 + j * 42),
              310 - j * 25,
              palette.white,
              0.6,
              0.3,
            );
        break;
      }
      case "halloween:1": {
        disk(535, 250, 130, palette.yellow);
        disk(575, 210, 115, "#ece3d3");
        disk(450, 335, 49, palette.dark);
        disk(450, 273, 32, palette.dark);
        cut(
          [
            [424, 255],
            [418, 224],
            [440, 243],
          ],
          palette.dark,
        );
        cut(
          [
            [460, 243],
            [483, 224],
            [479, 255],
          ],
          palette.dark,
        );
        disk(440, 268, 3, palette.yellow);
        disk(462, 268, 3, palette.yellow);
        const tail = Array.from({ length: 22 }, (_, j) => [
          413 - 30 * Math.sin((j / 21) * Math.PI),
          338 + j * 3,
        ]);
        for (let j = 1; j < tail.length; j++)
          line(...tail[j - 1], ...tail[j], palette.dark, 12);
        break;
      }
      case "halloween:2": {
        for (let j = 0; j < 16; j++) {
          const u = (j * TAU) / 16;
          line(
            500,
            285,
            500 + Math.cos(u) * 180 * a,
            285 + Math.sin(u) * 180 * a,
            palette.dark,
            1.2,
          );
        }
        for (let ring = 1; ring < 7; ring++) {
          const r = ring * 27 * a,
            pts = Array.from({ length: 17 }, (_, j) => [
              500 + Math.cos((j * TAU) / 16) * r,
              285 + Math.sin((j * TAU) / 16) * r,
            ]);
          for (let j = 1; j < pts.length; j++)
            line(...pts[j - 1], ...pts[j], palette.dark, 0.9);
        }
        disk(635, 375, 15, palette.dark, b);
        for (let j = 0; j < 8; j++) {
          const u = (j * TAU) / 8;
          line(
            635 + Math.cos(u) * 12,
            375 + Math.sin(u) * 12,
            635 + Math.cos(u) * 30,
            375 + Math.sin(u) * 30,
            palette.dark,
            2,
            b,
          );
        }
        break;
      }
      case "wedding:0": {
        for (let side = 0; side < 2; side++)
          for (let j = 0; j < 9; j++) {
            const x = side ? 675 : 325,
              y = 440 - j * 25;
            disk(x, y, 19, palette.white);
            disk(x, y, 7, "#ece3d3");
          }
        for (let j = 0; j < 19; j++) {
          const u = Math.PI + (j * Math.PI) / 18,
            x = 500 + Math.cos(u) * 175,
            y = 240 + Math.sin(u) * 105;
          flower(x, y, 14, palette.white, a);
        }
        heart(500, 320, 43, palette.red, b);
        break;
      }
      case "wedding:1": {
        crane(380 + 35 * a, 280, 100, palette.white, 0.7 + 0.3 * a);
        g.save();
        g.translate(1000, 0);
        g.scale(-1, 1);
        crane(380 + 35 * a, 280, 100, palette.white, 0.7 + 0.3 * a);
        g.restore();
        for (let j = 0; j < 9; j++) {
          const u = (j * Math.PI) / 8;
          leaf(
            500 + Math.cos(u) * 85,
            360 + Math.sin(u) * 35,
            15,
            u,
            palette.green,
          );
        }
        heart(500, 210, 25, palette.red, b);
        break;
      }
      case "wedding:2": {
        for (let j = 0; j < 3; j++) {
          const w = 290 - j * 75,
            x = 500 - w / 2,
            y = 420 - j * 88;
          rect(
            x,
            y - 65,
            w,
            65,
            palette.white,
            q(0.05 + j * 0.2, 0.35 + j * 0.2),
          );
          for (let n = 0; n < 9; n++) {
            const xx = x + 20 + (n * (w - 40)) / 8;
            disk(xx, y - 58, 7, palette.red, q(0.05 + j * 0.2, 0.35 + j * 0.2));
          }
        }
        heart(500, 155, 30, palette.red, b);
        break;
      }
      case "graduation:0": {
        rect(250, 170, 500, 300, palette.white);
        for (let j = 0; j < 11; j++)
          line(270, 195 + j * 22, 728, 195 + j * 22, palette.blue, 0.8, 0.35);
        line(330, 174, 330, 465, palette.red, 1, 0.4);
        rect(451, 130, 150, 292, palette.brown);
        cut(
          [
            [458, 139],
            [594, 139],
            [594 - 120 * a, 425],
            [458, 422],
          ],
          palette.blue,
        );
        star(527, 270, 35, palette.yellow, b);
        break;
      }
      case "graduation:1": {
        rosette(500, 265, 125, palette.blue);
        cut(
          [
            [420, 350],
            [475, 340],
            [450, 470],
            [415, 448],
            [390, 466],
          ],
          palette.red,
        );
        cut(
          [
            [525, 340],
            [580, 350],
            [610, 466],
            [575, 448],
            [550, 470],
          ],
          palette.red,
        );
        text("ВПЕРЕД", 500, 274, 20, ink, b);
        break;
      }
      case "graduation:2": {
        for (let j = 0; j < 14; j++) {
          const x = 180 + j * 49,
            y = 390 - 95 * Math.sin((j / 13) * Math.PI) * a;
          cut(
            [
              [x - 21, y - 7],
              [x + 21, y - 7],
              [x + 21, y + 7],
              [x - 21, y + 7],
            ],
            j % 2 ? palette.blue : palette.red,
          );
          line(x, y, x, 430, palette.brown, 1.5);
        }
        cut(
          [
            [750, 170],
            [820, 170],
            [820, 338],
            [750, 338],
          ],
          palette.white,
          b,
        );
        star(785, 230, 27, palette.yellow, b);
        break;
      }
      case "housewarming:0": {
        rect(245, 340, 510, 140, palette.white);
        const f = 0.15 + 0.85 * a;
        house(500, 340 - 80 * f, 210, palette.blue, f);
        cut(
          [
            [245, 340],
            [500, 340 - 100 * f],
            [755, 340],
            [755, 365],
            [500, 365 - 100 * f],
            [245, 365],
          ],
          palette.green,
        );
        for (let j = 0; j < 4; j++)
          flower(290 + j * 140, 416, 17, palette.red, b);
        break;
      }
      case "housewarming:1": {
        rect(330, 140, 340, 300, palette.white);
        rect(345, 155, 310, 268, palette.blue);
        line(500, 155, 500, 423, palette.brown, 5);
        line(345, 285, 655, 285, palette.brown, 5);
        for (const dir of [-1, 1]) {
          const x = dir < 0 ? 340 : 660;
          for (let j = 0; j < 7; j++) {
            const xx = x + dir * j * (11 - 6 * a);
            cut(
              [
                [xx, 150],
                [xx + dir * 12, 150],
                [xx + dir * 16, 417],
                [xx, 417],
              ],
              j % 2 ? palette.red : shade(palette.red, 1.12),
            );
          }
        }
        disk(594, 197, 27, palette.yellow, b);
        break;
      }
      case "housewarming:2": {
        for (let j = 0; j < 5; j++) {
          const x = 270 + j * 115,
            y = 420;
          cut(
            [
              [x - 30, y],
              [x + 30, y],
              [x + 22, y + 51],
              [x - 22, y + 51],
            ],
            j % 2 ? palette.red : palette.blue,
          );
          for (let n = 0; n < 6; n++) {
            const yy = 400 - n * 27,
              dir = n % 2 ? 1 : -1;
            line(x, y, x, yy, palette.green, 2);
            leaf(x + dir * 19 * a, yy, 30, dir * -0.5, palette.green);
          }
        }
        break;
      }
      case "success:0": {
        for (let j = 0; j < 13; j++) {
          const u = Math.PI * 0.18 + (j * Math.PI * 0.64) / 12;
          leaf(
            500 + Math.cos(u) * 145,
            300 + Math.sin(u) * 130,
            26,
            u + 1,
            palette.green,
          );
          leaf(
            500 - Math.cos(u) * 145,
            300 - Math.sin(u) * 130,
            26,
            u - 1,
            palette.green,
          );
        }
        star(500, 280, 53, palette.yellow, b);
        cut(
          [
            [453, 419],
            [476, 409],
            [500, 425],
            [524, 409],
            [547, 419],
            [525, 435],
            [500, 425],
            [475, 435],
          ],
          palette.red,
        );
        break;
      }
      case "success:1": {
        for (let j = 0; j < 5; j++) {
          const u = -Math.PI / 2 + (j * TAU) / 5;
          cut(
            [
              [500, 285],
              [500 + Math.cos(u) * 155 * a, 285 + Math.sin(u) * 155 * a],
              [
                500 + Math.cos(u + Math.PI / 5) * 65 * a,
                285 + Math.sin(u + Math.PI / 5) * 65 * a,
              ],
            ],
            j % 2 ? palette.yellow : shade(palette.yellow, 1.17),
          );
          line(
            500,
            285,
            500 + Math.cos(u) * 155 * a,
            285 + Math.sin(u) * 155 * a,
            palette.brown,
            0.9,
          );
        }
        break;
      }
      case "success:2": {
        const u = 120 + 600 * a;
        cut(
          [
            [160, 250],
            [840, 250],
            [840, 330],
            [160, 330],
          ],
          palette.red,
        );
        text("ТВОЙ РЕЗУЛЬТАТ", 500, 300, 29, palette.white, a);
        cut(
          [
            [u - 18, 220],
            [u + 18, 220],
            [u + 18, 360],
            [u, 342],
            [u - 18, 360],
          ],
          palette.blue,
        );
        for (let j = 0; j < 14; j++)
          cut(
            [
              [210 + j * 45, 145 + (j % 2) * 23],
              [219 + j * 45, 151 + (j % 2) * 23],
              [212 + j * 45, 166 + (j % 2) * 23],
              [203 + j * 45, 160 + (j % 2) * 23],
            ],
            palette.yellow,
            b,
          );
        break;
      }
      case "recovery:0": {
        crane(500, 270, 125, palette.blue, 0.2 + 0.8 * a);
        leaf(574, 306, 45, 0.35, palette.green);
        for (let j = 0; j < 7; j++)
          star(300 + j * 66, 445 - (j % 2) * 15, 4, palette.yellow, b);
        break;
      }
      case "recovery:1": {
        for (let layer = 0; layer < 3; layer++)
          for (let j = 0; j < 7; j++) {
            const u = -Math.PI + (j * Math.PI) / 6;
            cut(
              [
                [500, 390],
                [
                  500 + Math.cos(u) * 130 * a,
                  390 + Math.sin(u) * (90 + layer * 35) * a,
                ],
                [
                  500 + Math.cos(u + 0.28) * 80 * a,
                  390 + Math.sin(u + 0.28) * (60 + layer * 35) * a,
                ],
              ],
              layer % 2 ? palette.red : shade(palette.red, 1.16),
              1,
              layer + 1,
            );
          }
        leaf(430, 434, 85, -0.15, palette.green);
        leaf(570, 434, 85, 0.15, palette.green);
        break;
      }
      case "recovery:2": {
        const colors = [
          palette.red,
          palette.yellow,
          palette.green,
          palette.blue,
          palette.purple,
        ];
        for (let j = 0; j < 5; j++) {
          const r = 185 - j * 19;
          const pts = Array.from({ length: 50 }, (_, n) => {
            const u = Math.PI + (n * Math.PI) / 49;
            return [500 + Math.cos(u) * r, 375 + Math.sin(u) * r * a];
          }).concat(
            Array.from({ length: 50 }, (_, n) => {
              const u = TAU - (n * Math.PI) / 49;
              return [
                500 + Math.cos(u) * (r - 15),
                375 + Math.sin(u) * (r - 15) * a,
              ];
            }),
          );
          cut(pts, colors[j], 1, j + 1);
        }
        for (const x of [330, 670]) {
          disk(x, 387, 37, palette.white);
          disk(x + 26, 389, 27, palette.white);
          disk(x - 26, 397, 23, palette.white);
        }
        break;
      }
    }
    text("БУМАЖНАЯ МИНИАТЮРА", 500, 548, 11, ink, 0.45);
    g.restore();
    s.artStats = { style: "paper" };
  }
  window.AnimationArt = { catalog, volume, paper };
})();
