import React from "react";
import { getApi } from "../../../api/Api";
import AdminSidebar from "../../../components/_admin/common/sidebar/Sidebar";
import { Box, makeStyles, Typography, Grid } from "@material-ui/core";
import DashboardHeader from "../../../components/_admin/common/dashboardHeader/DashboardHeader";
import ItemCard from "../../../components/_admin/auctions/itemCard";
const AuctionsDashboard = (props) => {
  const AuctionsDashboardStyle = makeStyles({
    root: {
      display: "flex",
      minHeight: "100%",
      background: "#FBFCFD",
    },
    itemContainer: {
      margin: "40px 53px",
    },
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
                {props.auctions.map((model, id) => {
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

AuctionsDashboard.getInitialProps = async (ctx) => {
  try {
    const auctions = await getApi().get("auctions");
    return {
      auctions: auctions.data,
    };
  } catch (e) {
    console.log(e);
    return {
      auctions: [],
    };
  }
};
