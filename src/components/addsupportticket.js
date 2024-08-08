import React from 'react';
import { Formik, Form } from 'formik';
import { Button, Box, Grid } from '@mui/material';
import CustomInputField from '../common/CustomInputField';
import CustomSelectField from '../common/CutomSelect';
import { FormSchema } from '../schemas/schema';
import BlueButton from '../common/BlueButton';

const ticketTypeOptions = [
  { value: 'bug', label: 'Bug' },
  { value: 'feature', label: 'Feature Request' },
  { value: 'support', label: 'Support' },
];

const moduleOptions = [
  { value: 'module1', label: 'Module 1' },
  { value: 'module2', label: 'Module 2' },
  { value: 'module3', label: 'Module 3' },
];

export default function TicketForm() {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await postTicket({ ...values, active: true });
      console.log(values);
      console.log('Form submitted successfully');
      resetForm();
    } catch (error) {
      console.error('Error submitting the form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        ticket_name: '',
        ticket_type: '',
        module: '',
        ticket_description: '',
        attachment: null,
      }}
      validationSchema={FormSchema}  // Make sure your schema covers the new fields
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
              Submit
            </BlueButton>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
