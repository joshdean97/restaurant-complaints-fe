
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import { format } from 'date-fns';

export default function ComplaintsList({ complaints }) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'customer_name', headerName: 'Customer', width: 130 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'severity', headerName: 'Severity', width: 100 },
    { 
      field: 'complaint_date', 
      headerName: 'Date', 
      width: 180,
      valueFormatter: (params) => format(new Date(params.value), 'PPpp'),
    },
    { field: 'status', headerName: 'Status', width: 130 },
  ];

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Recent Complaints
      </Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={complaints}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
}
