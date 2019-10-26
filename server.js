var express = require("express");
var app = express();

// set up the Port and locally set up the port number on 500

app.get("/", (req, res) => {
  res.send("API Started");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server Started on http://localhost:${PORT}`);
});
