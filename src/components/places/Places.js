import {
    Card,
    CardActionArea,
    CardMedia,
    Container,
    Grid,
    makeStyles
} from '@material-ui/core';

import React from 'react';
import ReusableCard from '../reusableCard/ReusableCard';

const useStyles = makeStyles({
    contentMargin: {    
      marginTop: '2em',  
    },
  });
const Places = () => {
    const classes = useStyles();
    return (
        <div>
           <Container>
           <Grid container className={classes.contentMargin}>
                <Grid item sm={12} md={6} >
                    <ReusableCard></ReusableCard>
                    <ReusableCard></ReusableCard>
                    
                </Grid>
                <Grid item sm={12} md={6}>
                <Card >
                  <CardActionArea>
                    <CardMedia >
                      <img
                        width="100%"
                        src="https://images.unsplash.com/photo-1600280108805-655e0f010e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80"
                        alt=""
                      ></img>
                    </CardMedia>
                  </CardActionArea>
                </Card>
                </Grid>
            </Grid>
           </Container>
        </div>
    );
};

export default Places;