(function () {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");
  const links = menu ? Array.from(menu.querySelectorAll("a[href^='#']")) : [];

  if (!nav || !toggle || !menu) return;

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("is-open"));
  });

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setOpen(false);
  });

  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target)) setOpen(false);
  });

  const sections = links
    .map(function (link) {
      const id = link.getAttribute("href").slice(1);
      return document.getElementById(id);
    })
    .filter(Boolean);

  function markCurrent() {
    const marker = window.scrollY + 96;
    let current = sections[0];
    sections.forEach(function (section) {
      if (section.offsetTop <= marker) current = section;
    });
    links.forEach(function (link) {
      const match = current && link.getAttribute("href") === "#" + current.id;
      if (match) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  window.addEventListener("scroll", markCurrent, { passive: true });
  markCurrent();
})();

(function () {
  const root = document.querySelector(".typewriter");
  if (!root) return;
  const text = root.getAttribute("data-text") || "";
  const out = root.querySelector(".typewriter-text");
  if (!out) return;

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function showStatic() {
    out.textContent = text;
    root.classList.add("is-static");
    root.classList.add("is-complete");
  }

  function typeLine() {
    out.textContent = "";
    root.classList.remove("is-static");
    let index = 0;
    function step() {
      if (motion.matches) {
        showStatic();
        return;
      }
      if (index >= text.length) {
        root.classList.add("is-complete");
        return;
      }
      out.textContent += text.charAt(index);
      index += 1;
      window.setTimeout(step, 40);
    }
    window.setTimeout(step, 250);
  }

  if (motion.matches) showStatic();
  else typeLine();

  if (typeof motion.addEventListener === "function") {
    motion.addEventListener("change", function (event) {
      if (event.matches) showStatic();
    });
  }
})();
