import React from 'react';
import classes from './TodosInput.module.css';
import Button from '../Button/Button';

const MergeInput=(props)=>{


    return(
        <>
     {!(props.edit) && <form className={classes.todosFirstInput} onSubmit={props.submit}>
            <h1>{props.header}</h1>
                 <input 
            type="text"
            value={props.title}
            placeholder="Add New Todo"
             onChange={props.change}/>
            <Button type="submit">Add New Task</Button>
        </form>
    }



        {props.edit &&<div className={classes.backdrop}/>}
        {props.edit &&<form className={classes.todosInput} onSubmit={props.submit}>
            <h1>{props.header}</h1>
                 <input 
            type="text"
            value={props.title}
             onChange={props.change}/>
            <Button type="submit">Edit Done</Button>
        </form>
}
        </>
    );
};

export default MergeInput;