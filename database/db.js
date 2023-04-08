
import mongoose from "mongoose";// mongoose is a pkg and helps to connect with the db.
import dotenv from 'dotenv';

dotenv.config();//initialize dotenv

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;



const Connection = () => {
    const MOONGOB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-5xhu9ea-shard-00-00.zxbs9np.mongodb.net:27017,ac-5xhu9ea-shard-00-01.zxbs9np.mongodb.net:27017,ac-5xhu9ea-shard-00-02.zxbs9np.mongodb.net:27017/?ssl=true&replicaSet=atlas-ctj0dh-shard-0&authSource=admin&retryWrites=true&w=majority`;

    mongoose.connect(MOONGOB_URI, { useNewUrlParser: true });
    mongoose.connection.on('connected', () => {
        console.log("database connected successfully")
    });

    mongoose.connection.on('disconnected', () => {
        console.log("db disconnected")
    });

    mongoose.connection.on('error', () => {
        console.log("error while connecting db", error.message);//error is obj and message is property
    })

}
export default Connection;