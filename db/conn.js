import mongoose from 'mongoose'
import 'dotenv/config'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected to MongoDB")
    } catch(error) {
        console.log(`Error connecting to MongoDB: ${error}`)
    }
}

export default connectDB