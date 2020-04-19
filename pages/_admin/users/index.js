import React from "react";
import AdminSidebar from "../../../components/_admin/common/sidebar/Sidebar";
import { Box, makeStyles, Typography, Grid } from "@material-ui/core";
import DashboardHeader from "../../../components/_admin/common/dashboardHeader/DashboardHeader";
import ItemCard from "../../../components/_admin/users/itemCard";
const AuctionsDashboard = props => {
  const AuctionsDashboardStyle = makeStyles({
    root: {
      display: "flex",
      minHeight: "100%",
      background: "#FBFCFD"
    },
    itemContainer: {
      margin: "40px 53px"
    }
  });

  const classes = AuctionsDashboardStyle();
  return (
    <React.Fragment>
      <Box className={classes.root}>
        <AdminSidebar />
        <Box flexGrow={1}>
          <DashboardHeader />
          <Box className={classes.itemContainer}>
            <Box>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={2}
              >
                {[0, 0, 0, 0, 0, 0, 0].map((model, id) => {
                  return <ItemCard model={model} id={id} />;
                })}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default AuctionsDashboard;
