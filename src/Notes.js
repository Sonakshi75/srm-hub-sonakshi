import React from 'react';
import Navbar from "./Navbar";
import "./Notes.css";
import Form from "./Form";
import NotesImage from "./Images/NotesImage.png";
function Notes(){
    return(<div>
        <Navbar></Navbar>
        <h1 className='NotesHead'>NOTES</h1>
        <Form topic="Search Topic" dropDown="Semester" options="8" option1="Semester 1" option2="Semester 2" option3="Semester 3" option4="Semester 4" option5="Semester 5" option6="Semester 6" option7="Semester 7" option8 ="Semester 8"></Form>
        <img className='image' src={NotesImage}></img>
    </div>)
}

export default Notes;