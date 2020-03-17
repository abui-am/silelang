import React from "react";
import { Box, makeStyles, Typography, ButtonBase } from "@material-ui/core";
import Img from "react-image";
import { Dashboard } from "@material-ui/icons";

const AdminSidebar = props => {
  const AdminSidebarStyle = makeStyles(theme => ({
    root: {
      flexBasis: 256,
      flexShrink: 0,
      background: "#FFFFFF",
      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
      padding: theme.spacing(1)
    },
    sidebarHeader: {
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(1),

      borderBottom: "1px solid e4e4e4"
    },
    profilePicture: {
      width: 40,
      height: 40,
      borderRadius: 40,
      marginBottom: theme.spacing(3)
    },
    adminName: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "30px",
      letterSpacing: "0.15px",
      color: "#121212"
    },
    sidebarBody: {
      paddingTop: "4px"
    },
    sidebarTextContainerActive: {
      padding: theme.spacing(1),
      background: "#E3F2FD",
      marginBottom: theme.spacing(1),
      display: "flex",
      width: "100%",
      justifyContent: "left"
    },
    sidebarIconActive: {
      color: "#61AAED",
      fontSize: 24,
      marginRight: theme.spacing(4)
    },
    sidebarTextActive: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "21px",
      letterSpacing: "0.1px",
      color: "#61AAED"
    },
    sidebarTextContainer: {
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      display: "flex"
    },
    sidebarIcon: {
      color: "rgba(0, 0, 0, 0.54)",
      fontSize: 24,
      marginRight: theme.spacing(4)
    },
    sidebarText: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "21px",
      letterSpacing: "0.1px",
      color: "#121212"
    }
  }));

  const classes = AdminSidebarStyle();

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Box className={classes.sidebarHeader}>
          <Img className={classes.profilePicture}></Img>
          <Typography className={classes.adminName}>Aaoron Hyrules</Typography>
        </Box>
        <Box className={classes.sidebarBody}>
          <Box
            component={ButtonBase}
            className={classes.sidebarTextContainerActive}
          >
            <Dashboard className={classes.sidebarIconActive} />
            <Typography className={classes.sidebarTextActive}>
              Dashboard
            </Typography>
          </Box>
          <Box className={classes.sidebarTextContainer}>
            <Dashboard className={classes.sidebarIcon} />
            <Typography className={classes.sidebarText}>Barang</Typography>
          </Box>
          <Box className={classes.sidebarTextContainer}>
            <Dashboard className={classes.sidebarIcon} />
            <Typography className={classes.sidebarText}>Leleang</Typography>
          </Box>
          <Box className={classes.sidebarTextContainer}>
            <Dashboard className={classes.sidebarIcon} />
            <Typography className={classes.sidebarText}>Pengguna</Typography>
          </Box>
          <Box className={classes.sidebarTextContainer}>
            <Dashboard className={classes.sidebarIcon} />
            <Typography className={classes.sidebarText}>Petugas</Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default AdminSidebar;
