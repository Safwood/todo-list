import React from 'react';
import Card from '@mui/material/Card';
import { IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from '../../store';
import { removeTask } from '../../store/tasks';
import { createUseStyles } from '../../utils'

const useStyles = createUseStyles({
  taskCard: {
    width: '100%',
    marginBottom: '15px',
    borderRadius: '8px',
    padding: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeIcon: {
    color: 'grey'
  },
  cardContent: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
  }
});

type Props = {
  task: string,
  taskId: string
}

const TaskCard: React.FC<Props> = ({task, taskId}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleRemoveTask = (e: React.MouseEvent) => {
    dispatch(removeTask(taskId))
  }

  return (
    <Card className={classes.taskCard} variant="outlined">
     <div className={classes.cardContent}>
        <Typography variant="h5" >
          {task}
        </Typography>
     </div>
        <IconButton aria-label="delete" onClick={handleRemoveTask}>
          <CloseIcon className={classes.closeIcon}/>
        </IconButton>
    </Card>
  );
}

export { TaskCard };