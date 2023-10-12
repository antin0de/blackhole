const express = require("express");
const { rootHandler } = require("./handlers/main");
const { adminHandler } = require("./handlers/admin");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();

app.set("view engine", "ejs");

app.get("/", rootHandler);
app.post("/", upload.single("file"), rootHandler);
app.get("/admin", adminHandler);

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "127.0.0.1";
app.listen(PORT, HOST, () => {
  console.log("Blackhole started on", PORT, HOST);
});
