const fs = require("fs");
const path = require("path");

const addline = `import {useState} from "react"`;

const fun = (pth) => {
  let folderData = fs.readdirSync(pth);
  for (let i = 0; i < folderData.length; i++) {
    try {
      let dt = fs.statSync(path.join(pth, folderData[i]));
      if (dt.isDirectory()) {
        fun(path.join(pth, folderData[i]));
      } else {
        let fileData = fs.readFileSync(path.join(pth, folderData[i]), {
          encoding: "utf-8",
        });

        fs.writeFileSync(path.join(pth, folderData[i]), NewStringData, {
          flag: "w",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
};

fun(path.join(__dirname, "storage"));
