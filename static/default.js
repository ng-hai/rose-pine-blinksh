const palette = {
  base: "#191724",
  surface: "#1f1d2e",
  overlay: "#26233a",
  muted: "#6e6a86",
  subtle: "#908caa",
  text: "#e0def4",
  love: "#eb6f92",
  gold: "#f6c177",
  rose: "#ebbcba",
  pine: "#31748f",
  foam: "#9ccfd8",
  iris: "#c4a7e7",
  highlightLow: "rgba(110, 106, 134, 0.1)",
  highlightMed: "rgba(110, 106, 134, 0.2)",
  highlightHigh: "rgba(110, 106, 134, 0.4)",
};

t.prefs_.set("cursor-color", palette.highlightHigh);
t.prefs_.set("foreground-color", palette.text);
t.prefs_.set("background-color", palette.base);
t.prefs_.set("color-palette-overrides", [
  palette.overlay,
  palette.love,
  palette.pine,
  palette.gold,
  palette.foam,
  palette.iris,
  palette.rose,
  palette.text,
  palette.subtle,
  palette.love,
  palette.pine,
  palette.gold,
  palette.foam,
  palette.iris,
  palette.rose,
  palette.text,
]);
