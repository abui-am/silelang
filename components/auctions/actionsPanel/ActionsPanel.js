import React, { useState, useEffect } from "react";
import localeId from "dayjs/locale/id";
import relativetime from "dayjs/plugin/relativeTime";
import clsx from "clsx";
import dayjs from "dayjs";
import {
  Box,
  makeStyles,
  Breadcrumbs,
  Typography,
  Link,
  ButtonBase,
  InputBase,
} from "@material-ui/core";
import {
  VisibilityOutlined,
  SubdirectoryArrowRightOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";
import AuctionHistory from "./../AuctionHistory";
import SubdirectoryArrowRightOutlinedIcon from "@material-ui/icons/SubdirectoryArrowRightOutlined";
import StyledTextField from "../../common/textField/TextField";
import { getApi } from "../../../api/Api";
import { authStore } from "../../../ctx/AuthStore";
import ConfirmDialog from "../../dialog/ConfirmDialog";
const ActionsPanel = (props) => {
  const ActionsPanel = makeStyles((theme) => ({
    itemActionContainer: {
      padding: theme.spacing(3),
      marginBottom: theme.spacing(4),
      background: "#FFFFFF",
      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.25)",
    },
    itemName: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 36,
      lineHeight: "43px",
      color: "#121212",
      marginBottom: theme.spacing(2),
    },
    actionIcon: {
      fontSize: 26,
      marginRight: theme.spacing(1),
      color: "rgba(0, 0, 0, 0.54)",
    },
    actionText: {
      fontFamily: "Merriweather",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 14,
      lineHeight: "18px",
      color: "#121212",
      marginRight: "14px",
    },
    itemInfoList: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 15,

      marginTop: theme.spacing(2.5),
    },
    itemInfoListLeft: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 14,
      lineHeight: "17px",
      color: "#121212",
    },
    itemInfoListRight: {
      fontFamily: "Merriweather",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 14,
      lineHeight: "18px",
      textAlign: "right",
      color: "#000000",
    },
    bidNow: {
      marginTop: 9,
      marginBottom: theme.spacing(3),
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 18,
      lineHeight: "22px",
      color: "#121212",
    },

    bidButton: {
      background: "#61AAED",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      borderRadius: 30,
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 14,
      lineHeight: "17px",
      color: "#FFFFFF",
      flexGrow: 0,
      padding: "11px 41px",
    },
    seeBidHistory: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(3),
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 14,
      lineHeight: "17px",
      color: "#61AAED",
    },
    textNormal: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 14,
      lineHeight: "17px",
      textAlign: "center",
      color: "#121212",
    },
    textBlue: {
      color: "#61AAED !important",
    },
  }));
  const classes = ActionsPanel();
  const auth = React.useContext(authStore);
  const [bid, setBid] = useState({});
  const [auctionData, setAuctionData] = useState({});
  const [itemData, setItemData] = useState({});
  const [auctionHistory, setAuctionHistory] = useState([]);
  const [open, setOpen] = useState(false);
  dayjs.extend(relativetime);

  const openConfirmDialog = () => {
    setOpen(true);
  };

  const closeConfirmDialog = () => {
    setOpen(false);
  };

  const handleClickbidButton = () => {
    const { isLogged } = auth.state;
    isLogged ? openConfirmDialog() : auth.dispatch({ type: "openLogin" });
  };

  const getAuctionHistory = async (id) => {
    const newAuctionHistory = await getApi().get(`auctions/${id}/history`);
    setAuctionHistory(await newAuctionHistory.data);
  };

  const initializeData = async () => {
    await setAuctionData(props.auctionData);
    await setItemData(props.itemData);
    await getAuctionHistory(props.auctionData.id_lelang);
  };

  useEffect(async () => {
    initializeData();
  }, []);

  const bidNow = async (bid) => {
    const { id_lelang, id_barang } = props.auctionData;
    const { id_user } = auth.state.userData;
    const data = { id_lelang, id_barang, id_user, penawaran_harga: bid };
    await getApi()
      .post(`auctions/${id_lelang}/history`, data)
      .catch((e) => console.log(e));
    await getAuctionHistory(props.auctionData.id_lelang);
  };

  const confirmDialog = (
    <React.Fragment>
      <Box marginBottom={2}>
        <Typography className={classes.textNormal}>Apa anda yakin ?</Typography>
      </Box>
      <Box marginBottom={5}>
        <Typography className={classes.textNormal}>
          segala yang anda lakukan akan dipertanggungjawabkan
        </Typography>
        <Typography className={clsx(classes.textNormal, classes.textBlue)}>
          baca kesepakatan
        </Typography>
      </Box>
    </React.Fragment>
  );
  return (
    <Box className={classes.itemActionContainer}>
      <Typography className={classes.itemName}>
        {itemData.nama_barang}
      </Typography>
      <Box display="flex">
        <Box display="flex">
          <VisibilityOutlined className={classes.actionIcon} />
          <Typography className={classes.actionText}>100 Views</Typography>
        </Box>
        <Box display="flex">
          <SubdirectoryArrowRightOutlined className={classes.actionIcon} />
          <Typography className={classes.actionText}>Share</Typography>
        </Box>
        <Box display="flex">
          <FavoriteBorderOutlined className={classes.actionIcon} />
          <Typography className={classes.actionText}>Love</Typography>
        </Box>
      </Box>
      <Box className={classes.itemInfoList}>
        <Typography className={classes.itemInfoListLeft}>
          Penawaran berakhir pada
        </Typography>
        <Typography className={classes.itemInfoListRight}>
          {dayjs(auctionData.tgl_lelang)
            .locale(localeId)
            .format("dddd, D MMM YYYY")}
        </Typography>
      </Box>
      <Box className={classes.itemInfoList}>
        <Typography className={classes.itemInfoListLeft}>
          Berakhir pada
        </Typography>
        <Typography className={classes.itemInfoListRight}>
          {/* {dayjs.extend(relativetime).from(dayjs("9999"))} */}
          {dayjs().to(dayjs(auctionData.tgl_lelang))}
        </Typography>
      </Box>
      <Box className={classes.itemInfoList}>
        <Typography className={classes.itemInfoListLeft}>Harga awal</Typography>
        <Typography className={classes.itemInfoListRight}>
          Rp.{itemData.harga_awal}
        </Typography>
      </Box>
      <Box className={classes.itemInfoList}>
        <Typography className={classes.itemInfoListLeft}>
          Penawaran terakhir
        </Typography>
        <Typography className={classes.itemInfoListRight}>
          Rp.{auctionHistory[0] ? auctionHistory[0].penawaran_harga : null}
        </Typography>
      </Box>
      <Box className={classes.itemInfoList}>
        <Typography className={classes.itemInfoListLeft}>
          Minimum penaikan
        </Typography>
        <Typography className={classes.itemInfoListRight}>Rp.100000</Typography>
      </Box>
      <Box className={classes.itemInfoList}>
        <Typography className={classes.itemInfoListLeft}>
          Penawar terakhir
        </Typography>
        <Typography className={classes.itemInfoListRight}>
          {auctionHistory[0] ? auctionHistory[0].nama_lengkap : null}
        </Typography>
      </Box>
      <Typography className={classes.bidNow}>Tawar Sekarang</Typography>
      <Box display="flex" style={{ marginBottom: 16 }}>
        <StyledTextField
          type="number"
          marginRight={2}
          variant="rounded"
          placeholder={"contoh : 600000"}
          value={bid}
          onChange={(e) => setBid(e.target.value)}
        ></StyledTextField>
        <ButtonBase
          className={classes.bidButton}
          onClick={handleClickbidButton}
        >
          Tawar
        </ButtonBase>
        <ConfirmDialog
          open={open}
          handleClose={closeConfirmDialog}
          title="Konfirmasi"
          dialog={confirmDialog}
          onClickYes={() => {
            bidNow(bid);
          }}
        ></ConfirmDialog>
      </Box>
      <Typography className={classes.seeBidHistory}>
        <AuctionHistory auctionHistory={auctionHistory} />
      </Typography>
    </Box>
  );
};

export default ActionsPanel;
