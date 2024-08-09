import React from 'react';
import { Stepper, Step, StepLabel, Box } from '@mui/material';

const TicketStatusStepper = ({ status }) => {
  const steps = ['Open', 'In Progress', 'Resolved'];

  const getActiveStep = (status) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 0;
      case 'in progress':
        return 1;
      case 'resolved':
        return 2;
      default:
        return 0;
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
  <Box sx={{ mr: 2 }}>
    {steps.map((label, index) => (
      <Box key={label} sx={{ textAlign: 'center', mb: 1 }}>
        <StepLabel
          sx={{
            width: 100,
            fontWeight: getActiveStep(status) === index ? 'bold' : 'normal',
            color: getActiveStep(status) >= index ? 'primary.main' : 'text.secondary'
          }}
        >
          {label}
        </StepLabel>
        {index < steps.length - 1 && (
          <Box
            sx={{
              height: 20,
              width: 2,
              backgroundColor: getActiveStep(status) > index ? 'primary.main' : 'grey.400',
              mx: 'auto',
            }}
          />
        )}
      </Box>
    ))}
  </Box>
</Box>
  );
};

export default TicketStatusStepper;
