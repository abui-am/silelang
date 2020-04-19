import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Box, ButtonBase, Typography, InputBase } from "@material-ui/core";
import { authStore } from "../../ctx/AuthStore";
import ButtonBlue from "../common/button/buttonBlue";
import StyledTextField from "../common/textField/TextField";
import clsx from "clsx";
import CloseIcon from "@material-ui/icons/Close";
import LockIcon from "@material-ui/icons/Lock";
import PhoneIcon from "@material-ui/icons/Phone";
import PersonIcon from "@material-ui/icons/Person";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { getApi } from "../../api/Api";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  paper: {
    padding: "84px 24px",
    background: "#FFFFFF",
    boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.25)",
    borderRadius: 4,
    maxWidth: "615px",
    width: "100%",
  },
  title: {
    fontFamily: "Merriweather",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: "45px",
    textAlign: "center",
    color: "#121212",
    marginBottom: theme.spacing(5),
  },
  inputForm: {
    maxWidth: 349,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  inputFormBox: {
    alignContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
  },
  textBlue: {
    color: "#61AAED",
  },
  textNormal: {
    fontFamily: "Lato",
    fontSize: 14,
    lineHeight: "17px",
    textAlign: "center",
  },
  textBold: {
    fontWeight: "bold !important",
  },
  closeIcon: {
    color: "rgba(0, 0, 0, 0.2)",
    top: 24,
    right: 24,
    position: "absolute",
  },
  placeHolderIcon: {
    color: "rgba(0, 0, 0, 0.5)",
    marginRight: 8,
  },
}));

export default function Register() {
  const auth = useContext(authStore);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [data, setData] = useState({});

  const handleChange = (name, value) => {
    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
  };

  const handleOpen = () => {
    auth.dispatch({ type: "closeRegister" });
  };

  const handleClose = () => {
    auth.dispatch({ type: "closeRegister" });
  };

  const handleRegister = async (data) => {
    await getApi()
      .post("users/register", data)
      .catch((e) => console.log(e));
    const userData = await getApi()
      .post("users/login", data)
      .catch((e) => console.log(e));
    auth.dispatch({ type: "handleLogin", payload: userData.data[0] });
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={auth.state.openRegister}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      disableEnforceFocus
      disableAutoFocus
    >
      <Fade in={auth.state.openRegister}>
        <Box className={classes.paper}>
          <Typography className={classes.title}>Register</Typography>
          <Box className={classes.inputFormBox}>
            <StyledTextField
              name="namaLengkap"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              placeholder={"Nama lengkap"}
              startAdornment={
                <PersonIcon className={classes.placeHolderIcon} />
              }
              className={classes.inputForm}
              marginBottom={4}
            ></StyledTextField>
            <StyledTextField
              name="username"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              placeholder={"Username"}
              startAdornment={
                <AccountCircleIcon className={classes.placeHolderIcon} />
              }
              className={classes.inputForm}
              marginBottom={5}
            ></StyledTextField>
            <StyledTextField
              name="password"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              type="password"
              placeholder={"Password"}
              startAdornment={<LockIcon className={classes.placeHolderIcon} />}
              className={classes.inputForm}
              marginBottom={5}
            ></StyledTextField>
            <StyledTextField
              name="telepon"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              placeholder={"Nomor telepon"}
              startAdornment={<PhoneIcon className={classes.placeHolderIcon} />}
              className={classes.inputForm}
              marginBottom={5}
            ></StyledTextField>
            <ButtonBlue
              marginBottom={3}
              maxWidth={349}
              width="100%"
              alignSelf="center"
              onClick={() => {
                handleRegister(data);
              }}
            >
              Register
            </ButtonBlue>
            <Box marginBottom={4} textAlign="center">
              <Typography
                className={clsx(classes.textNormal, classes.textBlue)}
                component={ButtonBase}
              >
                Lupa password
              </Typography>
            </Box>
            <Typography className={classes.textNormal}>
              Sudah punya akun?{" "}
              <Typography
                className={clsx(classes.textNormal, classes.textBold)}
                component={ButtonBase}
              >
                Login disini
              </Typography>
            </Typography>
          </Box>
          <Box
            onClick={handleClose}
            className={classes.closeIcon}
            component={ButtonBase}
          >
            <CloseIcon />
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
