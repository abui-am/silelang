import { makeStyles } from "@material-ui/core";
const auctionsStyle = makeStyles((theme) => ({
  root: {
    padding: "40px 80px",
    [theme.breakpoints.only("xs")]: {
      padding: "40px 24px",
    },
  },
  breadcrumbContainer: {
    marginBottom: theme.spacing(3),
  },
  breadcrumbText: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "17px",
    color: "#121212",
  },
  contentContainer: {
    marginBottom: theme.spacing(1),
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  infoContainer: {
    marginBottom: theme.spacing(4),
    flexGrow: 1,
    display: "flex",
    flexBasis: 710,
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(0),
    },
  },
  anotherImage: {
    flexShrink: 1,
    objectFit: "cover",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
      margin: theme.spacing(1),
    },
  },
  mainContentContainer: {
    display: "flex",
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 710,
  },
  anotherImageContainer: {
    width: 100,
    flexGrow: 0,
    display: "flex",
    flexShrink: 1,
    marginRight: theme.spacing(3),
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      width: "auto",
      marginRight: "-8px",
      marginLeft: "-8px",
    },
  },
  itemInfoContainer: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 586,
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
    },
  },

  imgContainerRoot: {
    width: "100%",
    borderRadius: 5,
    transition: "opacity 500ms",
    alignItems: "normal",
    ["&:hover"]: {
      opacity: "0.5",
    },
  },
  imgContainer: {
    width: "100%",
    overflow: "hidden",
    borderRadius: "5px 0px 0px 0px",
    margin: 0,
    paddingTop: "100%",
    position: "relative",
  },
  imgCover: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    transform: "translate(-50%, -50%)",
  },
  actionsContainer: {
    flexGrow: 0,
    flexBasis: 448,
    flexShrink: 1,
    marginLeft: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),
    },
  },
  infoContainerBottom: {
    marginTop: theme.spacing(5),
  },
  itemInformationsTitle: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: "43px",
    color: "#121212",
    marginBottom: theme.spacing(3),
  },
  itemInformationTitle: {
    fontFamily: "Merriweather",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "23px",
    color: "#121212",
    marginBottom: 14,
  },
  itemInformation: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "17px",
    color: "#323232",
    marginBottom: theme.spacing(4),
  },
  imageProfile: {
    borderRadius: 80,
    height: 80,
    flexBasis: "80px",
    background:
      "url('https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg')",
    flexShrink: 0,
    flexGrow: 0,
    marginRight: 24,
  },
  ownerName: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "29px",
    color: "#121212",
  },
  ownerContact: {
    marginTop: theme.spacing(1),
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "17px",
    color: "#121212",
  },
}));

export default auctionsStyle;
