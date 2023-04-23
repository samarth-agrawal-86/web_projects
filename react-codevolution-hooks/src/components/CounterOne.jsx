import { Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';

function CounterOne() {
  // New state value depends on the previous state value?
  //You can pass a function to the setter function.
  //The function will receive the previous value, and return an updated value.
  const initialCount = 0;
  const [count, setCount] = React.useState(initialCount);

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrement() {
    setCount((prevCount) => prevCount - 1);
  }
  function handleReset() {
    setCount(initialCount);
  }
  return (
    <Container>
      <Typography variant="h1" color="primary">
        {count}{' '}
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary" onClick={handleIncrement}>
          Increment
        </Button>
        <Button variant="contained" color="primary" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="contained" color="primary" onClick={handleDecrement}>
          Decrement
        </Button>
      </Stack>
    </Container>
  );
}

export default CounterOne;
