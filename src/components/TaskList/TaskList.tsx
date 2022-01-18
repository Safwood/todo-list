import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { TaskCard } from '../TaskCard';
import { useSelector } from '../../store'
import { tasksSelector } from '../../store/tasks'

const useStyles = makeStyles(() =>
    createStyles({
        taskList: {
          padding: '15px 0 0',
          listStyle: 'none'
        },
    }),
);

const TaskList: React.FC = () => {
  const classes = useStyles();
  const tasks = useSelector(tasksSelector);

  return (
    <ul className={classes.taskList}>
      {tasks.map(({ id, content }) => {
        return <li key={id}>
                  <TaskCard task={content} id={id}/>
              </li>
      })}
    </ul>
  );
}

export { TaskList };