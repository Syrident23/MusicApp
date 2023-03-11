import express  from "express";
import {getItem, getItems, createItem, updateItem, deleteItem} from '../controllers/tracks.js'
import { authMiddleware } from "../middleware/session.js";
import  {checkRole}  from "../middleware/rol.js";
import  {createItemValidator, getItemValidator}  from "../validators/tracks.js";

const router = express.Router()


router.get('/', authMiddleware, getItems)

router.post('/', authMiddleware, checkRole(['admin']), createItemValidator, createItem)

router.get('/:id', getItemValidator, getItem)

router.put('/:id', getItemValidator, createItemValidator, updateItem)

router.delete('/:id',getItemValidator, deleteItem, )



export default router