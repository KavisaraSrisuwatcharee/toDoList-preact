import { h} from 'preact';
import { useState } from 'preact/hooks';
import style from './todoForm.module.css'
import ToDoList from '../todolist/todolist.js'
const toDoForm = () =>{
    // state ={ todos:[],text:''};
    // // const [todos,setTodos] =useState([]);
    // addTodo = () => {
    //     let {todos,text} =this.state;
    //     todos = todos.concat({ text });
    //     this.setState({ todos, text: '' });
    // }
   
    return(
    <div class={style.toDoForm}>
        <form >
        <div class={style.layout}>
        <h1>Add Todo</h1>
        <div class={style.fill}>
        <input value={text} 
        onChange={(e) => this.setState({
            text:e.target.value}
            )}/>
        </div>
        <button type="submit">Add</button>
        <ToDoList/>
        </div>
        </form>
    </div>
        )
    
}
export default toDoForm;