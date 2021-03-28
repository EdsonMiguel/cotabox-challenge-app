import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import label from '../../config/messages';

export default function FormDialog(props) {
  const {
    open, data, handleClose, handleUpdateUSer,
  } = props;

  const [updatedUser, setUpdatedUser] = useState({
    firstName: data ? data.firstName : '',
    lastName: data ? data.lastName : '',
    participation: data ? data.participation : '',
  });
  const handlePerform = () => {
    if (updatedUser.firstName && updatedUser.lastName && updatedUser.participation <= 100) {
      handleUpdateUSer(data._id, updatedUser);
    }
  };

  useEffect(() => {
    setUpdatedUser({
      firstName: data ? data.firstName : '',
      lastName: data ? data.lastName : '',
      participation: data ? data.participation : '',
    });
  }, [data]);

  const { updateModal } = label;
  return (
    <div>
      <Dialog open={open || false} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{updateModal.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {updateModal.description}
          </DialogContentText>
          <TextField
            margin="dense"
            label={updateModal.firstName}
            fullWidth
            value={updatedUser.firstName}
            onChange={(e) => setUpdatedUser({ ...updatedUser, firstName: e.target.value })}
          />
          <TextField
            margin="dense"
            label={updateModal.lastName}
            fullWidth
            value={updatedUser.lastName}
            onChange={(e) => setUpdatedUser({ ...updatedUser, lastName: e.target.value })}
          />
          <TextField
            margin="dense"
            label={updateModal.participation}
            fullWidth
            value={updatedUser.participation}
            onChange={(e) => setUpdatedUser({ ...updatedUser, participation: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {updateModal.cancellButton}
          </Button>
          <Button onClick={handlePerform} color="primary" variant="contained">
            {updateModal.updateButton}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
