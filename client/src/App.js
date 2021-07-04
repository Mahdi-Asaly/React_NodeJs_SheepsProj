import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Grow from '@material-ui/core/Grow';
import memories from './images/memories.png';
const App= ()=>{
    return(
        <Container maxidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Memories</Typography>
                <img src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="strech" spacing={4}>
                                <Grid item xs={12} sm={7}>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
