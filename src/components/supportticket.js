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
// import React, { useEffect, useState, useCallback } from 'react'
// import { AgGridColumn, AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import "bootstrap/dist/css/bootstrap.css";
// import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
// import moment from 'moment';
// import "./support.css";
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Box from '@mui/material/Box';
// import data from '../../mock/rpt.json';
// import VisibilityIcon from '@material-ui/icons/Visibility';
// import Popup from './support_ticket_add';
// import { useHistory } from 'react-router-dom';
// import {Modal, Button, Paper, Typography } from '@mui/material';
// import ArrowBackIcon from '@material-ui/icons/ArrowBack'
// import { login, getAllSupport, getSupport } from '../service/support.service';
// import SearchIcon from '@material-ui/icons/Search';
// import EditIcon from '@mui/icons-material/Edit';
// import { Grid } from '@material-ui/core';
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import { Form, Table } from 'react-bootstrap';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import BlueButton from '../common/BlueButton';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import TicketForm from './addsupportticket';
// import CloseIcon from '@mui/icons-material/Close';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import axios from 'axios';



//   const filterData = [
//     { id: 1, name: 'Login Issue', module: 'Auth', createdBy: 'Alice', status: 'Open', type: 'Bug', action: 'Edit' },
//     { id: 2, name: 'UI Enhancement', module: 'Dashboard', createdBy: 'Bob', status: 'In Progress', type: 'Feature', action: 'Edit' },
//     { id: 3, name: 'API Error', module: 'Backend', createdBy: 'Charlie', status: 'Closed', type: 'Bug', action: 'Edit' },
//     { id: 4, name: 'UI Enhancement', module: 'Dashboard', createdBy: 'Bob', status: 'In Progress', type: 'Feature', action: 'Edit' },
//     { id: 5, name: 'API Error', module: 'Backend', createdBy: 'Charlie', status: 'Closed', type: 'Bug', action: 'Edit' },
//     { id: 6, name: 'UI Enhancement', module: 'Dashboard', createdBy: 'Bob', status: 'In Progress', type: 'Feature', action: 'Edit' },
//   ];

//   const [filter, setFilter] = useState('');
//   const [filteredData, setFilteredData] = useState(filterData);

//   const handleChange = (event) => {
//     setFilter(event.target.value);
//   };

//   // stepper
  
// const steps = [
//   'All',
//   'Open',
//   'In progress',
//   'Resolved',
//   'Reopend',
//   'Invalid'
// ];

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));

// //Form Open or Close Status
// const [Formopen, setFormopen] = useState(false);

//   const FormhandleClose = () => {
//     setFormopen(false);
//   };

// //Api Integration
// const [activeStep, setActiveStep] = useState(0);
// // const [data, setData] = useState([]);

// useEffect(() => {
//   axios.get('https://api.example.com/tasks')
//     .then(response => {
//       setData(response.data);
//       setFilteredData(response.data);
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
// }, []);

// // const filterData = (status) => {
// //   if (status === 'All') return data;
// //   return data.filter((item) => item.status === status);
// // };



// const handleStepClick = (index, status) => {
//   setActiveStep(index);
//   setFilteredData(filterData(status));
// };


//   return (
   
//     <div className="ag-theme-alpine" style={{ height: "80vh", margin: "5vh" }} >

//       <div>
//         <AppBar position="static" class="appbar29" id="appbar29">
//           <Toolbar >
//             <Box display='flex' flexGrow={1}>
//               <h3 className='appheading' style={{ color: "black" }}>Support Tickets</h3>
//             </Box>

