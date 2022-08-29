import { Box, Stack } from "@mui/material";
import React from "react";
import Feed from "./components/Feed";
import NavBar from "./components/Navbar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Box>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
