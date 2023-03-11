import { check } from "express-validator";
import validationResults from '../utils/handleValidator.js'


const registerValidator = [
    check('name').exists().notEmpty().isLength({min:3}),
    check('age').exists().notEmpty().isNumeric(),
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty().isLength({min:8, max:21}),
    check('role').exists().notEmpty(),
      
    (req, res, next) => {
       return validationResults(req, res, next)
    }
]

const validatorLogin = [

    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty().isLength({min:8, max:21}),
    
    (req, res, next) => {
        return validationResults(req, res, next)
     }
]

export  {registerValidator, validatorLogin}