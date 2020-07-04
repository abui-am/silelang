import React from "react";
import AdminSidebar from "../../../components/_admin/common/sidebar/Sidebar";
import { Box, makeStyles, Typography, Grid } from "@material-ui/core";
import DashboardHeader from "../../../components/_admin/common/dashboardHeader/DashboardHeader";
import ItemCard from "../../../components/_admin/users/itemCard";
import { getApi } from "../../../api/Api";
const UsersDasboard = (props) => {
  const UsersDashboardStyle = makeStyles({
    root: {
      display: "flex",
      minHeight: "100%",
      background: "#FBFCFD",
    },
    itemContainer: {
      margin: "40px 53px",
    },
  });
  const { usersData } = props;
  const classes = UsersDashboardStyle();
  const userToShow = usersData.slice(0, 15);
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
                {userToShow.map((model, id) => {
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
export default UsersDasboard;

UsersDasboard.getInitialProps = async (ctx) => {
  const users = await getApi().get("users");
  return {
    usersData: users.data,
  };
};
