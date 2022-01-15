import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Routers from "../client/Routers";
export default (req) => {
  const content = renderToString(
    <StaticRouter context={{}} location={req.url}>
      <Routers />
    </StaticRouter>
  );
  return `
    <html>
    <head></head>
    <body>
   <div id='root'>${content}</div>
   <script src="bundle.js"></script>
   </body>
    </html>`;
};
