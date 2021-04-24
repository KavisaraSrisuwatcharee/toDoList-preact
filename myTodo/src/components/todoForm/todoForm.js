import { h} from 'preact';
import { useState } from 'preact/hooks';
import style from './todoForm.module.css'
const toDoForm = () =>{
    const [todos,setTodos] =useState([]);
return(
    <div class={style.toDoForm}>
        <div class={style.layout}>
        <h1>Add Todo</h1>
        <div class={style.fill}>
        <input></input>  
        </div>
        <button type="submit">Add</button>
        
        </div>
    </div>
)
}
export default toDoForm;