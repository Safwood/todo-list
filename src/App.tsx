import React, { FC } from 'react';
import { Input } from './components/Input';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { makeStyles, createStyles } from '@mui/styles';


const useStyles = makeStyles(() =>
    createStyles({
        box: {
            padding: '30px 0',
            height: '100vh'
        },
    }),
);

const App: FC = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="lg">
        <Box className={classes.box} >
          <Input /> 
        </ Box> 
      </Container>
      
    </div>
  );
}

export default App;
