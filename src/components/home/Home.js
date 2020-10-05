import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import { NavLink as Link } from "react-router-dom";
import React from "react";

const useStyles = makeStyles((theme) => ({
  control: {
    padding: theme.spacing(3),
  },
  card: {
    maxWidth: 250,
  },
  media: {
    height: 330,
  },
}));


const Home = () => {
  const classes = useStyles();
  
  return (
    <div>
      <Container maxWidth="lg">
        
       
        <Grid container >
          <Grid item xs={12} md={4} className={classes.control}>
            <Typography variant="h3"   style={{ textTransform: "uppercase" }}>
              COX'S BAZAR
            </Typography>

            <Typography
              variant="body1"
              align="justify"
              style={{ marginTop: "1em" }}
            >
              Cox's Bazar (Bengali: কক্সবাজার, pronounced [kɔksbadʒaɾ]) is a
              city, fishing port, tourism centre and district headquarters in
              southeastern Bangladesh. It is famous mostly for its long natural
              sandy beach.
            </Typography>
          <div>
              <Link to="/booking" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: "1em" }}
              >
                Booking
              </Button>
            </Link>
            </div>
          </Grid>
          

          {/* second half of grid started */}
          <Grid item xs={12} md={8} className={classes.control}>
            <Grid container>
              {/* first image */}
              <Grid item xs={12} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <div style={{ position: "relative"}}>
                      <CardMedia className={classes.media}>
                        <Link to="/booking">
                          <img 
                            width="100%"
                            src="https://images.unsplash.com/photo-1567766741121-2b0ffc89c1dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
                            alt=""
                          ></img>
                        </Link>
                      </CardMedia>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        color: "white",
                        bottom: 20,
                        left: "50%",
                        transform: "translateX(-50%)",
                        textTransform:'uppercase',
                        
                      }}
                    >
                      <Typography variant='h4'>
                      Cox's Bazar
                      </Typography>
                    </div>
                  </CardActionArea>
                </Card>
              </Grid>
              {/* secon image */}
              <Grid item xs={12} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                  <div style={{ position: "relative"}}>
                      <CardMedia className={classes.media}>
                        <Link to="/booking">
                          <img 
                            width="100%"
                            src="https://images.unsplash.com/photo-1499363536502-87642509e31b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                            alt=""
                          ></img>
                        </Link>
                      </CardMedia>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        color: "white",
                        bottom: 20,
                        left: "50%",
                        transform: "translateX(-50%)",
                        textTransform:'uppercase',
                        
                      }}
                    >
                      <Typography variant='h4'>
                      Sajek
                      </Typography>
                    </div>
                  </CardActionArea>
                </Card>
              </Grid>
              {/* 3rd image */}
              <Grid item xs={12} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                  <div style={{ position: "relative"}}>
                      <CardMedia className={classes.media}>
                        <Link to="/booking">
                          <img 
                            width="100%"
                            src="https://images.unsplash.com/photo-1534329539061-64caeb388c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80"
                            alt=""
                          ></img>
                        </Link>
                      </CardMedia>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        color: "white",
                        bottom: 20,
                        left: "50%",
                        transform: "translateX(-50%)",
                        textTransform:'uppercase',
                        
                      }}
                    >
                      <Typography variant='h4'>
                      Kuakata
                      </Typography>
                    </div>
                  </CardActionArea>
                </Card>
              </Grid>
              {/* image grid ended */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
