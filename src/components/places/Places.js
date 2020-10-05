import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  makeStyles,
} from "@material-ui/core";

import React from "react";
import ReusableCard from "../reusableCard/ReusableCard";

const useStyles = makeStyles({
  contentMargin: {
    marginTop: "2em",
  },
});
const Places = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid container className={classes.contentMargin}>
          <Grid item sm={12} md={6}>
            <ReusableCard></ReusableCard>
            <ReusableCard></ReusableCard>
          </Grid>
          <Grid item sm={12} md={6}>
            <Card>
              
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.24477493553!2d91.9328608802074!3d21.451043356313644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc8635fc8795d%3A0xe9ecbaa1945340c3!2sSea%20Inn%20Beach%20Point!5e0!3m2!1sen!2sbd!4v1601881018764!5m2!1sen!2sbd"
                    width="600"
                    height="450"
                    frameBorder="0"
                    
                    
                    
                    tabIndex="0"
                  ></iframe>
             
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Places;
