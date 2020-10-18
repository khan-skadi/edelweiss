import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useToast } from '../../utils/toast/ToastProvider';
import { addImage } from '../../redux/actions/adminActions';
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

const useStyles = makeStyles((theme) =>
  createStyles({
    main: {
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
    formControlImage: {
      margin: theme.spacing(2.5)
    },
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
    preview: {
      position: 'absolute',
      width: '10rem',
      height: '10rem',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      '& > img': {
        width: '100%',
        height: '100%'
      }
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
      bottom: 0
    },
    success: {
      fontWeight: 'bold',
    },
    error: {}
  })
);

const AddImageModal = (props) => {
  const { modalIsOpen, handleModalClose } = props;
  const { addToast } = useToast();
  const classes = useStyles();
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  //eslint-disable-next-line
  const [fileName, setFileName] = useState(null);
  //eslint-disable-next-line
  const [uploadedFile, setUploadedFile] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isError, setIsError] = useState(false)
  const [isSuccess, setisSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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
        console.log(res);

        // Update Database with details
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
          setisSuccess(true);
          setFileName(null);
          setCategory('');
          setDescription('');
          handleModalClose();
        });
      }
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
      setFileName(null);
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
        <DialogContent>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={7}>
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
                <TextField id="name" label="Name" className={classes.textField} />
                <TextField id="description" label="Description" className={classes.textField} />
                <div className={classes.upload}>
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <>
                    {isError || isSuccess ? (
                      <i className={isSuccess ? classes.iconSuccess : classes.iconError} />         
                    ) : (
                      <>
                      {preview ? (
                        <div className={classes.preview} style={{ background: `url(${preview})`, backgroundSize: 'cover', backgroundPosition: 'center center'}} />
                      ) : (
                        <i className={classes.iconUpload} />
                      )}
                      <FormControl className={classes.formControlImage}>
                        <input
                          accept="image/*"
                          style={{ display: 'none' }}
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
                      </>
                    )}
                    </>
                  )}
                </div>
                {isError || isSuccess ? (
                  <p className={isSuccess ? classes.success : classes.error}>
                    {isSuccess ? 'Upload successful!' : 'Something went wrong..'}
                  </p>
                ) : (
                  <p className={classes.filename}>
                    {fileName ? fileName : 'No file selected yet'}
                  </p>
                )}
          </Grid>
          <Grid item xs={5}>
            <p>VMRO NARODNA</p>
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
