import React from 'react'
import { useField } from 'formik';
import { TextField } from '@mui/material';


export default function CustomInputField({label , ...props}) {
    const [field, meta] = useField(props);
   console.log(props,"props")
  return (
    <div>
      <TextField 
        {...field} 
        {...props} 
        label={label}
      
        // error={meta.touched && meta.error} 
        error={Boolean(meta.touched && meta.error)}
        helperText={meta.touched && meta.error} 
        variant="outlined"
        fullWidth
        sx={{my:'5px'}}
      />
    </div>
  )
}

