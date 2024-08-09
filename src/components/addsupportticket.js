// // import React from 'react';
// // import { Formik, Form } from 'formik';
// // import { Button, Box, Grid } from '@mui/material';
// // import CustomInputField from '../common/CustomInputField';
// // import CustomSelectField from '../common/CutomSelect';
// // import { FormSchema } from '../schemas/schema';
// // import BlueButton from '../common/BlueButton';

// // const ticketTypeOptions = [
// //   { value: 'Incident', label: 'incident' },
// //   { value: 'Problem', label: 'Problem' },
// //   { value: 'Question', label: 'Question' },
// //   { value: 'Suggesion', label: 'Suggesion' },

// // ];

// // const moduleOptions = [
// //   { value: 'module1', label: 'Module 1' },
// //   { value: 'module2', label: 'Module 2' },
// //   { value: 'module3', label: 'Module 3' },
// // ];

// // export default function TicketForm() {
// //   const handleSubmit = async (values, { setSubmitting, resetForm }) => {
// //     try {
// //       await postTicket({ ...values, active: true });
// //       console.log(values);
// //       console.log('Form submitted successfully');
// //       resetForm();
// //     } catch (error) {
// //       console.error('Error submitting the form:', error);
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   return (
// //     <Formik
// //       initialValues={{
// //         ticket_name: '',
// //         ticket_type: '',
// //         module: '',
// //         ticket_description: '',
// //         attachment: null,
// //       }}
// //       validationSchema={FormSchema}  // Make sure your schema covers the new fields
// //       onSubmit={handleSubmit}
// //     >
// //       {({ isSubmitting, setFieldValue }) => (
// //         <Form>
// //           <CustomInputField
// //             name="ticket_name"
// //             label="Ticket Name"
// //             placeholder="Enter Ticket Name"
// //           />
            
// //             <div>
// //   <Grid container spacing={2}>
// //     <Grid item xs={6}>
// //       <CustomSelectField
// //         name="ticket_type"
// //         label="Ticket Type"
// //         options={ticketTypeOptions}
// //       />
// //     </Grid>
// //     <Grid item xs={6}>
// //       <CustomSelectField
// //         name="module"
// //         label="Module"
// //         options={moduleOptions}
// //       />
// //     </Grid>
// //   </Grid>
// // </div>

// //           <CustomInputField
// //             name="ticket_description"
// //             label="Ticket Description"
// //             placeholder="Enter Ticket Description"
// //             multiline
// //             rows={4}
// //           />

// //           <div>
// //             <input
// //               id="attachment"
// //               name="attachment"
// //               type="file"
// //               onChange={(event) => {
// //                 setFieldValue("attachment", event.currentTarget.files[0]);
// //               }}
// //             />
// //           </div>

// //           <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
// //             <BlueButton
// //               variant="contained"
// //               color="primary"
// //               type="submit"
// //               disabled={isSubmitting}
// //             >
// //               Submit
// //             </BlueButton>
// //           </Box>
// //         </Form>
// //       )}
// //     </Formik>
// //   );
// // }

import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { Button, Box, Grid } from '@mui/material';
import CustomInputField from '../common/CustomInputField';
import CustomSelectField from '../common/CutomSelect';
import { FormSchema } from '../schemas/schema';
import BlueButton from '../common/BlueButton';

// const ticketTypeOptions = [
//   { value: 'Incident', label: 'Incident' },
//   { value: 'Problem', label: 'Problem' },
//   { value: 'Question', label: 'Question' },
//   { value: 'Suggestion', label: 'Suggestion' },
// ];

// const moduleOptions = [
//   { value: 'module1', label: 'Module 1' },
//   { value: 'module2', label: 'Module 2' },
//   { value: 'module3', label: 'Module 3' },
// ];

// export default function TicketForm({ initialTicketData, onSubmit }) {
//   const handleSubmit = async (values, { setSubmitting, resetForm }) => {
//     try {
//       await onSubmit({ ...values, active: true });
//       console.log(values);
//       console.log('Form submitted successfully');
//       resetForm();
//     } catch (error) {
//       console.error('Error submitting the form:', error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Formik
//       initialValues={{
//         ticket_name: initialTicketData?.ticket_name || '',
//         ticket_type: initialTicketData?.ticket_type || '',
//         module: initialTicketData?.module || '',
//         ticket_description: initialTicketData?.ticket_description || '',
//         attachment: null,
//       }}
//       validationSchema={FormSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ isSubmitting, setFieldValue }) => (
//         <Form>
//           <CustomInputField
//             name="ticket_name"
//             label="Ticket Name"
//             placeholder="Enter Ticket Name"
//           />

//           <div>
//             <Grid container spacing={2}>
//               <Grid item xs={6}>
//                 <CustomSelectField
//                   name="ticket_type"
//                   label="Ticket Type"
//                   options={ticketTypeOptions}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <CustomSelectField
//                   name="module"
//                   label="Module"
//                   options={moduleOptions}
//                 />
//               </Grid>
//             </Grid>
//           </div>

//           <CustomInputField
//             name="ticket_description"
//             label="Ticket Description"
//             placeholder="Enter Ticket Description"
//             multiline
//             rows={4}
//           />

//           <div>
//             <input
//               id="attachment"
//               name="attachment"
//               type="file"
//               onChange={(event) => {
//                 setFieldValue('attachment', event.currentTarget.files[0]);
//               }}
//             />
//           </div>

//           <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//             <BlueButton
//               variant="contained"
//               color="primary"
//               type="submit"
//               disabled={isSubmitting}
//             >
//               {initialTicketData ? 'Update Ticket' : 'Submit'}
//             </BlueButton>
//           </Box>
//         </Form>
//       )}
//     </Formik>
//   );
// }

const ticketTypeOptions = [
  { value: 'Incident', label: 'Incident' },
  { value: 'Problem', label: 'Problem' },
  { value: 'Question', label: 'Question' },
  { value: 'Suggestion', label: 'Suggestion' },
];

const moduleOptions = [
  { value: 'module1', label: 'Module 1' },
  { value: 'module2', label: 'Module 2' },
  { value: 'module3', label: 'Module 3' },
];

export default function TicketForm({ initialTicketData, onSubmit }) {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      if (initialTicketData) {
        // If editing an existing ticket
        await axios.put(`https://66b47a079f9169621ea3193d.mockapi.io/totalticket/${initialTicketData.id}`, values);
        console.log('Ticket updated successfully');
      } else {
        // If creating a new ticket
        await axios.post('https://66b47a079f9169621ea3193d.mockapi.io/totalticket', values);
        console.log('Ticket created successfully');
      }
      resetForm();
      onSubmit(); // Call parent handler after submit
    } catch (error) {
      console.error('Error submitting the form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialTicketData && {
        ticket_name:initialTicketData.title,
        ticket_type: initialTicketData.type,
        module: initialTicketData.module,
        ticket_description: initialTicketData.description,
        attachment: initialTicketData.attachment,

      } || {

        ticket_name: '',
        ticket_type: '',
        module: '',
        ticket_description: '',
        attachment: null,
      }}
      validationSchema={FormSchema} // Make sure your schema covers the fields
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form>
          <CustomInputField
            name="ticket_name"
            label="Ticket Name"
            placeholder="Enter Ticket Name"
          />

          <div>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CustomSelectField
                  name="ticket_type"
                  label="Ticket Type"
                  options={ticketTypeOptions}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomSelectField
                  name="module"
                  label="Module"
                  options={moduleOptions}
                />
              </Grid>
            </Grid>
          </div>

          <CustomInputField
            name="ticket_description"
            label="Ticket Description"
            placeholder="Enter Ticket Description"
            multiline
            rows={4}
          />

          <div>
            <input
              id="attachment"
              name="attachment"
              type="file"
              onChange={(event) => {
                setFieldValue("attachment", event.currentTarget.files[0]);
              }}
            />
          </div>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <BlueButton
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
            >
               {initialTicketData && "Update"}
                {!initialTicketData && "Submit"}

            </BlueButton>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
