import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { normalize } from 'path'

const router = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PATH_ROUTES = __dirname

const removeExtension = (filename) =>{
    return filename.split('.').shift()
}



fs.readdirSync(PATH_ROUTES).forEach(async(file)=>  {
    
    const name = removeExtension(file)
    let route = path.join(PATH_ROUTES, file)
    
    try {
        
            const item = await import(pathToFileURL(route))
            router.use(`/${name}`, item.default)
        
    } catch (error) {

        console.log(error.message)
    
    }
})



export default router