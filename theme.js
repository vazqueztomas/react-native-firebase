import { extendTheme } from "native-base";

const newColorTheme = {
  brand: {
    900: "#5B8DF6",
    800: "#ffffff",
    700: "#cccccc",
  },
};

const theme = extendTheme({
  colors: newColorTheme,
});

export default theme;
