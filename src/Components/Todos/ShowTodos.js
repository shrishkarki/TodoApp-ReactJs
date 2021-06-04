import React, {useEffect, useState } from 'react';
import './ShowTodos.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const ShowTodos=(props)=>{
    
    let [newTodo,setNewTodo]=useState(props.item);

    useEffect(()=>{
     setNewTodo(props.item);  
    },[props.item]);
  

    // console.log(newTodo);
   
    const checkedStatus=(event,id)=>{
        console.log(event.target.checked);
       
       
            const listIndex=newTodo.findIndex(inx=>{
                return inx.id===id;
            });
            console.log(listIndex);
            
            const todo=newTodo[listIndex];
            todo.isChecked=event.target.checked;
           
            // console.log(todo);
            // const todos=newTodo;
            // console.log(todos);

          

            setNewTodo(prevState=>{
                return [todo,...prevState];
            });
            // setNewTodo(todo);
            // console.log(todo);

            // console.log(newTodo);
    }
   

    return(
        props.item.map(i=>{
           return( <div className="Todos-list" key={i.id} >
            <div className="Todos-list-title" >
            {i.title}
           
            </div>
            <div className="Todos-list-edit">
                <div> <input 
                type="checkbox"
                
                value={i.select}
                 
                   onChange={(event)=>{checkedStatus(event,i.id)}}/></div>
               <div><EditIcon/></div>
                <div><DeleteIcon/></div>
                
            </div>
            </div>
           )
        })
 
    )
}
export default ShowTodos;