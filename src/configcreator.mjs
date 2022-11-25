#!/user/bin/env node
clear();
//import
import inquirer from "inquirer";
import { clear } from "node:console";
import fs, { link } from "node:fs";
import fp from "node:path";
import { exit } from "node:process";
//main
const config = process.cwd() + "\\" + "icon.config.json";
let count = 0;
//check
const check = (file) => {
  return fs.existsSync(file);
};
//input json
const createconfig = (input, config, data) => {
  if (!check(input)) {
    console.log("folder dose`t avaliable");
    exit(0);
  } else {
    fs.writeFileSync(`${config}`, `${data}`, (err) => {
      console.log(err);
    });
  }
};
//collct
inquirer
  .prompt([
    {
      type: "input",
      name: "fpath",
      message: "enter icon folder path",
    },
    {
      type: "input",
      name: "rpath",
      message: "enter icon relative path",
    },
  ])
  .then((ans) => {
    const input = ans.fpath;
    const hlink = ans.rpath
    const epath = "./"+hlink.replace('\\','/')
    const iconobj = {
      icon: {},
      count: count,
      mainpath:epath,
    };
    if (check(input)) {
      const array = fs.readdirSync(input);
      console.log(array);
      //create obj
      for (let i = 0; i < array.length; i++) {
        let slice = array[i].slice(0, array[i].length - 4);
        iconobj.icon[slice] = array[i];
      }
      count = array.length;
      iconobj.count = count;
    }
    const data = JSON.stringify(iconobj, null, 4);
    createconfig(input, config, data);
  });