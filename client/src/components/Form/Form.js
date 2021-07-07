import React, {useState, useEffect} from 'react'
import { TextField, Button ,Typography, Paper} from '@material-ui/core';
import useStyles from './styles';
import {createPost,updatePost} from '../../actions/posts';
import {useDispatch} from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { useSelector } from 'react-redux';


const Form= ({currentId, setCurrentId})=>{
    console.log('print currentId')
    console.log(currentId);
    console.log(setCurrentId);
    const [postData,setPostData] = useState({shpBlood: '', shpId:'',shpGender:'',tags:'',info:''});
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
        setPostData({shpBlood: '', shpId:'',shpGender:'',tags:'',info:''}); //empty string reset
    }

    //gender radio button
    const [value, setValue] = React.useState('Female');
    const handleChangeGender = (event) => {
        postData.shpGender= event.target.value;
        setValue(event.target.value);
    };

    //Blood radio button
    const handleChangeBlood = (event) => {
        postData.shpBlood= event.target.value;
        setValue(event.target.value);
    };


    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}> 
                <Typography variant="h6" gutterBottom  style={{ fontFamily: "Spicy Rice", color: "green" }}>{currentId? 'Editing' : 'Creating'} a Sheep
                </Typography>
                <TextField
                    name="shpId" 
                    variant="outlined"
                    label="ID"
                    fullWidth
                    placeholder="Write here sheep id"
                    value={postData.shpId}
                    onChange={(e)=>setPostData({...postData, shpId: e.target.value})}
                 />
                <TextField
                    name="tags" 
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    placeholder="Write here sheep tag/number"
                    value={postData.tags}
                    onChange={(e)=>setPostData({ ...postData, tags: e.target.value })}
                 />

                <TextField
                    name="info" 
                    variant="outlined"
                    label="info"
                    fullWidth
                    placeholder="Sheep information can be written here."
                    value={postData.info}
                    onChange={(e)=>setPostData({ ...postData, info: e.target.value })}
                 />


                 <div className={classes.fileInput}>
                    <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={postData.shpGender} onChange={handleChangeGender}>
                            <FormControlLabel value="Female" control={<Radio />} label="Female" />
                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        </RadioGroup>
                        <FormLabel component="legend">Blood</FormLabel>
                        <RadioGroup aria-label="blood" name="blood1" value={postData.shpBlood} onChange={handleChangeBlood}>
                            <FormControlLabel value="BB" control={<Radio />} label="BB" />
                            <FormControlLabel value="B+" control={<Radio />} label="B+" />
                        </RadioGroup>
                 </div>

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}
 
export default Form;