import express from "express";
import React from "react";
import Home from "./client/pages/Home";
import { renderToString } from "react-dom/server";

const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  const html = `
  <html>
  <head></head>
  <body>
 <div id='root'>${content}</div>
 <script src="bundle.js"></script>
 </body>
  </html>`;
  res.send(html);
});
app.listen(8888, () => console.log("Server up running on port 8888"));
