import express from "express";
import React from "react";
import Home from "./client/pages/Home";
import { renderToString } from "react-dom/server";

const app = express();

app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});
app.listen(8888, () => console.log("Server up running on port 8888"));
