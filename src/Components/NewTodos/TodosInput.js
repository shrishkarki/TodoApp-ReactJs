import React, { useState } from 'react';

import MergeInput from './MergeInput';


const TodosInput=(props)=>{
    const [enterTitle,setEnterTitle]=useState('');
  

    // console.log(enterTitle);
    

   const changeTodosInput=(event)=>{
        
        setEnterTitle(event.target.value);
        // props.onSaveTodosInput(enterTitle);
        // console.log(enterTitle);

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
         
        <MergeInput
            submit={onSubmitHandler}
            title={enterTitle}
            change={changeTodosInput}
        />

        // <form className="todos-input" onSubmit={onSubmitHandler} >
        //     <input 
        //     type="text"
        //     value={enterTitle}
        //      onChange={changeTodosInput}/>
        //     <button type="submit">Add New Task</button>
            
        // </form>
    
    );

}
export default TodosInput;