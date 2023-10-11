module.exports.rootHandler = function (req, res) {
  console.log("---------------------------------------------------------");
  console.log(new Date());
  console.log("Request from", req.connection.remoteAddress);
  const fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  console.log("Method:", req.method);
  console.log("URL:", fullUrl);
  console.log("Headers:");
  for (const header in req.headers) {
    console.log("-", header, req.headers[header]);
  }
  if (req.file) {
    console.log(`File uploaded:`, req.file);
  } else {
    let rawData = "";
    req.on("data", (chunk) => {
      rawData += chunk;
    });

    req.on("end", () => {
      if (rawData.length > 2048) {
        console.log(
          `Raw body: ${rawData.split(0, 128)} (truncated, total length ${
            rawData.length
          })`
        );
      } else {
        console.log(`Raw body: ${rawData}`);
      }
    });
  }

  res.send("Hello World!");
};
