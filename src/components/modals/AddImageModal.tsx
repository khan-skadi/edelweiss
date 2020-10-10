import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// Mui
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import InputLabel from '@material-ui/core/InputLabel';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
);

interface ModalProps {
  modalIsOpen: boolean;
  handleModalClose: () => void;
  handleModalOpen: () => void;
}

const AddImageModal = (props: ModalProps) => {
  const { modalIsOpen, handleModalOpen, handleModalClose } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  return (
    <Dialog
      open={modalIsOpen}
      onClose={handleModalClose}
      aria-labelledby="add-image-dialog"
    >
      <DialogTitle id="add-image-dialog">Add Images</DialogTitle>

      <DialogContent>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            onChange={handleChange}
          >
            <MenuItem value="Kitchen Benchtops">Kitchen Benchtops</MenuItem>
            <MenuItem value="Monuments">Monuments</MenuItem>
            <MenuItem value="Staircases">Staircases</MenuItem>
            <MenuItem value="Bathrooms">Bathrooms</MenuItem>
            <MenuItem value="Vanities">Vanities</MenuItem>
            <MenuItem value="Shop Fronts">Shop Fronts</MenuItem>
            <MenuItem value="Walls">Walls</MenuItem>
            <MenuItem value="Fireplaces">Fireplaces</MenuItem>
            <MenuItem value="Floors">Floors</MenuItem>
          </Select>
        </FormControl>
        <TextField
          autoFocus
          margin="dense"
          id="add-image-description"
          label="Description"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleModalClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleModalClose} color="primary">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddImageModal;
