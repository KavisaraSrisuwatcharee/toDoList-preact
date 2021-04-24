import style from './todolist.css'
import { useState } from 'preact/hooks';

// import CardPage from '../card';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import EditForm from '../../components/EditForm/editForm.js'
const todoList = (props) => {
    const [dialog,setDialog]= useState(false);
    const popDialog = () => {
        setDialog(true);
    }
    const closeDialog = () => {
        setDialog(false);
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
            {dialog ? <EditForm handleClose={closeDialog} open={dialog} /> : null}
        </div>
    )
}
export default todoList;