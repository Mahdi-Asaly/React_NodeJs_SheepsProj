import React, {useEffect} from 'react';


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
    const classes = useStyles();
    const dispatch =  useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    }, [dispatch]);

    return(
        <Container maxidth="lg">
            <AppBar className={classes.AppBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories}  alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="strech" spacing={3}>
                                <Grid item xs={12} sm={7}>
                                    <Posts/>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Form/>
                                </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
