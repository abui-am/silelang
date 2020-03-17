import React from "react";
import {
  makeStyles,
  Typography,
  InputBase,
  Box,
  ButtonBase
} from "@material-ui/core";

const DashboardHeader = props => {
  const DashboardHeaderStyle = makeStyles(theme => ({
    root: {
      padding: "24px 52px 0px 52px ",
      display: "flex",
      alignItems: "center"
    },
    headerTitle: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 36,
      lineHeight: "21px",
      letterSpacing: "0.1px",
      color: "#121212"
    },
    searchBarContainer: {
      display: "flex",
      flexGrow: 1,
      justifyContent: "flex-end"
    },
    searchBox: {
      height: 40,
      border: "1px solid #E4E4E4",
      boxSizing: "border-box",
      borderRadius: 33,
      flexGrow: 1
    },
    filterButton: {
      marginLeft: theme.spacing(3),
      background: "#61AAED",
      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
      borderRadius: "33px",
      width: 40,
      height: 40
    }
  }));

  const classes = DashboardHeaderStyle();
  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Box
          borderBottom="1px solid #e4e4e4"
          display="flex"
          flexGrow={1}
          paddingBottom="24px"
          alignItems="center"
        >
          <Box flexGrow={1}>
            <Typography className={classes.headerTitle}>Dashboard</Typography>
          </Box>

          <Box className={classes.searchBarContainer}>
            <InputBase className={classes.searchBox} />
            <ButtonBase className={classes.filterButton}></ButtonBase>
            <ButtonBase className={classes.filterButton}></ButtonBase>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default DashboardHeader;
