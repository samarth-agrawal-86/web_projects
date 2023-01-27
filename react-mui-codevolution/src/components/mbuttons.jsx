import React from 'react';
import { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

function MuiButtons() {
  const [formats, setFormats] = useState([]);
  console.log(formats);
  function formatHandler(event, newFormats) {
    setFormats(newFormats);
  }
  return (
    <div>
      <Stack direction={'column'} spacing={2}>
        <Stack direction="row" spacing={2}>
          <Button variant="text">Text</Button>
          <Button variant="contained">Default</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <Stack direction={'column'} spacing={2} display="block">
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
        </Stack>
        <Stack display="block">
          <ButtonGroup
            variant="outlined"
            color="primary"
            orientation="vertical"
            aria-label="text primary button group"
          >
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
        <Stack direction="row" spacing={2}>
          <ToggleButtonGroup onChange={formatHandler} value={formats}>
            <ToggleButton value="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </div>
  );
}

export default MuiButtons;
