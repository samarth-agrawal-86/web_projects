import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { Pets, Mail, Notifications } from "@mui/icons-material";
import theme from "../theme";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchDiv = styled("div")({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "15px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "15px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(event) {
    setAnchorEl(null);
  }

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Pets
          sx={{
            display: { sx: "block", sm: "none" }, // show on mobile, hide on desktop
          }}
        />
        <Typography
          variant="h6"
          sx={{
            display: { sx: "none", sm: "block" }, // hide on mobile, show on desktop
          }}
        >
          React-MUI
        </Typography>
        <SearchDiv>
          <InputBase placeholder="search..."></InputBase>{" "}
        </SearchDiv>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={handleClick}
            sx={{
              height: "30px",
              width: "30px",
            }}
            // src="https://material-ui.com/static/images/avatar/1.jpg"
            //src="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
          />
        </Icons>
        <UserBox onClick={handleClick}>
          <Avatar
            sx={{
              height: "30px",
              width: "30px",
            }}
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
          />
        </UserBox>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
}

export default NavBar;
