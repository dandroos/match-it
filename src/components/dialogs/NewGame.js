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
  Box,
  Typography,
} from "@material-ui/core";
import { setNewGameOpen } from "../../state/dialogs/actions";

const NewGame = ({ dispatch, isOpen, hasCollections }) => {
  const [collections, setCollections] = useState([]);

  const handleClose = () => {
    return dispatch(setNewGameOpen(false));
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>New Game</DialogTitle>
      <DialogContent>
        {hasCollections ? (
          <Box></Box>
        ) : (
          <Box>
            <Typography>You currently don't have any collections</Typography>
            <Button color="primary" fullWidth>
              Create a collection!
            </Button>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        {hasCollections ? (
          <>
            <Button>Cancel</Button>
            <Button>OK</Button>
          </>
        ) : (
          <Button>Exit</Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.dialogs.newGame.isOpen,
  hasCollections: state.collections.hasCollections,
});

export default connect(mapStateToProps)(NewGame);
