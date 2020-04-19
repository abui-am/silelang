import React from "react";
import AdminLogin from "../../components/_admin/auth/Login";
import { AdminProvider, adminAuthStore } from "../../ctx/AdminAuthStore";

const Login = (props) => {
  return (
    <AdminProvider>
      <AdminLogin />
    </AdminProvider>
  );
};

export default Login;
