import { ThemeProvider } from "@material-ui/core";
import theme from "./../theme/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css";
import { StateProvider, authStore } from "../ctx/AuthStore";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Cookies from "js-cookie";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <StateProvider>
        <Login />
        <Register />
        <ToastContainer />

        <CssBaseline />
        <Component {...pageProps} />
      </StateProvider>
    </ThemeProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
