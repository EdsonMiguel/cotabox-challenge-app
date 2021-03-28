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
    open, data, handleClose, handleDeleteUser,
  } = props;
  const handlePerform = () => {
    // eslint-disable-next-line no-underscore-dangle
    handleDeleteUser(data._id);
  };

  const { deleteModal } = label;
  return (
    <div>
      <Dialog open={open || false} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{deleteModal.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`${deleteModal.description} `}
            <strong>{`${data ? data.firstName : ''}`}</strong>
            ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {deleteModal.cancelButton}
          </Button>
          <Button onClick={handlePerform} color="primary" variant="contained">
            {deleteModal.deleteButton}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
