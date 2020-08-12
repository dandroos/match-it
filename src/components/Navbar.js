import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AppBar, Toolbar, Typography, Box, Button } from "@material-ui/core";
import { setNewGameOpen } from "../state/dialogs/actions";

const Navbar = ({ dispatch }) => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setAtTop(window.scrollY === 0);
    });
  }, []);

  const handleClick = (e) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "new-game":
        dispatch(setNewGameOpen(true));
        break;
      default:
        break;
    }
  };

  return (
    <AppBar color={atTop ? "transparent" : "primary"}>
      <Toolbar>
        <Typography variant="h5">Match It!</Typography>
        <Box flexGrow={1} />
        <Button
          onClick={handleClick}
          id="new-game"
          style={{ marginRight: 15 }}
          variant="contained"
          color="primary"
        >
          New Game
        </Button>
        <Button variant="contained" color="secondary">
          New Collection
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default connect()(Navbar);
