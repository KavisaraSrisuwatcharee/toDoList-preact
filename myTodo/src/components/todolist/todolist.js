import style from './todolist.css'
import { useState } from 'preact/hooks';
import axios from "Axios"

// import CardPage from '../card';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import EditForm from '../../components/EditForm/editForm.js'
const todoList = (props) => {
    const [dialog, setDialog] = useState(false);
    const popDialog = () => {
        setDialog(true);
    }
    const closeDialog = () => {
        setDialog(false);
    }
    const editTodo = async () => {
        const res = axios.patch('http://localhost:5000/api/todo',{id:props.t.id,name:props.t.name})
        setTodo(res.data);
        console.log(text);
        setText('')
    }
    return (
        <div class={style.cardContainer}>
            <Card>
                <h2>{props.text}</h2>
                <div class={style.btn}>
                    <button onClick={popDialog}
                    >Edit</button>
                    <button >Delete</button>
                </div>
            </Card>
            {dialog ? <EditForm handleClose={closeDialog} open={dialog} edittodo={editTodo} /> : null}
        </div>
    )
}
export default todoList;