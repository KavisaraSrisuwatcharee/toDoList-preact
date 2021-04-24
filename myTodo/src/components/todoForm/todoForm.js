import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './todoForm.module.css'
import ToDoList from '../todolist/todolist.js'
const toDoForm = () => {
    const [todo, setTodo] = useState([])
    const [text, setText] = useState('')
    const addTodo = () => {
        setTodo([...todo, text])
        setText('')
    }

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
                    todo.map(t => (<ToDoList text={t} />))
                }
                </div>
            </div>

        </div>
    )

}
export default toDoForm;