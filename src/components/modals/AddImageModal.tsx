import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';

// Mui
import Button from '@material-ui/core/Button';
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
      minWidth: 300
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    formControlImage: {
      margin: theme.spacing(2.5)
    }
  })
);

interface ModalProps {
  modalIsOpen: boolean;
  handleModalClose: () => void;
}

const AddImageModal = (props: ModalProps) => {
  const { modalIsOpen, handleModalClose } = props;
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  useEffect(() => {
    axios
      .get('/api/v1/gallery', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
      })
      .then((res) => console.log(res));
  }, []);

  // @desc    Get all gallery images
  // @route   GET /api/v1/gallery
  // @access  Public

  // @desc    Add new image
  // @route   POST /api/v1/gallery
  // @access  Private

  const handleImageUpload = () => {
    console.log('handleImageUpload');
  };

  const handleSubmit = () => {
    console.log('handleSubmit');
    const image = {
      name: 'image',
      description: 'cool image',
      image: 'testimage.jpg'
    };
    axios.post('/api/v1/gallery', image);
  };

  return (
    <Dialog
      open={modalIsOpen}
      onClose={handleModalClose}
      aria-labelledby="add-image-dialog"
      maxWidth="md"
      fullWidth={true}
    >
      <DialogTitle id="add-image-dialog">Add Images</DialogTitle>

      <DialogContent>
        <FormControl className={classes.formControl}>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
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
        <FormControl className={classes.formControlImage}>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="upload-file-button"
            multiple
            type="file"
          />
          {/* The file will be on target.files */}
          <label htmlFor="upload-file-button">
            <Button
              onClick={handleImageUpload}
              variant="contained"
              component="span"
            >
              Upload
            </Button>
          </label>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleModalClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Add Image
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddImageModal;
