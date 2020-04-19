import { sqlQuery } from "../../../api/Database";
const escape = require("sql-template-strings");

export default async (req, res) => {
  const { method, query } = req;
  let data;
  switch (method) {
    case "GET":
      data = await sqlQuery(escape`
        call getHistoryLelang()
      `);
      res.status(200).json(data);
      break;
    case "POST":
      const { id_lelang, id_barang, id_user, penawaran_harga } = req.body;

      data = await sqlQuery(escape`
      call addHistoryLelang(${id_lelang},${id_barang},${id_user},${penawaran_harga})
      call updateLastPrice(${id_lelang},${penawaran_harga})
    `);
      res.status(200).json(data);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
