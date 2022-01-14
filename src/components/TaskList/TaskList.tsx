import React from 'react';
import { tasksList } from './mock'
import { makeStyles, createStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { TaskCard } from '../TaskCard';


const useStyles = makeStyles(() =>
    createStyles({
        taskList: {
          paddingTop: '15px',
        },
    }),
);

const TaskList: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.taskList}>
      {tasksList.map((item, index) => {
        return <TaskCard task={item} key={index}/>
      })}
    </Box>
  );
}

export { TaskList };