import React from "react";
import {
  Grid,
  Box,
  Typography,
  makeStyles,
  ButtonBase,
} from "@material-ui/core";
import TextTruncate from "react-text-truncate";
import Img from "react-image";
import clsx from "clsx";
const ItemCard = ({ model, id }) => {
  const ItemCardStyle = makeStyles((theme) => ({
    cardRoot: {
      background: "#FFFFFF",
      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      height: 112,
      minWidth: "0px",
      width: "100%",
    },
    itemName: {
      minWidth: "0px",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "14px",
      lineHeight: "17px",
      color: "#121212",
      textAlign: "start",
      marginBottom: theme.spacing(0.5),
    },
    textNormal: {
      textAlign: "left",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 12,
      lineHeight: "15px",
      color: "#121212",
      minWidth: 0,
    },
    textBlue: {
      color: "#61AAED !important",
    },
    textDate: {
      textAlign: "left",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 10,
      lineHeight: "12px",
      marginBottom: 4,
    },
  }));
  const classes = ItemCardStyle();

  return (
    <Grid
      key={id}
      item
      xs={12}
      sm={6}
      md={6}
      lg={4}
      xl={3}
      style={{ position: "relative" }}
    >
      <ButtonBase className={classes.cardRoot}>
        <Box flexBasis={"112px"} flexShrink={0}>
          <Img
            src="https://f4.bcbits.com/img/a1310751472_2.jpg"
            style={{
              width: "112px",
              height: "112px",
              borderRadius: "4px 0px 0px 4px",
            }}
          />
        </Box>

        <Box
          padding={"10px"}
          display="flex"
          flexDirection="column"
          flexGrow={1}
          minWidth={0}
        >
          <Typography
            style={{ marginBottom: "11px" }}
            className={classes.textNormal}
          >
            ID : 01999
          </Typography>

          <Typography marginBottom={1} className={classes.itemName}>
            David Khadafi Leslahu Amanah
          </Typography>

          <Typography className={clsx(classes.textNormal, classes.textBlue)}>
            davidkhadafi
          </Typography>
        </Box>
      </ButtonBase>
    </Grid>
  );
};

export default ItemCard;
