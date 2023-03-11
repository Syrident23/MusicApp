import { matchedData } from 'express-validator'
import {tracksModel} from '../models/index.js'
import handleHttpError from '../utils/handleErrors.js'


export const getItems  = async (req,res) =>{
    try {
        const user = req.user
        const data = await tracksModel.find()
        res.send({data})        

    } catch(e) {

        handleHttpError(res, 'ERROR_GET_ITEMS')

    }
}

export const getItem  = async (req, res) =>{
    try {
         
        req = matchedData(req)
        const {id} = req
        const data = await tracksModel.findById(id)
        res.send({data})    

    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEM")
    }
}

export const createItem  = async (req, res) =>{
    
    try {
        
        const body = matchedData(req)
        const data = await tracksModel.create(body)
        res.send({data})   
    
    } catch(e) {
    
        handleHttpError(res, 'ERROR_CREATE_ITEMS')

    }    
} 

export const updateItem  = async (req,res) =>{
    try {
        const {id, ...body} = matchedData(req)
        const data = await tracksModel.findOneAndUpdate(
            id,
            body
        )
        res.send({data})   
    
    } catch(e) {
        console.log(e)
        handleHttpError(res, 'ERROR_UPDATE_ITEMS')

    }  

}

export const deleteItem  = async(req,res) =>{
    try {
         
        req = matchedData(req)
        console.log(req)
        const {id} = req
        const data = await tracksModel.delete({_id: id})
        res.send({data, msg:"Item Delete Succes"})    

    } catch (e) {
        
        handleHttpError(res, "ERROR_DELETE_ITEM")
    }
}

