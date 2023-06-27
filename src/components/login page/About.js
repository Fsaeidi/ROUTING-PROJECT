import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import {Table} from 'react-bootstrap'
import AddIcon from '@mui/icons-material/Add';
import {AiFillDelete} from 'react-icons/ai'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Tooltip from '@mui/material/Tooltip';
import { IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Modal,Button,Form } from 'react-bootstrap';

export default function UserList() {

  const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
     const[email,setEmail] =useState('');

  const[users,setUsers]=useState([])
  const navigate = useNavigate();
  const[showDeleteModal,setShowDeleteModal]=useState(false);
  const[userId,setUserId]=useState('')
  const [getData,setGetData]=useState(false)
  const[showEditModal,setShowEditModal]=useState(false)


  useEffect(async()=>{
    await fetch('https://my-db-e556d-default-rtdb.firebaseio.com/users.json')
    .then(response=>response.json()).then(
      data => {console.log(Object.entries(data));
        //convert json to string
      setUsers(Object.entries(data))
      }) 
  },[getData])
 
   const DeleteHandler= async()=>{
  
   await fetch(`https://my-db-e556d-default-rtdb.firebaseio.com/users/${userId}.json`,{
      method:'DELETE'
    })
    .then(response=>console.log(response))
    setShowDeleteModal(false)
    setGetData(prev=>!prev)
   }

   const editHandler= async()=>{
    let editData={
     firstName,
     lastName,
     email
    }
    await fetch(`https://my-db-e556d-default-rtdb.firebaseio.com/users/${userId}.json`,{
       method:"PUT",
       body:JSON.stringify(editData)
    })
    .then(response=>console.log(response))
    setShowEditModal(false)
    setGetData(prev=>!prev)
   }
   useEffect(()=>{
     let mainUserInfo=users.find(user=>user[0]==userId)
     if(mainUserInfo){
      setFirstName(mainUserInfo[1].firstName)
      setLastName(mainUserInfo[1].lastName)
      setEmail(mainUserInfo[1].email)
     }
     console.log(mainUserInfo)
   },[userId])
    return (
        <div style={{width:'1100px',textAlign:"center",marginLeft:"200px"}}>
            
   

            <Tooltip title="Add user">
            <button 
            style={{textAlign:"right",float: 'right',marginBottom:"10px",marginTop:"10px",border:0}} 
            onClick={() => navigate("/login")}
            ><AddIcon /></button>
              </Tooltip> 
            
         
             <Table style={{marginTop:"50px"}} striped bordered hover>
      <thead>
        <tr style={{background:'lightgreen',border:"10px sold blue"}}>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user,index)=>(
            <tr>
          <td>{index +1}</td>
          <td>{user[1].firstName}</td>
          <td>{user[1].lastName}</td>
          <td>{user[1].email}</td>
          <td>
           
          <AiFillDelete
          onClick={()=>{setShowDeleteModal(true)
                       setUserId(user[0])}
          }
          />
            <ModeEditOutlineIcon 
            onClick={()=>{setShowEditModal(true)
                          setUserId(user[0])            
            }}/>
           
          </td>
        </tr>
        ))}
        
        
      </tbody>
    </Table> 

    <Modal
      show={showDeleteModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={()=>setShowDeleteModal(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          delete confirm
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Are you sure?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>setShowDeleteModal(false)}>Close</Button>
        <Button onClick={DeleteHandler}>Yes</Button>
      </Modal.Footer>
    </Modal>

 <Modal
      show={showEditModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={()=>setShowEditModal(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          edit confirm
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>firstName</Form.Label>
        <Form.Control type="text" onChange={(event)=>setFirstName(event.target.value)} placeholder="" value={firstName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>lastName</Form.Label>
        <Form.Control type='text' onChange={(event)=>setLastName(event.target.value)} value={lastName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>email</Form.Label>
        <Form.Control type='email' onChange={(event)=>setEmail(event.target.value)} value={email} />
      </Form.Group>
      
    </Form>       
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>setShowEditModal(false)}>Close</Button>
        <Button onClick={editHandler}>save edits</Button>
      </Modal.Footer>
    </Modal>


            
        </div>
    )
}
