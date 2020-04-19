import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Box, ButtonBase, Typography, InputBase } from "@material-ui/core";
import { authStore } from "../../ctx/AuthStore";
import ButtonBlue from "../common/button/buttonBlue";
import StyledTextField from "../common/textField/TextField";
import clsx from "clsx";
import Link from "next/link";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";
import LockIcon from "@material-ui/icons/Lock";
import Cookies from "js-cookie";
import { getApi } from "../../api/Api";
import Loader from "../loader/Loader";
import toaster from "../../components/toast/Toast";

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
    position: "relative",
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

export default function Login() {
  const auth = useContext(authStore);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const handleChange = (name, value) => {
    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
  };

  const handleOpen = () => {
    auth.dispatch({ type: "openLogin" });
  };

  const handleClose = () => {
    auth.dispatch({ type: "closeLogin" });
  };

  const handleLogin = async (data) => {
    await setIsFetching(true);
    toaster("password / username salah");

    const userData = await getApi()
      .post("users/login", data)
      .catch((e) => e);
    console.log(data);

    await setIsFetching(false);
    if (!userData.isAxiosError) {
      auth.dispatch({ type: "handleLogin", payload: userData.data[0] });
      auth.dispatch({ type: "closeLogin" });
      Cookies.set("auth", data);
    } else {
      toaster("password / username salah");
    }
  };

  const getUserDataFromCookie = async (data) => {
    const userData = await getApi()
      .post("users/login", await data)
      .catch((e) => console.log(e));
    auth.dispatch({ type: "handleLogin", payload: userData.data[0] });
  };

  useEffect(() => {
    if (Cookies.get("auth")) {
      const data = JSON.parse(Cookies.get("auth"));
      getUserDataFromCookie(data);
    }
  }, []);

  const body = (
    <React.Fragment>
      <Typography className={classes.title}>Login</Typography>
      <Box className={classes.inputFormBox}>
        <StyledTextField
          name="username"
          className={classes.inputForm}
          marginBottom={4}
          startAdornment={
            <AccountCircleIcon className={classes.placeHolderIcon} />
          }
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          placeholder="Username"
        ></StyledTextField>
        <StyledTextField
          name="password"
          startAdornment={<LockIcon className={classes.placeHolderIcon} />}
          placeholder="Password"
          type="password"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={classes.inputForm}
          marginBottom={5}
        ></StyledTextField>
        <ButtonBlue
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleLogin(data);
          }}
          marginBottom={3}
          maxWidth={349}
          width="100%"
          alignSelf="center"
        >
          Login
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
          Belum punya akun?{" "}
          <Typography
            className={clsx(classes.textNormal, classes.textBold)}
            component={ButtonBase}
          >
            Klik sini
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
    </React.Fragment>
  );

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={auth.state.openLogin}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      disableEnforceFocus
      disableAutoFocus
    >
      <Fade in={auth.state.openLogin}>
        <Box className={classes.paper}>{!isFetching ? body : <Loader />}</Box>
      </Fade>
    </Modal>
  );
}
