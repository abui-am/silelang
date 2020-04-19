import React, { Component } from "react";
import { toast } from "react-toastify";
const toaster = (msg) => {
  toast(msg, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
  });
};

export default toaster;
