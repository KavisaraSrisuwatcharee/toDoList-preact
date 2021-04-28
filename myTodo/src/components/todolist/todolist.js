import style from './todolist.css'
import { useState } from 'preact/hooks';
import axios from "axios"

// import CardPage from '../card';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import EditForm from '../../components/EditForm/editForm.js'
import axios from "axios"
const todoList = (props) => {
    const [dialog, setDialog] = useState(false);
    const popDialog = () => {
        setDialog(true);
    }
    const closeDialog = () => {
        setDialog(false);
    }
    const removeTodo = async () => {
        const res =await axios.delete(`http://localhost:5000/api/todo/${props.id}`
        ,{ id: props.id})
        props.onEditSuccess()
    }
    
    return (
        <div class={style.cardContainer}>
            <Card>
                <h2>{props.text}</h2>
                <div class={style.btn}>
                    <button onClick={popDialog}
                    >Edit</button>
                    <button  onClick={removeTodo}>Delete</button>
                </div>
            </Card>
            {dialog ? <EditForm handleClose={closeDialog} open={dialog} id={props.id} name ={props.text} 
            onEditSuccess={props.onEditSuccess} /> : null}
        </div>
    )
}
export default todoList;