import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';
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


// ../post/123 - 123 is the id
export const updatePost= async (req, res)=>{
    const { id: _id }= req.params; 
    const post = req.body; //receiving from the front end details (post that include a title name msg etc..) and update it later
    //if there are no such id (sheep not exists)
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    //else we update the sheep
    //note that the '...post' means that ignore other params . but not the _id
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new:true}); //async action so add await
    res.json(updatedPost);
}


export const deletePost = async (req, res)=>{
    const { id }= req.params; 
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    await PostMessage.findByIdAndRemove(id);
    return res.json({message:'Post deleted successfully'});
}