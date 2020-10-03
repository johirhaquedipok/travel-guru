import { Button, Container, Typography, makeStyles } from "@material-ui/core";

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import React from "react";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  control: {
    padding: theme.spacing(5),
  },
  paraMargin: {
    marginTop: "1em",
  },
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
const Booking = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Grid></Grid>
      <Container maxWidth="lg">
        <Grid container >
          <Grid item xs={12} md={6} className={classes.control}>
            <Typography variant="h1" align="justify">
              Cox's Bazar
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              className={classes.paraMargin}
            >
              The name Cox's Bazar originated from the name of a British East
              India Company officer, Captain Hiram Cox, who was appointed as the
              Superintendent of Palonki (today's Cox's Bazar) outpost.
            </Typography>
          </Grid>
          {/* Form started */}
          <Grid item xs={12} md={6} className={classes.control}>
           
            <div className={classes.paper}>
             
              <Typography component="h1" variant="h5">
                Book Here
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="text"
                  label="Origin"
                  name="Origin"
                  autoComplete="text"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="text"
                  label="Destination"
                  name="Destination"
                  autoComplete="text"
                  autoFocus
                />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <div>
                      <label >From</label>
                    </div>
                    <div>
                      <TextField type="date" required fullWidth autoFocus />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div>
                      <label >To</label>
                    </div>
                    <div>
                      <TextField type="date" required fullWidth autoFocus />
                    </div>
                  </Grid>
                </Grid>
                <Link to="/signin" className={classes.submit}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Start Booking
                  </Button>
                </Link>
              </form>
            </div>
          </Grid>
          {/* Form ended */}
        </Grid>
      </Container>
    </div>
  );
};

export default Booking;
