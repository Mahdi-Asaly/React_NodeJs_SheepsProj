import React, {useState, useEffect} from 'react'
import { TextField, Button ,Typography, Paper} from '@material-ui/core';

import useStyles from './styles';
import {createPost,updatePost} from '../../actions/posts';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';

//import { typography } from '@material-ui/system';


import { useSelector } from 'react-redux';

//GET THE CURRENT ID OF POST

const Form= ({currentId, setCurrentId})=>{
    const [postData,setPostData] = useState({shpBlood: '', shpId:'',shpGender:'',tags:'',selectedFile:''});
    const post =  useSelector((state)=> currentId? state.posts.find((p)=>p._id === currentId): null);//fetch data from redux
    const classes = useStyles();
    const dispatch= useDispatch();

    //this function run when post has value
    useEffect(()=>{
        if(post) setPostData(post);
    },[post])

    const handleSubmit = (e)=>{
        e.preventDefault(); //default refresh disable

        //if we have current id lets edit
        if(currentId){
            dispatch(updatePost(currentId ,postData));
        }
        //else we create a post not updating
        else{
        dispatch(createPost(postData));
        }
        clear(); //reset string of form
    }

    const clear =()=>{
        setCurrentId(null) //clear the cur id to clear
        setPostData({shpBlood: '', shpId:'',shpGender:'',tags:'',selectedFile:''}); //empty string reset
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}> 
                <Typography variant="h6">{currentId? 'Editing' : 'Creating'} a Sheep
                </Typography>
                <TextField
                    name="shpBlood" 
                    variant="outlined"
                    label="Blood"
                    fullWidth
                    value={postData.shpBlood}
                    onChange={(e)=>setPostData({...postData, shpBlood: e.target.value})}
                 />
                <TextField
                    name="shpId" 
                    variant="outlined"
                    label="ID"
                    fullWidth
                    value={postData.shpId}
                    onChange={(e)=>setPostData({...postData, shpId: e.target.value})}
                 />
                <TextField
                    name="shpGender" 
                    variant="outlined"
                    label="Gender"
                    fullWidth
                    value={postData.shpGender}
                    onChange={(e)=>setPostData({ ...postData, shpGender: e.target.value})}
                 />
                <TextField
                    name="tags" 
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e)=>setPostData({ ...postData, tags: e.target.value })}
                 />
                 <div className={classes.fileInput}>
                    <FileBase type="file" 
                    multiple={false} 
                    onDone={ ({base64})=> setPostData( {...postData, selectedFile:base64})}
                    />
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                 </div>
            </form>
        </Paper>
    );
}
 
export default Form;