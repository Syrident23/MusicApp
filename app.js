import express from "express"
import cors from "cors"
import db from "./config/mongo.js"
import routes from './routes/index.js'
import  BodyParser  from "body-parser"

const app = express()

app.use(cors())

app.use(express.json())

const port = process.env.PORT || 3000


app.use('/api', routes)
app.use(express.static('storage'))



app.listen(port, () => {
    console.log(`APP RUNING ON PORT ${port}`)
})

db()