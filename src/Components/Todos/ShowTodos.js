import React from 'react';
import './ShowTodos.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';





const ShowTodos=(props)=>{

    return(
        <div className="Todos-list" key={props.keys} >
          
               
            {/* Title */}
            <div className="Todos-list-title" 
           
            style={{textDecoration: props.item.isChecked ? 'line-through' : 'none' }} >
                
            {props.item.title}
            </div>


            <div className="ListIcon">
            {/* checkbox */}
           
            <div>
            <input 
                type="checkbox"
                
                checked={props.item.isChecked}
                 
                   onChange={props.handleChecked}/>
            </div>
            
              <div><EditIcon onClick={()=>props.handleEdit(props.item)} /></div>
                 <div><DeleteIcon onClick={props.handleRemove}/></div>
           
           



            </div>
       
            </div>
           );
       
    

   
}
export default ShowTodos;