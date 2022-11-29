import Figuras from '../models/figura.model.js'
import {uploadImage, deleteImage} from '../utils/cloudinary.js'
import fs from 'fs-extra'

export const getFiguras = async (req, res) => {
    try {
        const figuras = await Figuras.find();
        res.json(figuras)
        
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getFigura = async (req, res) => {
    try {
        const figuras = await Figuras.findById(req.params.id)
    return res.send(figuras)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const createFiguras = async (req, res) => {
    try {
        const { name } = req.body
        const figuras = new Figuras({
        name
        })

        if(req.files?.image){
            const result = await uploadImage(req.files.image.tempFilePath)
            figuras.image = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }

            await fs.unlink(req.files.image.tempFilePath)
        }

        await figuras.save()

        res.json(figuras)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const updateFiguras = async (req, res) => {
    try {
        const {id} = req.params;
        const figuraUpdate = await Figuras.findByIdAndUpdate(id, req.body,{
        new: true
        })
        return res.json(figuraUpdate)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const deleteFiguras = async (req, res) => {
    try {
        const figuras = await Figuras.findByIdAndDelete(req.params.id) 

        if (figuras.image?.public_id){
            await deleteImage(figuras.image.public_id)
        }
        
        return res.send(figuras)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}