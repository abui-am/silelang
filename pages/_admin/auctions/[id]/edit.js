import React from "react";
import AdminLayout from "../../../../layouts/_admin";
import DividerLine from "../../../../components/common/divider/DividerLine";
import { Box, Typography } from "@material-ui/core";
import { getApi } from "../../../../api/Api";
import AddAuction from "../../../../components/_admin/auctions/AuctionAdd";

const AuctionEdit = (props) => {
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
          Edit Barang
        </Typography>
      </Box>
      <DividerLine marginBottom={3} />

      <AddAuction {...props} />
    </AdminLayout>
  );
};
AuctionEdit.getInitialProps = async (ctx) => {
  const { id } = await ctx.query;
  const items = await getApi().get("items");
  const users = await getApi().get("users");
  const admins = await getApi().get("admins");
  const auctionData = await getApi()
    .get(`auctions/${id}`)
    .then((res) => res.data);

  return {
    itemId: id,
    itemsData: items.data,
    usersData: users.data,
    adminsData: admins.data,
    isEdit: true,
    auctionData,
  };
};

export default AuctionEdit;
