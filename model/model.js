const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://geethumenonsanthosh:paarupavi@cluster0.bim4xtr.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
console.log("db connect")
})
.catch(err=>console.log(err));

let Schema = mongoose.Schema;

const employeeSchema =new Schema({
    sname:String,
    age:Number,
    pos:String,
    salary:Number
})
var employeeModel = mongoose.model("employees",employeeSchema);
module.exports = employeeModel;
