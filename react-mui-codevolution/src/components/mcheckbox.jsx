import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';
import React from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useState } from 'react';

function MuiCheckbox() {
  const [acceptTnc, setTnc] = useState(false);
  //console.log({ acceptTnc });
  function handleTnc(event) {
    setTnc(event.target.checked);
  }
  const [skills, setSkills] = useState(['html']);
  function handleSkills(event) {
    const selectSkill = event.target.value;
    //console.log({ skills });
    //console.log('handleSkills', selectSkill);
    const index = skills.indexOf(selectSkill);
    //console.log({ index });
    if (index === -1) {
      setSkills([...skills, selectSkill]);
      //console.log({ skills });
    } else {
      setSkills(skills.filter((skill) => skill !== selectSkill));
    }
  }

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept the terms and conditions"
          control={<Checkbox checked={acceptTnc} onChange={handleTnc} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnc}
          onChange={handleTnc}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              value="html"
              control={
                <Checkbox
                  checked={skills.includes('html')}
                  onChange={handleSkills}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Checkbox
                  checked={skills.includes('css')}
                  onChange={handleSkills}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              value="js"
              control={
                <Checkbox
                  checked={skills.includes('js')}
                  onChange={handleSkills}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MuiCheckbox;
