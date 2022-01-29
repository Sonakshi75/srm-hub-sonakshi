import React from 'react';
import Navbar from './Navbar';
import Form from "./Form";
import "./Notes.css"
import NotesImage from "./Images/NotesImage.png"
function Restraunts(){
    return(<div>
        <Navbar></Navbar>
        <h1 className='NotesHead'>Restraunts</h1>
        <Form topic ="Search Restraunts" dropDown="Distance" options="5" option1="1 KM" option2="5 KM" option3="10 KM" option4="Anywhere"></Form>
        <img className='image' src={NotesImage}></img>
    </div>)
}

export default Restraunts;