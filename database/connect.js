const mongoose = require('mongoose')
 const connection = async() => {
    const URL = process.env.MONGO_URL
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
        console.log('database connected ');
    }catch(error){
        console.log("database error",error);
    }
};


module.exports = connection