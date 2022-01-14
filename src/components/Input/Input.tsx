import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';


const useStyles = makeStyles(() =>
    createStyles({
        inputContainer: {
          border: '1px solid lightgrey',
          borderRadius: '8px',
          padding: '15px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '135px',
          justifyContent: 'space-between',
          marginBottom: '15px'
        },
    }),
);


const Input: React.FC = () => {
  const classes = useStyles();

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className={classes.inputContainer}
    >
      <TextField id="outlined-basic" label="Enter task" variant="outlined" fullWidth/>
      <Button variant="contained">Save</Button>
    </Box>
  );
}

export { Input };