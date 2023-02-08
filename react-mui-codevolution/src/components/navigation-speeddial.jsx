import React from 'react';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import { Save, Print, Share, FileCopyOutlined } from '@mui/icons-material';

function MuiSpeedDial() {
  return (
    <div>
      <SpeedDial
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        ariaLabel="SpeedDial"
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          icon={<FileCopyOutlined />}
          tooltipTitle="Copy"
          tooltipOpen={true}
        />
        <SpeedDialAction
          icon={<Save />}
          tooltipTitle="Save"
          tooltipOpen={true}
        />
        <SpeedDialAction
          icon={<Print />}
          tooltipTitle="Print"
          tooltipOpen={true}
        />
        <SpeedDialAction
          icon={<Share />}
          tooltipTitle="Share"
          tooltipOpen={true}
        />
      </SpeedDial>
    </div>
  );
}

export default MuiSpeedDial;
