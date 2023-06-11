import React, { useState } from 'react';
import {
  Modal,
  Box,
  TextField,
  Button,
  MenuItem,
  InputAdornment,
} from '@mui/material';

const EditModal = ({ open, handleClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState();
  const [profession, setProfession] = useState();
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [anniversary, setAnniversary] = useState('');

  const handleSave = () => {
    // Perform save operation here
    handleClose();
  };

  const handleCancel = () => {
    // Perform cancel operation here
    handleClose();
  };

  const genders = ['Male', 'Female', 'Other'];
  const professions = ['Teacher', 'Doctor', 'Engineer'];

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          p: 4,
          minWidth: 600,
        }}
      >
        <Box display="flex" mt={2}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ width: '100%', margin: '0 8px' }}
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            sx={{ width: '100%', margin: '0 8px' }}
          />
        </Box>
        <Box display="flex" mt={2}>
          <TextField
            label="Country Code"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            sx={{ width: '100%', margin: '0 8px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={{ width: '100%', margin: '0 8px' }}
          />
        </Box>
        <Box display="flex" mt={2}>
          <TextField
            id="gender"
            select
            label="Select Gender"
            defaultValue={gender}
            sx={{ width: '100%', margin: '0 8px' }}
            onChange={(e) => setGender(e.target.value)}
          >
            {genders.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="proffession"
            select
            label="Select Proffession"
            defaultValue={profession}
            sx={{ width: '100%', margin: '0 8px' }}
            onChange={(e) => setProfession(e.target.value)}
          >
            {professions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box display="flex" mt={2}>
          <TextField
            id="dob"
            label="Date of Birth"
            type="date"
            defaultValue={dateOfBirth}
            sx={{ width: '100%', margin: '0 8px' }}
            onChange={(e) => setDateOfBirth(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            id="anniversary"
            label="Anniversary"
            type="date"
            defaultValue={anniversary}
            sx={{ width: '100%', margin: '0 8px' }}
            onChange={(e) => setAnniversary(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </Box>
        <Box display="flex" justifyContent="flex-end" mt={4}>
          <Button variant="outlined" onClick={handleCancel} size="large">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSave}
            sx={{ ml: 2 }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditModal;
