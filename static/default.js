const palette = {
  base: "#191724",
  surface: "#1f1d2e",
  overlay: "#26233a",
  inactive: "#555169",
  subtle: "#6e6a86",
  text: "#e0def4",
  love: "#eb6f92",
  gold: "#f6c177",
  rose: "#ebbcba",
  pine: "#31748f",
  foam: "#9ccfd8",
  iris: "#c4a7e7",
  highlight: "#2a2837",
  highlightInactive: "#211f2d",
  highlightOverlay: "#3a384a",
};

t.prefs_.set("cursor-color", palette.inactive);
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
