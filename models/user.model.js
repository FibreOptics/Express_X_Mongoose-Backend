import mongoose,{Schema} from 'mongoose';
import joi from 'joi';
let UserSchema = new Schema({
    name: {type: String , required: true, max: 30},
    email: {type: String, unique : true, required : true, dropDups: true ,max: 30},
    pass: {type: String, required: true, max: 30},
    friends:{type: Array},
    online:{type:Boolean}
},
{
    timestamps: true 
});

//module.exports = mongoose.model('Product', ProductSchema);
export default mongoose.model('User', UserSchema);