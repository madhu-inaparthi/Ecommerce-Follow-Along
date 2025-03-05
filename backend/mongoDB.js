const mongoose = require('mongoose')

async function connect() {
    try{
        await mongoose.connect('mongodb+srv://madhukiran:madhukiraninaparthi2006@cluster0.0e0l1.mongodb.net/')

    }catch(err){
        console.log("MongoDB error: " + err)
    }
}

module.exports = connect;