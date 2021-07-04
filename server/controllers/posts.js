import PostMessage from '../models/postMessage.js';
export const getPosts =async (req , res)=>{
    try{
        const postMessages= await PostMessage.find();
        res.status(200).json(postMessages);
    }
    catch(err){
        res.status(404).json({message:err.message});
    }
}
export const createPost=async (req, res)=>{
    const post = req.body;
    const newPost = new PostMessage(post);
    try{
       await newPost.save();
       //http post get ids: https://www.restapitutorial.com/httpstatuscodes.html
       res.status(201).json(newPost);
    }catch(err){
        res.status(404).json(err.message);
    }
}
