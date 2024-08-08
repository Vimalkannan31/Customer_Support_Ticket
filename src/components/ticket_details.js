/* File: 
    Objective: The objective of this page is fully about user raising  their problems and queries by using this support ticket option. 
            
    
    Description: There are 2 ways to receive admin from our support team, First you can raise your problems by
                 using ticket raising option then you can simply submit a ticket through this page and we will get back to you
                 within 24 hours.

                 After submitting your ticket,you can see a new ticket occured on Manage ticket page.
                 The page will show all ticket information : (i.e) Ticket ID,Subject,Status. and Created Date.
                 

Initiated By: Lavanya Ravi on 28th February...
 Modification History

 -------------------------------------------------------------------------------------------------------------------
DATE     |   AUTHOR   |  ModifiCation Request No.                  |      Remarks / Details of Changes
--------------------------------------------------------------------------------------------------------------------
22-Feb-2022  Lavanya     Lavanya on 22nd February 2022...              Initial creation
6-Mar-2022   Lavanya     Lavanya on 6th March 2022...                 Code updated to  API
6-Mar-2023   Lavanya     Lavanya on 6th March 2023...                   Integrated into IPSS System     .
--------------------------------------------------------------------------------------------------------------------
*/

// Initialization react and react components
import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useHistory }  from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import {getSupport} from '../service/support.service';
// export interfaces
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
// ticket raising
const SupportTicket = () => {
  const history = useHistory();
  const [replyError,setReplyError ] = useState(false);
  const [reply, setReply] = useState("");
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);
  const[supportid, setId] = useState();
  const[issue, setIssue] = useState();
  const[catagory, setCategory] = useState();
  const[description, setDescription] = useState();
  const[status, setStatus] = useState();
  // const { id } = useParams();
  // // eslint-disable-next-line
  // const [pageloading, setPageLoading] = useState(true);
  // const [ticketStatus, setticketStatus] = useState('');
  // //const api = liveApi();
  // const [view_ticket, setViewTicket] = useState();
  // const [t_rply, setTrply] = useState([]);
  // // eslint-disable-next-line
  // // eslint-disable-next-line
  // const [submitting, setSubmitting] = useState(false);
  // const history = useHistory();
  // // eslint-disable-next-line
  // const [show_preview, setPreview] = useState(false);
  // // eslint-disable-next-line
  // const [responses, setResponses] = useState('');
  // // eslint-disable-next-line
  // const [support_id, setSupportid] = useState('');
  // const [reply_msg, setReplyMsg] = useState('');
  // // eslint-disable-next-line
  // const [submit_error, serSubmitError] = useState(false);
  // // eslint-disable-next-line
  // const [ticketSubmit, setTicketSubmit] = useState(true);
  // const [reply_error, setReplyError] = useState(false);
  
 
  const loadDetails = () => {
    // setPageloading(true)
    const id = window.location.pathname.split('/')[3];
    console.log('id : ' + id);
    const support_access_token = localStorage.getItem("ipss_access_token");
    getSupport(support_access_token, id).then(res => {
      // handle success
      console.log(res);
      setId(res.data.id)
      setIssue(res.data.issue)
      setCategory(res.data.catagory)
      setDescription(res.data.description)
      setStatus(res.data.status)
      //setRoql(res.data.roql)
      //setPageloading(false)
    })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
        console.log('always');
      });
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true)
    if (reply.trim() === '') {
        setReplyError("Required input field.")
    }
    if (
    
      reply.trim() === ''
  ) 
    {
      setSubmit(false)
      return
  }






}

  /*useEffect(() => {
      document.title = "Support Ticket | Freshvoice"
      loadticket()
  }, [])

  // get the chat list view function
  const loadticket = () => {
      api.get("/support/view-ticket/" + id + "?action=view_ticket")
          .then(res => {
              console.log('response view ticket')
              console.log(res.data)
              setViewTicket(res.data)
              setTrply(res.data.ticket_replies)
          })
          .catch(err => {
              console.log(err)
          })
  }
   // eslint-disable-next-line
  const [input_error, setinputerror] = useState(false);
  // Api integration 
  const Addreply = () => {
      let data = {
          message: reply_msg
      }
      setSubmitting(true)
      api.post("/support/view-ticket/" + id + "?action=add_reply", data)
          .then(res => {
              console.log('response lavanya')
              console.log(res)
              setReplyError(false)
              setSubmitting(false)
              //  setComment(res.data.ticket_details)
              if (res.data.success) {
                  setReplyMsg('');
                  loadticket()
              }

          })
          .catch(err => {
              console.log(err)
              setReplyError(false)
              setSubmitting(false)
          })
  }
   // eslint-disable-next-line
  const [page, setPage] = React.useState(1);



  const validation = async () => {

      setTimeout(function () {
          window.scrollTo(0, 0);
      }, 2);

      if (reply_msg.trim() === "") {
          setReplyError(true);
          return;

      }
      Addreply()
  }
*/
useEffect(() => {
  document.title = "Ticket Details"
  loadDetails();

}, [])
return (
  <div className="ag-theme-alpine" style={{ height: "80vh", margin: "5vh" }} >

<div>
<AppBar position="static" class="appbar29">
      <Toolbar >
        <Box display='flex' flexGrow={1}>
        <h2 className='appheading'    style={{ color: "black" }}>Ticket Details</h2> 
        </Box>
        <div>
        <Grid align='right'>
      
        <div className="tooltip">
                <Button id="add-loc-btn" variant="text" onClick={() => window.history.go(-1)}>
                  <ArrowBackIcon
                    style={{ color: "black" }}
                  ></ArrowBackIcon>
                </Button>
                <span className="tooltiptext">Go Back</span>
              </div>
              </Grid>
              </div>
      </Toolbar>
    </AppBar>

        </div>
        
    {/* <AppBar>
    <Toolbar >
        <Box display='flex' flexGrow={1}>
        <p class="h5">Support Tickets</p> 
        </Box>
       
        {/* <div className='tooltip'><Button variant="text" onClick={() => history.push("/supportticket")} ><VisibilityIcon className='appheading'  ></VisibilityIcon></Button> 
          <span className='tooltiptext'>View</span></div>
      </Toolbar>
    </AppBar><br /><br /> */}
    <div className='ticket-details'>

       <Grid container spacing={2} style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '30px'}}  >
      <Grid item xs={6}>


        <h3>{issue}
        </h3>

      </Grid>
    </Grid>
    <Paper  >
     

     
           <Paper style={{ backgroundColor: '#dde1fa ' }} >
              <div style={{ marginLeft: '20px', marginBottom: '30px' }} id='force-scroll' >
                <br />
                <table >
                  <tr>
                  <td>
               <h6> Ticket ID</h6>
                </td>
                <td>
              <h6> :  {supportid}</h6>
                </td>
                </tr>
                <tr>
                  <td>
                  <h6> Title</h6>
                </td>
                <td>
                <h6> :  {issue}</h6>
                </td>
                </tr>
                <tr>
                  <td>
                  <h6> Status</h6> 
                                  </td>
                <td>
                <h6>: {status}</h6>
                </td>
                </tr>
                <tr>
                  <td>
                  <h6>Category</h6>
                                  </td>
                <td>
                <h6>: {catagory}</h6>
                </td>
                </tr>
                <tr>
                  <td>
                  <h6>Description </h6> 
                </td>
                <td>
                <h6>: {description}</h6>
                </td>
                </tr>


                <br /> <br /> <br /><br/>
                </table>
              </div>
            </Paper>

    </Paper>

    </div>
   
    <br/> <br/> <br/>
    
  </div>
);
 
}

