import React from "react";
import {
  Grid,
  Box,
  Typography,
  makeStyles,
  ButtonBase
} from "@material-ui/core";
import ResponsiveImage from "../../../../common/responsiveImage/ResponsiveImage";
import TextTruncate from "react-text-truncate";
import Img from "react-image";
const ItemsItemCards = ({ models }) => {
  const itemsItemCardsStyle = makeStyles(theme => ({
    cardRoot: {
      background: "#FFFFFF",
      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      height: 112
    },
    itemName: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "14px",
      lineHeight: "17px",
      color: "#121212",
      textAlign: "start",
      marginBottom: theme.spacing(0.5)
    },
    itemDescription: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "normal",
      textAlign: "start",

      fontSize: 12,
      lineHeight: "14px",
      marginBottom: theme.spacing(0.5),

      color: "#323232"
    },
    textBlack: {
      fontFamily: "Merriweather",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 12,
      lineHeight: "15px",
      color: "#121212",
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(0.5)
    },
    textBlue: {
      fontFamily: "Merriweather",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 12,
      lineHeight: "15px",
      color: "#61AAED",
      marginBottom: theme.spacing(0.5)
    }
  }));
  const classes = itemsItemCardsStyle();

  const item = (model, id) => {
    return (
      <Grid
        key={id}
        item
        xs={6}
        sm={6}
        md={4}
        lg={4}
        xl={3}
        style={{ position: "relative" }}
      >
        <ButtonBase className={classes.cardRoot}>
          <Img
            src="https://f4.bcbits.com/img/a1310751472_2.jpg"
            style={{ width: "112px", height: "112px" }}
          />
          <Box padding={"10px"}>
            <Box className={classes.itemName}>
              <TextTruncate
                line={2}
                element="span"
                truncateText="..."
                text="Asus ROG 16 Core i5 With 
Paper Sauce"
                textTruncateChild={<span />}
              />
            </Box>
            <Box className={classes.itemDescription}>
              <TextTruncate
                line={1}
                element="span"
                truncateText="..."
                text="Some Laptop with powerfull
Core i 5 processor, for better sauce with barbeque eexentric sauce"
              />
            </Box>
            <Box display="flex">
              <Typography className={classes.textBlack}>Harga </Typography>
              <Typography className={classes.textBlue}>Rp8000000000</Typography>
            </Box>

            <Box display="flex">
              <Typography className={classes.textBlack}>Harga </Typography>
              <Typography className={classes.textBlue}>Rp8000000000</Typography>
            </Box>
          </Box>
        </ButtonBase>
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
