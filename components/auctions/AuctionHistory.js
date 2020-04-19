import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { ButtonBase, Box, Typography, Fade, Backdrop } from "@material-ui/core";
import clsx from "clsx";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
  modalBox: {
    maxWidth: 766,
    width: "100%",
    position: "absolute",
    background: "#FFFFFF",
    boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.25)",
    borderRadius: 20,
    padding: "32px 20px",
  },
  titleBox: {
    paddingBottom: 20,
    borderBottom: "1px solid #e4e4e4",
    display: "flex",
  },
  title: {
    fontFamily: "Merriweather",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "23px",
    color: "#121212",
  },
  textNormal: {
    fontFamily: "Merriweather",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#121212",
  },
  textBold: {
    fontWeight: "bold",
  },
  subtitle: {
    fontFamily: "Lato",
    fontSize: 14,
    lineHeight: "17px",
    color: "rgba(0, 0, 0, 0.6)",
  },
  historyList: {
    padding: "20px 24px ",
    borderBottom: "1px solid #e4e4e4",
  },
}));

export default function AuctionHistory(props) {
  const auctionHistory = props.auctionHistory || [];
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const historyList = (history, id) => {
    return (
      <Fade in={open}>
        <Box className={classes.historyList} key={id}>
          <Box display="flex">
            <Box style={{ marginLeft: "13.5px" }} flexGrow={1}>
              <Typography
                marginBottom={1}
                className={clsx(classes.textNormal, classes.textBold)}
              >
                {history.nama_lengkap}
              </Typography>
              <Typography className={clsx(classes.subtitle, classes.textBold)}>
                {history.username}
              </Typography>
            </Box>
            <Box display="flex">
              <Typography
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  marginRight: "24px",
                }}
                className={clsx(classes.textNormal, classes.textBold)}
              >
                {history.penawaran_harga}
              </Typography>
              {/* <Box component={ButtonBase}>
              <MoreVertRoundedIcon />
            </Box> */}
            </Box>
          </Box>
        </Box>
      </Fade>
    );
  };

  const body = (
    <Box style={modalStyle} className={classes.modalBox}>
      <Box className={classes.titleBox}>
        <Box component={ButtonBase} onClick={handleClose}>
          <ArrowBackIcon style={{ marginRight: "12px" }} />
        </Box>
        <Typography className={classes.title}>History lelang</Typography>
      </Box>
      <Box paddingTop="20px" overflow="scroll" height="82vh">
        {auctionHistory.map((history, id) => {
          return historyList(history, id);
        })}
      </Box>
    </Box>
  );

  return (
    <div>
      <ButtonBase
        type="button"
        onClick={handleOpen}
        className={classes.seeBidHistory}
      >
        Lihat history lelang
      </ButtonBase>
      <Modal
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        disableEnforceFocus
        disableAutoFocus
        onClose={handleClose}
      >
        {body}
      </Modal>
    </div>
  );
}
