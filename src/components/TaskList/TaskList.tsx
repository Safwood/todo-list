import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { TaskCard } from '../TaskCard';
import { useSelector } from '../../store'
import { tasksSelector } from '../../store/tasks'

const useStyles = makeStyles(() =>
    createStyles({
        taskList: {
          paddingTop: '15px',
        },
    }),
);

const TaskList: React.FC = () => {
  const classes = useStyles();
  const tasks = useSelector(tasksSelector);

  return (
    <Box className={classes.taskList}>
      {tasks.map(({ id, content }) => {
        return <TaskCard task={content} key={id} id={id}/>
      })}
    </Box>
  );
}

export { TaskList };