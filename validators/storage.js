import { check } from "express-validator";
import validationResults from '../utils/handleValidator.js'


const getItemValidator = [
    check('id').exists().notEmpty().isMongoId(),  
    (req, res, next) => {
       return validationResults(req, res, next)
    }
]

export  {getItemValidator}