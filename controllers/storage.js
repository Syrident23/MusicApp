import handleHttpError from '../utils/handleErrors.js'
import { matchedData } from 'express-validator'
import {storageModel} from '../models/index.js'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`

export const getItems  = async (req,res) =>{
    try {
        const data = await storageModel.find()
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEMS_STORAGE")
    }
}

export const getItem  = async(req,res) =>{
    try {
         
        const {id} = matchedData(req)
        const data = await storageModel.findById(id)
        res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEMS_STORAGE")
    }
}

export const createItem  = async (req,res) =>{
    
    try {
        const {file} = req
    console.log(file)
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({data})
    } catch (error) {
        handleHttpError(res, 'ERROR_CREATE_ITEM_STORAGE')
    }
}

export const deleteItem  = async (req,res) =>{
    try {
        
        const {id} = matchedData(req)
        const dataFile = await storageModel.findById(id)
        const {filename} = dataFile
        const filePath = `${MEDIA_PATH}/${filename}`
        fs.unlinkSync(filePath)
        
        const data= {
            filePath,
            deleted: 1
        }
        
        res.send({data, msg:"Item Delete Succes"})    

    } catch (e) {
        console.log(e)
        handleHttpError(res, "ERROR_DELETE_ITEM_STORAGE")
    }
}

