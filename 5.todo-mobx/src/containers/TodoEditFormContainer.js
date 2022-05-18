import React, { Component } from 'react';
import TodoEditFormView from '../views/TodoEdotFormView';

import {inject, observer} from 'mobx-react';

@inject('todoStore')
@observer
class TodoEditFormContainer extends Component {
  render(){

    // const { todo } = this.props.todoStore;
    const { todoStore } = this.props;

    return(
      <TodoEditFormView
        // get todo
        todo = {todoStore.todo}
      />
    )
  }
}

export default TodoEditFormContainer;