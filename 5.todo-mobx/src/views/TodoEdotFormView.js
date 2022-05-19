import 'date-fns';
import React, { PureComponent } from 'react';
import { TextField, Grid, Button, Box } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

class TodoEditFormView extends PureComponent {
  render() {

    // TodoEditFormContainer에서 받아온 data
    const { todo, onSetTodoProps, onAddTodo, onUpdateTodo, onRemoveTodo } = this.props;

    // const selectedDate = new Date();

    return (
      <form noValidate>
        <Grid container xs={12} spacing={3}>
          <Grid item xs={3}>
            <TextField  // TodoStore과 연결
              margin="normal"
              id="outlined-basic"
              label="Title"
              variant="standard"
              value={todo && todo.title ? todo.title : ''}
              onChange={(event) => onSetTodoProps('title', event.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker // TodoStore과 연결
                margin="normal"
                id="date-picker-dialog"
                label="Date"
                format="yyyy-MM-dd"
                value={todo && todo.date ? todo.date : null}
                onChange={(date) => onSetTodoProps('date', date.valueOf())}
                // onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
        <Grid item >
          <Button variant='contained' color='primary' startIcon={<SaveIcon />}
            onClick={onAddTodo}>Add</Button>&nbsp;&nbsp;
          <Button variant='contained' color='default' startIcon={<UpdateIcon />}
            onClick={onUpdateTodo}>Update</Button>&nbsp;&nbsp;
          <Button variant='contained' color='secondary' startIcon={<DeleteIcon />}
          onClick={onRemoveTodo}>Delete</Button>&nbsp;&nbsp;

        </Grid>
      </form>
    )
  }
}

export default TodoEditFormView;