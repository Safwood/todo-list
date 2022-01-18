import React from 'react';
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

const AddressPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
        <Box className={classes.box}>
         Address
        </ Box>
      </Container>
  );
}

export { AddressPage };