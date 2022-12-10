const palette = {
  base: "#faf4ed",
  surface: "#fffaf3",
  overlay: "#f2e9e1",
  muted: "#9893a5",
  subtle: "#797593",
  text: "#575279",
  love: "#b4637a",
  gold: "#ea9d34",
  rose: "#d7827e",
  pine: "#286983",
  foam: "#56949f",
  iris: "#907aa9",
  highlightLow: "rgba(110, 106, 134, 0.05)",
  highlightMed: "rgba(110, 106, 134, 0.08)",
  highlightHigh: "rgba(110, 106, 134, 0.15)",
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
