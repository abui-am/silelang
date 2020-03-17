import { createMuiTheme } from "@material-ui/core/styles";
import { red, blue, grey } from "@material-ui/core/colors";

const colors = {
  type: "light",
  common: {
    black: "#121212",
    blue: "#61AAED"
  },
  primary: {
    main: "#121212"
  },
  secondary: {
    main: "#61AAED"
  },
  error: {
    main: red.A400
  },
  background: {
    default: "#ffffff",
    sidebar: "#ffffff",
    header: "#ffffff",
    divider: "e4e4e4",
    buttonPlay: "#2D6DA0"
  },
  text: {
    primary: "#121212",
    secondary: "#323232",
    white: "#ffffff",
    title: "#000000",
    menuItem: "#61AAED",
    username: blue[300],
    shared: grey[500]
  }
};
// Create a theme instance.
const theme = createMuiTheme({
  palette: colors,
  typography: {
    fontFamily: "'Lato','Merriweather', sans-serif",
    button: {
      textTransform: "none",
      letterSpacing: 1
    }
  }
});

export default theme;
export { colors };
