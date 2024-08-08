import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

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
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 2 }}>
        {steps.map((label, index) => (
          <Box key={label} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <StepLabel
              sx={{
                width: 100,
                textAlign: 'center',
                fontWeight: getActiveStep(status) === index ? 'bold' : 'normal'
              }}
            >
              {label}
            </StepLabel>
            {index < steps.length - 1 && (
              <Box
                sx={{
                  height: 20,
                  width: 2,
                  backgroundColor: index < getActiveStep(status) ? 'primary.main' : 'grey.400',
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
