import React from 'react';
import TodosInput from './TodosInput';

const NewTodos1=(props)=>{
    const saveInputData=(data)=>{
        const todosData={
            id:Math.random().toString(),...data,isChecked:false
        }
        // console.log(todosData);
        props.itemsBack(todosData);
       
    }
return(
    <div className="todos-set-input">
        {/* <input type="text" value={value} onChange={}/> */}
            <TodosInput onSaveTodosInput={saveInputData}/>
    </div>
);
}
export default NewTodos1;