function loadNav() {
  $(".mid h3")
    .hide()
    .get()
    .reverse()
    .forEach(function (el, i) {
      $(el)
        .delay(i * 300)
        .slideDown(600);
    });
}
$(document).ready(function () {
  $(loadNav);
  const THEMES = {
    light: {
      foreground: "black",
      background: "white",
      accent: "#000000",
      hover: "#2176ff",
      name: "Light",
      icon: "F",
    },
    dark: {
      foreground: "white",
      background: "black",
      accent: "#ffffff",
      hover: "#FFB347",
      name: "Dark",
      icon: "U",
    },
    solaris: {
      foreground: "#f3b88a",
      background: "#06171c",
      accent: "#f7a56a",
      hover: "#2A9D8F",
      name: "Solaris",
      icon: "C",
    },
    cyber: {
      foreground: "#ff2d95",
      background: "#060006",
      accent: "#ff2d95",
      hover: "#9D00FF",
      name: "Cyber",
      icon: "K",
    },
  };
  function applyTheme(key) {
    const root = document.documentElement;
    const t = THEMES[key] || THEMES.light;
    root.style.setProperty("--foreground", t.foreground);
    root.style.setProperty("--background", t.background);
    root.style.setProperty("--accent", t.accent);
    root.style.setProperty("--hover", t.hover);
    $(".theme").text(t.icon);
    localStorage.setItem("site-theme", key);
  }
  const saved = localStorage.getItem("site-theme") || "light";
  applyTheme(saved);
  const keys = Object.keys(THEMES);
  $(".theme").on("click", function () {
    loadNav();
    const cur = localStorage.getItem("site-theme") || "light";
    const idx = keys.indexOf(cur);
    const next = keys[(idx + 1) % keys.length];
    applyTheme(next);
  });
});
