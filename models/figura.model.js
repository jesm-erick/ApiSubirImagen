import mongoose from "mongoose"

const figuraSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    name1: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    winner: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    
}, {
    timestamps: true
})

export default mongoose.model('Figura', figuraSchema)