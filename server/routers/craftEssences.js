import express from 'express'
import {getCraftEssences} from '../controllers/craftEssences.js'

const router = express.Router()
router.get('/', getCraftEssences)

export default router