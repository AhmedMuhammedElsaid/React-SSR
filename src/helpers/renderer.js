import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import Routers from "../client/Routers";
export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.url}>
        <Routers />
      </StaticRouter>
    </Provider>
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
