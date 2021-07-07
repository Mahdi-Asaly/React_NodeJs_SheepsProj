import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'shpId',
    headerName: 'Sheep id',
    width: 150,
    editable: true,
  },
  {
    field: 'tags',
    headerName: 'Tag',
    width: 150,
    editable: true,
  },
  {
    field: 'shpGender',
    headerName: 'Gender',
    width: 110,
    editable: true,
  },
  {
    field: 'shpBlood',
    headerName: 'Blood',
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, tags: '12', shpId: '243124', shpGender: 'Male', shpBlood: 'B+' },
  { id: 2, tags: '124', shpId: '124124', shpGender: 'Female', shpBlood: 'B+' },
  { id: 3, tags: '22', shpId: '222211', shpGender: 'Female', shpBlood: 'B+' },
  { id: 4, tags: '33', shpId: '2424242', shpGender: 'Female', shpBlood: 'BB' },
  { id: 5, tags: '45', shpId: '521515', shpGender: 'Female', shpBlood: 'BB' },
  { id: 6, tags: '66', shpId: '122323', shpGender: 'Male', shpBlood: 'BB' },
  { id: 7, tags: '11', shpId: '521511', shpGender: 'Female', shpBlood: 'BB' },
  { id: 8, tags: '24', shpId: '1123322', shpGender: 'Male', shpBlood: 'B+' },
  { id: 9, tags: '566', shpId: '2424214', shpGender: 'Female', shpBlood: 'B+' },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

