import { TextField } from '@mui/material';
import React from 'react';

const Input = ({ type = 'text',value,onChange, ...rest }) => {
  return <TextField type={type} value={value} onChange={onChange} {...rest} />;
};

export default Input;
