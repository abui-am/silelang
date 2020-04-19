import { Box } from "@material-ui/core";

const DividerLine = (props) => {
  return (
    <Box
      style={{
        borderBottom: "1px solid #e4e4e4",
        margin: "16px 0px",
      }}
      {...props}
    ></Box>
  );
};

export default DividerLine;
