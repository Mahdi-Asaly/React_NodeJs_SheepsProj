import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';
const Posts= ()=>{
    const posts =  useSelector((state)=>state.posts);
    const classes = useStyles();

    console.log(posts);

    return (
        //if not posts yet do circular progress showing
        !posts.length ? <CircularProgress/> :( //else
            //then show the posts
            <Grid className={classes.container} container alignItems="strech" spacing={3}>
                {
                  posts.map((post) => (
                      <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post}/>
                      </Grid>
                ))}  
            </Grid>
        )
    );
}
export default Posts;