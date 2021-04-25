import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './todoForm.module.css'
import ToDoList from '../todolist/todolist.js'
import axios from "Axios"
const toDoForm = () => {
    const [todo, setTodo] = useState([])
    const [text, setText] = useState('')
    
    const insertTodo = async () => {
     const res =await axios.post('http://localhost:8080/api', data, {

     })   
    }
    const fetchTodo = async () => {
        const res = await axios.get('http://localhost:8080/api')
        setTodo(res.data)
        console.log(res.data)
    }
    const addTodo = () => {
        setTodo([...todo, text])
        setText('')
    }
    useEffect(() => {
        fetchTodo()
    }, [])
    console.log(todo)

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
                <button onClick={insertTodo} >Add</button>
                <div class={style.setList}>
                {
                    todo.map(t => (<ToDoList text={t} />))
                }
                </div>
            </div>

        </div>
    )

}
export default toDoForm;