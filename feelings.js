(() => {
  "use strict";
  const pattern =
    /(?<![\p{L}])(тепл[а-яё]*|добр[а-яё]*|рядом|вместе|друж[а-яё]*|поддерж[а-яё]*|забот[а-яё]*|мечт[а-яё]*|смел[а-яё]*|шаг[а-яё]*|люблю|любов[а-яё]*|нежн[а-яё]*|уваж[а-яё]*|собой|встретились|свет[а-яё]*|сия[а-яё]*|раст[а-яё]*|рост[а-яё]*|жизн[а-яё]*|начал[а-яё]*|спокой[а-яё]*|памят[а-яё]*)(?![\p{L}])/giu;
  const textObserver =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            for (const e of entries)
              if (e.isIntersecting) {
                e.target.classList.add("word-seen");
                textObserver.unobserve?.(e.target);
              }
          },
          { threshold: 0.2 },
        )
      : null;
  function effect(word) {
    return /^(свет|сия|тепл)/iu.test(word)
      ? "light"
      : /^(раст|рост|жизн|мечт)/iu.test(word)
        ? "grow"
        : /^(рядом|вместе|встрет|друж)/iu.test(word)
          ? "join"
          : /^(шаг|начал|смел)/iu.test(word)
            ? "step"
            : "soft";
  }
  // Decorate text in place; never wrap or move another module's elements.
  document.addEventListener("letter-rendered", () => {
    textObserver?.disconnect();
    document
      .querySelectorAll(
        "#letter-body p,#intro,#reason1,#reason2,#reason3,#closing,[data-note]",
      )
      .forEach((p) => {
        const text = p.textContent,
          frag = document.createDocumentFragment();
        let end = 0;
        for (const m of text.matchAll(pattern)) {
          frag.append(document.createTextNode(text.slice(end, m.index)));
          const span = document.createElement("em");
          span.className = "story-word";
          span.textContent = m[0];
          span.dataset.effect = effect(m[0]);
          if (textObserver) textObserver.observe(span);
          else span.classList.add("word-seen");
          frag.append(span);
          end = m.index + m[0].length;
        }
        frag.append(document.createTextNode(text.slice(end)));
        p.replaceChildren(frag);
      });
  });
  const button = document.getElementById("fullscreen"),
    status = document.getElementById("view-status");
  let timer;
  function notify(text) {
    if (!status) return;
    status.textContent = text;
    status.hidden = false;
    clearTimeout(timer);
    timer = setTimeout(() => (status.hidden = true), 6000);
  }
  function current() {
    return document.fullscreenElement || document.webkitFullscreenElement;
  }
  function sync() {
    if (!button) return;
    const on = !!current();
    button.setAttribute("aria-pressed", String(on));
    button.querySelector(".fs-label").textContent = on
      ? "Выйти из экрана"
      : "На весь экран";
  }
  button?.addEventListener("click", async () => {
    try {
      if (current()) {
        const fn = document.exitFullscreen || document.webkitExitFullscreen;
        if (fn) await fn.call(document);
      } else {
        const fn =
          document.documentElement.requestFullscreen ||
          document.documentElement.webkitRequestFullscreen;
        if (!fn) {
          notify("Этот браузер не поддерживает полный экран.");
          return;
        }
        await fn.call(document.documentElement);
      }
    } catch {
      notify(
        "Браузер не разрешил полный экран. Открой ссылку в отдельной вкладке.",
      );
    } finally {
      sync();
    }
  });
  document.addEventListener("fullscreenchange", sync);
  document.addEventListener("webkitfullscreenchange", sync);
  sync();
})();
