import React from 'react';
import "./Form.css";
function Form(props){
    return(
    <div>
        <form>
            <input type="text" class="search" placeholder={props.topic}></input>
            <select className='chooseSem'>
            if(props.options ==8){
                <><option selected disabled hidden className='dropDown'>{props.dropDown}</option><option className='options'>{props.option1}</option><option className='options'>{props.option2}</option><option className='options'>{props.option3}</option><option className='options'>{props.option4}</option><option className='options'>{props.option5}</option><option className='options'>{props.option6}</option><option className='options'>{props.option7}</option><option className='options'>{props.option8}</option></>
            }
            </select>
            <button class="searchBtn">Search</button>
        </form>
    </div>)
}
export default Form;