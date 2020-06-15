import React from 'react';
import NavSession from  './Nav/NavSession';
import {Box, Card, CardActionArea, CardActions, CardMedia, CardContent, Button} from '@material-ui/core';
import {makeStyles} from  '@material-ui/core/styles';
import {MailOutlineRounded,Facebook,GitHub,LinkedIn} from '@material-ui/icons';


const IMAGEGOOGLE='https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/la-fundacion-de-google.png';
const IMAGEFACEBOOK='https://cdn-3.expansion.mx/d2/d7/d4788bdf40839f3438854f1eb8a2/fb-hero-image-001.jpeg';
const IMAGEGITHUB='http://perudev.pe/wp-content/uploads/2019/05/GitHub-logo-2-imagen.jpg';
const IMAGELINKEDIN='https://escuela-emprendedores.alegra.com/wp-content/uploads/2017/08/29.png'
const useStyles=makeStyles({
    BoxFlex:{
  
        width:"100%",
        height:'calc(100vh - 10vh)'        
    },
    Card:{
        width:"200px",
        minWidth:"300px",
        height:"180px"
    }
});

export default ()=>{    
    const GoAuth2=()=>{
        // const request = await fetch('http://localhost:3000/google');
        // const data =  await request.json();
        // console.log(data);  
        //const configuration="menubar=true,location,height=570,width=520,scrollbars=yes,modal=true";
        window.localStorage.setItem('peticiongo','ok');
        window.open('https://oauth2examplefirst.herokuapp.com/google','_self');
    }
    const GoAuth2Facebook=()=>{
        window.localStorage.setItem('peticiongo','ok');
        window.open('https://oauth2examplefirst.herokuapp.com/facebook','_self');
    }
    const GoAuth2Github=()=>{
        window.localStorage.setItem('peticiongo','ok');
        window.open('https://oauth2examplefirst.herokuapp.com/github','_self');
    }
    const GoAuth2Linkedin=()=>{
        window.localStorage.setItem('peticiongo','ok');
        window.open('https://oauth2examplefirst.herokuapp.com/linkedin','_self'); 
    }
    const classes=useStyles();

        return (
           <>
                <NavSession/>
               
               {
                  window.localStorage.getItem('autorizado')===null?"":window.location.href='/profile'
                }
          
              
            
               <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-evenly" alignItems="space-evenly" className={classes.BoxFlex}>
                <Box>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                className={classes.Card}
                                image={IMAGEGOOGLE}
                                component="img"
                                title="Pajarraco"
                            />
                            <CardContent>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Box display="flex" width="100%" justifyContent="center" alignItems="center">
                                <Box>
                                <Button color="primary" variant="contained" style={{height:"40px"}} onClick={GoAuth2}>
                                    <MailOutlineRounded style={{marginRight:"10px"}}/>
                                    Iniciar Sesion con google
                                </Button>
                                </Box>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>


                <Box>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                className={classes.Card}
                                image={IMAGEFACEBOOK}
                                component="img"
                                title="Pajarraco"
                            />
                            <CardContent>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Box display="flex" width="100%" justifyContent="center" alignItems="center">
                                <Box>
                                <Button color="primary" variant="contained" style={{height:"40px"}} onClick={GoAuth2Facebook}>
                                    <Facebook style={{marginRight:"10px"}}/>
                                    Iniciar Sesion con facebook
                                </Button>
                                </Box>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>

                <Box>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                className={classes.Card}
                                image={IMAGEGITHUB}
                                component="img"
                                title="Pajarraco"
                            />
                            <CardContent>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Box display="flex" width="100%" justifyContent="center" alignItems="center">
                                <Box>
                                <Button color="primary" variant="contained" style={{height:"40px"}} onClick={GoAuth2Github}>
                                    <GitHub style={{marginRight:"10px"}}/>
                                    Iniciar Sesion con Github
                                </Button>
                                </Box>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>

                <Box>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                className={classes.Card}
                                image={IMAGELINKEDIN}
                                component="img"
                                title="Pajarraco"
                            />
                            <CardContent>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Box display="flex" width="100%" justifyContent="center" alignItems="center">
                                <Box>
                                <Button color="primary" variant="contained" style={{height:"40px"}} onClick={GoAuth2Linkedin}>
                                    <LinkedIn style={{marginRight:"10px"}}/>
                                    Iniciar Sesion con Linkedin
                                </Button>
                                </Box>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>

            </Box>
        
           </>
        )
    
}