//             <div>
//             <Grid align='right'>
//             <div className='tooltip'>
//               <Button variant="text" onClick={() => setFormopen(true)} id='raise_ticket'>
//                 <AddBoxRoundedIcon style={{ color: "black" }} />
//               </Button>
//               <span className='tooltiptext'>Raise a Ticket</span>
//             </div>
//             <Dialog
//                 open={Formopen}
//                 onClose={FormhandleClose}
//                 aria-labelledby="dialog-title"
//                 aria-describedby="dialog-description"
//                 maxWidth="sm"
//                 fullWidth
//               >
//                 <DialogTitle id="dialog-title">
//                   Raise Ticket
//                   <IconButton
//                     aria-label="close"
//                     onClick={FormhandleClose}
//                     sx={{
//                       position: 'absolute',
//                       top: 8,
//                       right: 8,
//                       color: (theme) => theme.palette.grey[500],
//                     }}
//                   >
//                     <CloseIcon />
//                   </IconButton>
//                 </DialogTitle>
//                 <DialogContent dividers sx={{ bgcolor: 'background.paper', borderRadius: 2 }}>
//                   <TicketForm />
//                 </DialogContent>
//               </Dialog>
//             <div className="tooltip">
//               <Button
//                 style={{ color: "black" }}
//                 onClick={() => {
//                   window.location.href = "https://tgz.techgenzi.com/tgzapps";
//                 }}
//               >
//                 <HomeRoundedIcon />
//               </Button>
//               <span className="tooltiptext">Home</span>
//             </div>
//           </Grid>
//             </div>



//           </Toolbar>
//         </AppBar><br /><br />
//       </div>
      
//       <div >
//       <Box sx={{ width: '100%', marginBottom: '5vh' }}>
//         <Stepper alternativeLabel activeStep={activeStep}>
//           {steps.map((label, index) => (
//             <Step key={label}>
//               <StepLabel
//                 onClick={() => handleStepClick(index, label)}
//                 sx={{ cursor: 'pointer', color: index === activeStep ? 'primary.main' : 'text.disabled' }}              >
//                 {label}
//               </StepLabel>
//             </Step>
//           ))}
//         </Stepper>
//       </Box>
//       </div>
      
//       {/* Table */}
    
//       <div className="container-fluid">
//       <Grid container spacing={2} className="mb-3">
//         <Grid item xs={12} md={10}>
//           <Table striped bordered style={{ marginTop: '5px',}} className='fs-6'>
//             <thead className="thead-dark">
//               <tr className="text-center">
//                 <th style={{ padding: '10px', backgroundColor: '#00308f', color: 'white' }}>Ticket ID</th>
//                 <th style={{ padding: '10px', backgroundColor: '#00308f', color: 'white' }}>Ticket Name</th>
//                 <th style={{ padding: '10px', backgroundColor: '#00308f', color: 'white' }}>Module</th>
//                 <th style={{ padding: '10px', backgroundColor: '#00308f', color: 'white' }}>Created By</th>
//                 <th style={{ padding: '10px', backgroundColor: '#00308f', color: 'white' }}>Status</th>
//                 <th style={{ padding: '10px', backgroundColor: '#00308f', color: 'white' }}>Ticket Type</th>
//                 <th style={{ padding: '10px', backgroundColor: '#00308f', color: 'white' }}>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredData.map((ticket) => (
//                 <tr key={ticket.id} className="text-center">
//                   <td>{ticket.id}</td>
//                   <td>{ticket.name}</td>
//                   <td>{ticket.module}</td>
//                   <td>{ticket.createdBy}</td>
//                   <td>{ticket.status}</td>
//                   <td>{ticket.type}</td>
//                   <td className="text-center">
//                     <IconButton color="primary">
//                       <VisibilityIcon />
//                     </IconButton>
//                     <IconButton id="EditTicket">
//                       <EditIcon />
//                     </IconButton>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Grid>
//         <Grid item xs={12} md={2}>
//           <div className='d-flex justify-content-center align-items-center'>
//           <Box
//             sx={{
//               boxShadow: 5,
//               p: 2,
//             }}
//           >
//             <FormControl sx={{ width: '100%',marginBottom:'5vh' }}>
//               <InputLabel id="Filter-label">Filter</InputLabel>
//               <Select
//                 labelId="Filter-label"
//                 id="Filter-label"
//                 value={filter}
//                 size='small'
//                 label="Filter"
//                 onChange={handleChange}
//               >
//                 <MenuItem value="">
//                   <em>All</em>
//                 </MenuItem>
//                 <MenuItem value="today">Today</MenuItem>
//                 <MenuItem value="This week">This week</MenuItem>
//                 <MenuItem value="This month">This month</MenuItem>
//                 <MenuItem value="Custom Date">Custom Date</MenuItem>
//               </Select>
//             </FormControl>
//             <Grid container spacing={2} sx={{ marginTop: 1 }}>
//               <Grid item xs={6}>
//                 <BlueButton fullWidth>Apply</BlueButton>
//               </Grid>
//               <Grid item xs={6}>
//                 <BlueButton fullWidth>Reset</BlueButton>
//               </Grid>
//             </Grid>
//           </Box>
//           </div>
          
