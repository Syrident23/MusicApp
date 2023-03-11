import mongo from 'mongoose'
import dotenv from 'dotenv'
import chalk from 'chalk'

dotenv.config()

const db = () => {
    const DB_URI = process.env.DB_URI
    
    mongo.connect(DB_URI,
        (err,res) => {
            if(!err){
                console.log(chalk.bgGreen('****** CONECTION SUCCESS ******'))
            }else {
                console.log(err)
                console.log(chalk.bgRedBright('****** CONECTION ERROR ******'))
            }
        })
    }

mongo.set('strictQuery', false)
    
export default db