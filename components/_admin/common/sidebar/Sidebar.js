import React from "react";
import {
  Hidden,
  Box,
  makeStyles,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import Img from "react-image";
import { Dashboard } from "@material-ui/icons";
import AppRoutes from "./AppRoutes";
import { useRouter } from "next/router";
const AdminSidebar = (props) => {
  const AdminSidebarStyle = makeStyles((theme) => ({
    root: {
      minHeight: "100vh",
      width: 256,
      flexShrink: 0,
      background: "#FFFFFF",
      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
      padding: theme.spacing(1),
    },
    sidebarHeader: {
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(1),

      borderBottom: "1px solid e4e4e4",
    },
    profilePicture: {
      width: 40,
      height: 40,
      borderRadius: 40,
      marginBottom: theme.spacing(3),
    },
    adminName: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "30px",
      letterSpacing: "0.15px",
      color: "#121212",
    },
    sidebarBody: {
      paddingTop: "4px",
    },
    sidebarTextContainerActive: {
      padding: theme.spacing(1),
      background: "#E3F2FD",
      marginBottom: theme.spacing(1),
      display: "flex",
      width: "100%",
      justifyContent: "left",
    },
    sidebarIconActive: {
      color: "#61AAED",
      fontSize: 24,
      marginRight: theme.spacing(4),
    },
    sidebarTextActive: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "21px",
      letterSpacing: "0.1px",
      color: "#61AAED",
    },
    sidebarTextContainer: {
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      display: "flex",
      width: "100%",
    },
    sidebarIcon: {
      color: "rgba(0, 0, 0, 0.54)",
      fontSize: 24,
      marginRight: theme.spacing(4),
    },
    sidebarText: {
      width: "100%",
      textAlign: "start",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "21px",
      letterSpacing: "0.1px",
      color: "#121212",
    },
  }));
  const router = useRouter();
  const classes = AdminSidebarStyle();

  return (
    <React.Fragment>
      <Hidden only={["sm", "xs"]}>
        <Box className={classes.root}>
          <Box className={classes.sidebarHeader}>
            <Img className={classes.profilePicture}></Img>
            <Typography className={classes.adminName}>
              Aaoron Hyrules
            </Typography>
          </Box>
          <Box className={classes.sidebarBody}>
            {/* <Box
              component={ButtonBase}
              className={classes.sidebarTextContainerActive}
            >
              <Dashboard className={classes.sidebarIconActive} />
              <Typography className={classes.sidebarTextActive}>
                Dashboard
              </Typography>
            </Box> */}
            {AppRoutes.map((data) => {
              return (
                <Box
                  className={classes.sidebarTextContainer}
                  component={ButtonBase}
                  onClick={() => {
                    router.push("/_admin" + data.url);
                  }}
                >
                  <Dashboard className={classes.sidebarIcon} />
                  <Typography className={classes.sidebarText}>
                    {data.name}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Hidden>
    </React.Fragment>
  );
};

export default AdminSidebar;
