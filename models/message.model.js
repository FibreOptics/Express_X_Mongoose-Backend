import mongoose,{Schema} from 'mongoose';
import joi from 'joi';
let MessageSchema = new Schema({
    sender: {type: String , required: true, max: 30},
    message: {type: String, required: true,max: 1000},
    reciever:{type: String, required: true, max: 30}
},
{
    timestamps: true 
});

//module.exports = mongoose.model('Product', ProductSchema);
export default mongoose.model('Message', MessageSchema);