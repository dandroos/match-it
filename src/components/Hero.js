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
            From learning a new language to revising for an exam, use{" "}
            <strong>Match It!</strong> to memorize only what you need to!
          </Typography>
          <Box mt={2} align="inherit">
            <Grid container spacing={1} justify="center">
              <Grid item>
                <Button variant="contained" color="primary" size="large">
                  New Game
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary" size="large">
                  New Collection
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
