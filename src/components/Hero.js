// Hero.js
import React from "react";
import { Box, Typography, Button, Container, Grid } from "@material-ui/core";
import illustration from "../study.svg";

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
      <Box
        display="flex"
        top={0}
        right={0}
        bottom={0}
        left={0}
        justifyContent="flex-end"
        alignItems="flex-end"
        position="absolute"
      >
        <img
          src={illustration}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </Box>
      <Container>
        <Box align="left" position="relative" borderRadius="borderRadius">
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
