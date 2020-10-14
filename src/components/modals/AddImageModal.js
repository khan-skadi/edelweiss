import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useToast } from '../../utils/toast/ToastProvider';
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

const useStyles = makeStyles((theme) =>
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

const AddImageModal = (props) => {
  const { modalIsOpen, handleModalClose } = props;
  const { addToast } = useToast();
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append('file', file);

    try {
      const res = await axios.post('/api/v1/gallery', fd, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });
      addToast('vmro narodna');
      handleModalClose();
    } catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      }
      console.log(err.response.data.msg);
    }
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
            onChange={handleFileChange}
          />
          {/* The file will be on target.files */}
          <label htmlFor="upload-file-button">
            <Button variant="contained" component="span">
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
