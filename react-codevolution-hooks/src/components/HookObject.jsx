import { Box, Container, TextField } from '@mui/material';
import React from 'react';

function HookObject() {
  // When dealing with objects or arrays.
  // Always make sure to spread your state variable and then call the setter function.
  const [name, setName] = React.useState({ firstName: '', lastName: '' });

  // function handleNameChange(e) {
  //   setName({ ...name, [e.target.name]: e.target.value });
  // }

  // function handleFirstName(e) {
  //   setName({ firstName: e.target.value });
  // }

  function handleFirstName(e) {
    setName({ ...name, firstName: e.target.value });
  }

  function handleLastName(e) {
    setName({ ...name, lastName: e.target.value });
  }
  return (
    <Box component="form">
      <Container>
        <TextField
          label="First Name"
          name="firstName"
          value={name.firstName}
          onChange={handleFirstName}
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={name.lastName}
          onChange={handleLastName}
        />
        <h2>
          First Name : {name.firstName} Last Name : {name.lastName}
        </h2>
        <h2>{JSON.stringify(name)}</h2>
      </Container>
    </Box>
  );
}

export default HookObject;
