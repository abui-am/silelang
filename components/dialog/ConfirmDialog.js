import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Box, Typography } from "@material-ui/core";
import clsx from "clsx";
import ButtonMuted from "../common/button/ButtonMuted";
import ButtonBlue from "../common/button/buttonBlue";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#fff",
    width: 480,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: theme.spacing(3),
    borderRadius: 20,
  },
  container: {
    paddingTop: theme.spacing(2),
  },
  title: {
    fontFamily: "Merriweather",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: "45px",
    textAlign: "center",
    color: "#121212",
  },
  textNormal: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "17px",
    textAlign: "center",
    color: "#121212",
  },
}));

export default function ConfirmDialog(props) {
  const classes = useStyles();

  const [success, setSuccess] = useState(false);

  const onClickYes = async () => {
    await props.onClickYes();
    setSuccess(true);
  };
  const dialog = (
    <React.Fragment>
      <Box marginBottom={3}>
        <Typography className={classes.title}>{props.title}</Typography>
      </Box>
      {props.dialog}
      <Box display="flex" justifyContent="flex-end">
        <ButtonMuted onClick={props.open} marginRight={3}>
          Tidak
        </ButtonMuted>
        <ButtonBlue onClick={onClickYes}>Ya</ButtonBlue>
      </Box>
    </React.Fragment>
  );

  const successDialog = (
    <React.Fragment>
      <Box marginBottom={3}>
        <Typography className={classes.title}>Success</Typography>
      </Box>
      Klik oke untuk melanjutkan
      <Box display="flex" justifyContent="flex-end">
        <ButtonBlue onClick={props.handleClose}>Oke</ButtonBlue>
      </Box>
    </React.Fragment>
  );

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableAutoFocus
        disableEnforceFocus
        keepMounted
      >
        <Fade in={props.open}>
          <Box className={classes.paper}>
            <Box className={classes.container}>
              {!success ? dialog : successDialog}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
