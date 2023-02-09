import React from 'react';

import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ErrorBar = ({ error, callback }: IProps) => {
  const handleClose = () => callback();

  return (
    <Snackbar open={!!error} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="error"
        sx={{ width: '100%', fontFamily: 'inherit', fontSize: '1.5rem' }}
      >
        {error}
      </Alert>
    </Snackbar>
  );
};

interface IProps {
  error: string | null;
  callback: () => void;
}
