import React from 'react';
import { Button } from '@mui/material';
import { useMemo } from 'react';

const useBlueButtonStyles = () => {
  return useMemo(() => ({
    backgroundColor: '#00308f',
    color: 'white',
    '&:hover': {
      backgroundColor: '#002a6e',
      transition: 'background-color 0.3s ease-in-out',
    },
  }), []);
};

const BlueButton = (props) => {
  const buttonStyles = useBlueButtonStyles();

  return (
    <Button
      {...props}
      sx={buttonStyles}
    />
  );
};

export default BlueButton;
