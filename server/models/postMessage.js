import mongoose from 'mongoose';

const postSchema =  mongoose.Schema({
 shpId: String ,
 shpGender:String,
 shpBlood:String,
 tags:[String],
 selectedFile: String,
 likeCount:{
     type:Number,
     default: 0
 },
 createdAt:{
     type:Date,
     default: new Date()
 },
});

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;
