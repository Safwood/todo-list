import React from 'react';
import Card from '@mui/material/Card';
import { makeStyles, createStyles } from '@mui/styles';
import { IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles(() =>
    createStyles({
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
    }),
);

type Props = {
  task: string
}

const TaskCard: React.FC<Props> = ({task}) => {
  const classes = useStyles();

  return (
    <Card className={classes.taskCard} variant="outlined">
     <div className={classes.cardContent}>
        <Typography variant="h5" >
          {task}
        </Typography>
     </div>
        <IconButton aria-label="delete">
          <CloseIcon className={classes.closeIcon}/>
        </IconButton>
    </Card>
  );
}

export { TaskCard };