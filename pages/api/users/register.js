import { sqlQuery } from "../../../api/Database";
const escape = require("sql-template-strings");
import md5 from "blueimp-md5";
export default async (req, res) => {
  const { method } = req;

  let data;
  switch (method) {
    case "POST":
      try {
        const { namaLengkap, username, password, telepon } = req.body;
        const hash = md5(password);
        data = await sqlQuery(
          escape`
            call addMasyarakat(?,?,?,?)
          `,
          [namaLengkap, username, hash, telepon]
        );
        if (data[0] != "") {
          res.status(201).json({ success: "data created" });
        } else res.status(404).json({ error: "Data not found" });
      } catch (e) {
        res.status(400).json(e);
      }

      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
