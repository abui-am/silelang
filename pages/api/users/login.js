import { sqlQuery } from "../../../api/Database";
const escape = require("sql-template-strings");
import md5 from "blueimp-md5";
export default async (req, res) => {
  const { method } = req;

  let data;
  switch (method) {
    case "POST":
      try {
        const { username, password } = req.body;
        const hash = md5(password);
        console.log(hash);
        data = await sqlQuery(
          escape`
            call getMasyarakatWithUsername(?,?)
          `,
          [username, hash]
        );
        if (data[0] != "") {
          res.status(200).json(data[0]);
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
