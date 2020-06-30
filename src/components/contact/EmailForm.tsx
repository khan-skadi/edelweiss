import React, {
  Component,
  ChangeEvent,
  FormEvent,
  SyntheticEvent,
  MouseEvent
} from 'react';
import emailjs from 'emailjs-com';

import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  Input,
  TextField,
  // InputAdornment,
  // IconButton,
  Button,
  Snackbar
} from '@material-ui/core';

// import AttachFileIcon from '@material-ui/icons/AttachFile';

import { ObjectLiteral, TemplateVars } from '../../utils/interface/interface';

const styles = (theme: ObjectLiteral) => ({
  ...theme.spreadThis,
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
    WebkitTransition: 'all .5s ease-in-out',
    '& textarea': {
      color: '#fff !important'
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
  inputLabel: {
    paddingLeft: '18px',
    paddingRight: '18px'
  },
  labelColor: {
    margin: '-13px 0',
    padding: 0,
    '& > label': {} // save for reference
  },
  buttonContainer: {
    textAlign: 'right',
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: 'baseline',
    boxSizing: 'border-box',
    display: 'block',
    marginTop: '40px'
  },
  submitButton: {
    fontSize: '21px',
    lineHeight: '100%',
    textTransform: 'uppercase',
    color: '#fff',
    padding: '15px 42px',
    borderRadius: 0,
    fontFamily: "'Lato', sans-serif",
    fontWeight: 600,
    background: '#333',
    border: 0,
    cursor: 'pointer',
    boxSizing: 'border-box',
    '&:hover': {
      backgroundColor: '#fff',
      color: theme.palette.primary.main
    }
  }
});

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface EmailProps {
  classes: ObjectLiteral;
}

interface EmailState {
  feedback: string;
  name: string;
  senderEmail: string;
  email: string;
  phone: string;
  suburb: string;
  open: boolean;
}

class EmailForm extends Component<EmailProps, EmailState> {
  constructor(props: EmailProps) {
    super(props);
    this.state = {
      feedback: '',
      name: '',
      senderEmail: '',
      email: 'kartalov.pt@gmail.com',
      phone: '',
      suburb: '',
      open: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSenderEmail = this.handleSenderEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleSuburb = this.handleSuburb.bind(this);
  }

  componentDidMount() {
    (function () {
      emailjs.init('user_RCiWbj4x7sqFEtczHrrhW');
    })();
  }

  render() {
    const { classes } = this.props;

    return (
      <>
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
                  value={this.state.name}
                  onChange={this.handleName}
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
                    value={this.state.senderEmail}
                    onChange={this.handleSenderEmail}
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
                    value={this.state.phone}
                    onChange={this.handlePhone}
                    color="secondary"
                  />
                </span>
              </FormControl>
            </div>

            {/* Suburb Input */}
            <FormControl className={classes.formGroup}>
              <InputLabel htmlFor="contact-suburb" color="secondary">
                Suburb
              </InputLabel>
              <span className={classes.formControlWrap}>
                <Input
                  className={classes.formControl}
                  id="contact-suburb"
                  value={this.state.suburb}
                  onChange={this.handleSuburb}
                  color="secondary"
                />
              </span>
            </FormControl>

            {/* Upload Image */}
            {/* <FormControl className={classes.formGroup}>
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
            </FormControl> */}

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
                  value={this.state.feedback}
                  onChange={this.handleChange}
                />
              </span>
            </FormControl>
            <div className={classes.buttonContainer}>
              <Button
                className={`${classes.submitButton} ${classes.formControl}`}
                type="submit"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
        <Snackbar
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          style={{
            position: 'fixed',
            left: '155px',
            bottom: '10px'
          }}
        >
          <Alert
            onClose={this.handleClose}
            severity="success"
            style={{
              backgroundColor: '#158d43',
              fontFamily: "'Lato', sans-serif",
              fontWeight: 400,
              fontSize: '16px'
            }}
          >
            Message sent successfully!
          </Alert>
        </Snackbar>
      </>
    );
  }

  handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ feedback: e.target.value });
  }

  handleName(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ name: e.target.value });
  }

  handleSenderEmail(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ senderEmail: e.target.value });
  }

  handlePhone(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ phone: e.target.value });
  }

  handleSuburb(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ suburb: e.target.value });
  }

  handleSubmit(e: FormEvent<HTMLButtonElement>): void {
    e.preventDefault();
    const templateId = 'template_97b1N8SR';

    this.sendFeedback(templateId, {
      message_html: this.state.feedback,
      from_name: this.state.name,
      reply_to: this.state.senderEmail,
      from_phone: this.state.phone,
      from_suburb: this.state.suburb
    });

    this.setState({
      feedback: '',
      name: '',
      senderEmail: '',
      phone: '',
      suburb: '',
      open: true
    });
  }

  sendFeedback(templateId: string, variables: TemplateVars): void {
    emailjs
      .send('gmail', templateId, variables)
      .then((res: any): any => {
        console.log('Email sent successfully!', res.status, res.text);
      })
      .catch((err: Error) => console.log(err));
  }

  handleClose = (event: SyntheticEvent | MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };
}

export default withStyles(styles)(EmailForm);
