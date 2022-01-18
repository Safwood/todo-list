import React from 'react';
import { Input } from '../Input';
import { TaskList } from '../TaskList';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createUseStyles } from '../../utils'


const useStyles = createUseStyles({
  box: {
      padding: '30px 0',
      height: '100vh'
  },
});

const TasksPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
        <Box className={classes.box} >
          <Input /> 
          <TaskList />
        </Box>
    </Container>
  );
}

export { TasksPage };