import React, { Component } from 'react';
import TodoEditFormView from '../views/TodoEdotFormView';

import {inject, observer} from 'mobx-react';
import autobind from 'autobind-decorator';
import generateId from '../IDGenerator';

@inject('todoStore')
@autobind //inject 위에 넣으면 error!!!
@observer
class TodoEditFormContainer extends Component {
  
  onSetTodoProps(name, value) {
    this.props.todoStore.setTodoProps(name, value);
  }

  // 추가
  onAddTodo() {
    let { todo } = this.props.todoStore;
    todo = {...todo, id: generateId(5)}
    this.props.todoStore.addTodo(todo);
  }


  render(){

    // const { todo } = this.props.todoStore;
    const { todoStore } = this.props;

    return(
      <TodoEditFormView
        // get todo
        todo = {todoStore.todo}
        onSetTodoProps = {this.onSetTodoProps}
        onAddTodo = {this.onAddTodo}
      />
    )
  }
}

export default TodoEditFormContainer;