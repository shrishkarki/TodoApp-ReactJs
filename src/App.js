
import React ,{ useEffect, useState } from 'react';
import './App.css';
import Todos1 from './Components/Todos/Todos1';
import NewTodos1 from './Components/NewTodos/NewTodos1';

let Todo=[
  {id:'1',title:"Learn React Js Basic",isChecked:true},
  {id:'2',title:"Practice React Js",isChecked:false}
];

const App=()=> {
let [Todos,setTodos]=useState(Todo);
console.log(Todos);


let [filterTodo,setFilterTodo]=useState([]);

// useEffect(()=>{
//   setFilterTodo(Todos);  
//  },[Todos]);
// console.log(filterTodo);
// out 3
const [info,setInfo]=useState(true);
const [filterInfo,setFilterInfo]=useState(false);

const [checkValue,setCheckValue]=useState('');

const infoBack=(data)=>{
  setTodos((prevData)=>{
    return[...prevData,data];
  })
}

const updateTodosToShow=(received)=>{
  if(received==='all'){
    console.log("All Button clicked");

  
    
   setTodos(Todos);
   setInfo(true);
   setFilterInfo(false);
  
  }

  if(received==='done'){
   const copyFilter=[...Todos];
   
    const filtering=copyFilter.filter(f=>{
      return f.isChecked;
    });
    
    // setTodos(filtering);
    setFilterTodo(filtering);
    setInfo(false);
    setFilterInfo(true);
    setCheckValue('checked');
    
    console.log(filtering);
  }
  

}

// out IT

// const handleInfo=(received)=>{
//   if(filterInfo===true){
//     setFilterInfo(false);
//   }
  
//   setInfo(true);
  

//   updateTodosToShow(received);
// }

// const handleFilterInfo=(received)=>{
//   if(filterInfo===false){
//     setFilterInfo(false);
//     setInfo(false);
//   }
  
 
//   setFilterInfo(!filterInfo);

//   updateTodosToShow(received); 
// }







 
  return (
    <div className="">
      <NewTodos1 itemsBack={infoBack}/>
      <h1 className="App-header">TodoList</h1>
      {/* for All button */}

      <button  onClick={()=>updateTodosToShow('all')}>All</button>


       {/* for  Done button */}
       <button onClick={()=>updateTodosToShow('done')}>Done</button>

       {/* for Todo */}

        
      {/* <Todos1 items={Todos}/> */}
        {/* out */}


     {info&&<Todos1 items={Todos} select={checkValue}/>}

     {filterInfo&&<Todos1 items={filterTodo} select={checkValue}/>}
     
    </div>
  );
}

export default App;
