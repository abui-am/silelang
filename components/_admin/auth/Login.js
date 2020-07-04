import React, { useState, useContext, useEffect } from "react";
import { makeStyles, Box, Typography, TextField } from "@material-ui/core";
import ButtonBlue from "../../../components/common/button/buttonBlue";
import { getApi } from "../../../api/Api";
import Cookies from "js-cookie";
import { adminAuthStore } from "../../../ctx/AdminAuthStore";
import toaster from "../../toast/Toast";
import { useRouter } from "next/router";

const AdminLogin = () => {
  const adminLoginStyle = makeStyles((theme) => ({
    root: {
      height: "100vh",
      width: "100vw",
      position: "relative",
      background: "#7C98FB",
    },
    panel: {},
    container: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      background: "#FFFFFF",
      boxShadow: "0px 40px 50px rgba(0, 0, 0, 0.2)",
      borderRadius: "4px",
      backgroud: "#c4c4c4",
      maxWidth: 692,
      width: "100%",
      display: "flex",
      minHeight: 427,
    },
    containerLeft: {
      flexGrow: 1,
      flexBasis: 0,
      background: "#fff",
      padding: "40px 44px 90px 40px",
      display: "flex",
      flexDirection: "column",
    },
    containerRight: {
      flexGrow: 1,
      padding: "40px 44px 90px 40px",

      flexBasis: 0,
      background: "rgba(69, 151, 211, 0.1)",
      borderRadius: "0px 4px 4px 0px",
    },
    title: {
      fontFamily: "Palanquin",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 36,
      lineHeight: "65px",
      alignItems: "center",
      textAlign: "center",
      color: "#1B1E23",
      textShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
    },
  }));
  const router = useRouter();
  const classes = adminLoginStyle();
  const admin = useContext(adminAuthStore);
  const initialData = {
    username: "",
    password: "",
  };
  const [data, setData] = useState(initialData);

  const handleChange = (name, value) => {
    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
  };

  const handleLogin = async (data) => {
    try {
      const adminData = await getApi().post("admin/auth/login", data);
      Cookies.set("adminAuth", data);
      await admin.dispatch({
        type: "handleLogin",
        payload: await adminData.data,
      });
      await router.replace("/_admin/items");
    } catch (e) {
      // admin.dispatch({ type: "handleLogin", payload: adminData.response });
      console.log(e);
      toaster("password / username salah");
    }
  };

  const getAdminDataWithCookie = async () => {
    const data = JSON.parse(Cookies.get("adminAuth"));
    const adminData = await getApi()
      .post("admin/auth/login", data)
      .catch((e) => console.log(e));
    admin.dispatch({ type: "handleLogin", payload: adminData });
  };

  useEffect(() => {
    if (Cookies.get("adminAuth")) {
      getAdminDataWithCookie();
    }
  }, []);

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.containerLeft}>
          <Box marginBottom={4} width="100%">
            <Typography className={classes.title}>Login</Typography>
          </Box>
          <Box marginBottom={3}>
            <TextField
              label="Username"
              fullWidth
              onChange={(e) => handleChange("username", e.target.value)}
            />
            <TextField
              label="Password"
              fullWidth
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </Box>
          <ButtonBlue onClick={() => handleLogin(data)}>Login</ButtonBlue>
        </Box>
        <Box className={classes.containerRight}></Box>
      </Box>
    </Box>
  );
};

export default AdminLogin;
