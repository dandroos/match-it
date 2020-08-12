// Hero.js
import React from "react";
import { Box, Typography, Button, Container, Grid } from "@material-ui/core";

const Hero = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      position="relative"
      bgcolor="primary.dark"
    >
      <Container>
        <Box align="center" position="relative" borderRadius="borderRadius">
          <Typography variant="h2">Make Memorizing Fun!</Typography>
          <Typography variant="subtitle1" paragraph>
            Dolor esse ipsum officiis est laudantium Tempore autem et vitae
            ratione tempore! Libero vitae inventore dolor fugiat laboriosam.
            Laudantium nam explicabo sapiente?
          </Typography>
          <Box mt={2} align="inherit">
            <Grid container spacing={1} justify="center">
              <Grid item>
                <Button variant="contained" color="primary" size="large">
                  Primary action
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary" size="large">
                  Secondary action
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
