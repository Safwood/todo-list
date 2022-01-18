import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() =>
    createStyles({
      headerContent: {
          padding: '0 15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        },
    }),
);


const Header: React.FC = () => {
  const classes = useStyles();

  return (
      <AppBar position="static">
        <Toolbar className={classes.headerContent}>
          <Button color="inherit" component={Link} to="/">
            Tasks
          </Button>
          <Button color="inherit" component={Link} to="/addresses">
             Addresses
          </Button>
        </Toolbar>
      </AppBar>
  );
}

export { Header };