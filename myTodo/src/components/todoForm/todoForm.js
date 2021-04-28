import { h } from 'preact';
import { useState,useEffect } from 'preact/hooks';
import style from './todoForm.module.css'
import ToDoList from '../todolist/todolist.js'
import EditForm from '../EditForm/editForm.js'
import axios from "axios"
const toDoForm = () => {
    const [todo, setTodo] = useState([])
    const [text, setText] = useState('')
    
    
    const addTodo = async () => {
        if(text==''){
            return;
        }
        const res = await axios.post('http://localhost:5000/api/todo',
        {name:text})  
        console.log(res.data);
        setTodo(res.data);
        console.log(text);
        setText('')
        
    }
    const fetchTodo = async () => {
        const res =await axios.get('http://localhost:5000/api/todos')
        setTodo(res.data)
        console.log(res.data)
    }
    useEffect(() => {
       addTodo()
       fetchTodo()
    }, [])
   

    return (
        <div class={style.toDoForm}>

            <div class={style.layout}>
                <h1>Add Todo</h1>
                <div class={style.fill}>
                    <input value={text}
                        onChange={(e) => {
                            setText(e.target.value)
                        }
                        } />
                </div>
                <button onClick={addTodo} >Add</button>
                <div class={style.setList}>
                {
                    todo.map(t => (<ToDoList text={t.name} id={t.id} onEditSuccess={fetchTodo} />))
                }
                </div>
            </div>

        </div>
    )

}
export default toDoForm;