const express = require("express");
const PORT = process.env.PORT || 8000;
/**
 * 
 * install ejs
 * install nodemon
 * install nodemailer
*/

const app = express();

app.set("port", PORT);
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
})

app.listen(app.get("port"), () => {
  console.log(`app running on port ${app.get('port')}`);
})