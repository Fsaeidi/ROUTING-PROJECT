import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Main from './Mian'
export default function Home() {




    return (
        <Container  style={{width:"100%",margin:0}} >
               <div style={{marginLeft:0,width:'1400px',color:"black",margin:0,paddingTop:0}}>
          
          <Navbar bg='dark' expand="lg" >
          <Link style={{paddingRight:'30px',color:"black"}} to='/'><img style={{width:"40%"}} src="mylogo.png" alt="" /></Link>
          <Link style={{paddingRight:'30px',color:"black"}} to='/userlist'>userList</Link>
          <Link style={{paddingRight:'30px',color:"black"}} to='/contact'>Contact</Link>
          <Link style={{paddingRight:'30px',color:"black"}} to='/posts'>posts</Link>
          <Link style={{paddingRight:'30px',color:"black"}} to='/course'>courses</Link>
          <Link style={{paddingRight:'30px',color:"black"}} to='/grid'>ListSeller</Link>
          <Link style={{paddingRight:'30px',color:"blue",marginLeft:"700px",fontSize:"20px"}} to='/login'>login</Link>
          </Navbar>
          
  </div>
 
        </Container>
       
    )
}
