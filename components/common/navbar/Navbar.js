import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import InputBase from "@material-ui/core/InputBase";
import { Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
const Navbar = () => {
  const NavbarStyle = makeStyles(theme => ({
    root: {
      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
      minHeight: 110,
      background: "#FFFFFF",
      width: "100%",
      display: "flex",
      [theme.breakpoints.up("xs")]: {
        padding: "16px 80px"
      },
      [theme.breakpoints.only("xs")]: {
        padding: "24px 24px"
      }
    },
    logoContainer: {
      flexBasis: 226,
      flexGrow: 0,
      paddingRight: 40,
      flexShrink: 0
    },
    logoType: {
      fontFamily: "Merriweather",
      fontStyle: "normal",
      fontWeight: 900,
      fontSize: 48,
      lineHeight: "60px",
      letterSpacing: "-0.05em"
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
      width: "100%"
    },
    sugestionText: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 14,
      marginTop: theme.spacing(1.5),
      marginRight: 20,
      lineHeight: "17px",
      color: theme.palette.secondary.main
    },
    authContainer: {
      marginTop: theme.spacing(1),
      marginLeft: 50
    },
    responsiveMenuContainer: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(1)
    },
    buttonLogin: {
      backgroundColor: "#61AAED",
      fontFamily: "Lato",
      color: theme.palette.text.white,
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 14,
      height: 40,
      lineHeight: "17px",
      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
      borderRadius: 4,
      marginRight: theme.spacing(2),
      minWidth: 91,
      textAlign: "center",
      padding: "13px 24px"
    },
    buttonRegister: {
      background: "#FFFFFF",
      border: "0.5px solid #E4E4E4",
      boxSizing: "border-box",
      borderRadius: 4,
      minWidth: 91,
      height: 40,
      textAlign: "center",
      padding: "13px 24px"
    },
    buttonResponsiveMenu: {
      background: "#FFFFFF",
      border: "0.5px solid #E4E4E4",
      boxSizing: "border-box",
      borderRadius: 4,
      minWidth: 40,
      height: 40,
      textAlign: "center",
      padding: "13px"
    }
  }));

  const classes = NavbarStyle();

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Box className={classes.logoContainer}>
          <Typography className={classes.logoType}>Silelang</Typography>
        </Box>
        <Box flexGrow={1}>
          <InputBase className={classes.searchBar}></InputBase>
          <Box display="flex" flexWrap="wrap" height={28} overflow="hidden">
            <Typography className={classes.sugestionText}>Mobil</Typography>
            <Typography className={classes.sugestionText}>Mobil</Typography>
            <Typography className={classes.sugestionText}>Mobil</Typography>
            <Typography className={classes.sugestionText}>Mobil</Typography>
          </Box>
        </Box>
        <Box display="flex">
          <Hidden only="xs">
            <Box display="flex" className={classes.authContainer}>
              <ButtonBase focusRipple className={classes.buttonLogin}>
                Masuk
              </ButtonBase>
              <ButtonBase focusRipple className={classes.buttonRegister}>
                Daftar
              </ButtonBase>
            </Box>
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
