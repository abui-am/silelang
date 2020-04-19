import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Navbar from "../../components/common/navbar/Navbar";
import { Box, Typography, Hidden } from "@material-ui/core";
import ItemCards from "../../components/searchPage/itemCards/ItemCards";
import Pagination from "@material-ui/lab/Pagination";
import Footer from "../../components/common/footer/Footer";
import { getApi } from "../../api/Api";
const SearchIndex = (props) => {
  const SearchStyle = makeStyles((theme) => ({
    root: {
      display: "flex",
      paddingTop: 38,
      [theme.breakpoints.up("xs")]: {
        paddingLeft: 80,
        paddingRight: 80,
      },
      [theme.breakpoints.only("xs")]: {
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
      },
    },
    //filterNav
    filterNavContainer: {
      flexBasis: "227px",
      paddingTop: 17,
      flexGrow: 0,
      flexShrink: 0,
    },
    filterTitle: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 24,
      lineHeight: "28px",
      marginBottom: 14,
      color: "#121212",
    },
    filterCategoryText: {
      fontFamily: "Merriweather",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 18,
      lineHeight: "23px",
      marginBottom: 18,
      color: "#323232",
    },
    filterOptionText: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 14,
      marginBottom: theme.spacing(2),
      lineHeight: "17px",
      color: "#61AAED",
    },
    // itemListContainer
    itemListContainer: {
      flexGrow: 1,
    },
    searchTitle: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "36px",
      lineHeight: "43px",
      color: "#121212",
      marginBottom: theme.spacing(2),
    },
    fromResultText: {
      fontFamily: "Merriweather",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 18,
      lineHeight: "23px",
      color: "#323232",
      marginBottom: theme.spacing(4),
    },
    paginationContainer: {
      paddingTop: 60,
      paddingBottom: theme.spacing(6),
      alignContent: "center",
      display: "flex",
      justifyContent: "center",
    },
  }));

  const { auctionData } = props;

  const classes = SearchStyle();
  return (
    <React.Fragment>
      <Navbar />
      <Box className={classes.root}>
        <Hidden smDown>
          <Box className={classes.filterNavContainer}>
            <Typography className={classes.filterTitle}>Filter</Typography>
            <Typography className={classes.filterCategoryText}>
              Berdasarkan kategori
            </Typography>
            <Typography className={classes.filterOptionText}>Mobil</Typography>
          </Box>
        </Hidden>

        <Box className={classes.itemListContainer}>
          <Typography className={classes.searchTitle}>
            Penelusuran Terkait
          </Typography>
          <Typography className={classes.fromResultText}>
            Untuk hasil dari “Mobil”
          </Typography>

          <ItemCards models={auctionData} />
          <Box className={classes.paginationContainer}>
            <Pagination count={10} shape="rounded" />
          </Box>
        </Box>
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default SearchIndex;

SearchIndex.getInitialProps = async (ctx) => {
  const { id } = await ctx.query;

  const auctionData = await getApi().get(`auctions/search/${id}`);
  return {
    auctionData: auctionData.data,
  };
};
