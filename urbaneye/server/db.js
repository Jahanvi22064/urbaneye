const mongoose=require('mongoose');
const mongoURI="mongodb+srv://durgaedu22064:qQ95t8if2DGrWT4g@miniproj.zlsyo8j.mongodb.net/?retryWrites=true&w=majority&appName=miniproj"
//durgaedu22064
//qQ95t8if2DGrWT4g
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}
module.exports=connectToMongo;