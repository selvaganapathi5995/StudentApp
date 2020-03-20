const studentsModel = require("./model/schema");
class Service{
    get(values){
        const data =   async ()=>{ await studentsModel.find({})};
            return await data;
        }
    
    // post(){

    // };
    // put(){

    // };
    // delete(){

    // };
}
const Http_Methods = new Service();

module.exports = Http_Methods;