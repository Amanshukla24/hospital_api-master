const mongoose = require('mongoose');
 async function main(){
    await mongoose.connect('mongodb+srv://amanshuklaotusone07:Proudtobeme24@hospitalapi.cam6kfh.mongodb.net/');
    console.log("Connection SuccessFull !!");
}
main().catch((error) =>{console.log("Connection Not Success Full !!");})
