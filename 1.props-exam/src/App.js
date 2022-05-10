import React, {Component} from "react";
import BookList from "./components/BookList";

import Books from "./static_data/Books";

class App extends Component {
  render() {
    
    return (
      // BookList에 books라는 이름을 갖는 프롭스가 전달이 됨
      <BookList books={ Books }/>
    )
  }
}

export default App;
