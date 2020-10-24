import React from 'react';

// Mui
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface DeleteImageModalProps {
  open: boolean;
  handleDeleteModalClose: () => void;
  handleDeleteImage: () => void;
}

const DeleteImageModal = (props: DeleteImageModalProps) => {
  const { open, handleDeleteModalClose, handleDeleteImage } = props;

  return (
    <Dialog
      open={open}
      onClose={handleDeleteModalClose}
      style={{ zIndex: 10000 }}
      aria-labelledby="alert-delete-image"
      aria-describedby="alert-delete-description"
    >
      <DialogTitle id="alert-delete-image">
        Are you sure you want to delete this image ?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-delete-description">
          This will delete the image from the Gallery and the database.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDeleteModalClose} color="primary">
          No
        </Button>
        <Button onClick={handleDeleteImage} color="primary" autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteImageModal;
