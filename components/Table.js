"use client"

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Modal } from '@mui/material';
import BasicModal from './Modal';

import Pusher from 'pusher-js';



import KeepMountedModal from './DeleteModal';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'category', headerName: 'Category', width: 130 },
  { field: 'qpn', headerName: 'QPN', width: 130 },
  { field: 'part_no', headerName: 'Part No', width: 130 },
  { field: 'delete', headerName: 'delete', width: 130 },
 
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
 
];

export default function DataTable({data}) {


  const [new_data, setnew_data] = React.useState(data)
// let new_data=[...data]



// React.useEffect(() => {
//   // Enable pusher logging - don't include this in production
//   // Pusher.logToConsole = true;

//   const pusher = new Pusher('ddd9049baeb19290bc0e', {
//     cluster: 'ap2'
//   });

//   const channel = pusher.subscribe('my-channel');
//   channel.bind('my-event', function(data) {
//     setnew_data([...new_data,data])
//   });

//   return () => {
//     pusher.unbind_all()
//     pusher.unsubscribe('my-channel');
    
//   };
// }, [new_data]);

const handleDelete = (id) => {
  setnew_data(new_data.filter((item) => item.id !== id));
};

console.log(new_data);

  return (
    <div style={{ height: 400, width: '100%' }}>




<table>

    <thead>
     <tr>
     <th>id</th>
      <th>category</th>
      <th>qpn</th>
      <th>edit</th>
      <th>Delete</th>
     </tr>
    </thead>

   <tbody>
    {data.map((i)=>(
     <tr key={i.id}>
       <td>{i.id}</td>
       
      <td>{i.category}</td>

      <td>{i.qpn}</td>
      <td className='cursor-pointer'> <BasicModal  id={i.id}/> </td>
      <td className='cursor-pointer'> <KeepMountedModal  id={i.id} onDelete={() => handleDelete(item.id)}  /> </td>
      </tr>

    ))}
     


   
   </tbody>

</table>




      {/* <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[8, 10]}
        checkboxSelection
     
      /> */}
    </div>
  );
}
