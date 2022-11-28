import mongoose from 'mongoose'


const MONGODB_URI = 'mongodb+srv://jaseb:jaseb22@cluster0.8hhwce1.mongodb.net/?retryWrites=true&w=majority'

export async function connectToDB() {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('Mongodb conectado')
    } catch (error) {
        console.error(error)
    }
}
