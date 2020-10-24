import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useToast } from '../../utils/toast/ToastProvider';
import { addImage } from '../../redux/actions/galleryActions';
import axios from 'axios';

import Spinner from '../../utils/spinner/Spinner';

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
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
      width: '100%'
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    formControlUpload: {
      margin: theme.spacing(2.5),
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& > label > span': {
        minWidth: '256px',
        backgroundColor: theme.palette.secondary.main,
        fontSize: '16px',
        fontFamily: '"Lato", sans-serif',
        fontWeight: 500
      },
      '& > input': {
        display: 'none'
      }
    },
    uploadButton: {},
    textField: {
      margin: theme.spacing(1),
      width: '100%'
    },
    upload: {
      padding: '5rem',
      paddingBottom: '3rem',
      width: '100%',
      height: '10vh',
      position: 'relative',
      '& > i': {
        color: '#797f8c',
        fontSize: '4rem',
        transition: 'color 0.3s ease'
      }
    },
    previewContainer: {
      width: '100%',
      height: '10vh',
      marginBottom: theme.spacing(2),
      padding: 0,
      position: 'relative'
    },
    preview: {
      position: 'absolute',
      width: '200px',
      height: '200px',
      transform: 'translate(-50%, -50%)',
      top: 0,
      left: '50%',
      '& > img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: '50% 50%'
      }
    },
    previewText: {
      marginBottom: theme.spacing(4.5)
    },
    iconSuccess: {
      fontFamily: 'Icons',
      speak: 'none',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
      lineHeight: 1,
      webkitFontSmooting: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      color: 'green',
      '& before': {
        content: 'e900'
      }
    },
    iconError: {
      fontFamily: 'Icons',
      speak: 'none',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
      lineHeight: 1,
      webkitFontSmooting: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      color: 'red',
      '& before': {
        content: 'e901'
      }
    },
    iconUpload: {
      fontFamily: 'Icons',
      speak: 'none',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
      lineHeight: 1,
      webkitFontSmooting: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      '& before': {
        content: 'e901'
      }
    },
    filename: {
      position: 'absolute',
      top: '90%'
    },
    success: {
      fontWeight: 'bold'
    },
    error: {}
  })
);

const AddImageModal = (props) => {
  const { addImage, modalIsOpen, handleModalClose } = props;
  const { addToast } = useToast();
  const classes = useStyles();

  const [imageName, setImageName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [fileName, setFileName] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile);
    }
  }, [selectedFile]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleImageName = (e) => {
    setImageName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSelectedFile = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
      setIsDisabled(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsDisabled(true);

    try {
      // Upload to firebase storage
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
        setIsLoading(false);
        setisSuccess(true);

        // Update Database with details
        const imageDetails = {
          name: imageName ? imageName : fileName,
          description,
          category,
          path: fileLocation,
          createdAt: Date.now()
        };

        addImage(imageDetails);
      }

      setTimeout(() => {
        setSelectedFile(null);
        setPreview(null);
        setisSuccess(false);
        setFileName(null);
        setImageName('');
        setCategory('');
        setDescription('');
        handleModalClose();
      }, 3000);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
      setFileName(null);
      setImageName('');
      setCategory('');
      setDescription('');

      setTimeout(() => {
        setIsError(false);
      }, 3000);
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
        <DialogContent style={{ overflowY: 'hidden' }}>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={7}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select
                    labelId="category-label"
                    id="category"
                    value={category}
                    onChange={handleCategoryChange}
                  >
                    <MenuItem value="Kitchen Benchtops">
                      Kitchen Benchtops
                    </MenuItem>
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
                  className={classes.textField}
                  id="name"
                  label="Name (Optional)"
                  value={imageName}
                  onChange={handleImageName}
                />
                <TextField
                  className={classes.textField}
                  id="description"
                  label="Description"
                  value={description}
                  onChange={handleDescriptionChange}
                />
                <FormControl className={classes.formControlUpload}>
                  <input
                    accept="image/*"
                    id="upload-file-button"
                    multiple
                    type="file"
                    onChange={handleSelectedFile}
                  />
                  <label htmlFor="upload-file-button">
                    <Button variant="contained" component="span">
                      Upload
                    </Button>
                  </label>
                </FormControl>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  className={classes.previewText}
                  variant="h5"
                  align="center"
                >
                  Preview
                </Typography>
                <div className={classes.upload}>
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <>
                      {isError || isSuccess ? (
                        <i
                          className={
                            isSuccess ? classes.iconSuccess : classes.iconError
                          }
                        />
                      ) : (
                        <div className={classes.previewContainer}>
                          {preview ? (
                            <>
                              <div className={classes.preview}>
                                <img
                                  src={preview}
                                  alt="Preview of the file to be uploaded"
                                />
                              </div>
                            </>
                          ) : (
                            <i className={classes.iconUpload} />
                          )}
                          {isError || isSuccess ? (
                            <p
                              className={
                                isSuccess ? classes.success : classes.error
                              }
                            >
                              {isSuccess
                                ? 'Upload successful!'
                                : 'Something went wrong..'}
                            </p>
                          ) : (
                            <p className={classes.filename}>
                              {fileName ? fileName : 'No file selected yet'}
                            </p>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </Grid>
            </Grid>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary" disabled={isDisabled}>
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
