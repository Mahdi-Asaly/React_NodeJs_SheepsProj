import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Grow from '@material-ui/core/Grow';
import { Toolbar,IconButton, Button } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import sheepsImg from './images/W-Sheep-header.jpg';
import useStyles from './styles';
import DataTable from './components/DataTable/DataTable';


const App= ()=>{
    const [currentId, setCurrentId] = useState(null); //redux part
    const classes = useStyles();
    const dispatch =  useDispatch();
    const [MyView,setMyView] = useState("Cards");
    
    useEffect(()=>{
        dispatch(getPosts());
        //as soon we change the currentId the dispatch called 
        //now in dispatch we want that when something updated we see the result Imediatally without waiting so we add current id to dispatch
    }, [currentId,dispatch]);
    return(
        <Container maxidth="lg" style={{ backgroundImage: `url(${sheepsImg})` }}>
            <AppBar className={classes.AppBar} position="static" color="inherit">
            <Toolbar style={{backgroundColor:"" }}>
                    <IconButton 
                    edge="start" 
                    className={classes.menuButton} 
                    color="inherit" 
                    aria-label="menu"
                    onClick={()=>{}}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" gutterBottom  style={{ fontFamily: "Spicy Rice", color: "green" }}> Sheeps Manager - 
                    </Typography>


                    <Button 
                    color="secondary"
                    onClick={() => setMyView("Cards")}
                    >Cards
                    </Button>

                    <Button 
                    color="secondary"
                    onClick={() => setMyView("Table")}
                    >Table (Demo Version)
                    </Button>
            </Toolbar>
            
            </AppBar>
            ~{"\n"}
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                                <Grid item xs={12} sm={7}>
                                    {MyView === "Cards" && <Posts setCurrentId={setCurrentId} />}
                                    {MyView === "Table" && <DataTable/>}
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
