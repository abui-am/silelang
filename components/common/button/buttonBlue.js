import react from "react";
import { makeStyles, Box, ButtonBase } from "@material-ui/core";

const ButtonBlue = (props) => {
  const variant = props.variant || "semi-rounded";
  const { onClick, children } = props;

  const getBorderRadius = (variant) => {
    switch (variant) {
      case "semi-rounded":
        return 4;
      case "rounded":
        return 30;
      default:
        return 0;
    }
  };

  const buttonBlueStyle = makeStyles((theme) => ({
    buttonLogin: {
      backgroundColor: "#61AAED",
      fontFamily: "Lato",
      color: theme.palette.text.white,
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 14,
      height: 40,
      lineHeight: "17px",
      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
      borderRadius: getBorderRadius(variant),

      minWidth: 91,
      textAlign: "center",
      padding: "13px 24px",
    },
  }));

  const classes = buttonBlueStyle();

  return (
    <Box
      className={classes.buttonLogin}
      component={ButtonBase}
      onClick={onClick ? onClick : () => {}}
      {...props}
    >
      {children}
    </Box>
  );
};

export default ButtonBlue;
