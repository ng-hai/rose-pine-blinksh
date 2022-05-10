const palette = {
  base: "#232136",
  surface: "#2a273f",
  overlay: "#393552",
  inactive: "rgba(210, 199, 255, 0.5)",
  subtle: "#817c9c",
  text: "#e0def4",
  love: "#eb6f92",
  gold: "#f6c177",
  rose: "#ea9a97",
  pine: "#3e8fb0",
  foam: "#9ccfd8",
  iris: "#c4a7e7",
  highlight: "#312f44",
  highlightInactive: "#2a283d",
  highlightOverlay: "#3f3c53",
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
