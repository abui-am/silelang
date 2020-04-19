export default (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      res.json({ Hello: "world" });
      break;
    case "POST":
      res.json({ Hello: "post worlds" });

      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
