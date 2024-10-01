const mongoose= require('mongoose');
module.exports.connect= async () =>{
    try {
        await mongoose.connect(process.env.mongoose_URL);
        console.log("Connected");
    } catch (error) {
        console.log(error);
        console.log("Error")
    }
}
