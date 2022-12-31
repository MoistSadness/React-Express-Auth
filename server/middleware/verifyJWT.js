import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

/** Makes sure a valid user is logged in when trying to access a protected route
 * 
 */
export default function verifyJWT(req, res, next) {
    try {
        console.log(req.headers)
        const authHeader = req.headers['authorization']
        if (!authHeader) return res.status(401).json({ 'message': 'Unauthorized' })
        console.log(authHeader)
        const token = authHeader.split(' ')[1]
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                console.log(err)
                return res.sendStatus(403)
            }      // Invalid token
            req.user = decoded.username
            next()
        })
    } catch (error) {
        console.log(error.message)
    }

}