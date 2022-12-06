import { Router } from "express"
import {
    getFiguras,
    // getFigura,
    createFiguras,
    // deleteFiguras,
    // updateFiguras
} from '../controllers/figura.controller.js'
const router = Router()
import fileUpload from 'express-fileupload'

router.get('/juego', getFiguras)

// router.get('/figura/:id', getFigura)

router.post('/juego', createFiguras)

// router.put('/figura/:id', updateFiguras)

// router.delete('/figura/:id', deleteFiguras)

export default router