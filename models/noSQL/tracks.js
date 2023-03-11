import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const TracksSchema = new mongoose.Schema(
    {
        name: {
            type:String
        },
        album: {
            type: String
        },
        cover : {
            type: String,
            validate:{
                validator: (req) =>{
                    return true
                },
                message: 'ERROR_URL'
            }
        },
        artist: {
            name:{
                type: String,
            },
            nickname: {
                type: String,
            },
            nationality: {
                type: String
            },
        },
        
        duration: {
            start: {
                type: Number
            },
            end: {
                type: Number
            },
            mediaId:{
                type: mongoose.Types.ObjectId
            }
        }
    },
    {
     timestamps: true,
     versionKey: false   
    }
);

TracksSchema.plugin(MongooseDelete, {overrideMethods: "all"})

const tracksModel = mongoose.model('Tracks', TracksSchema)

export default tracksModel