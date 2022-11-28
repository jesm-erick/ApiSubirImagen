import mongoose from "mongoose"

const figuraSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    image: {
        public_id: String,
        secure_url: String
    }
   
    
}, {
    timestamps: true
})

export default mongoose.model('Figura', figuraSchema)