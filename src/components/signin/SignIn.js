import "firebase/auth";

import * as firebase from "firebase/app";

import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { UserContext } from "../../App";
import config from "../../firebaseConfig";
import firebaseConfig from '../../firebaseConfig';
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";

firebase.initializeApp(config);

// styling
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textDecoration: "none",
  },
}));
// styling ends
const SignIn = () => {
  const classes = useStyles(); 
  const [user, setUser] = useState({
    isSignedIn: true,
    email: "",
    password: "",
    name: "",
    success: "",
    error: ""
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/places" } };

  // google popup sign in
  const googleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { email, displayName } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
        };

        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })

      .then((err) => {
        console.log(err);
      });
  };

  // sign in
  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.value === "email") {
      const isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    } 
    if (e.target.value === "password") {
      const isFormValid = e.target.value > 4;
    } 


    if (isFormValid) {
       const newUserInfo = {...user};
       newUserInfo[e.target.name] = e.target.value;
       setUser(newUserInfo);
    }
  };

  const handleOnSubmit = (e) => {
    if (user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then( res => {
        const userSignIn = {...user}
        userSignIn.error = "";
        userSignIn.success= true;
        setUser(userSignIn);
        setLoggedInUser(userSignIn);
        history.replace(from);
        }

      )

      .catch(function(error) {
        
        // Handle Errors here.
        const userSignIn = {...user}
        userSignIn.error = error.message;
        userSignIn.success= false;
        setUser(userSignIn);
        
   

        // ...
      });

    }



    e.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
   
     
        <div style= {{color: 'red'}}>
  {user.error} 
     </div>

     <div> {user.success} </div>
    <form onSubmit={handleOnSubmit}>
          {/* Email field */}
          <TextField
            onBlur={handleBlur}
            required
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="text"
            autoComplete="email"
            autoFocus
            
          />
          {/* password field */}
          <TextField
            onBlur={handleBlur}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            placeholder="Password"
            autoComplete="current-password"
            
          />
          
         
         <div>
         <Button
         
            type="submit"
            value="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
         </div>
          {/* </Link> */}
        </form>
        
        {/* extra starts */}
        {/* extra sign in  buttons  */}
        <Grid container justify="center">
          {/* passowrd rest*/}
          <Grid container>
            <Grid item xs>
              <Link to="" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="signup" href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item>
              <Box mt={2}>
                <Typography variant="body2">Or</Typography>
              </Box>
            </Grid>
          </Grid>
          {/* facebook button */}
         <div>
         <Button
            type="submit"
            fullWidth
            variant="contained"
            color="default"
            className={classes.submit}
          >
            <Box mr={4}>
              <span className="material-icons">facebook</span>
            </Box>
            Continue With Facebook
          </Button>
         </div>

          {/* goolge button */}

       
         
         <div>
         <Button
              onClick = {googleSignIn}
              type="submit"
              fullWidth
              variant="contained"
              color="default"
              className={classes.submit}
            >
              <Box mr={4}>
                <span className="material-icons">mail</span>
              </Box>
              Continue With Google
            </Button>
         </div>
          
        </Grid>
        {/* extra ends */}
      </div>
      </Container>
  );
};

export default SignIn;
