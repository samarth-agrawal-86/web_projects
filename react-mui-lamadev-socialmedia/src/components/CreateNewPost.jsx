import {
  Add,
  CalendarMonth,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

function CreateNewPost() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Fab
        onClick={handleOpen}
        sx={{
          position: 'fixed',
          bottom: 16,
          left: 16,
        }}
        color="primary"
        aria-label="add"
      >
        <Add />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          width={400}
          height={300}
          bgcolor={'background.default'}
          color={'text.primary'}
          padding={3}
          borderRadius={5}
        >
          <Typography variant="h6" color={'gray'} textAlign="center">
            Create Post
          </Typography>
          <Stack
            direction={'row'}
            spacing={2}
            mt={2}
            mb={2}
            alignItems="center"
          >
            <Avatar sx={{ bgcolor: 'red', height: 30, width: 30 }}>J</Avatar>
            <Typography fontWeight={400} variant="span">
              John Doe
            </Typography>
          </Stack>
          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="What's on your mind, John?"
            variant="standard"
            alignItems="center"
          />
          <Stack
            direction="row"
            gap={1}
            justifyContent="flex-start"
            mt={2}
            mb={2}
          >
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth>
            <Button variant="contained" color="primary" sx={{ width: '80%' }}>
              Post
            </Button>
            <Button variant="contained" color="primary" sx={{ width: '20%' }}>
              <CalendarMonth />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
}

export default CreateNewPost;
