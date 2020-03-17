import React from "react";
import {
  Box,
  makeStyles,
  Breadcrumbs,
  Typography,
  Link,
  ButtonBase,
  InputBase
} from "@material-ui/core";
import {
  VisibilityOutlined,
  SubdirectoryArrowRightOutlined,
  FavoriteBorderOutlined
} from "@material-ui/icons";
import SubdirectoryArrowRightOutlinedIcon from "@material-ui/icons/SubdirectoryArrowRightOutlined";
const ActionsPanel = props => {
  const ActionsPanel = makeStyles(theme => ({
    itemActionContainer: {
      padding: theme.spacing(3),
      marginBottom: theme.spacing(4),
      background: "#FFFFFF",
      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.25)"
    },
    itemName: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 36,
      lineHeight: "43px",
      color: "#121212",
      marginBottom: theme.spacing(2)
    },
    actionIcon: {
      fontSize: 26,
      marginRight: theme.spacing(1),
      color: "rgba(0, 0, 0, 0.54)"
    },
    actionText: {
      fontFamily: "Merriweather",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 14,
      lineHeight: "18px",
      color: "#121212",
      marginRight: "14px"
    },
    itemInfoList: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 15,

      marginTop: theme.spacing(2.5)
    },
    itemInfoListLeft: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 14,
      lineHeight: "17px",
      color: "#121212"
    },
    itemInfoListRight: {
      fontFamily: "Merriweather",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 14,
      lineHeight: "18px",
      textAlign: "right",
      color: "#000000"
    },
    bidNow: {
      marginTop: 9,
      marginBottom: theme.spacing(3),
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 18,
      lineHeight: "22px",
      color: "#121212"
    },
    bidTextField: {
      border: "1px solid #E4E4E4",
      boxSizing: "border-box",
      borderRadius: 33,
      flexGrow: 1,
      marginRight: theme.spacing(2)
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
      padding: "11px 41px"
    },
    seeBidHistory: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(3),
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 14,
      lineHeight: "17px",
      color: "#61AAED"
    }
  }));
  const classes = ActionsPanel();
  return (
    <Box className={classes.itemActionContainer}>
      <Typography className={classes.itemName}>
        Asus ROG 16 Core i5 With Paper Sauce
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
          Senin, 1 Feb 1991
        </Typography>
      </Box>
      <Box className={classes.itemInfoList}>
        <Typography className={classes.itemInfoListLeft}>
          Berakhir pada
        </Typography>
        <Typography className={classes.itemInfoListRight}>
          4 bulan 1 minggu 6 hari
        </Typography>
      </Box>
      <Box className={classes.itemInfoList}>
        <Typography className={classes.itemInfoListLeft}>Harga awal</Typography>
        <Typography className={classes.itemInfoListRight}>
          Rp. 9000000
        </Typography>
      </Box>
      <Box className={classes.itemInfoList}>
        <Typography className={classes.itemInfoListLeft}>
          Penawaran terakhir
        </Typography>
        <Typography className={classes.itemInfoListRight}>
          Rp. 96000000
        </Typography>
      </Box>
      <Box className={classes.itemInfoList}>
        <Typography className={classes.itemInfoListLeft}>
          Minimum penaikan
        </Typography>
        <Typography className={classes.itemInfoListRight}>
          Rp.1000000
        </Typography>
      </Box>
      <Box className={classes.itemInfoList}>
        <Typography className={classes.itemInfoListLeft}>
          Penawar terakhir
        </Typography>
        <Typography className={classes.itemInfoListRight}>Sabuy</Typography>
      </Box>
      <Typography className={classes.bidNow}>Tawar Sekarang</Typography>
      <Box display="flex" style={{ marginBottom: 16 }}>
        <InputBase className={classes.bidTextField} />{" "}
        <ButtonBase className={classes.bidButton}>Tawar</ButtonBase>
      </Box>
      <Typography className={classes.seeBidHistory}>
        Lihat history lelang
      </Typography>
    </Box>
  );
};

export default ActionsPanel;
