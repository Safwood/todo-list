import React from 'react';
import { TaskCard } from '../TaskCard';
import { useSelector } from '../../store';
import { tasksSelector } from '../../store/tasks';
import { createUseStyles } from '../../utils'

const useStyles = createUseStyles({
  taskList: {
    padding: '15px 0 0',
    listStyle: 'none'
  },
});

const TaskList: React.FC = () => {
  const classes = useStyles();
  const tasks = useSelector(tasksSelector);

  return (
    <ul className={classes.taskList}>
      {tasks.map(({ id, content }) => {
        return <li key={id}>
                  <TaskCard task={content} taskId={id}/>
              </li>
      })}
    </ul>
  );
}

export { TaskList };