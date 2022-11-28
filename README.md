# micon

## bulk icon,img,video impoter.⚡

1 first create <filename>.mjs 
2 copy this code and pest .mjs file
   ```js
   import obj from "../icon.config.json"  assert {type: 'json'} ;

    const linkr =(name) => {
    return obj.mainpath + "/" + obj.icon[`${name}`];
    }
    export default linkr;

   ```
   3 import it ->
   ```js
   import linker from "../<file_name>.mjs";
   ```
   use this function where you want import icon ->
   ```js
   linker("<icon_name>");
   ```
   # build by edgex
  [ @EDGEX3](https://github.com/EDGEX3)
