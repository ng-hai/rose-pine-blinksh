const moonPalette = {
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

const dawnPalette = {
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

const setTheme = ({ matches = false }) => {
  const selectedPalette = matches ? moonPalette : dawnPalette;
  t.prefs_.set("cursor-color", selectedPalette.highlightHigh);
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
