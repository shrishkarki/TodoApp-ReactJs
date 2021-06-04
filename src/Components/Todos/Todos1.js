import React from 'react';
import ShowTodos from './ShowTodos';


const Todos1=(props)=>{

    // console.log(props.items);

    return(

        
    <ShowTodos item={props.items} select={props.select}/>
    );
    
    // return(
    //     props.items.map(item=>{
    //        return  
    //     })
       
    // )
}
export default Todos1;