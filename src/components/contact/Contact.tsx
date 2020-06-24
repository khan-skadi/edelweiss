import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import { ObjectLiteral } from '../../utils/interface/interface';
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton
} from '@material-ui/core';

import benchtop from '../../assets/images/original/modified/1wide.jpg';

import Icon from '@material-ui/core/Icon';
import AddressIcon from '@material-ui/icons/Room';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import FaxIcon from '@material-ui/icons/Print';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const useStyles = makeStyles((theme) => ({
  sectionContact: {
    padding: '70px 0',
    position: 'relative',
    display: 'block',
    '&:before': {
      position: 'absolute',
      content: "''",
      top: 0,
      borderLeft: '1px solid #ebebeb',
      height: '100%',
      left: '41px',
      boxSizing: 'border-box'
    }
  },
  container: {
    height: '100%',
    maxWidth: '1650px',
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    position: 'relative',
    '&:before': {
      display: 'table',
      content: "''"
    },
    '&:after': {
      clear: 'both',
      display: 'table',
      content: "''"
    }
  },
  titleBorder: {
    borderTop: '1px solid #ebebeb',
    borderBottom: '1px solid #ebebeb'
  },
  contactBorderTitle: {
    lineHeight: '43px',
    textTransform: 'capitalize',
    fontFamily: "'Lato', sans-serif",
    fontWeight: 700,
    fontSize: '60px',
    '&:-webkit-any h1': {
      marginBlockStart: '0.83em',
      marginBlockEnd: '0.83em'
    },
    display: 'block',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    '& > span': {
      fontWeight: 100
    }
  },
  contactMain: {
    display: 'inline-block',
    width: '100%'
  },
  contactLeft: {
    width: '51%',
    float: 'left',
    display: 'block',
    paddingRight: '60px',
    boxSizing: 'border-box',
    '@media (max-width:1400px)': {
      paddingRight: '30px'
    }
  },
  contactInfo: {
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '50px',
    listStyle: 'none',
    letterSpacing: 'normal',
    '& > li': {
      width: '50%',
      float: 'left',
      marginBottom: '50px',
      display: 'list-item'
    }
  },
  contactListInfo: {
    overflow: 'hidden',
    display: 'block'
  },
  infoIcon: {
    background: '#333',
    height: '42px',
    width: '42px',
    position: 'relative',
    overflow: 'hidden',
    float: 'left',
    color: '#fff',
    fontSize: '20px',
    lineHeight: '40px',
    textAlign: 'center',
    display: 'block'
  },
  icon: {
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: '#fff',
    '&:before': {
      content: '\f041',
      boxSizing: 'border-box'
    }
  },
  infoText: {
    float: 'left',
    width: 'calc(100% - 42px)',
    paddingLeft: '18px',
    display: 'block',
    '@media (max-width:1850px)': {
      paddingRight: '10px'
    },
    '& > p': {
      padding: 0,
      margin: 0,
      textTransform: 'capitalize',
      fontSize: '18px',
      lineHeight: '14px',
      fontFamily: "'Lato', sans-serif",
      fontWeight: 600,
      marginBottom: '8px'
    },
    '& > a': {
      display: 'inline-block',
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 400,
      textDecoration: 'none',
      color: 'inherit',
      WebkitTransition: 'all .5s ease-in-out',
      cursor: 'pointer'
    },
    '& > span': {
      display: 'inline-block',
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 400
    }
  },
  contactBox: {
    width: '49%',
    float: 'right',
    overflow: 'hidden',
    marginTop: '-45px',
    background: theme.palette.primary.main,
    padding: '50px 65px 40px',
    position: 'relative',
    zIndex: 1,
    display: 'block',
    boxSizing: 'border-box',
    '@media (max-width:1400px)': {
      padding: '50px 40px 40px'
    },
    '&:after': {
      clear: 'both',
      display: 'table',
      content: "''",
      boxSizing: 'border-box'
    }
  },
  contactBoxTitle: {
    color: '#fff',
    fontFamily: "'Lato', sans-serif",
    fontWeight: 600,
    textTransform: 'capitalize',
    fontSize: '36px',
    lineHeight: '100%',
    marginBottom: '15px'
  },
  form: {
    display: 'block',
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: 'baseline',
    boxSizing: 'border-box'
  },
  formGroup: {
    marginBottom: '20px',
    display: 'block',
    boxSizing: 'border-box'
  },
  row: {
    marginLeft: '-15px',
    marginRight: '-15px',
    display: 'block',
    boxSizing: 'border-box',
    '&:before': {
      display: 'table',
      content: "''",
      boxSizing: 'border-box'
    },
    '&:after': {
      clear: 'both',
      display: 'table',
      content: "''",
      boxSizing: 'border-box'
    }
  },
  width50: {
    width: '50%',
    paddingLeft: '15px',
    paddingRight: '15px',
    position: 'relative',
    float: 'left',
    display: 'block'
  },
  formControlWrap: {
    position: 'relative',
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: 'baseline'
  },
  formControl: {
    width: '100%',
    padding: '13px 0',
    border: '1px solid transparent',
    borderRadius: 0,
    height: '44px',
    backgroundColor: 'transparent',
    fontFamily: "'Lato', sans-serif",
    fontWeight: 400,
    fontSize: '16px',
    color: '#fff',
    WebkitTransition: 'all .5s ease-in-out'
  },
  inputLabel: {
    paddingLeft: '18px',
    paddingRight: '18px'
  },
  labelColor: {
    margin: '-13px 0',
    padding: 0,
    '& > label': {} // save for reference
  },
  contactImage: {
    position: 'relative',
    overflow: 'hidden',
    marginTop: '-90px'
  },
  contactPicture: {
    margin: '0 auto',
    display: 'block',
    maxWidth: '100%',
    verticalAlign: 'bottom'
  },
  mapStyles: {
    width: '100%',
    height: '100%'
  }
}));

