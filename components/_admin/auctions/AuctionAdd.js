import React, { useState, useEffect } from "react";
import AdminLayout from "../../../layouts/_admin";
import {
  makeStyles,
  Typography,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Fab,
  Select,
  MenuItem,
} from "@material-ui/core";
import dayjs from "dayjs";
import DividerLine from "../../../components/common/divider/DividerLine";
import { DropzoneArea } from "material-ui-dropzone";
import Img from "react-image";
import { getApi, getApiUpload } from "../../../api/Api";
import StyledTextField from "../../../components/common/textField/TextField";
import CloseIcon from "@material-ui/icons/Close";
import ButtonMuted from "../../../components/common/button/ButtonMuted";
import ButtonBlue from "../../../components/common/button/buttonBlue";
import Axios from "axios";
import { useRouter } from "next/router";

const AddAuctionStyle = makeStyles((theme) => ({
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
    marginRight: theme.spacing(3),
  },
  itemContainer: {
    border: "1px solid #61AAED",
    width: "100%",
    paddingTop: "100%",
    position: "relative",
    borderRadius: 4,
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
  chooseItem: {
    width: "100%",
    maxWidth: "50%",
    marginBottom: theme.spacing(2),
  },
  title: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "17px",
    color: "#121212",
  },
}));

const AddAuction = (props) => {
  const [files, setFiles] = useState([]);
  const classes = AddAuctionStyle();
  const [data, setData] = useState({});
  const [item, setItem] = useState({});
  const initialData = {
    id_user: "",
    id_barang: "",
    id_petugas: "",
    tgl_lelang: dayjs().format("YYYY-MM-DD"),
  };
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
    console.log(newFiles);
    newFiles.splice(index, 1);
    console.log(newFiles);
    setFiles(newFiles);
  };

  const handleSave = async () => {
    try {
      const newData = { ...data, harga_akhir: item.harga_awal };

      const itemData = await getApi().post("auctions", newData);
      router.push("/_admin/auctions");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeItem = (e) => {
    handleChange(e.target.name, e.target.value);
    const newItemsData = props.itemsData;
    const selectedItem = newItemsData.filter((item) => {
      return item.id_barang === e.target.value;
    });
    setItem(selectedItem[0]);
    // Somehow its work aowkaow
  };

  const droppedImage = () => {
    return (
      <Box className={classes.itemRoot}>
        <Box className={classes.itemContainer}>
          <Box
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 10,
            }}
            onClick={() => handleDelete()}
          >
            <Fab size="small">
              <CloseIcon />
            </Fab>
          </Box>
          <Img src={item.preview} className={classes.item} />
        </Box>
      </Box>
    );
  };

  useEffect(() => {
    setData(props.auctionData);
  }, [props]);

  return (
    <React.Fragment>
      <Box className={classes.container}>
        {droppedImage()}
        <Box flexGrow={1}>
          <FormControl className={classes.chooseItem}>
            <InputLabel id="demo-simple-select-disabled-label">Name</InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-disabled-label"
              id="demo-simple-select-disabled"
              name="id_barang"
              value={data.id_barang}
              onChange={(e) => handleChangeItem(e)}
            >
              {props.itemsData.map((data, id) => {
                return (
                  <MenuItem key={id} value={data.id_barang}>
                    {data.nama_barang}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Typography className={classes.title} style={{ marginBottom: 4 }}>
            Id Barang
          </Typography>
          <Box marginBottom={2}>
            <Typography>{item.id_barang}</Typography>
          </Box>
          <Typography className={classes.title} style={{ marginBottom: 4 }}>
            Nama barang
          </Typography>
          <Box marginBottom={2}>
            <Typography>{item.nama_barang}</Typography>
          </Box>
          <Typography
            className={classes.nama_barang}
            style={{ marginBottom: 4 }}
          >
            Harga awal
          </Typography>
          <Box marginBottom={2}>
            <Typography>{item.harga_awal}</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.container}>
        <Grid container>
          <Grid sm={6} xs={12} className={classes.formControl}>
            <Typography style={{ marginBottom: 4 }}>Id_barang</Typography>
            <StyledTextField
              fullWidth
              name="id_lelang"
              readOnly
              placeholder="Digenerate secara otomatis"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            ></StyledTextField>
          </Grid>
          <Grid sm={6} xs={12} className={classes.formControl}>
            <Typography style={{ marginBottom: 4 }}>Tanggal Lelang</Typography>
            <StyledTextField
              fullWidth
              type="date"
              name="tgl_lelang"
              defaultValue={dayjs().format("YYYY-MM-DD")}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            ></StyledTextField>
          </Grid>
          <Grid sm={6} xs={12} className={classes.formControl}>
            <Typography style={{ marginBottom: 4 }}>Tanggal</Typography>
            <StyledTextField
              fullWidth
              type="date"
              name="tgl_tutup"
              defaultValue={dayjs().format("YYYY-MM-DD")}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            ></StyledTextField>
          </Grid>
          <Grid sm={6} xs={12} className={classes.formControl}>
            <FormControl className={classes.chooseItem}>
              <InputLabel>Id user</InputLabel>
              <Select
                fullWidth
                name="id_user"
                value={data.id_user}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              >
                {props.usersData.map((data, id) => {
                  return (
                    <MenuItem key={id} value={data.id_user}>
                      {data.nama_lengkap}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid sm={6} xs={12} className={classes.formControl}>
            <FormControl className={classes.chooseItem}>
              <InputLabel>Id petugas</InputLabel>
              <Select
                fullWidth
                name="id_petugas"
                value={data.id_petugas}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              >
                {props.adminsData.map((data, id) => {
                  return (
                    <MenuItem key={id} value={data.id_petugas}>
                      {data.nama_petugas}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <ButtonMuted marginRight={2}>Cancel</ButtonMuted>
        <ButtonBlue onClick={() => handleSave()}>Simpan</ButtonBlue>
      </Box>
    </React.Fragment>
  );
};

export default AddAuction;
