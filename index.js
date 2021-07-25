const express = require("express");
const app = express();
const PORT = 3000;

app.get("/trang-chu", (req, res) => res.send("hello work"));

app.listen(PORT, () => {
  console.log(`app listing at http://localhost:${PORT}`);
});
