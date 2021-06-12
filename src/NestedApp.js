
import React ,{ useState } from 'react';

import ShowTodos from './Components/Todos/ShowTodos';
import NewTodos1 from './Components/NewTodos/NewTodos1';
import Button from './Components/Button/Button';
import classes from './NestedApp.module.css';
import MergeInput from './Components/NewTodos/MergeInput';


let Todo=[
  {id:'1',title:"Learn React Js Basic",isChecked:false},
  {id:'2',title:"Practice React Js",isChecked:false}
];

const NestedApp=()=> {
let [Todos,setTodos]=useState(Todo);
let [filter,setFilter]=useState('all');
let [edit,setEdit]=useState(false);
const [currentTodo,setCurrentTodo]=useState([]);

console.log(Todo);


console.log(Todos);

let filteredTodos = [Todos];


if (filter === "all") {
      filteredTodos = Todos;
    }
 
   else if (filter === "active") {
    filteredTodos = Todos.filter((td) => !td.isChecked);
  } else if (filter === "done") {
    filteredTodos = Todos.filter((td) => td.isChecked);
  }




const infoBack=(data)=>{

  if (!data.title.length) {
    return;
  }
  setTodos((prevData)=>{
    
    return[...prevData,data];
  })
}




// checked Function

const handleCheckedFun=(event,id)=>{

    const listIndex=Todos.findIndex(inx=>{
        return inx.id===id
    });
    console.log(listIndex);

    Todos[listIndex].isChecked=event.target.checked;

    setTodos(prevState=>{
        return[...prevState];
    })

}


// remove after clicking remove button

const handleRemoveFun=(id)=>{

    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    
}

const RemoveAllDoneTask=()=>{
    setTodos(prevState=>prevState.filter((todo)=>!todo.isChecked));
}


// editinggg

const handleEditFun=(item)=>{
    setEdit(true);
    setCurrentTodo({...item});
};
console.log(currentTodo);



// handle edit
 function handleEditInputChange(e) {
        // set the new state value to what's currently in the edit input box
     
            setCurrentTodo({ ...currentTodo, title: e.target.value });
        
       
        
      }

      function handleEditFormSubmit(e) {
        e.preventDefault();
        
      
        const listIndex=Todos.findIndex(inx=>{
            return inx.id===currentTodo.id;
        });
         
        Todos[listIndex]=currentTodo;

        // console.log(newTodo);

         setTodos([...Todos]);
         setEdit(false);
      
      }


  return (
    <div className={classes.AppContainer}> 
     <NewTodos1 itemsBack={infoBack}/>
   
     <h1 className={classes.AppHeader}>TodoList</h1>

     <div className={classes.btnGroup}>
       <div>
         
      
        <Button  type="toggle"   onClick={()=>setFilter('all')}>All</Button> 
        <Button type="toggle"  onClick={()=>setFilter('done')}>Done</Button>
       <Button type="toggle"  onClick={()=>setFilter('active')}>Active</Button>
       </div>
   
    <div> <Button type="remove"  onClick={RemoveAllDoneTask}>Remove Done </Button></div>
     
     </div>
        

        <h5 style={{color:"green",letterSpacing:"2px",fontFamily:"Lucida Console"}}>Currently Showing: &nbsp;{filter.toLocaleUpperCase()}</h5>
     

      <div className={classes.AppShowCase}>
        
     
        {edit && <MergeInput
        header="Edit Todo List"
         submit={handleEditFormSubmit}
         title={currentTodo.title}
         change={handleEditInputChange}
         edit={edit}
          />}

        {!edit && filteredTodos.map((tod,index) => (
        <ShowTodos
         item={tod} keys={tod.id}
         handleChecked={(event)=>handleCheckedFun(event,tod.id)}
         handleRemove={()=>handleRemoveFun(tod.id)}
         handleEdit={(item)=>handleEditFun(item)}
         />
        )
        )}


        </div>
   
     </div>
   
 
     
  );

}

export default NestedApp;