export default SupportTicket;

// return (
//   <div className="ag-theme-alpine" style={{ height: "80vh", margin: "5vh" }} >

// <div>
//            <AppBar position="static" class="page_appbar" >
//       <Toolbar >
//         <Box display='flex' flexGrow={1}>
//         <h1 className='appheading'    style={{ color: "#00308F" }}>Ticket Details</h1> 
//         </Box>
//         <div>
//         <Grid align='right'>
      
//         <div className="tooltip">
//                 <Button id="add-loc-btn" variant="text" onClick={() => window.history.go(-1)}>
//                   <ArrowBackIcon
//                     style={{ color: "#00308F" }}
//                   ></ArrowBackIcon>
//                 </Button>
//                 <span className="tooltiptext">Go Back</span>
//               </div>
//               </Grid>
//               </div>
//       </Toolbar>
//     </AppBar>

//         </div>
        
//     {/* <AppBar>
//     <Toolbar >
//         <Box display='flex' flexGrow={1}>
//         <p class="h5">Support Tickets</p> 
//         </Box>
       
//         {/* <div className='tooltip'><Button variant="text" onClick={() => history.push("/supportticket")} ><VisibilityIcon className='appheading'  ></VisibilityIcon></Button> 
//           <span className='tooltiptext'>View</span></div>
//       </Toolbar>
//     </AppBar><br /><br /> */}
    
//     <Grid container spacing={2} style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '30px' }} >
//       <Grid item xs={6}>


//         <h2>{issue}
//         </h2>

//       </Grid>
//     </Grid>
//     <Grid container spacing={2} style={{ marginTop: '30px', marginBottom: '30px', marginLeft: '40px' }} >
//       <Grid item xs={8}>
//         <Item>
//           <Container style={{ padding: '0 30px 15px' }}>

//             <Comment.Group threaded>
//               {/* {t_rply.map((rply) => */}
//               <Comment>
//                 <Comment.Content>
//                   <Comment.Author as='a'>
//                     <div className='head_auth'>

//                       <Grid container spacing={2}>

//                     <List>
//                           <ListItem>
//                             <ListItemAvatar>
//                               <Avatar style={{ width: '50px', height: '50px', color: '#3874ff' }} className='user_avatars' />
//                             </ListItemAvatar>
//                             <ListItemText className='meg_user' primary="Jayasurya Velusamy" secondary="22-06-2022, 10.01 AM" />
//                           </ListItem>
//                           <ListItem>
//                             <ListItemText>
//                               <Comment.Text style={{ marginLeft: '70px' }}>
//                                 How to set price for my course?
//                               </Comment.Text>
//                             </ListItemText>
//                           </ListItem>
//                         </List>
  
