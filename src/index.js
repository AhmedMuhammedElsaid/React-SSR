import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  console.log("createStore",createStore)
  // const store = createStore;
  res.send(renderer(req,createStore));
});
app.listen(8888, () => console.log("Server up running on port 8888"));
