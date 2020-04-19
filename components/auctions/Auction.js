import React, { useState, useEffect, useContext } from "react";
import Navbar from "../common/navbar/Navbar";
import {
  Box,
  makeStyles,
  Breadcrumbs,
  Typography,
  Link,
  ButtonBase,
  InputBase,
  Hidden,
} from "@material-ui/core";
import Footer from "../common/footer/Footer";
import Img from "react-image";
import { Carousel } from "react-responsive-carousel";
import ResponsiveImage from "../common/responsiveImage/ResponsiveImage";
import TextTrurncate from "react-text-truncate";
import ActionsPanel from "./actionsPanel/ActionsPanel";
import DividerLine from "../common/divider/DividerLine";
import auctionsStyle from "./AutionStyle";

const Auction = (props) => {
  const classes = auctionsStyle();
  const [auctionData, setAuctionData] = useState({});
  const [itemData, setItemData] = useState({});
  const [ownerData, setOwnerData] = useState({});

  useEffect(() => {
    setAuctionData(props.auctionData);
    setItemData(props.itemData);
    setOwnerData(props.ownerData);
  }, []);

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
                    <ActionsPanel {...props} />
                  </Hidden>
                  <Typography className={classes.itemInformationsTitle}>
                    Informasi Barang
                  </Typography>
                  <Box>
                    <Typography className={classes.itemInformationTitle}>
                      Deskripsi barang
                    </Typography>

                    <Typography className={classes.itemInformation}>
                      {itemData.deskripsi_barang}
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
              <ActionsPanel {...props} />
            </Hidden>

            <DividerLine />
            <Box marginTop={"8px"} marginBottom={"8px"} display="flex">
              <Box className={classes.imageProfile} />
              <Box flexGrow={1}>
                <Typography className={classes.ownerName}>
                  {ownerData.nama_lengkap}
                </Typography>
                <Typography className={classes.ownerContact}>
                  Contact : {ownerData.telp}
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

export default Auction;
