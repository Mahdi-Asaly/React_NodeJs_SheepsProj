import express from 'express';
import {getPosts,createPost, updatePost, deletePost} from '../controllers/posts.js';
const router = express.Router();
//patch is used to update//
// its not reached by localhost:5000/
// its reached by localhost:5000/posts
router.get('/',getPosts);
router.post('/',createPost); //you have to add new id , u dont need id
router.patch('/:id',updatePost) //updating existing documents, we need to know the id before editing 
router.delete('/:id',deletePost); //deleting an existing sheep we call deletePost function

export default router;