//         </Grid>
//       </Grid>
//     </div>
//       <br /><br /><br />
//     </div>
//   )
// }
// export default SupportTicket;


import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Grid, FormControl, InputLabel, Select, MenuItem,Pagination } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import TicketForm from './addsupportticket';
import BlueButton from '../common/BlueButton';
import 'bootstrap/dist/css/bootstrap.css';
import './support.css';
import TicketStatusStepper from './ticket_status';

const SupportTicket = () => {

  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [Formopen, setFormopen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [currentPage,setCurrentPage] = useState(1);

  const [selectedTicket,setSelectedticket] = useState(null);
  const [viewStatusopen,setViewStatusOpen] = useState(false);

//View the Status of the Particular Ticket
const clickViewButton = (ticket) =>{
      setSelectedticket(ticket);
      setViewStatusOpen(true);
}


//Pagination
  const page_count = () => {
    if (filteredData?.total_results && filteredData?.results_per_page) {
      const page_number = Math.ceil(
        filteredData?.total_results / filteredData?.results_per_page
      );
      return page_number;
    } else {
      return 1;
    }
  };

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const steps = [
    'All',
    'Open',
    'In progress',
    'Resolved',
    'Reopend',
    'Invalid'
  ];

  const handleStepClick = (index, status) => {
    setActiveStep(index);
    setFilteredData(filteredData.filter(ticket => ticket.status === status || status === 'All'));
  };

  const FormhandleClose = () => {
    setFormopen(false);
  };

  useEffect(() => {
    axios.get('https://66b47a079f9169621ea3193d.mockapi.io/totalticket')
      .then(response => {
        setFilteredData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: "80vh", margin: "5vh" }}>
      <AppBar position="static" className="appbar29" id='appbar29'>
        <Toolbar>
          <Box display='flex' flexGrow={1}>
            <h3 className='appheading' style={{ color: "black" }}>Support Tickets</h3>
          </Box>
          <Grid align='right'>
            <div className='tooltip'>
              <Button variant="text" onClick={() => setFormopen(true)} id='raise_ticket'>
                <AddBoxRoundedIcon style={{ color: "black" }} />
              </Button>
              <span className='tooltiptext'>Raise a Ticket</span>
            </div>
            <Dialog
              open={Formopen}
              onClose={FormhandleClose}
              aria-labelledby="dialog-title"
              aria-describedby="dialog-description"
              maxWidth="sm"
              fullWidth
            >
              <DialogTitle id="dialog-title">
                Raise Ticket
                <IconButton
                  aria-label="close"
                  onClick={FormhandleClose}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent dividers sx={{ bgcolor: 'background.paper', borderRadius: 2 }}>
                <TicketForm />
              </DialogContent>
            </Dialog>
            <div className="tooltip">
              <Button
                style={{ color: "black" }}
                onClick={() => {
                  window.location.href = "https://tgz.techgenzi.com/tgzapps";
                }}
              >
                <HomeRoundedIcon />
              </Button>
              <span className="tooltiptext">Home</span>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
      <br /><br />
      <Box sx={{ width: '100%', marginBottom: '5vh' }}>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                onClick={() => handleStepClick(index, label)}
                sx={{ cursor: 'pointer', color: index === activeStep ? 'primary.main' : 'text.disabled' }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <div className="container-fluid">
        <Grid container spacing={2} className="mb-3">
          <Grid item xs={12} md={10}>
            <table className="table table-striped table-bordered fs-6">
              <thead className="thead-dark">
                <tr className="text-center">
                  <th style={{ padding: '10px', backgroundColor: '#00308f', color: 'white' }}>Ticket ID</th>
                  <th style={{ padding: '10px', backgroundColor: '#00308f', color: 'white' }}>Ticket Name</th>
                  <th style={{ padding: '10px', backgroundColor: '#00308f', color: 'white' }}>Module</th>
                  <th style={{ padding: '10px', backgroundColor: '#00308f', color: 'white' }}>Created By</th>
                  <th style={{ padding: '10px', backgroundColor: '#00308f', color: 'white' }}>Status</th>
                  <th style={{ padding: '10px', backgroundColor: '#00308f', color: 'white' }}>Ticket Type</th>
                  <th style={{ padding: '10px', backgroundColor: '#00308f', color: 'white' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((ticket) => (
                  <tr key={ticket.ticket_code} className="text-center">
                    <td>{ticket.ticket_code}</td>
                    <td>{ticket.title}</td>
                    <td>{ticket.module}</td>
                    <td>{ticket.created_by}</td>
                    <td>{ticket.status}</td>
                    <td>{ticket.type}</td>
                    <td className="text-center">
                      <IconButton color="primary" onClick={() => clickViewButton(ticket)}>
                        <VisibilityIcon/>
                      </IconButton>
                      <IconButton id="EditTicket">
                        <EditIcon />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Grid container display="flex" justifyContent="center">
            <Pagination
              count={page_count()}
              shape="rounded"
              page={currentPage}
              onChange={(event, value) => {
                setCurrentPage(value);
              }}
              boundaryCount={2}
            />
          </Grid>
        
          </Grid>
          <Grid item xs={12} md={2}>
            <div className='d-flex justify-content-center align-items-center'>
              <Box sx={{ boxShadow: 5, p: 2 }}>
                <FormControl sx={{ width: '100%', marginBottom: '5vh' }}>
                  <InputLabel id="Filter-label">Filter</InputLabel>
                  <Select
                    labelId="Filter-label"
                    id="Filter-label"
                    value={filter}
                    size='small'
                    label="Filter"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>All</em>
                    </MenuItem>
                    <MenuItem value="today">Today</MenuItem>
                    <MenuItem value="This week">This week</MenuItem>
                    <MenuItem value="This month">This month</MenuItem>
                    <MenuItem value="Custom Date">Custom Date</MenuItem>
                  </Select>
                </FormControl>
                <Grid container spacing={2} sx={{ marginTop: 1 }}>
                  <Grid item xs={6}>
                    <BlueButton fullWidth>Apply</BlueButton>
                  </Grid>
                  <Grid item xs={6}>
                    <BlueButton fullWidth>Reset</BlueButton>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* Ticket Status */}
      <div id="Ticket Status">
      <Dialog
          open={viewStatusopen}
          onClose={() => setViewStatusOpen(false)}
          aria-labelledby="ticket-status-title"
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle id="ticket-dialog-title">
            {selectedTicket && (
              <>{selectedTicket.ticket_code}</>
            )}
            <IconButton
              aria-label="close"
              onClick={() => setViewStatusOpen(false)}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            {selectedTicket && (
              <Box sx={{ p: 2 }}>
                <p><strong>Ticket ID:</strong> {selectedTicket.ticket_code}</p>
                <p><strong>Ticket Name:</strong> {selectedTicket.title}</p>
                <p><strong>Module:</strong> {selectedTicket.module}</p>
                <p><strong>Created By:</strong> {selectedTicket.created_by}</p>
                <p><strong>Created On:</strong> {selectedTicket.created_on}</p>
                <p><strong>Ticket Type:</strong> {selectedTicket.type}</p>
                <p><strong>Status:</strong> {selectedTicket.status}</p> 
                <hr/>
                <TicketStatusStepper status={selectedTicket.status}/>
              </Box>
            )}
            

          </DialogContent>
        </Dialog>
      </div>
         

      <br /><br /><br />
    </div>
  );
}

export default  SupportTicket;
