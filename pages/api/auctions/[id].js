import { sqlQuery } from "../../../api/Database";
const escape = require("sql-template-strings");

export default async (req, res) => {
  const { method, query } = req;

  switch (method) {
    case "GET":
      const profile = await sqlQuery(escape`
        call getLelangWithId(${query.id})
      `);
      res.status(200).json(profile[0]);
      break;
    case "POST":
      res.json({ Hello: "post worlds" });

      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
