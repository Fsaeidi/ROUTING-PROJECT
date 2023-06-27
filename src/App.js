import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Posts from './components/course sector/Posts'
import MainPost from './components/course sector/MainPost'
import NotFound from './components/Notfound.js'
import Login from './components/login page/Login'
import Grid from './components/grid report/new'
import Courses from './components/course sector/Courses'
import MainCourse from './components/course sector/MainCourse'
import UserList from './components/login page/About'
import Main from './components/home/Mian'

export default function App() {
    return (
        <>
       
        <Home/>
        <Routes>
            
       
            <Route path="/posts" element={<Posts />}/>
            <Route path="/post/:postID" element={<MainPost />}/>
            <Route path="/grid/" element={<Grid />}/>
            <Route path='/userList' element={<UserList/>}/>
            <Route path="/course" element={<Courses/>}/>
            <Route path='/course/:courseID' element={<MainCourse/>}/>
            <Route path='/login' element={<Login/>}/>
            
        </Routes>
        </>
    )
}
