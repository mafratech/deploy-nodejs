const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello visitante" });
});

app.listen(3000);
