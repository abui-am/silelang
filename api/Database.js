const mysql = require("serverless-mysql");
import { mysqlHost, database, username, password } from "../env";
const db = mysql({
  config: {
    host: mysqlHost,
    database: database,
    user: username,
    password: password,
  },
});
const sqlQuery = async (query, placeholder) => {
  try {
    const results = await db.query(query, placeholder);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
};
export { sqlQuery };
