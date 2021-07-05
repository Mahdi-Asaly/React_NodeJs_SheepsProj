import React, {useState, useEffect} from 'react';


import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Grow from '@material-ui/core/Grow';

import {useDispatch} from 'react-redux'

import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';
const App= ()=>{
    const [currentId, setCurrentId] = useState(null); //redux part
    const classes = useStyles();
    const dispatch =  useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
        //as soon we change the currentId the dispatch called 
        //now in dispatch we want that when something updated we see the result Imediatally without waiting so we add current id to dispatch
    }, [currentId,dispatch]);

    return(
        <Container maxidth="lg">
            <AppBar className={classes.AppBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories}  alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                                <Grid item xs={12} sm={7}>
                                    <Posts setCurrentId={setCurrentId}/>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                                </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
