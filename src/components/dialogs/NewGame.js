import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Select,
} from "@material-ui/core";

const NewGame = ({ dispatch, isOpen }) => {
  const [collections, setCollections] = useState();

  useEffect(() => {
    const saved = localStorage.getItem("collections");
    //   return saved ? set collections : []
  }, [isOpen]);

  return (
    <Dialog open={true}>
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

const mapStateToProps = (state) => ({
  isOpen: state.dialogs.newGame.isOpen,
});

export default connect(mapStateToProps)(NewGame);
