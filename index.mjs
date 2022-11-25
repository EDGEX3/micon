//import
import fs from "node:fs";
import { exit } from "node:process";
//main
const config = process.cwd()+"\\"+"icon.config.json";
let count=0;
const iconobj = {
  icon: {},
  count:count
};
//check
const check = (file) => {
  return fs.existsSync(file);
};
//import condiution
//collct
const input = process.argv[2];
if (check(input)) {
  const array = fs.readdirSync(input);
console.log(array);
//create obj
for (let i = 0; i < array.length; i++) {
  let slice = array[i].slice(0, array[i].length - 4);
  iconobj.icon[slice] = array[i];
}
count=array.length;
iconobj.count=count;
}
//obj to json
const data = JSON.stringify(iconobj, null, 4);
//input json
const createconfig = (input, config, data) => {
  if (!check(input)) {
    console.log("folder dose`t avaliable");
    exit(0);
  } else if(count==0 || icons.count<count){
    fs.writeFileSync(`${config}`, `${data}`, (err) => {
      console.log(err);
    });
  }
};
createconfig(input, config, data);