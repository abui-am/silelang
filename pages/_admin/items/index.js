import React from "react";
import AdminSidebar from "../../../components/_admin/common/sidebar/Sidebar";
import { Box, makeStyles, Typography } from "@material-ui/core";
import DashboardHeader from "../../../components/_admin/common/dashboardHeader/DashboardHeader";
import ItemsItemCards from "../../../components/_admin/common/items/itemsItemCards/itemsItemCards";
const ItemDashboard = (props) => {
  const BarangDashboard = makeStyles((theme) => ({
    root: {
      display: "flex",
      minHeight: "100%",
      background: "#FBFCFD",
    },
    itemContainer: {
      padding: "40px 53px",
      [theme.breakpoints.only("xs")]: {
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
      },
    },
  }));

  const classes = BarangDashboard();
  return (
    <React.Fragment>
      <Box className={classes.root}>
        <AdminSidebar />
        <Box flexGrow={1}>
          <DashboardHeader />
          <Box className={classes.itemContainer}>
            <ItemsItemCards models={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]} />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ItemDashboard;
