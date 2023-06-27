import{useState} from 'react';
import React, { Component } from "react";
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container } from 'react-bootstrap';
import {Box} from '@mui/material';

const rowStyle = {
  color: 'white',
  background: 'blue'
  };

export default function Grid() {
  const [removedRows, setRemovedRows] = useState([]);


    const [columns,setColumns] = useState([
        { field: 'id', headerName: 'ردیف', width: '120',color:'red', headerClassName: 'super-app-theme--header', },
        {
          field: 'shop',
          headerName: 'فروشگاه',
          width: 150,
          editable: true,
          headerClassName: 'super-app-theme--header',
        },
        {
          field: 'code',
          headerName: 'کد فروشنده',
          width: 150,
          editable: true,
          headerClassName: 'super-app-theme--header',
        },
        {
          field: 'typeshop',
          headerName: 'نوع فروشنده',
          headerClassName: 'super-app-theme--header',
          width: 110,
          editable: true,
        },
        {
          field: 'city',
          headerName:'استان وشهر',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          editable: true,
          headerClassName: 'super-app-theme--header',
        },
        {
            field: 'mobile',
            headerName: 'موبایل',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            headerClassName: 'super-app-theme--header',
            editable: true,
              
          }, {
            field: 'email',
            headerName: 'ایمیل',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            headerClassName: 'super-app-theme--header',
           
          },
          {
            field: 'field',
            headerName: 'زمینه فعالیت',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            headerClassName: 'super-app-theme--header',
            width: 160,
           },
           {
            field: 'field',
            headerName: 'عملیات',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 163,
            headerClassName: 'super-app-theme--header',
            renderCell: (params)=>(
                <>
                  <span><IconButton aria-label="edit"  onClick={() => editHandle(params.value)}  style={{color:"gold"}}>
                          <EditIcon  />
                       </IconButton>
                       <IconButton aria-label="delete" onClick={() => remove(params.row.id)} style={{color:"red"}}>
                         <DeleteIcon />
                       </IconButton>

                 </span>
                </>
            )
           }



    ])
    
    
    
    const [rows,setRows] = useState([
        { id: 1, shop: 'Snow', typeshop: 'Jon', code: 35,city:'تهران', mobile:'0912345876',email:'G@co.com',field:'ورزشی' },
        { id: 2, shop: 'blur', typeshop: 'Jon', code: 35,city:'تهران', mobile:'0912345876',email:'G@co.com',field:'سرگرمی' },
        { id: 3, shop: 'greeen', typeshop: 'tom', code: 35,city:'تهران', mobile:'0912345876',email:'G@co.com',field:'تجهیزات پزشکی' },
        { id: 4, shop: 'Snow', typeshop: 'lian', code: 35,city:'تهران', mobile:'0912345876',email:'G@co.com',field:'پوشاک' },
        { id: 5, shop: 'Snow', typeshop: 'Jon', code: 35,city:'تهران', mobile:'0912345876',email:'G@co.com',field:'ورزشی' },
        { id: 6, shop: 'blur', typeshop: 'Jon', code: 35,city:'تهران', mobile:'0912345876',email:'G@co.com',field:'سرگرمی' },
        { id: 7, shop: 'greeen', typeshop: 'tom', code: 35,city:'تهران', mobile:'0912345876',email:'G@co.com',field:'تجهیزات پزشکی' },
        { id: 8, shop: 'Snow', typeshop: 'lian', code: 35,city:'تهران', mobile:'0912345876',email:'G@co.com',field:'پوشاک' },
    ])

// Function to set the row when clicking on the EditIcon

      
    const editHandle = (id) => {
        const updatedRows = rows.map((row) => {
          if (row.id === id) {
            return { ...row, selected: true };
          } else {
            return { ...row, selected: false };
          }
        });
        setRows(updatedRows);
    };

   const remove = (id) => {
       const newRows = rows.filter((row) => row.id !== id);
       
       setRows(newRows);
      
    };//
    
   
// apply a simple style object to all rows

    // define a style function inside the component function
    const getRowStyle = params => {
    if (params.data.typeshop === 'Jon') {
    return {
    color: 'red',
    fontWeight: 'bold',
    background:'green'
    };
    }
    };
  
  return (
    <Container style={{marginTop:'50px',marginLeft:'300px',direction:'rtl',width: '110%'}}>

<Box
      sx={{
        height: 300,
        maxWidth:"112%",
        width: '100%',
        '& .super-app-theme--header': {
          backgroundColor: 'rgba(155, 7,50, 0.55)',
        },
      }}
    >
      <div style={{width:'112%',height:'400px'}}>
        
      <DataGrid 
       sx={{
        boxShadow: 2,
        border: 2,
        borderColor: 'primary.light',
        '& .MuiDataGrid-cell:hover': {
          color: 'warning.main',
        },
      }}


        rowStyle={rowStyle}
        getRowStyle={getRowStyle}
        rows={rows}
        columns={columns}
      
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      </div>
</Box>
    </Container>
 
  );
}