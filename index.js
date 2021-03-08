const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello Luiz Gustavo" });
});

app.listen(3000);
