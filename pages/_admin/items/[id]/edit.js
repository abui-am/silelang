import React, { useState, useEffect } from "react";
import AdminLayout from "../../../../layouts/_admin";
import {
  makeStyles,
  Typography,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Fab,
} from "@material-ui/core";
import dayjs from "dayjs";
import DividerLine from "../../../../components/common/divider/DividerLine";
import { DropzoneArea } from "material-ui-dropzone";
import Img from "react-image";
import { getApi, getApiUpload } from "../../../../api/Api";
import StyledTextField from "../../../../components/common/textField/TextField";
import CloseIcon from "@material-ui/icons/Close";
import ButtonMuted from "../../../../components/common/button/ButtonMuted";
import ButtonBlue from "../../../../components/common/button/buttonBlue";
import { useRouter } from "next/router";
const AdditemStyle = makeStyles((theme) => ({
  title: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: "21px",

    letterSpacing: "0.1px",

    color: "#121212",
  },
  subtitle: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "22px",
    color: "#121212",
  },
  textNormal: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "17px",
    color: "#121212",
  },
  container: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    background: "#FFFFFF",
    display: "flex",
    boxShadow: "0px 3px 30px rgba(0, 0, 0, 0.1)",
  },
  itemRoot: {
    maxHeight: "225px",
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 225,
    margin: theme.spacing(1),
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
  dropzone: {
    minHeight: 100,
    height: "100%",
  },
  formControl: {
    paddingRight: theme.spacing(2),
  },
}));

const EditItem = (props) => {
  const [files, setFiles] = useState([]);
  const classes = AdditemStyle();
  const [data, setData] = useState({});
  const [deletedImages, setDeletedImages] = useState([]);
  const router = useRouter();
  const handleChange = (name, value) => {
    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
  };

  const handleDelete = (index) => {
    const newFiles = Array.from(files);
    const deletedImage = newFiles.splice(index, 1);
    console.log("index", deletedImage.notYetUploaded);

    if (!deletedImage[0].notYetUploaded) {
      const deleted = [...deletedImages, ...deletedImage];
      setDeletedImages(deleted);
    }
    console.log(newFiles);
    setFiles(newFiles);
  };

  const handleSave = async (data) => {
    const { itemData } = props;
    let newData = data;
    try {
      if (files.length != 0) {
        const formData = new FormData();
        files.map((file) => {
          if (file.notYetUploaded) formData.append("files", file);
        });
        const res = await getApiUpload().post(
          `items/${itemData.id_barang}/images`,
          formData
        );
      }
      const deleteList = { imageToDelete: deletedImages };

      const delImages = await getApi().post(
        `items/${itemData.id_barang}/images/delete`,
        deleteList
      );
      const newImage = await getApi().get(`items/${itemData.id_barang}/images`);
      console.log(delImages);

      newData = {
        ...newData,
        primaryImage: newImage.data[0].filename,
        tgl: dayjs(data.tgl).format("YYYY-MM-DD"),
      };

      const item = getApi().put(`items/${itemData.id_barang}`, newData);

      router.push("/_admin/items");
    } catch (e) {
      console.log(e);
    }
  };

  const droppedImage = (file, index) => {
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
            onClick={() => handleDelete(index)}
          >
            <Fab size="small">
              <CloseIcon />
            </Fab>
          </Box>
          <Img src={file.preview} className={classes.item} />
        </Box>
      </Box>
    );
  };

  const dropZone = (
    <Box className={classes.itemRoot}>
      <Box className={classes.itemContainer}>
        <Box className={classes.item}>
          <DropzoneArea
            dropzoneClass={classes.dropzone}
            dropzoneText="Masukan gambar"
            filesLimit={1000}
            showPreviewsInDropzone={false}
            onDrop={(acceptedFiles) => {
              if (files.length < 4) {
                setFiles([
                  ...files,
                  Object.assign(acceptedFiles, {
                    preview: URL.createObjectURL(acceptedFiles),
                    notYetUploaded: true,
                  }),
                ]);
              }
            }}
          ></DropzoneArea>
        </Box>
      </Box>
    </Box>
  );

  useEffect(() => {
    setFiles(props.itemData.images);
    setData(props.itemData);
  }, [props]);

  return (
    <AdminLayout>
      <Box marginBottom={1}>
        <Typography className={classes.title}>Tambah Barang</Typography>
      </Box>
      <DividerLine marginBottom={3} />
      <Box className={classes.container}>
        {files.map((file, index) => droppedImage(file, index))}
        {files.length != 4 && dropZone}
      </Box>
      <Box className={classes.container}>
        <Grid container>
          <Grid sm={6} xs={12} className={classes.formControl}>
            <Typography style={{ marginBottom: 4 }}>Id_barang</Typography>
            <StyledTextField
              fullWidth
              name="id_barang"
              readOnly
              value={data.id_barang}
              placeholder="Digenerate secara otomatis"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            ></StyledTextField>
          </Grid>
          <Grid sm={6} xs={12} className={classes.formControl}>
            <Typography style={{ marginBottom: 4 }}>Nama barang</Typography>
            <StyledTextField
              fullWidth
              value={data.nama_barang}
              name="nama_barang"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            ></StyledTextField>
          </Grid>
          <Grid sm={6} xs={12} className={classes.formControl}>
            <Typography style={{ marginBottom: 4 }}>Tanggal</Typography>
            <StyledTextField
              fullWidth
              value={dayjs(data.tgl).format("YYYY-MM-DD")}
              type="date"
              name="tgl"
              defaultValue={dayjs().format("YYYY-MM-DD")}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            ></StyledTextField>
          </Grid>
          <Grid sm={6} xs={12} className={classes.formControl}>
            <Typography style={{ marginBottom: 4 }}>Harga awal</Typography>
            <StyledTextField
              fullWidth
              value={data.harga_awal}
              name="harga_awal"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            ></StyledTextField>
          </Grid>
          <Grid sm={6} xs={12} className={classes.formControl}>
            <Typography style={{ marginBottom: 4 }}>Deskripsi</Typography>
            <StyledTextField
              multiline
              value={data.deskripsi_barang}
              line={3}
              fullWidth
              name="deskripsi_barang"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            ></StyledTextField>
          </Grid>
        </Grid>
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <ButtonMuted marginRight={2}>Cancel</ButtonMuted>
        <ButtonBlue onClick={() => handleSave(data)}>Simpan</ButtonBlue>
      </Box>
    </AdminLayout>
  );
};

export default EditItem;

EditItem.getInitialProps = async (ctx) => {
  const { id } = await ctx.query;
  const itemData = await getApi().get(`items/${id}`);

  return {
    itemId: id,
    itemData: itemData.data,
  };
};
