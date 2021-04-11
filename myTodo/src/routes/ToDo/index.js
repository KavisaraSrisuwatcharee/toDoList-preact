import { h } from 'preact';
import style from './style.css';
const toDo = () =>{
return(
    <div class={style.toDo}>
        <div class={style.layout}>
        <h1>Add Todo</h1>
        <input></input>  
        <button>Add</button>
        
        </div>
    </div>
)
}
export default toDo;