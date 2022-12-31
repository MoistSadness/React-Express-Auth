import express from 'express'
import { getMysticCodes } from '../controllers/mysticCodes.js'

const router = express.Router()

router.get('/', getMysticCodes)

export default router