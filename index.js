const express = require("express");
const { rootHandler } = require("./handlers/main");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();

app.get("/", rootHandler);
app.post("/", upload.single("file"), rootHandler);

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "127.0.0.1";
app.listen(PORT, HOST, () => {
  console.log("Blackhole started on", PORT, HOST);
});