//                         {/* <Avatar style={{ width: '30px', height: '30px' }} className='user_avatar' />
//                         {/* <ListItemText primary="Email" secondary="name" /> */}
//                         {/* {rply.user.username} <h5 style={{ color: '#3874ff' }}>Jayasurya Velusamy</h5><br /><p>22-06-2022, 10.01 AM</p> */}
//                       </Grid>
//                     </div>
//                   </Comment.Author>
//                   {/* <Comment.Metadata>
//                             {/* <span>{moment.utc(rply.created_at).format('DD-MM-YYYY , hh:mm A')}</span> 
//                             <span>22-06-2022</span>
//                           </Comment.Metadata>*/}


//                 </Comment.Content>
//               </Comment>

//               {/* <Comment.Metadata>
//                             {/* <span>{moment.utc(rply.created_at).format('DD-MM-YYYY , hh:mm A')}</span> 
//                             <span>22-06-2022</span>
//                           </Comment.Metadata>*/}



//               {/* )} */}
//               <Comment>
//                 <Comment.Content>
//                   <Comment.Author as='a'>
//                     <div className='head_auth'>

//                       <Grid container spacing={2}>
//                         <List>
//                           <ListItem>
//                             <ListItemAvatar>
//                               <Avatar style={{ width: '50px', height: '50px', color: '#3874ff' }} className='user_avatar' />
//                             </ListItemAvatar>
//                             <ListItemText className='meg_text' primary="Support Admin" secondary="22-06-2022, 11.00 AM" />
//                           </ListItem>
//                           <ListItem>
//                             <ListItemText>
//                               <Comment.Text style={{ marginLeft: '70px' }}>
//                                 According to the Bureau of Labor Statistics, the median annual salary for personal trainers in 2020 was $40,510, which means half earned more than that amount and half earned less. The low 10 percent of those personal trainers earned less than $21,640 while the top 10 percent earned more than $76,550.
//                               </Comment.Text>
//                             </ListItemText>
//                           </ListItem>
//                         </List>
//                    </Grid>


//                     </div>
//                   </Comment.Author>
//                   {/* <Comment.Metadata>
//                             {/* <span>{moment.utc(rply.created_at).format('DD-MM-YYYY , hh:mm A')}</span> 
//                             <span>22-06-2022</span>
//                           </Comment.Metadata>*/}


//                 </Comment.Content>
//               </Comment>


//               <hr />
//               <form onSubmit={handleSubmit}>
//               <TextareaAutosize
//                 style={{
//                   width: '100%',
//                   height: 180,
//                   padding: 10,
//                   fontSize: 16
//                 }}
                
//                 value={reply}
//                 name="description"
//                 id="bd_orgdes_id001"
//                 variant="outlined"
//                 placeholder='Enter your message here'
//                 onChange={(event) => { setReply(event.target.value); setReplyError(false) }}
//                 error={replyError}
//                  helpertext={replyError ? 'Required Input Field' : ''}
//                  disabled
//               />
//                <p className='MuiFormHelperText-root Mui-error'>{replyError ? 'Required Input Field' : ''}</p>
//               </form>
//               {/* <TextField
                
            
//                 // value={reply_msg}
//                 // error={reply_error}
//                 // onChange={(event) => {
//                 //   setReplyMsg(event.target.value)
//                 //   setReplyError(false);
//                 // }
//                 // }
//                 name="description"
//                 id="bd_orgdes_id001"
//                 variant="outlined"
//                 fullWidth
//                 multiline
//                 maxRows={4}
//                 label="Drop your queries here*"
//                 style={{ marginBottom: 10, marginTop: 10, color: '#8495AB' }}
//               /> */}
//               {/* <FormHelperText style={{ color: "#f44336", marginTop: '-25px' }}>{reply_error === true ? 'Required Input Field' : ''}</FormHelperText> */}
//               <br /> <br />
//               {/* <button alignContent='right'></button> */}
//               <div style={{ alignContent: 'end' }}>
//                 <Grid align='right'>
//                   <Button
//                   disabled
//                      style={{ width: '100px', backgroundColor: '#3874ff', color: '#fff', }}
//                      onClick={handleSubmit}
//                   >
//                     {submit ? <CircularProgress style={{ color: "#fff", textTransform: "capitalize" }} size={20} color='secondary' /> : 'Submit'}
//                   </Button>
//                 </Grid>
//               </div>

//             </Comment.Group>
//           </Container>
//         </Item>
//       </Grid>

//       <Grid item xs={3}>
//         <Item>

//           <h3 style={{ color: '#3874ff' }}>Ticket <span>Details</span></h3>
//           <Divider />
//           <div>
           
            
//               <Typography>Support ID : {supportid}</Typography>
//               <Typography>Subject:{issue}</Typography>
//               <Typography>Status : {status} </Typography>
//               <Typography>Category :{catagory}</Typography>
//               <Typography>Description :{description}</Typography>
//           </div>
//           <Divider />
//         </Item>
//       </Grid>

//     </Grid>

//     <br/> <br/> <br/>
//   </div>
// );












