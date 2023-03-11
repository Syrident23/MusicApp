import { usersModel } from "../models/index.js"
import handleHttpError from "../utils/handleErrors.js"
import {verifyToken} from '../utils/handleJwt.js'

const authMiddleware = async (req, res, next) => {
    try {
        
        if(!req.headers.authorization){
            handleHttpError(res, "NOT_TOKEN", 401)
            return
        }
        
        const token = req.headers.authorization.split(' '). pop()
        const dataToken = await verifyToken(token)

        if(!dataToken._id){
            handleHttpError(res, "ERROR_ID_TOKEN", 401)
            return
        }

        const user = await usersModel.findById(dataToken._id)
        req.user = user

        next()

    } catch (e) {
        console.log(e)
        handleHttpError(res, 'NOT_SESSION', 401)
    }
}


export {authMiddleware}