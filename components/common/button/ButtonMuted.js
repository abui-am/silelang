import react from "react";
import { makeStyles, Box, ButtonBase } from "@material-ui/core";

const ButtonMuted = (props) => {
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

  const buttonMutedStyle = makeStyles((theme) => ({
    buttonLogin: {
      backgroundColor: "#fff",
      fontFamily: "Lato",
      color: "#121212",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 14,
      height: 40,
      border: "1px solid #E4E4E4",
      lineHeight: "17px",
      borderRadius: getBorderRadius(variant),

      minWidth: 91,
      textAlign: "center",
      padding: "13px 24px",
    },
  }));

  const classes = buttonMutedStyle();

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

export default ButtonMuted;
