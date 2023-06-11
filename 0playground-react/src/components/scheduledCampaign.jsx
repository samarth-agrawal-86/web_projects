import React, { useEffect } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  styled,
} from '@mui/material';
import MuiAvatar from '@mui/material/Avatar';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import {
  CheckCircle,
  Delete,
  Pending,
  HourglassTop,
} from '@mui/icons-material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  overflow: 'hidden',
  // "&:not(:last-child)": {
  //   borderBottom: 0,
  // },
  '&:before': {
    display: 'none',
  },
  border: '1px solid rgba(145, 158, 171, 0.25)',

  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: theme.spacing(2),
  '&.Mui-expanded': {
    boxShadow: '0px 0px 10px 3px rgba(145, 158, 171, 0.1)',
    marginBottom: theme.spacing(5),
    '& .MuiAccordionSummary-root': {
      backgroundColor: 'rgba(145, 158, 171, 0.1)',
    },
  },
  boxShadow: '0px 0px 10px 3px rgba(145, 158, 171, 0.1)',
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    overflow: 'hidden',
  },
  '&:hover': {
    borderRadius: theme.spacing(1),
    // backgroundColor: 'rgba(145, 158, 171, 0.1)',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)} ${theme.spacing(
    0
  )} ${theme.spacing(3)}`,
  '& svg': {
    width: theme.spacing(4),
  },
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
  borderTop: '1px solid rgba(145, 158, 171, 0.2)',
}));

const Avatar = styled((props) => <MuiAvatar variant="rounded" {...props} />)(
  ({ theme }) => ({
    borderRadius: theme.spacing(1),
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    color: 'black',
  })
);

function DisplayCampaigns({ scheduledCampaigns }) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState({});
  const [reqInProgress, setReqInProgress] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState({});

  //for opening and closeing delete confomation dialog
  function handleDeleteDialogOpen(campaign, e) {
    if (e) {
      e.stopPropagation();
    }
    setIsDeleteDialogOpen(true);
    setSelectedCampaign(campaign);
  }
  function handleDeleteDialogClose() {
    setIsDeleteDialogOpen(false);
  }

  //for deleting campaign
  async function deleteSelectedCampaign() {
    setReqInProgress(true);
    console.warn('Deleting campaign', selectedCampaign);
    handleDeleteDialogClose();
  }
  //hadleing accordion exapasions
  function handleAccordionChange(id) {
    return (event, isExpanded) => {
      setExpandedAccordion(isExpanded ? id : '');
    };
  }

  return (
    <>
      {/* <Typography variant="h2">Campaign</Typography> */}
      <Box sx={{ margin: '3rem 5rem' }}>
        {scheduledCampaigns.map((campaign, i) => (
          <Accordion
            expanded={expandedAccordion === campaign._id}
            onChange={handleAccordionChange(campaign._id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
                overflow="hidden"
              >
                <Box
                  gap={2}
                  display="flex"
                  alignItems="center"
                  overflow="hidden"
                >
                  <Avatar
                    sx={{
                      width: '3rem',
                      height: '3rem',
                      backgroundColor:
                        campaign.status === 'complete'
                          ? 'rgba(46, 125, 50, 0.1)'
                          : 'rgba(237, 108, 2, 0.1)',
                    }}
                  >
                    {campaign.status === 'complete' ? (
                      <CheckCircle color="success" />
                    ) : (
                      <HourglassTop color="warning" />
                    )}
                  </Avatar>
                  <Stack overflow="hidden">
                    <Typography
                      variant="body1"
                      fontWeight={700}
                      sx={{
                        transform: '200ms ease',
                      }}
                    >
                      {new Date(campaign.scheduledAt).toLocaleDateString(
                        'en-IN',
                        {
                          timeZone: 'Asia/Kolkata',
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric',
                        }
                      )}
                      , {` `}
                      {new Date(campaign.scheduledAt).toLocaleTimeString(
                        'en-IN',
                        {
                          hour: '2-digit',
                          hour12: true,
                          minute: '2-digit',
                        }
                      )}
                    </Typography>
                    {expandedAccordion !== campaign._id ? (
                      <Typography
                        variant="body2"
                        color="gray"
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {campaign.message}
                      </Typography>
                    ) : null}
                  </Stack>
                </Box>
                <Box padding="0 1rem 0 3rem">
                  <IconButton
                    onClick={(e) => handleDeleteDialogOpen(campaign, e)}
                    disabled={
                      selectedCampaign._id === campaign._id && reqInProgress
                    }
                    size="medium"
                    color="warning"
                  >
                    {selectedCampaign._id === campaign._id && reqInProgress ? (
                      <CircularProgress
                        color="inherit"
                        style={{
                          width: '1.5rem',
                          height: '1.5rem',
                        }}
                      />
                    ) : (
                      <Delete color="error" />
                    )}
                  </IconButton>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box padding="1rem 0rem">{campaign.message}</Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Dialog for confirmation of delete */}
      <Dialog
        open={isDeleteDialogOpen}
        onClose={handleDeleteDialogClose}
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '16px',
          },
        }}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText
            // id="scroll-dialog-description"
            // ref={descriptionElementRef}
            tabIndex={-1}
          >
            {selectedCampaign.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            padding: '1rem',
          }}
        >
          <Button
            onClick={handleDeleteDialogClose}
            variant="outlined"
            color="error"
            sx={{
              borderRadius: '100px',
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={deleteSelectedCampaign}
            variant="contained"
            color="error"
            sx={{
              borderRadius: '100px',
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function ScheduledCampaignPage() {
  const [value, setValue] = useState(0);
  const [scheduledCampaigns, setScheduledCampaigns] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setScheduledCampaigns([
      {
        _id: 1,
        date: new Date('2023-05-30T09:30:00'),
        status: 'complete',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis eu est at consectetur. Aenean dapibus, magna eget porta vestibulum, dui velit tristique elit, non pellentesque purus nisl ut ligula.',
      },
      {
        _id: 2,
        date: new Date('2023-06-01T14:45:00'),
        status: 'in progress',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor dapibus pulvinar. Nunc nec nibh non nunc iaculis aliquam.',
      },
      {
        _id: 3,
        date: new Date('2023-06-02T18:00:00'),
        status: 'pending',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis ipsum sed tellus sollicitudin, eget ultricies urna sollicitudin.',
      },
      {
        _id: 4,
        date: new Date('2023-06-03T11:15:00'),
        status: 'complete',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum mi ut felis aliquam, nec laoreet orci pellentesque.',
      },
      {
        _id: 5,
        date: new Date('2023-06-04T16:30:00'),
        status: 'in progress',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor orci in urna feugiat, vitae sagittis quam bibendum.',
      },
    ]);
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Queued" {...a11yProps(0)} />
          <Tab label="Complete" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DisplayCampaigns
          scheduledCampaigns={scheduledCampaigns.filter((campaign, i) => {
            return campaign.status !== 'complete';
          })}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DisplayCampaigns
          scheduledCampaigns={scheduledCampaigns.filter((campaign, i) => {
            return campaign.status === 'complete';
          })}
        />
      </TabPanel>
    </Box>
  );
}

export default ScheduledCampaignPage;
