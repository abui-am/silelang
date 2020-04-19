import React from "react";
import AdminLayout from "../../../layouts/_admin";
import { makeStyles, Typography } from "@material-ui/core";
import DividerLine from "../../../components/common/divider/DividerLine";

const AdditemStyle = makeStyles((theme) => ({
  title: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: "21px",

    letterSpacing: "0.1px",

    color: "#121212",
  },
  subtitle: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "22px",
    color: "#121212",
  },
  textNormal: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "17px",
    color: "#121212",
  },
  container: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const AddItem = (props) => {
  const classes = AdditemStyle();
  return (
    <AdminLayout>
      <Box marginBottom={1}>
        <Typography className={classes.title}>Tambah Barang</Typography>
      </Box>
      <DividerLine marginBottom={3} />
      <Box classname={container}></Box>
    </AdminLayout>
  );
};

export default AddItem;
