import React from 'react';
import {Toolbar,AppBar,Typography,Button,Avatar} from '@material-ui/core';
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
        
    },
    AvatarUser:{
        marginRight:"8px"
    }
});
export default ({changeState,photo})=>{

    const classes=useStyles();
    const CloseSession=async ()=>{
        const request= await fetch('https://oauth2examplefirst.herokuapp.com/logout');
        const data=await request.json();
        await changeState(data.success);
       await window.localStorage.clear();
        //window.localStorage.setItem('autorization','no');
        
        console.log(data.success);
        
        // if(success===false)
        // {
        //     window.localStorage.setItem('autorizacion',false);
        //     window.localStorage.clear();
        //     window.location.href='/';
        //     //props.history.push("/session");
            
        //     console.log('sin autorizacion');
        // }
    }
    return (
        <>
             <div style={{height:"75px"}}>
            <AppBar>
                <Toolbar>
                <Typography variant="h6" className={classes.titleprimary}>
                        Example Oauth2
                </Typography>
                <Button variant="contained" color="primary" onClick={CloseSession}>
                    <Avatar src={photo} className={classes.AvatarUser} />
                    Close Session
               
                </Button>
                </Toolbar>
            </AppBar>
        </div>   
            
        </>
    );
}