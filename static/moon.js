const palette = {
  base: "#232136",
  surface: "#2a273f",
  overlay: "#393552",
  muted: "#6e6a86",
  subtle: "#908caa",
  text: "#e0def4",
  love: "#eb6f92",
  gold: "#f6c177",
  rose: "#ea9a97",
  pine: "#3e8fb0",
  foam: "#9ccfd8",
  iris: "#c4a7e7",
  highlightLow: "rgba(129, 124, 156, 0.08)",
  highlightMed: "rgba(129, 124, 156, 0.15)",
  highlightHigh: "rgba(129, 124, 156, 0.3)",
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
