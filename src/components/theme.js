// theme.js
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#3da27d" },
    secondary: { main: "#a23d62" },
    type: "dark",
  },
  typography: {
    h1: { fontFamily: "Playfair Display" },
    h2: { fontFamily: "Playfair Display" },
    h3: { fontFamily: "Playfair Display" },
    h4: { fontFamily: "Playfair Display" },
    h5: { fontFamily: "Playfair Display" },
    h6: { fontFamily: "Playfair Display" },
    subtitle1: { fontFamily: "IBM Plex Sans" },
    subtitle2: { fontFamily: "IBM Plex Sans" },
    body1: { fontFamily: "IBM Plex Sans" },
    body2: { fontFamily: "IBM Plex Sans" },
    button: { fontFamily: "IBM Plex Sans" },
    overline: { fontFamily: "IBM Plex Sans" },
    caption: { fontFamily: "IBM Plex Sans" },
  },
});

export default responsiveFontSizes(theme);
