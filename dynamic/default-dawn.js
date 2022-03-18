const defaultPalette = {
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

const dawnPalette = {
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

const setTheme = ({ matches = false }) => {
  const selectedPalette = matches ? defaultPalette : dawnPalette;
  t.prefs_.set("cursor-color", selectedPalette.inactive);
  t.prefs_.set("foreground-color", selectedPalette.text);
  t.prefs_.set("background-color", selectedPalette.base);
  t.prefs_.set("color-palette-overrides", [
    selectedPalette.overlay,
    selectedPalette.love,
    selectedPalette.pine,
    selectedPalette.gold,
    selectedPalette.foam,
    selectedPalette.iris,
    selectedPalette.rose,
    selectedPalette.text,
    selectedPalette.subtle,
    selectedPalette.love,
    selectedPalette.pine,
    selectedPalette.gold,
    selectedPalette.foam,
    selectedPalette.iris,
    selectedPalette.rose,
    selectedPalette.text,
  ]);
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setTheme)

setTheme({ matches: window.matchMedia("(prefers-color-scheme: dark)").matches });
