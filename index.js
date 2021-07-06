#!/usr/bin/env node

const fs = require("fs");
const mime = require("mime");

const imgPaths = process.argv.slice(2);
const res = [];
if (imgPaths.length > 0) {
  for (let src of imgPaths) {
    const bitmap = fs.readFileSync(src);
    const fileType = mime.getType(src);
    const img = {
      path: src,
      base64: `data:${fileType};base64,${Buffer.from(bitmap, "binary").toString("base64")}`,
    };
    res.push(img);
  }
  console.log(res);
} else {
  console.log("\x1B[31m%s\x1B[0m", "enter img path");
}
