import { Route, Switch } from "react-router-dom";

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
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div
        style={{
          backgroundImage:"linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(44, 62, 80, 0.73)), url('https://images.unsplash.com/photo-1484804959297-65e7c19d7c9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80')", 
          backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundRepeat: "no-repeat",  height: "auto"
          
            
        }}
      >
        {/* header */}
        <Header />

        {/* header ends */}

        <Container>
          <h3>{loggedInUser.email}</h3>

          <Switch>
            <PrivateRoute path="/places">
              <Places></Places>
            </PrivateRoute>
            <Route path="/booking">
              <Booking />
            </Route>

            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </div>
    </UserContext.Provider>
  );
}

export default App;
