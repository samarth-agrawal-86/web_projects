import React from 'react';
import { Box } from '@mui/material';
import Post from './Post';

function Feed() {
  return (
    <Box flex={4} p={2} m={2}>
      <Post
        av="R"
        title="Rahul S"
        subheader="September 14, 2016"
        img="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
      />
      <Post
        av="P"
        title="Preet A"
        subheader="August 10, 2015"
        img="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      />
      <Post
        av="R"
        title="Mau D"
        subheader="July 1, 2015"
        img="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
      />
    </Box>
  );
}

export default Feed;
