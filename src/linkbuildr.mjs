import object from '../icon.config.json' assert {type: 'json'};
const linkr =(name)=>{
    return object.mainpath+"/"+ object.icon[`${name}`];
}
export default linkr;