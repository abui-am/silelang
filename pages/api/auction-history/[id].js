import { sqlQuery } from "../../../api/Database";
const escape = require("sql-template-strings");

export default async (req, res) => {
  const { method, query } = req;
  let data;
  switch (method) {
    case "GET":
      data = await sqlQuery(escape`
        call getHistoryLelang(${query.id})
      `);
      res.status(200).json(data);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
