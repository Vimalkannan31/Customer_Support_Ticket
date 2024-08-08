import React from 'react';
import { useField } from 'formik';
import { TextField, MenuItem } from '@mui/material';

export default function CustomSelectField({ label, options, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <TextField
        {...field}
        {...props}
        select
        label={label}
        // error={meta.touched && Boolean(meta.error)}
        error={Boolean(meta.touched && meta.error)}
        helperText={meta.touched && meta.error}
        variant="outlined"
        fullWidth
        sx={{my:'15px'}}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}
