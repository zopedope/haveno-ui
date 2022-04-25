import InterFont from "../../assets/fonts/Inter-Variable.ttf";

export const globalStyles = {
  "@font-face": {
    fontFamily: "Inter",
    src: `url('${InterFont}')`,
    fontWeight: "100 800",
    fontStyle: "normal italic",
  },
  body: {
    margin: 0,
    padding: 0,
  },
  "#app": {
    display: "flex",
    minHeight: "100vh",
  },
};
