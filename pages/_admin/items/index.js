import React from "react";
import AdminSidebar from "../../../components/_admin/common/sidebar/Sidebar";
import { Box, makeStyles, Typography } from "@material-ui/core";
import DashboardHeader from "../../../components/_admin/common/dashboardHeader/DashboardHeader";
import ItemsItemCards from "../../../components/_admin/common/items/itemsItemCards/itemsItemCards";
import { getApi } from "../../../api/Api";
import ItemModal from "../../../components/_admin/items/itemModal";
import { initializeItem } from "../../../models/ItemModel";
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
            <ItemsItemCards models={props.items} />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

ItemDashboard.getInitialProps = async (ctx) => {
  try {
    const items = await getApi().get("items");

    return {
      items: items.data,
    };
  } catch (e) {
    return {
      items: [],
    };
  }
};

export default ItemDashboard;
