import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  makeStyles,
  ButtonBase,
} from "@material-ui/core";
import TextTruncate from "react-text-truncate";
import Img from "react-image";
import clsx from "clsx";
import AuctionModal from "./../common/Detail/DetailModal";
const ItemCard = ({ model, id }) => {
  const ItemCard = makeStyles((theme) => ({
    cardRoot: {
      background: "#FFFFFF",
      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      height: 112,
      minWidth: "0px",
      width: "100%",
    },
    itemName: {
      minWidth: "0px",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "14px",
      lineHeight: "17px",
      color: "#121212",
      textAlign: "start",
      marginBottom: theme.spacing(0.5),
    },
    textNormal: {
      textAlign: "left",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 12,
      lineHeight: "15px",
      color: "#121212",
      minWidth: 0,
    },
    textBlue: {
      color: "#61AAED !important",
    },
    textDate: {
      textAlign: "left",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 10,
      lineHeight: "12px",
      marginBottom: 4,
    },
  }));
  const classes = ItemCard();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const dataToShow = {
    name: "Lelang",
    slug: model.id_lelang,
    itemImageId: model.id_barang,
    data: [
      {
        title: "ID Lelang",
        text: model.id_lelang,
      },
      {
        title: "Nama Barang",
        text: model.id_barang + " - " + model.nama_barang,
      },
      {
        title: "Tanggal lelang",
        text: model.tgl_lelang + " - " + model.tgl_tutup,
      },
      {
        title: "Harga awal",
        text: model.harga_awal,
      },
      {
        title: "Harga akhir",
        text:
          model.harga_akhir +
          " ( naik " +
          (model.harga_akhir - model.harga_awal) +
          " )",
      },
      {
        title: "Nama user",
        text: model.id_user + " - " + model.nama_lengkap,
      },
      {
        title: "Nama petugas",
        text: model.id_petugas + " - " + model.nama_petugas,
      },
      {
        title: "Status",
        text: model.status,
      },
    ],
  };
  return (
    <Grid
      key={id}
      item
      xs={12}
      sm={6}
      md={6}
      lg={4}
      xl={3}
      style={{ position: "relative" }}
    >
      <ButtonBase
        className={classes.cardRoot}
        onClick={() => setIsOpenModal(true)}
      >
        <Box flexBasis={"112px"} flexShrink={0}>
          <Img
            src={model.preview}
            style={{
              width: "112px",
              height: "112px",
              borderRadius: "4px 0px 0px 4px",
            }}
          />
        </Box>

        <Box
          padding={"10px"}
          display="flex"
          flexDirection="column"
          flexGrow={1}
          minWidth={0}
        >
          <Typography
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
            className={classes.textDate}
          >
            {model.tgl_lelang} - {model.tgl_tutup}
          </Typography>

          <Typography noWrap className={classes.itemName}>
            {model.nama_barang}
          </Typography>

          <Typography
            marginBottom={0.75}
            className={clsx(classes.textNormal, classes.textBlue)}
          >
            {model.nama_lengkap}
          </Typography>
          <Box
            display="flex"
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
            marginBottom={0.75}
          >
            <Typography className={classes.textNormal}>petugas : </Typography>
            <Typography className={clsx(classes.textNormal, classes.textBlue)}>
              {model.nama_petugas}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography className={clsx(classes.textNormal, classes.textBlue)}>
              {model.harga_akhir}
            </Typography>
            <Typography className={classes.textNormal}>Dibuka</Typography>
          </Box>
        </Box>
      </ButtonBase>
      <AuctionModal
        open={isOpenModal}
        handleClose={() => setIsOpenModal(false)}
        dataToShow={dataToShow}
      />
    </Grid>
  );
};

export default ItemCard;
