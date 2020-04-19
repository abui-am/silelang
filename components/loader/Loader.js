import React from "react";
import LoaderEllipsis from "../../static/loader/main.svg";
import { Box } from "@material-ui/core";

const Loader = (props) => {
  return (
    <Box width="100%" position={"relative"}>
      <LoaderEllipsis
        {...props}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: 64,
        }}
      />
    </Box>
  );
};

export default Loader;
