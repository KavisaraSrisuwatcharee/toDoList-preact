import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import style from './editform.css'
import Axios from "Axios"
const editForm = (props) => {
  

  return (
    <div class={style.container}>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={props.open} onClose={props.handleClose} class={style.dialog} >
      <DialogContentText style={{ width: '300px', height: '150px'}}>
							<div class={style.layout}>
        <TextField style={{marginTop:'20px'}}
          autoFocus
          // margin="dense"
          label="Change my todo"
          
          
        />
        <div class={style.btn}>
          <Button onClick={props.handleClose}>change</Button>
          <Button onClick={props.handleClose}>cancel</Button>
        </div>
        </div>
        </DialogContentText>
      </Dialog>
    </div>
  );
}
export default editForm;