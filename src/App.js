import { Route, Switch, } from "react-router-dom";

import Booking from "./components/booking/Booking";
import { Container } from "@material-ui/core";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Places from "./components/places/Places";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import React from "react";
import SignIn from "./components/signin/SignIn";
import Signup from "./components/signup/Signup";
import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();
function App  () {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    
    <UserContext.Provider value= {[loggedInUser, setLoggedInUser]}>
    
    {/* header */}
    <Header/>
    
    {/* header ends */}


    
      <Container>
      <h3>{loggedInUser.email}</h3>
     
          <Switch>

            <PrivateRoute path = '/places'>
              <Places></Places>
            </PrivateRoute>
          <Route path="/booking">
              <Booking/>
            </Route>
            
          
            <Route path="/signin">
              <SignIn />
            </Route>
           <Route path = '/signup'>
             <Signup></Signup>
           </Route>
            <Route path = '/home'>
              <Home></Home>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
       
        
      </Container>
      
    
      </UserContext.Provider>
  );
}

export default App;
