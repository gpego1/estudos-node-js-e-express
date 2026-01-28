import mongoose, {mongo} from "mongoose";

async function connectDb() {
    try {
        mongoose.connect(process.env.DB_CONNECTION_STRING);
        return mongoose.connection;
    } catch (error) {
        console.log("Erro ao tentar se conectar com banco: ", error);
        process.exit(1);
    }
    
}

export default connectDb;

