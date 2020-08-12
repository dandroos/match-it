import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@material-ui/core";

const NewGame = () => {
  return (
    <Dialog>
      <DialogTitle>New Game</DialogTitle>
      <DialogContent>
        <TextField />
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewGame;
