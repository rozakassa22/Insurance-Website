export const userColumns = [
    { field: 'id', headerName: 'ID', width: 60 },
    {
        field: 'first_name',
        headerName: 'First Name',
        width: 80,
       
      },
      {
        field: 'last_name',
        headerName: 'Last Name',
        width: 80,
        
      },
      { field: 'phone_number', headerName: 'Phone Number', width: 120 },
      { field: 'email', headerName: 'Email', width: 210 },
      { field: 'role', headerName: 'Role', width: 100 },
      { field: 'address', headerName: 'Address', width: 90 },
      { field: 'status', headerName: 'Status', width: 100,
   renderCell:(params) => {
        return(
            <div className= {`cellWithStatus ${params.row.status ? "Active" : "Deactivated"}`}> {params.row.status ? "Active" : "Deactivated" }</div>
        );
    }, 
},
{ field: 'organization', headerName: 'Organization', width: 60 },
]

export const userRows = [
    {
        id: 1,
        fullName: "Roza Kassa",
        phoneNumber: +251914881433,
        email:"roza@gmail.com",
        role:"admin",
        status: "active",
        
    },
    {
        id: 2,
        fullName: "Semhal Berhe",
        phoneNumber: +251914881004,
        email:"semu@gmail.com",
        role:"admin",
        status: "pending",
        
    },
    { 
        id: 3,
        fullName: "Oliyad Adugna",
        phoneNumber: +251911771004,
        email:"oli@gmail.com",
        role:"admin",
        status: "passive",
        
    }
]