const Contact = (props: ObjectLiteral) => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [suburb, setSuburb] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    console.log(phone);
  };

  const handleSuburb = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSuburb(e.target.value);
    console.log(suburb);
  };

  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    console.log(message);
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(image);
  };

  const handleAttachFile = () => {};

  const handleMouseDownFile = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <section className={classes.sectionContact}>
      {/* Title */}
      <div className={classes.titleBorder}>
        <div className={classes.container}>
          <Typography variant="h1" className={classes.contactBorderTitle}>
            Contact <span>Us</span>
          </Typography>
        </div>
      </div>
      {/* Contact Main */}
      <div className={classes.contactMain}>
        <div className={classes.container}>
          <div className={classes.contactLeft}>
            <ul className={classes.contactInfo}>
              <li>
                <div className={classes.contactListInfo}>
                  <div className={classes.infoIcon}>
                    <Icon className={classes.icon} component={AddressIcon} />
                  </div>
                  <div className={classes.infoText}>
                    <p>Address</p>
                    <span>
                      <span>4/3 Dursley Rd, Yennora, NSW 2161</span>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className={classes.contactListInfo}>
                  <div className={classes.infoIcon}>
                    <Icon className={classes.icon} component={MailIcon} />
                  </div>
                  <div className={classes.infoText}>
                    <p>Email</p>
                    <a href="mailto:info@edelweissstone.com.au">
                      info@edelweissstone.com.au
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className={classes.contactListInfo}>
                  <div className={classes.infoIcon}>
                    <Icon className={classes.icon} component={PhoneIcon} />
                  </div>
                  <div className={classes.infoText}>
                    <p>Phone</p>
                    <a href="tel:(02) 0431 703 388">(02) 0431 703 388</a>
                  </div>
                </div>
              </li>
              <li>
                <div className={classes.contactListInfo}>
                  <div className={classes.infoIcon}>
                    <Icon className={classes.icon} component={FaxIcon} />
                  </div>
                  <div className={classes.infoText}>
                    <p>Fax</p>
                    <span>(02) 9826 8008</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* Contact Box */}
          <div className={classes.contactBox}>
            <div className={classes.contactBoxTitle}>Get in touch</div>
            <form className={classes.form} noValidate autoComplete="off">
              {/* Name Input */}
              <FormControl className={classes.formGroup}>
                <InputLabel htmlFor="contact-name" color="secondary">
                  Name
                </InputLabel>
                <span className={classes.formControlWrap}>
                  <Input
                    className={classes.formControl}
                    id="contact-name"
                    value={name}
                    onChange={handleName}
                    color="secondary"
                  />
                </span>
              </FormControl>

              <div className={classes.row}>
                {/* Email Input */}
                <FormControl
                  className={`${classes.formGroup} ${classes.width50}`}
                >
                  <InputLabel
                    className={classes.inputLabel}
                    htmlFor="contact-email"
                    color="secondary"
                  >
                    Email
                  </InputLabel>
                  <span className={classes.formControlWrap}>
                    <Input
                      className={classes.formControl}
                      id="contact-email"
                      value={email}
                      onChange={handleEmail}
                      color="secondary"
                    />
                  </span>
                </FormControl>

                {/* Phone Input */}
                <FormControl
                  className={`${classes.formGroup} ${classes.width50}`}
                >
                  <InputLabel
                    className={classes.inputLabel}
                    htmlFor="contact-phone"
                    color="secondary"
                  >
                    Phone
                  </InputLabel>
                  <span className={classes.formControlWrap}>
                    <Input
                      className={classes.formControl}
                      id="contact-phone"
                      value={phone}
                      onChange={handlePhone}
                      color="secondary"
                    />
                  </span>
                </FormControl>
              </div>

              {/* Suburb Input */}
              <FormControl className={classes.formGroup}>
                <InputLabel htmlFor="contact-suburb" color="secondary">
                  Name
                </InputLabel>
                <span className={classes.formControlWrap}>
                  <Input
                    className={classes.formControl}
                    id="contact-suburb"
                    value={suburb}
                    onChange={handleSuburb}
                    color="secondary"
                  />
                </span>
              </FormControl>

              {/* Upload Image */}
              <FormControl className={classes.formGroup}>
                <InputLabel htmlFor="contact-image" color="secondary">
                  Upload Image
                </InputLabel>
                <span className={classes.formControlWrap}>
                  <Input
                    id="contact-image"
                    className={classes.formControl}
                    value={image}
                    onChange={handleImage}
                    color="secondary"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="attach a file"
                          onClick={handleAttachFile}
                          onMouseDown={handleMouseDownFile}
                        >
                          <AttachFileIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </span>
              </FormControl>

              {/* Message */}
              <FormControl className={classes.formGroup}>
                <span className={classes.formControlWrap}>
                  <TextField
                    label="Message"
                    className={`${classes.formControl} ${classes.labelColor}`}
                    id="contact-message"
                    multiline
                    color="secondary"
                    rowsMax={4}
                    value={message}
                    onChange={handleMessage}
                  />
                </span>
              </FormControl>
            </form>
          </div>
        </div>
      </div>
      <div className={classes.contactImage}>
        <img
          className={classes.contactPicture}
          alt="kitchen benchtop"
          src={benchtop}
        />
      </div>
      <div>
        <Map
          google={props.google}
          style={{
            width: '100%',
            height: '450px',
            margin: 0,
            padding: 0,
            verticalAlign: 'baseline',
            boxSizing: 'border-box',
            borderBottom: '10px solid #26a69a',
            position: 'relative'
          }}
          initialCenter={{ lat: -33.858258, lng: 150.959442 }}
          zoom={18}
        >
          <Marker
            position={{ lat: -33.858258, lng: 150.959442 }}
            mapCenter={{ lat: -33.858258, lng: 150.959442 }}
            title={'Edelweiss Stone'}
          />
        </Map>
      </div>
    </section>
  );
};

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_MAP_API}`
})(Contact);
