import object from '../icon.config.json' assert {type: 'json'};
const link =(name)=>{
    return object.mainpath+"/"+ object.icon[`${name}`];
}
export default link;