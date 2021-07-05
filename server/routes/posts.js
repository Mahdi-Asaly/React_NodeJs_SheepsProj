import express from 'express';
import {getPosts,createPost, updatePost} from '../controllers/posts.js';
const router = express.Router();
// its not reached by localhost:5000/
// its reached by localhost:5000/posts
router.get('/',getPosts);
router.post('/',createPost); //you have to add new id , u dont need id
router.patch('/:id',updatePost) //updating existing documents, we need to know the id before editing 


export default router;