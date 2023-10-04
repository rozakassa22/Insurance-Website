import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../polictTablesrc';
import { useState , useEffect } from 'react';



export const Tablepolicy =  () => {
  const [data, setData] = useState([]);

   useEffect( () => {
    fetch("https://my.api.mockaroo.com/policies.json?key=4d5ad210").then((data) => data.json()).then((data) => setData(data))
  },[]

   );
  
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }
  const actionColumn = [
    {field:"action",
     headerName: "Action",
     width: 200,
     renderCell: (params) => {
      return (
        <div className = "cellaction">
          <div className ="viewbutton">View</div>
          <div className ="deletebutton" onClick={() => handleDelete(params.row.id)}>Delete</div>
          <div className ="editbutton">Edit</div>

        </div>
      );
     }
  }
  ]
  return (
    <div className="policy"style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={data}
      columns={userColumns.concat(actionColumn)}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  </div>
    
  )
}





