import { Button as MuiButton } from '@mui/material';
import React from 'react';

const Button = ({ children, type = 'button', ...rest }) => {
  return (
    <MuiButton type={type} {...rest}>
      {children}
    </MuiButton>
  );
};

export default Button;
