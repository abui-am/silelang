import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  makeStyles,
  Backdrop,
  Box,
  Typography,
  Modal,
  Fade,
  Fab,
} from "@material-ui/core";
import Img from "react-image";
import { getApi } from "../../../../api/Api";
import dayjs from "dayjs";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
const DetailModal = (props) => {
  const ItemModalStyle = makeStyles((theme) => ({
    root: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "100%",
      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.25)",
      padding: "32px 20px",
      maxWidth: 766,
      maxHeight: "100vh",

      borderRadius: 20,
      background: "#FFFFFF",
    },
    panel: {},
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
    itemContainer: {
      backgroundColor: "red",
      width: "100%",
      paddingTop: "100%",
      position: "relative",
    },
    item: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
    itemRoot: {
      maxHeight: 165,
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 165,
      margin: theme.spacing(1),
    },
    imageSection: {
      marginBottom: theme.spacing(3),
    },
    sectionTitle: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 14,
      lineHeight: "17px",

      color: "#121212",
    },
    sectionList: {
      borderBottom: "1px solid #e4e4e4",
      marginBottom: theme.spacing(2),
    },
    sectionListTitle: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontSize: 14,
      lineHeight: "17px",
      color: "#121212",
    },
    textBold: {
      fontStyle: "bold !important",
    },
  }));

  const [images, setImages] = useState([]);
  const classes = ItemModalStyle();
  const droppedImage = (model, index) => {
    return (
      <Box className={classes.itemRoot} key={index}>
        <Box className={classes.itemContainer}>
          <Box
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 10,
            }}
          ></Box>
          <Img src={model.preview} className={classes.item} />
        </Box>
      </Box>
    );
  };

  const getImages = async () => {
    const images = await getApi().get(
      `items/${props.dataToShow.itemImageId}/images`
    );
    setImages(images.data);
  };

  const { item } = props;
  const router = useRouter();

  useEffect(() => {
    getImages();
  }, []);

  const body = (
    <Box className={classes.root}>
      <Box style={{ position: "absolute", top: 25, right: 25 }}>
        <Fab
          size="small"
          style={{
            marginRight: 16,
            color: "white",
            background: "#61AAED",
          }}
          aria-label="edit"
          onClick={() => {
            router.push(`/_admin/items/${props.dataToShow.slug}/edit`);
          }}
        >
          <EditIcon />
        </Fab>

        <Fab
          size="small"
          style={{ color: "white", background: "#61AAED" }}
          aria-label="edit"
          onClick={() => {
            props.handleClose();
          }}
        >
          <CloseIcon />
        </Fab>
      </Box>

      <Box className={classes.titleBox} marginBottom={3}>
        <Typography className={classes.title}>
          Detail {props.dataToShow.name}
        </Typography>
      </Box>

      <Box style={{ overflowX: "hidden" }} maxHeight="81vh">
        {images.length != 0 && (
          <Box className={classes.imageSection}>
            <Box marginBottom={2}>
              <Typography className={classes.sectionTitle}>Gambar</Typography>
            </Box>
            <Box display="flex">
              {images.map((file, index) => {
                console.log(file);
                return droppedImage(file, index);
              })}
            </Box>
          </Box>
        )}
        <Box marginBottom={3}>
          <Typography className={classes.sectionTitle}>Deskripsi</Typography>
        </Box>
        {props.dataToShow.data.map((data) => {
          return (
            <Box className={classes.sectionList}>
              <Box marginBottom={1}>
                <Typography
                  className={classes.sectionListTitle}
                  style={{ fontStyle: "bold !important" }}
                >
                  {data.title}
                </Typography>
              </Box>
              <Box marginBottom={2}>
                <Typography
                  className={classes.sectionListTitle}
                  style={{ color: "rgba(18, 18, 18, 0.8)" }}
                >
                  {data.text}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );

  return (
    <Modal
      open={props.open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      disableEnforceFocus
      disableAutoFocus
      onClose={() => {
        props.handleClose();
      }}
    >
      <Fade in={props.open}>{body}</Fade>
    </Modal>
  );
};

export default DetailModal;
