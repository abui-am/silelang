import { sqlQuery } from "../../../api/Database";
const escape = require("sql-template-strings");

export default async (req, res) => {
  const { method, query } = req;

  switch (method) {
    case "GET":
      const data = await sqlQuery(escape`
        call getMasyarakat()
      `);
      res.status(200).json(data);
      break;
    case "POST":
      try {
        const { username, password } = req.data;
        console.log("wait", { username, password });
        const data = await sqlQuery(
          escape`
          call getMasyarakatWithUsername(?,?)
        `,
          [username, password]
        );
        res.status(200).json(data);
      } catch (e) {
        res.status(404).json(e);
      }

      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
