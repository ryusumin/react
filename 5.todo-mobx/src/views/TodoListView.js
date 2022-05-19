import React, { PureComponent } from 'react';

import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';

import { observer } from 'mobx-react';

@observer
class TodoListView extends PureComponent {
  render() {

    const { todos } = this.props;

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
              // 데이터가 없을 경우 empty 삼항연산자
              Array.isArray(todos) && todos.length ? // 배열인지 내용을 가지고 있는지
                todos.map((todo) => (
                  <TableRow key={todo.id} >
                    <TableCell>{todo.title}</TableCell>
                    <TableCell>{todo.date}</TableCell>
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