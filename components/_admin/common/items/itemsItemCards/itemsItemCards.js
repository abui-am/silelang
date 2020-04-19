import React from "react";
import {
  Grid,
  Box,
  Typography,
  makeStyles,
  ButtonBase,
  Fab,
} from "@material-ui/core";
import ResponsiveImage from "../../../../common/responsiveImage/ResponsiveImage";
import TextTruncate from "react-text-truncate";
import Img from "react-image";
import EditIcon from "@material-ui/icons/Edit";
import clsx from "clsx";

const ItemsItemCards = ({ models }) => {
  const itemsItemCardsStyle = makeStyles((theme) => ({
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
    textDesc: {
      textAlign: "left",
      fontFamily: "Lato",
      fontStyle: "normal",

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
  const classes = itemsItemCardsStyle();

  const item = (model, id) => {
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
        <Box className={classes.cardRoot}>
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
            <Typography className={classes.textDate}>16 Juni 1999</Typography>

            <Typography noWrap className={classes.itemName}>
              Asus ROG 16 Core i5 With Paper Sauce
            </Typography>

            <Box marginBottom={0.75} className={classes.textDesc}>
              <TextTruncate
                text=" Some Laptop with powerfull
Core i 5 processor, for better performace"
                line={2}
              />
            </Box>

            <Typography className={clsx(classes.textNormal, classes.textBlue)}>
              Rp 800.000,00
            </Typography>
          </Box>
          <Box style={{ position: "absolute", bottom: 10, right: 10 }}>
            <Fab
              size="small"
              style={{ color: "white", background: "" }}
              aria-label="edit"
            >
              <EditIcon />
            </Fab>
          </Box>
        </Box>
      </Grid>
    );
  };

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      {models.map((model, id) => item(model, id))}
    </Grid>
  );
};

export default ItemsItemCards;
