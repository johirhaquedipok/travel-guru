import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    //   maxWidth: 345,
    marginBottom: "0.5em",
  },
  heightimg: {
    height: "14em",
    width: "14em",
  },
  arrange: {
    display: 'flex',
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item className={classes.root}>
        
        <Card className = {classes.arrange}>
          <CardMedia
            className={classes.heightimg}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://images.unsplash.com/photo-1600280108805-655e0f010e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80"
            title="Contemplative Reptile"
          />
        

          <Grid item>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Cat
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Grid item>
              <Button size="small" color="primary">
                Share
              </Button>
            </Grid>

            <Grid item>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </Grid>
          </CardActions>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
