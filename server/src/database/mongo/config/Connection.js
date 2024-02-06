import mongoose from 'mongoose';
import 'dotenv/config';

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

export const connection = mongoose.connect(`mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_NAME_DATABASE}`, mongooseOptions).then(() => {
    console.log("Mongo database connected!")
}).catch((err) => {
    console.log('Error connecting Mongo: ', err.message)
});
