import React from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Chip, IconButton, Stack, Typography } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import EditModal from './editModal';
import { customerData } from './data';

const rows = customerData;

export default function DataTable() {
  console.log(rows);
  const [editModalOpen, setEditModalOpen] = useState(false);
  function dateToString(date) {
    if (!date) {
      return;
    }
    const option = {
      timeZone: 'Asia/Kolkata',
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    };

    const newDate = new Date(date);
    const isoString = newDate.toLocaleString('en-IN', option);

    return isoString;
  }

  function stringToDate(date) {
    const dateObj =
      typeof date === 'string'
        ? new Date(
            String(date).slice(6), // Year
            parseInt(String(date).slice(3, 5)) - 1, // Month (subtract 1 because months are zero-based)
            String(date).slice(0, 2) // Day
          )
        : date;

    return dateObj;
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },

    {
      field: 'fullName',
      headerName: 'Full Name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.countryCode || ''} ${params.row.phone || ''}`,
    },
    { field: 'gender', headerName: 'Gender', width: 130 },
    { field: 'profession', headerName: 'Profession', width: 130 },

    {
      field: 'dob',
      headerName: 'DOB',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) => dateToString(`${params.row.dob}`),
    },

    {
      field: 'anniversary',
      headerName: 'Anniversary',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) => dateToString(`${params.row.anniversary}`),
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => {
        const status = params.row.status;
        let color = '';
        switch (status) {
          case 'complete':
            color = 'success';
            break;
          case 'partial':
            color = 'info';
            break;
          case 'duplicate':
            color = 'warning';
            break;
          case 'missing':
            color = 'error';
            break;
          default:
            color = 'default';
        }
        return (
          <Chip
            label={status}
            color={color}
            variant="filled"
            sx={{
              minWidth: '70px',
              '& .MuiChip-label': {
                color: 'white', // Replace with your desired label color
              },
            }}
          />
        );
      },
    },
    {
      field: 'edit',
      headerName: 'Actions',
      width: 100,
      // checkboxSelection: false,
      // preventSelectionOnClick: true,
      renderCell: (rowData) => {
        return (
          <Stack direction="row" spacing={1}>
            <IconButton
              onClick={(event) => {
                event.stopPropagation();
                handleEditClick(rowData);
              }}
            >
              <Edit sx={{ color: 'blue' }} />
            </IconButton>
            <IconButton onClick={handleEditClick}>
              <Delete color="warning" />
            </IconButton>
          </Stack>
        );
      },
    },
  ];

  const handleEditClick = (rowData) => {
    // Open the edit modal and perform other actions
    console.log('Edit row:', rowData);
    setEditModalOpen(true);
  };

  const handleEditModalClose = (event) => {
    // Close the edit modal

    setEditModalOpen(false);
  };
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20, 30]}
        checkboxSelection
      />
      {editModalOpen && (
        <EditModal open={editModalOpen} handleClose={handleEditModalClose} />
      )}
    </div>
  );
}
