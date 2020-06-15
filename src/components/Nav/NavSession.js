import React from 'react';
import {Toolbar,AppBar,Typography,Button} from '@material-ui/core';
import {makeStyles} from  '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles=makeStyles({
    titleprimary:{
        flexGrow:1
    },
    BoxFlex:{
        background:red,
        width:"100%",
        height:"100%"
        
    }
});
export default ()=>{

    const classes=useStyles();

    return (
        <>
             <div style={{height:"75px"}}>
            <AppBar>
                <Toolbar>
                <Typography variant="h6" className={classes.titleprimary}>
                        Example Oauth2
                </Typography>
                <Button variant="contained" color="secondary">
                    GoDaniel
                </Button>
                </Toolbar>
            </AppBar>
        </div>   
            
        </>
    );
}