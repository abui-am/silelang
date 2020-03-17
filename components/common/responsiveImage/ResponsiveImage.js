import React from "react";
import { makeStyles, Box, ButtonBase } from "@material-ui/core";
import PropTypes from "prop-types";
import Img from "react-image";

const ResponsiveImage = props => {
  const { height, image, buttonBase } = props;
  const ResponsiveImageStyle = makeStyles(theme => ({
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
      margin: 0,
      objectFit: "cover",
      paddingTop: height,
      position: "relative"
    },
    imgCover: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      transform: "translate(-50%, -50%)"
    }
  }));

  const classes = ResponsiveImageStyle();
  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        component={buttonBase ? ButtonBase : Box}
        className={classes.imgContainerRoot}
        onClick={() => {
          props.onClick;
        }}
      >
        <Box className={classes.imgContainer}>
          <Img className={classes.imgCover} src={image} />
        </Box>
      </Box>
    </React.Fragment>
  );
};

ResponsiveImage.propTypes = {
  image: PropTypes.string,
  buttonBase: PropTypes.bool,
  height: PropTypes.string
};

export default ResponsiveImage;
