import React from "react";
import { getApi } from "../api/Api";
import { Box } from "@material-ui/core";

const AuctionPage = (props) => {
  return <Box />;
};

AuctionPage.getInitialProps = async (ctx) => {
  const { id } = await ctx.query;
  const auctionData = await getApi().get(`auctions/1`);
  console.log(auctionData.data.dataList[0]);
  const { id_barang, id_user } = await auctionData.data.dataList[0];
  const itemData = await getApi().get(`items/1`);
  const ownerData = await getApi().get(`users/1`);
  return {
    itemData: itemData.data.dataList[0],
    auctionData: auctionData.data.dataList[0],
    ownerData: ownerData.data.dataList[0],
  };
};
export default AuctionPage;
