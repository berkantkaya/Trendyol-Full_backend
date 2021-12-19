const mongoose = require('mongoose');


const databaseConnect = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true
        //useCreateIndex:true    
        }).then((data)=>{
         console.log(`yess mongodb connected on ${data.connection.host}`)
        });
}

module.exports = databaseConnect;
