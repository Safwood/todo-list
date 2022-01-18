import React from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Paths } from '../../utils';
import { createUseStyles } from '../../utils'

const useStyles = createUseStyles({
  headerContent: {
      padding: '0 15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
})

const Header: React.FC = () => {
  const classes = useStyles();

  return (
      <AppBar position="static">
        <Toolbar className={classes.headerContent}>
          <Button color="inherit" component={Link} to={Paths.Tasks}>
            Tasks
          </Button>
          <Button color="inherit" component={Link} to={Paths.Addresses}>
             Addresses
          </Button>
        </Toolbar>
      </AppBar>
  );
}

export { Header };