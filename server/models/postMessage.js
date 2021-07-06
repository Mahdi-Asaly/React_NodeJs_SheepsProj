import mongoose from 'mongoose';

const postSchema =  mongoose.Schema({
 shpId: String ,
 shpGender:String,
 shpBlood:String,
 tags:[String],
 selectedFile: String,
 info:String,
 createdAt:{
     type:Date,
     default: new Date()
 },
});

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;
