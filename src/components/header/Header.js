import React, { useContext } from 'react';

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography"
import { UserContext } from "../../App";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: "wrap",
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    links: {
      margin: theme.spacing(1, 1.5),
      textDecoration: "none",
    },
  }));
  
const Header = () => {
    const classes = useStyles();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
                <AppBar
        position="static"
        color="transparent"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Travel Guru
          </Typography>
          <nav>
            <Typography>
              <Link
                to="/home"
                variant="button"
                
                className={classes.links}
              >
                Home
              </Link>

              <Link
                to="/Booking"
                variant="button"
                color="textPrimary"
                
                className={classes.links}
              >
                Booking
              </Link>
           
              <Link to="/signin" className={classes.links}>
                <Button color="secondary" variant="contained">
                  Sign In
                </Button>
              </Link>
              <Link className={classes.links} to="/signup">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.links}
                >
                  Sign Up
                </Button>
              </Link>
              <Button
                  variant="contained"
                  color="primary"
                  className={classes.links}
                  onClick= { () => setLoggedInUser({})}
              >Sign Out</Button>
            </Typography>
          </nav>
        </Toolbar>
      </AppBar>
        </div>
    );
};

export default Header;