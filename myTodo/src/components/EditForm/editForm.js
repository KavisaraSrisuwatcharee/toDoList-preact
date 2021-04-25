import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import style from './editform.css'

const editForm = (props) => {
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

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
          type="email"
          
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