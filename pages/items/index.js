import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import {
  Box,
  makeStyles,
  Breadcrumbs,
  Typography,
  Link,
  ButtonBase,
  InputBase,
  Hidden
} from "@material-ui/core";
import Footer from "../../components/common/footer/Footer";
import Img from "react-image";
import { Carousel } from "react-responsive-carousel";
import ResponsiveImage from "../../components/common/responsiveImage/ResponsiveImage";
import TextTruncate from "react-text-truncate";
import ActionsPanel from "../../components/itemsPage/actionsPanel/ActionsPanel";
import DividerLine from "../../components/common/divider/DividerLine";

const ItemsIndex = props => {
  const itemsPageStyle = makeStyles(theme => ({
    root: {
      padding: "40px 80px",
      [theme.breakpoints.only("xs")]: {
        padding: "40px 24px"
      }
    },
    breadcrumbContainer: {
      marginBottom: theme.spacing(3)
    },
    breadcrumbText: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 14,
      lineHeight: "17px",
      color: "#121212"
    },
    contentContainer: {
      marginBottom: theme.spacing(1),
      display: "flex",

      [theme.breakpoints.down("sm")]: {
        flexDirection: "column"
      }
    },

    infoContainer: {
      marginBottom: theme.spacing(4),
      flexGrow: 1,
      display: "flex",
      flexBasis: 710,
      [theme.breakpoints.down("xs")]: {
        marginBottom: theme.spacing(0)
      }
    },
    anotherImage: {
      flexShrink: 1,
      objectFit: "cover",
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        flexGrow: 1,
        margin: theme.spacing(1)
      }
    },
    mainContentContainer: {
      display: "flex",
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 710
    },
    anotherImageContainer: {
      width: 100,
      flexGrow: 0,
      display: "flex",
      flexShrink: 1,
      marginRight: theme.spacing(3),
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "row",
        width: "auto",
        marginRight: "-8px",
        marginLeft: "-8px"
      }
    },
    itemInfoContainer: {
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 586,
      [theme.breakpoints.down("sm")]: {
        flexGrow: 1
      }
    },

    imgContainerRoot: {
      width: "100%",
      borderRadius: 5,
      transition: "opacity 500ms",
      alignItems: "normal",
      ["&:hover"]: {
        opacity: "0.5"
      }
    },
    imgContainer: {
      width: "100%",
      overflow: "hidden",
      borderRadius: "5px 0px 0px 0px",
      margin: 0,
      paddingTop: "100%",
      position: "relative"
    },
    imgCover: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      transform: "translate(-50%, -50%)"
    },
    actionsContainer: {
      flexGrow: 0,
      flexBasis: 448,
      flexShrink: 1,
      marginLeft: theme.spacing(6),
      [theme.breakpoints.down("sm")]: {
        marginLeft: theme.spacing(0)
      }
    },
    infoContainerBottom: {
      marginTop: theme.spacing(5)
    },
    itemInformationsTitle: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 36,
      lineHeight: "43px",
      color: "#121212",
      marginBottom: theme.spacing(3)
    },
    itemInformationTitle: {
      fontFamily: "Merriweather",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 18,
      lineHeight: "23px",
      color: "#121212",
      marginBottom: 14
    },
    itemInformation: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 14,
      lineHeight: "17px",
      color: "#323232",
      marginBottom: theme.spacing(4)
    },
    imageProfile: {
      borderRadius: 80,
      height: 80,
      flexBasis: "80px",
      background:
        "url('https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg')",
      flexShrink: 0,
      flexGrow: 0,
      marginRight: 24
    },
    ownerName: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 24,
      lineHeight: "29px",
      color: "#121212"
    },
    ownerContact: {
      marginTop: theme.spacing(1),
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 14,
      lineHeight: "17px",
      color: "#121212"
    }
  }));
  const classes = itemsPageStyle();

  return (
    <React.Fragment>
      <Navbar />
      <Box className={classes.root}>
        <Box className={classes.breadcrumbContainer}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link className={classes.breadcrumbText} color="inherit" href="/">
              Material-UI
            </Link>
            <Link
              className={classes.breadcrumbText}
              color="inherit"
              href="/getting-started/installation/"
            >
              Core
            </Link>
            <Typography className={classes.breadcrumbText} color="textPrimary">
              Breadcrumb
            </Typography>
          </Breadcrumbs>
        </Box>

        <Box className={classes.contentContainer}>
          <Box className={classes.infoContainer}>
            <Box className={classes.mainContentContainer}>
              <Hidden smDown>
                <Box className={classes.anotherImageContainer}>
                  <Box className={classes.anotherImage}>
                    <ResponsiveImage
                      image="https://f4.bcbits.com/img/a1310751472_2.jpg"
                      buttonBase
                      height="100%"
                    />
                  </Box>
                  <Box className={classes.anotherImage}>
                    <ResponsiveImage
                      image="https://f4.bcbits.com/img/a1310751472_2.jpg"
                      buttonBase
                      height="100%"
                    />
                  </Box>
                  <Box className={classes.anotherImage}>
                    <ResponsiveImage
                      image="https://f4.bcbits.com/img/a1310751472_2.jpg"
                      buttonBase
                      height="100%"
                    />
                  </Box>
                  <Box className={classes.anotherImage}>
                    <ResponsiveImage
                      image="https://f4.bcbits.com/img/a1310751472_2.jpg"
                      buttonBase
                      height="100%"
                    />
                  </Box>
                </Box>
              </Hidden>
              <Box className={classes.itemInfoContainer}>
                <Box className={classes.itemCarousel}>
                  <Carousel showThumbs={false} showStatus={false}>
                    <ResponsiveImage
                      image="https://f4.bcbits.com/img/a1310751472_2.jpg"
                      buttonBase
                      height="448px"
                    />
                    <ResponsiveImage
                      image="https://f4.bcbits.com/img/a1310751472_2.jpg"
                      buttonBase
                      height="448px"
                    />
                    <ResponsiveImage
                      image="https://f4.bcbits.com/img/a1310751472_2.jpg"
                      buttonBase
                      height="448px"
                    />
                  </Carousel>
                  <Hidden mdUp>
                    <Box className={classes.anotherImageContainer}>
                      <Box className={classes.anotherImage}>
                        <ResponsiveImage
                          image="https://f4.bcbits.com/img/a1310751472_2.jpg"
                          buttonBase
                          height="100%"
                        />
                      </Box>
                      <Box className={classes.anotherImage}>
                        <ResponsiveImage
                          image="https://f4.bcbits.com/img/a1310751472_2.jpg"
                          buttonBase
                          height="100%"
                        />
                      </Box>
                      <Box className={classes.anotherImage}>
                        <ResponsiveImage
                          image="https://f4.bcbits.com/img/a1310751472_2.jpg"
                          buttonBase
                          height="100%"
                        />
                      </Box>
                      <Box className={classes.anotherImage}>
                        <ResponsiveImage
                          image="https://f4.bcbits.com/img/a1310751472_2.jpg"
                          buttonBase
                          height="100%"
                        />
                      </Box>
                    </Box>
                  </Hidden>
                </Box>
                <Box className={classes.infoContainerBottom}>
                  <Hidden mdUp>
                    <ActionsPanel />
                  </Hidden>
                  <Typography className={classes.itemInformationsTitle}>
                    Informasi Barang
                  </Typography>
                  <Box>
                    <Typography className={classes.itemInformationTitle}>
                      Deskripsi barang
                    </Typography>

                    <Typography className={classes.itemInformation}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Faucibus aliquam feugiat convallis luctus metus, tristique
                      cras sodales. Amet curabitur volutpat enim egestas egestas
                      pulvinar volutpat, pellentesque nisi. Cras amet sed id
                      feugiat. Id nunc nunc ut tempus felis. In ut dictum sit
                      duis eu, potenti in hac pellentesque. Non risus pharetra
                      ut consequat. Lectus enim, placerat eu arcu, tortor et
                      viverra. Eget augue pellentesque in sollicitudin platea
                      quis id aliquet. Felis, libero amet duis eu purus
                      sollicitudin vitae cursus. A leo, convallis feugiat quis
                      odio vel. Augue pharetra sit in non euismod etiam montes,
                      fringilla non. Arcu consequat, nisl non sodales sed
                      iaculis ac tempus. Vitae mauris, dui ultrices sit purus,
                      risus scelerisque. Cras nunc scelerisque aliquam ut vitae
                      risus, amet, lorem. Proin nulla suspendisse tempus eu,
                      orci risus. Luctus aliquam quam egestas et quis magna. Eu
                      amet amet aliquam tincidunt tristique dictum. Sit sit
                      congue pharetra faucibus velit placerat. Commodo consequat
                      metus, dui blandit eget convallis tellus.
                    </Typography>
                    <Typography className={classes.itemInformationTitle}>
                      Pengiriman
                    </Typography>

                    <Typography className={classes.itemInformation}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Faucibus aliquam feugiat convallis luctus metus, tristique
                      cras sodales. Amet curabitur volutpat enim egestas egestas
                      pulvinar volutpat, pellentesque nisi. Cras amet sed id
                      feugiat. Id nunc nunc ut tempus felis. In ut dictum sit
                      duis eu, potenti in hac pellentesque. Non risus pharetra
                      ut consequat. Lectus enim, placerat eu arcu, tortor et
                      viverra.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.actionsContainer}>
            <Hidden smDown>
              <ActionsPanel />
            </Hidden>

            <DividerLine />
            <Box marginTop={"8px"} marginBottom={"8px"} display="flex">
              <Box className={classes.imageProfile} />
              <Box flexGrow={1}>
                <Typography className={classes.ownerName}>
                  Stephen William
                </Typography>
                <Typography className={classes.ownerContact}>
                  Contact : +629898981881818
                </Typography>
              </Box>
            </Box>
            <DividerLine />
            <Typography className={classes.itemInformationTitle}>
              Biografi pelelang
            </Typography>

            <Typography className={classes.itemInformation}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              aliquam feugiat convallis luctus metus, tristique cras sodales.
              Amet curabitur volutpat enim egestas egestas pulvinar volutpat,
              pellentesque nisi. Cras amet sed id feugiat. Id nunc nunc ut
              tempus felis,
            </Typography>
            <Typography className={classes.itemInformationTitle}>
              Opsi pembayaran
            </Typography>

            <Typography className={classes.itemInformation}></Typography>
          </Box>
        </Box>
      </Box>

      <Footer />
    </React.Fragment>
  );
};

export default ItemsIndex;
