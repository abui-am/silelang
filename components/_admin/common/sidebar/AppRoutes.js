const AppRoute = [
  {
    name: "Barang",
    url: "/items",
    authLevel: [1, 2],
  },
  {
    name: "Lelang",
    url: "/auctions",
    authLevel: [2],
  },
  {
    name: "Masyarakat",
    url: "/users",
    authLevel: [1, 2],
  },
];

export default AppRoute;
