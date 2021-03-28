import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import label from '../../config/messages';

export default function FormDialog(props) {
  const {
    open, data, handleClose,
  } = props;

  const { errorModal } = label;
  return (
    <div>
      <Dialog open={open || false} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{errorModal.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {
              data ? data.message : errorModal.undefinedError
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            {errorModal.okButton}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
