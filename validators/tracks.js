import { check } from "express-validator";
import validationResults from '../utils/handleValidator.js'

const createItemValidator = [
    check('name').exists().notEmpty(),
    check('cover').exists().notEmpty(),
    check('album').exists().notEmpty(),
    check('artist').exists().notEmpty(),
    check('artist.name').exists().notEmpty(),
    check('artist.nickname').exists().notEmpty(),
    check('artist.nationality').exists().notEmpty(),
    check('duration').exists().notEmpty(),
    check('duration.start').exists().notEmpty(),
    check('duration.end').exists().notEmpty(),
    check('mediaId').exists().notEmpty().isMongoId(),  
    (req, res, next) => {
       return validationResults(req, res, next)
    }
]

const getItemValidator = [
    check('id').exists().notEmpty().isMongoId(),  
    (req, res, next) => {
       return validationResults(req, res, next)
    }
]

export  {createItemValidator, getItemValidator}