import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useState, useEffect } from 'preact/hooks';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import style from './editform.css'
import axios from "axios"
const editForm = (props) => {
  const [text, setText] = useState('')
  const editTodo = async () => {
    const res = await axios.patch(`http://localhost:5000/api/todo/${props.id}`, 
    { id: props.id, name: text })
    console.log(res.data)
    props.onEditSuccess()
    props.handleClose()
    // setTodo(res.data);
    console.log(text);
    // setText('')
  }
  return (
    <div class={style.container}>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={props.open} onClose={props.handleClose} class={style.dialog} >
        <DialogContentText style={{ width: '300px', height: '150px' }}>
          <div class={style.layout}>
            <TextField style={{ marginTop: '20px' }}
              autoFocus
              // margin="dense"
              label="Change my todo"
              onChange={(e) => {
                setText(e.target.value)
              }}
            />
            <div class={style.btn}>
              <Button onClick={editTodo} >change</Button>
              <Button onClick={props.handleClose}>cancel</Button>
            </div>
          </div>
        </DialogContentText>
      </Dialog>
    </div>
  );
}
export default editForm;