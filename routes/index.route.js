import { Router } from 'express'

const router = Router()


router.get('/', (req, res) => res.send('hello world jhon sucasaire'))

router.get('/ping', (req, res) => res.send('pong XD'))

export default router