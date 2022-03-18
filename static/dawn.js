const palette = {
  base: "#faf4ed",
  surface: "#fffaf3",
  overlay: "#f2e9de",
  inactive: "#9893a5",
  subtle: "#6e6a86",
  text: "#575279",
  love: "#b4637a",
  gold: "#ea9d34",
  rose: "#d7827e",
  pine: "#286983",
  foam: "#56949f",
  iris: "#907aa9",
  highlight: "#eee9e6",
  highlightInactive: "#f2ede9",
  highlightOverlay: "#e4dfde",
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
