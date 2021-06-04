import React, { useState } from 'react';
import './TodosInput.css';

const TodosInput=(props)=>{
    const [enterTitle,setEnterTitle]=useState('');
    

   const changeTodosInput=(event)=>{
        
        setEnterTitle(event.target.value);

    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const Todos={
            title:enterTitle
        }
       
        props.onSaveTodosInput(Todos);
        setEnterTitle('');


    }

    return(
        <form className="todos-input" onSubmit={onSubmitHandler} >
            <input 
            type="text"
            value={enterTitle}
             onChange={changeTodosInput}/>
            <button type="submit">Add New Task</button>
            
        </form>
    );

}
export default TodosInput;