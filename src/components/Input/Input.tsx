import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { useDispatch } from '../../store';
import { addTask } from '../../store/tasks';
import { nanoid } from 'nanoid';
import { createUseStyles } from '../../utils'


const useStyles = createUseStyles({
  inputContainer: {
    border: '1px solid lightgrey',
    borderRadius: '8px',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '135px',
    justifyContent: 'space-between',
    marginBottom: '15px',
    width: '100%'
  },
});


const Input: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTaskText(e.target.value)
  }

  const handleSubmitButton = () => {
    if(!taskText.trim()) {
      return
    }
    const id = nanoid(3)
    const newTask = {
      id: id,
      content: taskText,
    }
    
    dispatch(addTask(newTask))
    setTaskText('')
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className={classes.inputContainer}
    >
      <TextField id="outlined-basic" onChange={handleInputChange} value={taskText} label="Enter task" variant="outlined" fullWidth/>
      <Button variant="contained" onClick={handleSubmitButton}>Save</Button>
    </Box>
  );
}

export { Input };