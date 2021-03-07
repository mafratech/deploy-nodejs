const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello world Gustavo" });
});

app.listen(3000);
