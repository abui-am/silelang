import React from "react";
import { makeStyles, InputBase, Box } from "@material-ui/core";
import clsx from "clsx";
const StyledTextField = (props) => {
  const variant = props.variant || "semi-rounded";

  const getBorderRadius = (variant) => {
    switch (variant) {
      case "semi-rounded":
        return 4;
      case "rounded":
        return 33;
      default:
        return 0;
    }
  };

const textFieldStyle = makeStyles((theme) => ({
    TextField: {
      border: "1px solid #E4E4E4",
      boxSizing: "border-box",
      borderRadius: getBorderRadius(variant),
      flexGrow: 1,
      height: 40,
      padding: "0px 8  px",
    },
  }));

  const classes = textFieldStyle();
  return (
    <Box
      {...props}
      component={InputBase}
      className={clsx(classes.TextField, props.className)}
    >
      {props.children}
    </Box>
  );
};

export default StyledTextField;
