import style from './todolist.css'
// import CardPage from '../card';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
const todoList = () => {
    return (
        <div class={style.cardContainer}>
        <Card>
        <h2 class=" mdc-typography--title">Title</h2>
        <div class={style.btn}>
        <button>Edit</button>
        <button>Delete</button>
        </div>
        </Card>   
        
    </div>
    )
}
export default todoList;