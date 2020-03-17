import React from "react";
import { Box, makeStyles, Typography, Hidden } from "@material-ui/core";
import DividerLine from "../divider/DividerLine";

const Footer = props => {
  const FooterStyle = makeStyles(theme => ({
    root: {
      padding: "24px 80px ",
      background: "#F3F3F3",
      [theme.breakpoints.only("xs")]: {
        padding: "24px 24px"
      }
    },
    container: {
      paddingTop: theme.spacing(11),
      display: "flex",
      [theme.breakpoints.only("xs")]: {
        flexDirection: "column"
      },
      flexWrap: "wrap",
      justifyContent: "space-between"
    },
    contentContainer: {
      // flexGrow: 1,
      marginBottom: theme.spacing(2)
    },
    logoSmall: {
      fontFamily: "Merriweather",
      fontStyle: "normal",
      fontWeight: "900",
      fontSize: 36,
      lineHeight: "45px",
      letterSpacing: "-0.05em",
      color: "#000000",
      marginBottom: 54
    },
    segmentTitle: {
      fontFamily: "Merriweather",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 24,
      lineHeight: "30px",
      color: "#121212",
      marginBottom: theme.spacing(2)
    },
    segmentList: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 14,
      lineHeight: "17px",
      color: " #61AAED",
      marginBottom: theme.spacing(2)
    },
    socialMedia: {
      height: 42,
      width: 42,
      background: "#61AAED",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      borderRadius: 80,
      marginRight: theme.spacing(2)
    }
  }));

  const classes = FooterStyle();

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.contentContainer}>
          <Typography className={classes.logoSmall}>Silelang</Typography>
          <Typography className={classes.segmentTitle}>Kontak kami</Typography>
          <Box>
            <Typography className={classes.segmentList}>
              WA : 089145787
            </Typography>
            <Typography className={classes.segmentList}>
              Email : Silelang.com{" "}
            </Typography>
          </Box>
        </Box>

        <Box className={classes.contentContainer}>
          <Typography className={classes.segmentTitle}>
            Kategori Populer
          </Typography>
          <Box>
            <Typography className={classes.segmentList}>Mobil</Typography>
            <Typography className={classes.segmentList}>
              Barang Antik{" "}
            </Typography>
            <Typography className={classes.segmentList}>Rumah</Typography>
            <Typography className={classes.segmentList}>Motor </Typography>
            <Typography className={classes.segmentList}>Apartement </Typography>
          </Box>
        </Box>
        <Hidden only="xs">
          <Box className={classes.contentContainer}>
            <Typography className={classes.segmentTitle}>Navigasi</Typography>
            <Box>
              <Typography className={classes.segmentList}>Login</Typography>
              <Typography className={classes.segmentList}>Register </Typography>
              <Typography className={classes.segmentList}>Home</Typography>
              <Typography className={classes.segmentList}>
                About
              </Typography>{" "}
              <Typography className={classes.segmentList}>Logout</Typography>
            </Box>
          </Box>
        </Hidden>

        <Box className={classes.contentContainer}>
          <Typography className={classes.segmentTitle}>Ikuti kami</Typography>
          <Box display="flex" style={{ marginBottom: "24px" }}>
            <Box className={classes.socialMedia}></Box>
            <Box className={classes.socialMedia}></Box>
            <Box className={classes.socialMedia}></Box>
            <Box className={classes.socialMedia}></Box>
          </Box>
          <Typography className={classes.segmentTitle}>Subscribe</Typography>
        </Box>
      </Box>
      <DividerLine />
      <Box textAlign="center">Copyright abuio</Box>
    </Box>
  );
};

export default Footer;
