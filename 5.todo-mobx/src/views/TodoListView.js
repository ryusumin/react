import React, { PureComponent } from 'react';

import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';
import { observer } from 'mobx-react';
import moment from 'moment';

@observer
class TodoListView extends PureComponent {
  render() {

    const { todos, onSelectedTodo } = this.props;

    return (
      <TableContainer component={Paper} >
        <Table m={3}>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Title</TableCell>
              <TableCell align='center'>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              // Array.isArray() 메서드는 인자가 Array인지 판별합니다.
              Array.isArray(todos) && todos.length ? // 배열인지 내용을 가지고 있는지
                todos.map((todo) => (
                  <TableRow key={todo.id} onClick={() => onSelectedTodo(todo)} hover>
                    <TableCell>{todo.title}</TableCell>
                    <TableCell>{moment(todo.date).format('YYYY-MM-DD HH:mm')}</TableCell>
                  </TableRow>
                ))
                :
                <TableRow>
                  <TableCell>Empty</TableCell>
                </TableRow>
            }

          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

export default TodoListView;