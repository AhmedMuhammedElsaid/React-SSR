import express from "express";
import renderer from "./helpers/renderer";
const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  res.send(renderer(req));
});
app.listen(8888, () => console.log("Server up running on port 8888"));
