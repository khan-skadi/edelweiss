import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useToast } from '../../utils/toast/ToastProvider';
import { addImage } from '../../redux/actions/adminActions';
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
  const { modalIsOpen, handleModalClose, addImage } = props;
  const { addToast } = useToast();
  const classes = useStyles();
  const [category, setCategory] = useState('');
  const [file, setFile] = useState('');
  //eslint-disable-next-line
  const [fileName, setFileName] = useState(null);
  //eslint-disable-next-line
  const [uploadedFile, setUploadedFile] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile);
    }
  }, [selectedFile]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const onFileSelected = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedFile !== '') {
        let fileData = new FormData();

        fileData.set(
          'image',
          selectedFile,
          `${Date.now()}-${selectedFile.name}`
        );

        const res = await axios.post('/api/v1/upload', fileData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        const { fileName, fileLocation } = res.data;
        console.log(res);

        const imageDetails = {
          name: fileName,
          description: category,
          path: fileLocation,
          createdAt: Date.now()
        };

        const updateDb = await axios.post('/api/v1/gallery', imageDetails);
        console.log(updateDb);

        addToast('Success');

        setTimeout(() => {
          setSelectedFile(null);
          setPreview(null);
          setFileName(null);
          setCategory('');
          handleModalClose();
        });
      }
    } catch (err) {
      setFileName(null);
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
      <form onSubmit={(e) => handleSubmit(e)}>
        <DialogTitle id="add-image-dialog">Add Images</DialogTitle>
        <DialogContent>
          <FormControl className={classes.formControl}>
            <InputLabel id="category-select-label">Category</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={category}
              onChange={handleCategoryChange}
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
              onChange={onFileSelected}
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
          <Button type="submit" color="primary">
            Add Image
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

const mapActionsToProps = {
  addImage
};

export default connect(null, mapActionsToProps)(AddImageModal);
