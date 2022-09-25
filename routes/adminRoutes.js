import express from 'express'
import { iniciarSesion, login } from "../controllers/adminController.js";
const router = express.Router()

router.get('/login', login)
router.post('/login', iniciarSesion)







export default router