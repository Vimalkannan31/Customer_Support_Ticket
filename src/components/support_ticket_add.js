import React, { useState } from 'react';
//import Button from '@mui/material/Button';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@mui/material';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
//import { CheckFVstatus } from '../service/teams.service';
import './support.css';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Snackbar } from '@mui/material';

//import Autocomplete from '@material-ui/lab/Autocomplete';
import { addSupport } from '../service/support.service';
import { Autocomplete} from '@mui/material';
//s3 upload
export const defaultS3Data = {
    media_id: "",
    media_key: "",
  }

export default function Popup({ open, handleClose }) {
    const [attachment, setAttachment] = useState(defaultS3Data);
    const [attachment_error, setAttachmentError] = useState(false);


    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [department_name, setDepartment] = useState("");
    const [year_of_joining, setYear] = useState("");
    const [email_error, setEmailError] = useState(false);
    const [name_error, setNameError] = useState(false);
    const [phone_error, setPhoneError] = useState(false);
    const [department_error, setDepartmentError] = useState(false);
    const [year_error, setYearError] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [teamsize, setTeamSize] = useState("");
    const [teamsize_error, setTeamSizeError] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [error_msg, setErrormsg] = useState('');
    const [emailvaidate, setEmailCheck] = useState(false);
    const [e_error, setEmailExistError] = useState(false);
    const [e_errormsg, setEmailExistErrormsg] = useState('');
    const [description, setdescription] = useState('');
    const [description_err, setdescription_err] = useState(false);
    const [issue, setissue] = useState('');
    const [issue_err, setissueerr] = useState(false);
    const [category, setcategory] = useState('');
    const [category_err, setcategoryerr] = useState(false);
    const [stakeholder, setstakeholder] = useState('');
    const [stakeholder_err, setstakeholderyerr] = useState(false);
    const handleClose1 = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen1(false);
        handleClose();
    };

    // const email_list = [
    //     {
    //         name: 'milky25687@gmail.com', id: '1'
    //     },
    //     {
    //         name: 'milky25687@gmail.com', id: '2'
    //     },
    //     {
    //         name: 'milky26587@gmail.com', id: '3'
    //     },
    //     {
    //         name: 'milky26857@gmail.com', id: '4'
    //     }
    // ]
    // const stakeholder_list = [
    //     {
    //         name: 'Employer', id: '1'
    //     },
    //     {
    //         name: 'Jobseeker', id: '2'
    //     },
    //     {
    //         name: 'Institute', id: '3'
    //     },
    //     {
    //         name: 'Trainer', id: '4'
    //     }
    // ]
    const category_list = [
        {
            name: 'General Enquiry', id: '1'
        },
        {
            name: 'Problem', id: '2'
        },
        {
            name: 'Others', id: '3'
        }    
    ]
    const [phone_validate_error, setPhoneValidateerror] = useState(false)

    const reset = () => {
        setEmailCheck(false);
        setEmailExistError(false);
        setEmailExistErrormsg('');
        setdescription('');
        setdescription_err(false);
        setissue('');
        setissueerr(false);
        setcategory('');
        setcategoryerr(false);
        setstakeholder('');
        setstakeholderyerr(false);
        setEmail("");
        setPhoneNumber("");
        setEmailError(false);
        setNameError(false);
        setPhoneError(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitting(true)
        // if (stakeholder.trim() === '') {
        //     setstakeholderyerr("Required input field.")
        // }
        // if (email.trim() === '') {
        //     setEmailError("Required input field.")
        // }
        // if (emailvaidate) {
        //     //  alert("Email Address Not Valid")
        //     setEmailCheck(true)

        // }
        // if (phone_number.trim() === '') {
        //     setPhoneError("Required input field.")
        // }

        if (issue.trim() === '') {
            setissueerr("Required input field.")
        }

        if (category.trim() === '') {
            setcategoryerr("Required input field.")
        }
        if (description.trim() === '') {
            setdescription_err("Required input field.")
        }

        if (
            // emailvaidate ||
            issue.trim() === '' ||
            // email.trim() === '' ||
            // phone_number.trim() === '' ||
            category.trim() === '' ||
            description.trim() === '' 
            // stakeholder.trim() === ''
        ) {
            // setSubmitting(false)
            return
        }

        const ticket = {
            'issue': issue,
            'catagory': category,
            'description': description,

        }

        // const support_access_token = localStorage.getItem("ipss_access_token");
        //console.log(team)
        console.log(ticket)
        try {
            const support_access_token = localStorage.getItem("ipss_access_token");
            addSupport(support_access_token, ticket)
                .then(res => {
                    console.log("Im from popup")
                    console.log(res);
                    setissue("");
                    setcategory("");
                    setdescription("");
                    handleClose(res.data.inserted_id);
                    setSubmitting(false)
                    if (res.data.success === true){
                        setOpen1(true);
                        setTimeout(() => {
                          setOpen1(false);
                          handleClose(res.data.inserted_id);
                
                        }, 1000);
                       }
                    onsole.log('approach response')
                    console.log(res)
                    if (res.data.success) {
                        setSuccess(true)
                    }
                    else {
                        console.log('add team1 error')
                        console.log(res.data)
                       
                    }
                    setTimeout(() => {
                        setSuccess(false)
                        setOpen1(false)
                    }, 3000);
                }).catch((error) => {
                    console.log('error')
                    console.log(error)
                    console.log(error.response.data.message)
                    setEmailExistError(true)
                    setEmailExistErrormsg(error.response.data.message)
                    setTimeout(() => {
                        setEmailExistError(false)
                        setEmailExistErrormsg('')
                        //setOpen1(true)
                    }, 4000);
                    console.log(error.message);
                });
        } catch (error) {
            console.log('error in team')
            console.log(error)
            console.log(error.message);
        }
    }





    /*return function start*/
    return (
        <div>

            <Dialog
                open={open}
                // onClose={() => {
                //     handleClose();
                //     reset();
                // }
                // }
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <form onSubmit={handleSubmit}>
                    <DialogTitle id="alert-dialog-title" >Raise a Ticket</DialogTitle>
                    <DialogContent>
                        {e_error &&
                            <Alert style={{ marginBottom: 15 }} severity="error" variant="filled"> {e_errormsg} </Alert>
                        }

<br />
                        <DialogContentText id="alert-dialog-description">


                            <TextField
                                inputProps={{
                                    maxlength: 140,
                                    
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                required
                                error={issue_err}
                                label="Title"
                                //placeholder='Title'
                                value={issue}
                                variant="outlined"
                                style={{ width: "450px" }}
                                fullWidth
                                onChange={(event) => { setissue(event.target.value); setissueerr(false) }}
                                helperText={issue_err && 'Required Input Field'}
                            />

<br/><br/>


                            <Autocomplete
                             InputLabelProps={{
                                shrink: true,
                            }}
                               
                                disableClearable
                                id="combo-box-demo"
                                options={category_list}
                                getOptionLabel={(option) => option.name}
                                fullWidth
                                onChange={(event, newValue) => {
                                    setcategory(newValue.name);
                                    setcategoryerr(false); }}
                                renderInput={(params ) =>
                                    <TextField
                                    InputLabelProps={{
                                        shrink: true,
                                        //...InputLabelProps,
                                       }}
                                        id="Category"
                                        label="Category"
                                        name="Category"
                                        {...params}
                                        required
                                        variant="outlined"
                                        error={category_err}
                                        helperText={category_err ? 'Required Input Field' : ''}
                                    />}
                            />

                      
                            &nbsp;


{/* 
                            <Row>


                      <Col lg={6}>
                        <Row>

                          <Col>
                            <table>
                              <tr>

                                <td>

                                  <FileUploader
                                    onVideoUploaded={setAttachment}
                                    title="Product Picture" />

                                </td>
                                <td>



                                  {attachment && attachment.media_key &&
                                    <div style={{ paddingLeft: 20 }}>
                                      <table>
                                        <tr>
                                             <td>
                                            <a href={S3_URL + attachment.media_key} target='_blank'> <DescriptionIcon style={{ fontSize: 38, color: '#a4a4a4' }} /></a>
                                          </td>
                                         <td>
                                            <Tooltip title="Delete">
                                              <IconButton onClick={DeleteAbstract} aria-label="delete" >
                                                <DeleteIcon fontSize="small" className='red_color' />
                                              </IconButton>
                                            </Tooltip>
                                          </td> 
                                        
                                        </tr>
                                      </table>
                                    </div>
                                  }
                                </td>
                              </tr>
                            </table>

                            <br />
                          </Col>
                    </Row>
                    </Col>
                    </Row> */}

                            <TextareaAutosize
                                style={{
                                    width: '100%',
                                    height:180,
                                    padding:10,
                                    fontSize:16
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                className={description_err ? "fvdetaileddescription" + description_err : "fvdetaileddescription"}
                                error={description_err}
                                value={description}
                                placeholder='Detailed Description *'
                                onChange={(event) => { setdescription(event.target.value); setdescription_err(false) }}
                                label="Detailed Description *"
                                variant="outlined"
                                fullWidth
                                minRows={6}
                                helperText={description_err && 'Required Input Field'}
                                required
                                maxLength={500}
                            
                            />
                            <p className='MuiFormHelperText-root Mui-error' style={{color: 'red'}}>{description_err && 'Required Input Field'}</p>
                        </DialogContentText>
                    </DialogContent>
                    {error &&
                        <Alert severity="error">Somthing went wrong try again</Alert>
                    }
                    {success &&
                        <Alert severity="success">Form successfully submitted!</Alert>
                    }
                </form>
                <DialogActions>

                    <Button id='teamadd_cancel' variant='outlined' color='primary' onClick={() => {
                        handleClose();
                        reset();
                    }} >
                        Cancel
                    </Button>

                    <Button id='teamadd_submit' variant='contained' onClick={handleSubmit}  style={{ backgroundColor: '#00308F',color: "#fff"}} >
                    {submitting}
                        Submit
                        {/* {submitting ? <CircularProgress style={{ backgroundColor: '#00308F',color: "#fff", textTransform: "capitalize" }} size={20}  /> : 'Submit'} */}

                    </Button>

                    {/*<Snackbar open={open1} autoHideDuration={6000} onClose={handleClose1}>
                        <Alert onClose={handleClose1} severity="error">
                            {error_msg}
                                </Alert>
                                </Snackbar>*/}
                </DialogActions>
            </Dialog>
            <Snackbar open={open1} autoHideDuration={5000} onClose={handleClose1}>
                <Alert onClose={handleClose1} severity="success">
                    <strong> Status updated successfully! </strong>
                </Alert>
            </Snackbar>
        </div>
    );
    /*return function end*/
}