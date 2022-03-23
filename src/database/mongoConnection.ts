import mongoose from "mongoose";
import { config } from "../config/constants";

export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_CONNECTION);
            console.log("database connected")
        } catch( err: any ) {
            console.error(err.message)
            process.exit(1)
        }
    }
}