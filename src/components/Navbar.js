import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@material-ui/core";

const Navbar = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setAtTop(window.scrollY === 0);
    });
  }, []);
  return (
    <AppBar color={atTop ? "transparent" : "primary"}>
      <Toolbar>
        <Typography variant="h5">Match It!</Typography>
        <Box flexGrow={1} />
        <Button style={{ marginRight: 15 }} variant="contained" color="primary">
          New Game
        </Button>
        <Button variant="contained" color="secondary">
          New Collection
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
