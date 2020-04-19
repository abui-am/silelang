import { sqlQuery } from "../../../../api/Database";
const escape = require("sql-template-strings");

export default async (req, res) => {
  const { method, query } = req;

  switch (method) {
    case "GET":
      const id = query.id;
      console.log(id);
      const profile = await sqlQuery(escape`
        call searchAuction('%yoyo%')
      `);
      res.status(200).json(profile[0]);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
