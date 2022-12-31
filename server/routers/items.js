import express from 'express'
import { getItems } from '../controllers/items.js'

import verifyJWT from '../middleware/verifyJWT.js'

const router = express.Router()

router.get('/', verifyJWT, getItems)

export default router