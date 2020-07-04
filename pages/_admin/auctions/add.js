import React from "react";
import AddAuction from "../../../components/_admin/auctions/AuctionAdd";
import { getApi } from "../../../api/Api";
import AdminLayout from "../../../layouts/_admin";
import { Box, Typography } from "@material-ui/core";

const Add = (props) => {
  return (
    <AdminLayout>
      <Box marginBottom={1}>
        <Typography
          style={{
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 14,
            lineHeight: "17px",
            color: "#121212",
          }}
        >
          Tambah Barang
        </Typography>
      </Box>
      <AddAuction {...props} />
    </AdminLayout>
  );
};

Add.getInitialProps = async (ctx) => {
  const { id } = await ctx.query;
  const items = await getApi().get("items");
  const users = await getApi().get("users");
  const admins = await getApi().get("admins");

  return {
    itemId: id,
    itemsData: items.data,
    usersData: users.data,
    adminsData: admins.data,
  };
};

export default Add;
