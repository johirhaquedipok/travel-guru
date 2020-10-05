import "firebase/auth";

import * as firebase from "firebase/app";

import {Link, useHistory, useLocation} from "react-router-dom";
import React, { useContext } from "react";

import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FacebookIcon from '@material-ui/icons/Facebook';
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Mail } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { UserContext } from "../../App";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textDecoration:'none'
  },
}));

// style ends




  
   
const Signup = () => {
  const {errorMessage, setErrorMessage} = useState('');
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/places" } };
  const classes = useStyles();
    // state for sign UP
    const [user, setUser] = useState({
      isSignedIn: false,
      name: "",
      email: "",
      password: "",
      photo: "",
      error: "",
      success: ""
    });



    // newUser
    const [newUser, setNewUser] = useState({
      isSignedUp: false,
      name: "",
      firstName: "", 
      lastName: "",
      email: "",
      password: "",
      photo: "",
      error: "",
      success: ""
    });


    
    // email or password valid
    const handleBlur = (e) => {
      let fieldValid = true;
      if(e.target.value === 'email'){
          fieldValid = /\S+@\S+\.\S+/.test(e.target.value);
          if (!fieldValid) {
              errorMassage('Email is not valid. Enter a valid email')
          }
      }
      if(e.target.value === 'password'){
          const passwordValid = e.target.value.length > 4;
          const passwordNumber = /\d{1}/.test(e.target.value)
          fieldValid = passwordValid && passwordNumber;
          if(!fieldValid) {
              errorMassage('password is not valid. Password must be 4 latter or 1 number')
          }
      }
      if(e.target.value === 'confirmPassword'){
          const passwordValid = e.target.value.length > 4;
          const passwordNumber = /\d{1}/.test(e.target.value)
          fieldValid = passwordValid && passwordNumber;
          if(!fieldValid) {
              errorMassage('password is not matched. try again')
          }
      }
      if(e.target.value === 'firstName'){
          fieldValid = e.target.value.length > 4;
          if(!fieldValid){
              errorMassage('Name should be at least 4 latter.')
          }
      }
      if(e.target.value === 'lastName'){
          fieldValid = e.target.value.length > 4;
          if(!fieldValid){
              errorMassage('Name should be at least 4 latter.')
          }
      }
      
      if(fieldValid){
          const anewUser = {...newUser};
          newUser[e.target.name] = e.target.value;
          setUser(anewUser)
      }

  }
  //error errorMassage
  const errorMassage = msg => {
      setErrorMessage(msg);
  }


    // onSubmit





    // Sign UP with firebase

    const handleSignUpSubmit = (e) => {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then ( res => {
        const { name, email, password } = res.user;
        const newUserInfo = {
          isSignedIn: true,
          name: name,
          email: email,
          password: password,
        
        };
        newUserInfo.error = '';
        newUserInfo.success = true;
        updateUserName(name);
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);
      })
      
      .catch((error)  => {
        const newUserInfo = {};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        console.log(error)
        return newUserInfo;
        // ...
      });

      e.preventDefault();
    }



// update username 

const updateUserName = name => {
  const user = firebase.auth().currentUser;
  user.updateProfile({
       displayName: name })
      .then(() => {
          console.log('user name update successfully')
      }).catch(error => console.log(error.massage));
}


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



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <div style= {{color: 'red'}}>
  {user.error} 
     </div>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
         {/* error message */}
         <Typography color="error" align="center">
          <br/>
          <div>{errorMessage}</div>
        </Typography>
      
        <form className={classes.form} noValidate onSubmit = {handleSignUpSubmit}>
        
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
              onBlur = {handleBlur}
                autoComplete="firstName"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onBlur = {handleBlur}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onBlur = {handleBlur}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onBlur = {handleBlur}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onBlur = {handleBlur}
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="confirm  Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          
          <div>
          <Button
              type="submit"
              value='submit'
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </div>
          

          <Grid container justify="center">
            <Grid item>
              <Link to='signin'  variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        <Grid container justify="center">
          <Grid item>
            <Box mt={2}>
              <Typography variant="body2">Or</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* extra sign in  buttons  */}
        <Grid container justify="center">
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
              <FacebookIcon></FacebookIcon>
            </Box>
            Continue With Facebook
          </Button>
        </div>

          {/* google button */}

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
              <Mail></Mail>
            </Box>
            Continue With Google
          </Button>
         </div>
        </Grid>
        {/* extra sign ends */}
      </div>
    </Container>
  );
};

export default Signup;
