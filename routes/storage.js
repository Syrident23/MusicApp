import express from "express"
import uploadMidleware from "../utils/handleStorage.js"
import { createItem, deleteItem, getItem, getItems } from "../controllers/storage.js" 
import { getItemValidator } from "../validators/storage.js"

const router = express.Router()


router.get('/:id', getItemValidator, getItem)

router.get('/', getItems)

router.post('/', uploadMidleware.single('myfile'), createItem)

router.delete('/:id',getItemValidator, deleteItem)


export default router