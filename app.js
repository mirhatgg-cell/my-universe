(() => {
  "use strict";
  const { occasions, tones } = window.UniverseMessages;
  const $ = (id) => document.getElementById(id);
  const author = document.body.dataset.page === "author";
  let config = {},
    shareURL = "",
    hugs = 0;
  const has = (o, k) =>
    typeof k === "string" && Object.prototype.hasOwnProperty.call(o, k);
  function normalize(v) {
    if (!v || typeof v !== "object" || Array.isArray(v))
      throw Error("Invalid letter");
    const str = (x, n) =>
      typeof x === "string" ? [...x.trim()].slice(0, n).join("") : "";
    return {
      to: str(v.to, 45),
      from: str(v.from, 60),
      holiday: has(occasions, v.holiday) ? v.holiday : "just",
      tone: has(tones, v.tone) ? v.tone : "friend",
      message: str(v.message, 1800),
      scene: [
        "warmth",
        "together",
        "support",
        "dream",
        "love",
        "respect",
      ].includes(v.scene)
        ? v.scene
        : "together",
      variant: ["all", "0", "1", "2"].includes(v.variant) ? v.variant : "all",
      journey: [
        "auto",
        "love",
        "birthday",
        "gentle",
        "pack_0",
        "pack_1",
        "pack_2",
      ].includes(v.journey)
        ? v.holiday === "memorial" &&
          !["auto", "pack_0", "pack_1", "pack_2"].includes(v.journey)
          ? "auto"
          : v.journey
        : "auto",
    };
  }
  function encode(v) {
    const bytes = new TextEncoder().encode(JSON.stringify(v));
    let s = "";
    bytes.forEach((b) => (s += String.fromCharCode(b)));
    return btoa(s).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
  }
  function decode(s) {
    if (!s || s.length > 20000 || !/^[\w-]+$/.test(s))
      throw Error("Invalid link");
    const v = normalize(
      JSON.parse(
        new TextDecoder("utf-8", { fatal: true }).decode(
          Uint8Array.from(
            atob(s.replaceAll("-", "+").replaceAll("_", "/")),
            (c) => c.charCodeAt(0),
          ),
        ),
      ),
    );
    if (!v.to || !v.from) throw Error("Missing names");
    return v;
  }
  function linkFor(v) {
    const url = new URL("index.html", location.href);
    url.search = "";
    url.hash = "letter=" + encode(v);
    return url.href;
  }
  function show(available) {
    $("missing-letter").hidden = available || author;
    document.querySelector("main").hidden = !available;
    document.querySelector("footer").hidden = !available;
    Universe.wake();
  }
  function render() {
    const o = occasions[config.holiday],
      t =
        config.holiday === "memorial"
          ? {
              opening:
                "Это письмо — место для памяти о дорогом человеке. Необязательно находить правильные слова.",
              middle:
                "Можно возвращаться к воспоминаниям, рассказывать о них близким и сохранять то, что было важно.",
              reasons: ["", "", ""],
              end: "Пусть память остаётся бережной, а рядом будет поддержка.",
            }
          : config.holiday === "newborn"
            ? {
                opening:
                  "В вашей семье появилась новая жизнь. Поздравляю с этим большим и очень личным событием.",
                middle:
                  "Пусть малышу будет тепло и безопасно, а у родителей будут силы, помощь близких и возможность отдохнуть.",
                reasons: [
                  "Пусть будет много спокойных и тёплых моментов.",
                  "Каждый ребёнок растёт в своём ритме.",
                  "Просить помощи и заботиться о себе тоже важно.",
                ],
                end: "Здоровья малышу, сил семье и много счастливых первых открытий.",
              }
            : {
                ...tones[
                  config.holiday === "romance" ||
                  config.holiday === "anniversary"
                    ? "love"
                    : config.tone
                ],
              };
    const quiet = config.holiday === "memorial";
    for (const selector of [".reasons", ".wish-section", ".pocket-section"])
      document.querySelector(selector).hidden = quiet;
    $("hug").textContent = quiet
      ? "Зажечь огонёк памяти"
      : "Зажечь свою сверхновую ✦";
    document.querySelector(".final-section h2").textContent = quiet
      ? "Светлая память."
      : "Как хорошо, что ты есть.";
    $("hug-message").textContent = quiet
      ? "Можно просто побыть здесь и вспомнить."
      : "Нажми — пусть Вселенная улыбнётся тебе.";
    if (
      ThemeScenes.catalog[config.holiday] &&
      ![
        "romance",
        "anniversary",
        "friendbirthday",
        "memorial",
        "newborn",
      ].includes(config.holiday)
    ) {
      Object.assign(t, {
        opening: o.intro,
        middle: o.scenes[0][2],
        reasons: o.scenes.map((row) => row[2]),
        end: o.wish,
      });
    }
    $("recipient").textContent = config.to + ", ";
    $("headline").textContent =
      config.holiday === "just" ? "это твоя Вселенная." : o.title;
    $("dedication").textContent =
      "ОТ " + config.from.toUpperCase() + " · ТОЛЬКО ДЛЯ ТЕБЯ";
    $("intro").textContent = o.intro;
    $("letter-label").textContent = o.label.toUpperCase();
    $("salutation").textContent = config.to + ", это тебе.";
    const rows = [
      {
        text: t.opening,
        scene: config.tone === "respect" ? "respect" : "together",
      },
      {
        text: t.middle,
        scene:
          config.tone === "love"
            ? "love"
            : config.tone === "respect"
              ? "respect"
              : "together",
      },
      ...(config.message
        ? [{ text: config.message, scene: config.scene }]
        : []),
      { text: o.wish, scene: "dream" },
      {
        text: "Пожалуйста, не забывай заботиться о себе. Можно отдыхать, искать своё и радоваться небольшим шагам. Мне хочется, чтобы в твоей жизни было больше доброты — в том числе к себе.",
        scene: "support",
      },
    ];
    if (quiet || config.holiday === "newborn") rows.pop();
    $("letter-body").replaceChildren(
      ...rows.map((row) => {
        const p = document.createElement("p");
        p.textContent = row.text;
        p.dataset.scene = row.scene;
        return p;
      }),
    );
    $("sender").textContent = config.from;
    t.reasons.forEach((text, i) => {
      $("reason" + (i + 1)).textContent = text;
      $("reason" + (i + 1)).dataset.scene = [
        "warmth",
        "respect",
        config.tone === "love" ? "love" : "together",
      ][i];
    });
    $("closing").textContent = t.end;
    $("closing").dataset.scene = config.tone === "love" ? "love" : "together";
    const notes = [
      "Даже маленький шаг — уже шаг. Побудь к себе добрее. Твоя ценность не измеряется продуктивностью.",
      "Необязательно заранее знать весь путь. Иногда достаточно любопытства и одного небольшого «А почему бы не попробовать?».",
      "Где-то есть человек, который улыбается, вспоминая тебя. И это письмо — очень прямой намёк ♡",
    ];
    document.querySelectorAll("[data-note]").forEach((p, i) => {
      p.textContent = notes[i];
      p.dataset.scene = ["support", "dream", "warmth"][i];
    });
    document.title = author
      ? "Мастерская · " + config.to
      : config.to + ", это для тебя ✧";
    document.dispatchEvent(
      new CustomEvent("letter-rendered", { detail: { ...config } }),
    );
    show(true);
  }
  function scrollToElement(id) {
    $(id)?.scrollIntoView({
      behavior: Universe.paused ? "auto" : "smooth",
      block: "start",
    });
  }
  $("start-story").addEventListener("click", () =>
    scrollToElement("visual-journey"),
  );
  if (author) {
    for (const [key, o] of Object.entries(occasions)) {
      const opt = document.createElement("option");
      opt.value = key;
      opt.textContent = o.name;
      $("holiday-input").append(opt);
    }
    const fields = {
      to: "to-input",
      from: "from-input",
      holiday: "holiday-input",
      tone: "tone-input",
      message: "message-input",
      scene: "scene-input",
      journey: "journey-input",
      variant: "variant-input",
    };
    function updatePackOptions() {
      const select = $("journey-input"),
        prev = select.value;
      select.replaceChildren();
      const choices = [
        ["auto", "Прежние сцены темы"],
        ...AnimationPacks.options({
          holiday: $("holiday-input").value,
          tone: $("tone-input").value,
        }),
        ...($("holiday-input").value === "memorial"
          ? []
          : [
              ["love", "Классический космос для любимой"],
              ["birthday", "Классический сюрприз"],
              ["gentle", "Классическая тёплая история"],
            ]),
      ];
      for (const [value, label] of choices) {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        select.append(option);
      }
      select.value = [...select.options].some((o) => o.value === prev)
        ? prev
        : "auto";
      const selected = select.options[select.selectedIndex];
      $("pack-description").textContent = select.value.startsWith("pack_")
        ? selected.textContent +
          ". Это отдельная история из трёх сцен; оформление остаётся выбранной темы."
        : "Сохранённый набор анимаций. Для новых историй выбери один из трёх тематических наборов выше.";
    }
    function updateVariants() {
      updatePackOptions();
      const cfg = {
        holiday: $("holiday-input").value,
        tone: $("tone-input").value,
        variant: "all",
      };
      const entries = ThemeScenes.select(cfg);
      const select = $("variant-input");
      const prev = select.value;
      select.replaceChildren();
      for (const [value, label] of [
        ["all", "Все три — последовательная история"],
        ...(entries
          ? entries.map((id, i) => [
              String(i),
              ThemeScenes.scenes[id.slice(6)][1],
            ])
          : []),
      ]) {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        select.append(option);
      }
      select.value = [...select.options].some((o) => o.value === prev)
        ? prev
        : "all";
      select.disabled = !entries || $("journey-input").value !== "auto";
    }
    for (const id of [
      "holiday-input",
      "tone-input",
      "journey-input",
      "variant-input",
    ])
      $(id).addEventListener("change", () => {
        updateVariants();
        document.dispatchEvent(
          new CustomEvent("theme-preview", {
            detail: {
              holiday: $("holiday-input").value,
              tone: $("tone-input").value,
              variant: $("variant-input").value,
            },
          }),
        );
      });
    $("holiday-input").addEventListener("change", () => {
      const key = $("holiday-input").value;
      if (["romance", "anniversary", "valentine"].includes(key))
        $("tone-input").value = "love";
      else if (key === "friendbirthday") $("tone-input").value = "friend";
      else if (
        ["birthday", "memorial", "newborn", "may7", "wedding"].includes(key)
      )
        $("tone-input").value = "respect";

      updateVariants();
      document.dispatchEvent(
        new CustomEvent("theme-preview", {
          detail: {
            holiday: key,
            tone: $("tone-input").value,
            variant: $("variant-input").value,
          },
        }),
      );
    });
    function fill() {
      $("holiday-input").value = config.holiday;
      $("tone-input").value = config.tone;
      updateVariants();
      $("journey-input").value = config.journey;
      updateVariants();
      for (const [k, id] of Object.entries(fields))
        $(id).value = config[k] || "";
    }
    function read() {
      if (!$("form").reportValidity()) return false;
      config = normalize(
        Object.fromEntries(
          Object.entries(fields).map(([k, id]) => [k, $(id).value]),
        ),
      );
      if (!config.to || !config.from) {
        $("status").textContent = "Укажи имена, а не пробелы.";
        return false;
      }
      render();
      return true;
    }
    $("form").addEventListener("input", () => {
      $("share-result").hidden = true;
      $("open-preview").hidden = true;
      shareURL = "";
      $("status").textContent =
        "Изменения ещё не включены в ссылку. Нажми «Посмотреть» или «Скопировать».";
    });
    $("edit").addEventListener("click", () => scrollToElement("editor"));
    $("form").addEventListener("submit", (e) => {
      e.preventDefault();
      if (read()) scrollToElement("home");
    });
    $("share").addEventListener("click", async () => {
      if (!read()) return;
      shareURL = linkFor(config);
      const copyingURL = shareURL,
        copyingName = config.to;
      $("share-url").value = shareURL;
      $("share-result").hidden = false;
      $("open-preview").hidden = false;
      try {
        if (!navigator.clipboard?.writeText)
          throw Error("Clipboard unavailable");
        await navigator.clipboard.writeText(shareURL);
        $("status").textContent =
          "Ссылка скопирована. Отправь её " + config.to + ".";
      } catch {
        $("share-url").focus();
        $("share-url").select();
        $("status").textContent = "Скопируй полную ссылку из поля вручную.";
      }
    });
    $("open-preview").addEventListener("click", () => {
      if (shareURL) window.open(shareURL, "_blank", "noopener,noreferrer");
    });
    config = normalize({});
    config.journey = "pack_0";
    try {
      if (location.hash.startsWith("#letter="))
        config = decode(location.hash.slice(8));
    } catch {
      $("status").textContent =
        "Ссылка повреждена. Можно создать новое письмо.";
    }
    fill();
    if (config.to && config.from) render();
    else show(false);
  } else {
    function load() {
      try {
        if (!location.hash.startsWith("#letter=")) throw Error("No letter");
        config = decode(location.hash.slice(8));
        render();
      } catch {
        show(false);
        $("missing-message").textContent = location.hash.startsWith("#letter=")
          ? "Ссылка повреждена или скопирована не целиком. Попроси отправителя прислать её снова."
          : "Открой полную личную ссылку, которую тебе отправили.";
      }
    }
    load();
    addEventListener("hashchange", load);
  }
  $("hug").addEventListener("click", () => {
    if (config.holiday === "memorial") {
      $("hug-message").textContent = "Память может быть тихой. Береги себя.";
      document.dispatchEvent(new Event("memory-light"));
      return;
    }
    const lines = [
      "Этот свет — для тебя. ♡",
      "Пусть на душе станет немного теплее.",
      "Пусть у тебя будет ещё много поводов улыбнуться.",
    ];
    $("hug-message").textContent = lines[hugs++ % lines.length];
    document.dispatchEvent(new Event("supernova"));
  });
  function progress() {
    const max = document.documentElement.scrollHeight - innerHeight;
    $("progress").style.width =
      (max > 0 ? Math.max(0, Math.min(100, (scrollY / max) * 100)) : 0) + "%";
  }
  addEventListener("scroll", progress, { passive: true });
  addEventListener("resize", progress);
  document.addEventListener("letter-rendered", () =>
    requestAnimationFrame(progress),
  );
  progress();
})();
