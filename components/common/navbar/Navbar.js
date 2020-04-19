import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import InputBase from "@material-ui/core/InputBase";
import { Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Login from "./../../auth/Login";
import ButtonBlue from "../button/buttonBlue";
import { authStore } from "../../../ctx/AuthStore";
import ButtonMuted from "../button/ButtonMuted";
import SilelangLogo from "../../../static/SVG/main.svg";
import ProfileMenu from "./ProfileMenu";

import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const auth = useContext(authStore);
  const [search, changeSearch] = useState("");
  const handleOpen = () => {
    auth.dispatch({ type: "openLogin" });
  };
  const handleOpenRegister = () => {
    auth.dispatch({ type: "openRegister" });
  };

  const handleClose = () => {
    auth.dispatch({ type: "closeLogin" });
  };

  const handleChangeSearch = (e) => {
    e.preventDefault();
    changeSearch(e.target.value);
  };

  const handleKeySearch = (e) => {
    if (e.key == "Enter") {
      router.replace(`/search/${search}`);
    }
  };

  const NavbarStyle = makeStyles((theme) => ({
    root: {
      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
      minHeight: 110,
      background: "#FFFFFF",
      width: "100%",
      display: "flex",
      [theme.breakpoints.up("xs")]: {
        padding: "16px 80px",
      },
      [theme.breakpoints.only("xs")]: {
        padding: "24px 24px",
      },
    },
    logoContainer: {
      flexBasis: 226,
      flexGrow: 0,
      paddingRight: 40,
      flexShrink: 0,
    },
    logoType: {
      fontFamily: "Merriweather",
      fontStyle: "normal",
      fontWeight: 900,
      fontSize: 48,
      lineHeight: "60px",
      letterSpacing: "-0.05em",
    },
    searchBar: {
      padding: "11px 20px",
      fontFamily: "Merriweather",
      fontStyle: "normal",
      fontWeight: "normal",
      color: "#323232",
      fontSize: 14,
      lineHeight: "18px",
      background: "#FFFFFF",
      border: "1px solid #E4E4E4",
      boxSizing: "border-box",
      height: 40,
      borderRadius: 4,
      marginTop: theme.spacing(1),
      width: "100%",
    },
    sugestionText: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 14,
      marginTop: theme.spacing(1.5),
      marginRight: 20,
      lineHeight: "17px",
      color: theme.palette.secondary.main,
    },
    authContainer: {
      marginTop: theme.spacing(1),
      marginLeft: 50,
    },
    responsiveMenuContainer: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },

    buttonRegister: {
      background: "#FFFFFF",
      border: "0.5px solid #E4E4E4",
      boxSizing: "border-box",
      borderRadius: 4,
      minWidth: 91,
      height: 40,
      textAlign: "center",
      padding: "13px 24px",
    },
    buttonResponsiveMenu: {
      background: "#FFFFFF",
      border: "0.5px solid #E4E4E4",
      boxSizing: "border-box",
      borderRadius: 4,
      minWidth: 40,
      height: 40,
      textAlign: "center",
      padding: "13px",
    },
  }));

  const classes = NavbarStyle();

  const profileIsNotLogged = (
    <Box display="flex" className={classes.authContainer}>
      <ButtonBlue type="button" component={ButtonBase} onClick={handleOpen}>
        Login
      </ButtonBlue>
      <ButtonMuted marginLeft={2} onClick={handleOpenRegister}>
        Daftar
      </ButtonMuted>
    </Box>
  );

  const profileIsLogged = (
    <Box display="flex" className={classes.authContainer}>
      <Box
        style={{
          width: 38,
          height: 38,
          background: "#C4C4C4",
          marginRight: 16,
          borderRadius: 20,
        }}
      ></Box>
      <ProfileMenu>
        <Typography
          style={{
            fontFamily: "Lato",
            fontWeight: "bold",
            fontSize: 14,
            lineHeight: "17px",
            color: "#121212",
            paddingTop: 10,
            height: 38,
          }}
        >
          {auth.state.userData.nama_lengkap}
        </Typography>
      </ProfileMenu>
    </Box>
  );

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Box className={classes.logoContainer}>
          {/* <Typography className={classes.logoType}>Silelang</Typography> */}
          <Box>
            {" "}
            <SilelangLogo />
          </Box>
        </Box>
        <Box flexGrow={1}>
          <InputBase
            className={classes.searchBar}
            placeholder="Mobil"
            onChange={handleChangeSearch}
            onKeyPress={(e) => handleKeySearch(e)}
          ></InputBase>
          <Box display="flex" flexWrap="wrap" height={28} overflow="hidden">
            <Typography className={classes.sugestionText}>Mobil</Typography>
            <Typography className={classes.sugestionText}>Mobil</Typography>
            <Typography className={classes.sugestionText}>Mobil</Typography>
            <Typography className={classes.sugestionText}>Mobil</Typography>
          </Box>
        </Box>
        <Box display="flex">
          <Hidden only="xs">
            {auth.state.isLogged ? profileIsLogged : profileIsNotLogged}
          </Hidden>
          <Hidden only={["sm", "md", "lg", "xl"]}>
            <Box display="flex" className={classes.responsiveMenuContainer}>
              <ButtonBase focusRipple className={classes.buttonResponsiveMenu}>
                <MenuIcon />
              </ButtonBase>
            </Box>
          </Hidden>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
