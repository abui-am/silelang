import React from "react";
import AdminSidebar from "../components/_admin/common/sidebar/Sidebar";
import { AdminProvider } from "../ctx/AdminAuthStore";

const AdminLayout = (props) => {
  return (
    <AdminProvider>
      <Box
        style={{
          display: "flex",
          minHeight: "100%",
          background: "#FBFCFD",
        }}
      >
        <AdminSidebar />

        <Box
          flexGrow={1}
          style={{
            padding: "48px 54px",
          }}
        >
          {props.children}
        </Box>
      </Box>
    </AdminProvider>
  );
};

export default AdminLayout;
