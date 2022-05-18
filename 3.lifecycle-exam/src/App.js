import React, { Component } from "react";
import UserList from "./UserList";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <UserList title='UserList' />
      </div>
    )
  }
}
export default App;
