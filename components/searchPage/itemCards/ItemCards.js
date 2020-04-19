import React from "react";
import {
  Box,
  makeStyles,
  ButtonBase,
  Grid,
  Typography,
} from "@material-ui/core";
import localeId from "dayjs/locale/id";

import Img from "react-image";
import TextTruncate from "react-text-truncate";
import dayjs from "dayjs";
import relativetime from "dayjs/plugin/relativeTime";

const ItemCards = (props) => {
  const ItemCardStyle = makeStyles((theme) => ({
    root: {
      background: "#FFFFFF",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.20)",
    },
    imgContainerRoot: {
      width: "100%",
      borderRadius: 5,
      transition: "opacity 500ms",
      alignItems: "normal",
      ["&:hover"]: {
        opacity: "0.5",
      },
    },
    imgContainer: {
      width: "100%",
      overflow: "hidden",
      borderRadius: "5px 0px 0px 0px",
      margin: 0,
      paddingTop: "100%",
      position: "relative",
    },
    imgCover: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      transform: "translate(-50%, -50%)",
    },
    itemInfoContainer: {
      padding: 10,
    },
    itemName: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 16,
      lineHeight: "19px",
      color: "#121212",
      marginBottom: theme.spacing(2),
    },
    itemOwner: {
      fontFamily: "Merriweather",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 12,
      lineHeight: "15px",
      color: "#61AAED",
      marginBottom: theme.spacing(2),
    },
    itemDescription: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 14,
      height: 68,
      lineHeight: "17px",
      color: "#323232",
      marginBottom: theme.spacing(2),
    },
    itemLastPrice: {
      fontFamily: "Merriweather",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 14,
      lineHeight: "18px",
      color: "#121212",
      marginBottom: theme.spacing(2),
    },
    itemInfoDivider: {
      border: "1px solid rgba(0, 0, 0, 0.1)",
    },
    closesIn: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 14,
      lineHeight: "17px",

      color: "#121212",
    },
  }));
  const classes = ItemCardStyle();
  dayjs.extend(relativetime);

  const item = (model, id) => {
    return (
      <Grid
        key={id}
        item
        xs={6}
        sm={6}
        md={4}
        lg={3}
        xl={2}
        style={{ position: "relative" }}
      >
        <Box className={classes.root}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            component={ButtonBase}
            className={classes.imgContainerRoot}
            onClick={() => {}}
          >
            <Box className={classes.imgContainer}>
              <Img
                className={classes.imgCover}
                src="https://f4.bcbits.com/img/a1310751472_2.jpg"
              />
            </Box>
          </Box>
          <Box className={classes.itemInfoContainer}>
            <Box className={classes.itemName} style={{ marginBottom: 8 }}>
              <TextTruncate
                line={2}
                element="span"
                truncateText="…"
                text={model.nama_barang}
                textTruncateChild={<span />}
              />
            </Box>
            <Box className={classes.itemOwner} display="flex">
              <Box style={{ color: "#121212", marginRight: 4 }}>oleh </Box>{" "}
              {model.username}
            </Box>

            <Box className={classes.itemDescription}>
              <TextTruncate
                line={3}
                element="span"
                truncateText="…"
                text={model.deskripsi_barang}
                textTruncateChild={<span />}
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography className={classes.itemLastPrice}>
                Rp{model.harga_akhir}
              </Typography>
              <Typography className={classes.itemLastPrice}>4 bids</Typography>
            </Box>
            <hr className={classes.itemInfoDivider} />
            <Box display="flex" justifyContent="flex-end">
              <Typography className={classes.closesIn}>
                Ditutup {dayjs().to(dayjs(model.tgl_lelang))}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    );
  };
  const { models } = props;

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        {models.map((model, id) => item(model, id))}
      </Grid>
    </React.Fragment>
  );
};

export default ItemCards;
