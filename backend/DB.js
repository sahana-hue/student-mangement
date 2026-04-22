import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://sahanabagalakoti_db_user:sahana@ac-cowkumf-shard-00-00.7y1xh4a.mongodb.net:27017,ac-cowkumf-shard-00-01.7y1xh4a.mongodb.net:27017,ac-cowkumf-shard-00-02.7y1xh4a.mongodb.net:27017/?ssl=true&replicaSet=atlas-11jnjk-shard-0&authSource=admin&appName=Cluster0");
    console.log("db Connected")
    } catch (error) {
        console.log(error)
    }
    
}

export default connectDB;