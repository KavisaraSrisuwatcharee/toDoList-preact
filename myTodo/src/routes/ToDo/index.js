import { h} from 'preact';
import { useState } from 'preact/hooks';
import style from '../ToDo/style.css';
import TodoForm from '../../components/todoForm/todoForm'
const toDo = () =>{
return(
    <div class={style.toDo}>
        <TodoForm/>
        
        
    </div>
)
}
export default toDo;