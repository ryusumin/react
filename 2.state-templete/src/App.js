import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';
import SerachBar from './components/SearchBar';
import Books from './static_data/Books';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

class App extends Component {

  // State에 대한 정의
  constructor(props) {
    super();

    this.state = {
      books: Books,
      selectedBook: Books[0] // 첫번째 값 0번째로 지정
    }
  }

  onSearchTitle(title) {
    let updateList = Books;
    updateList = updateList.filter(book => {
      return book.title.toLowerCase().search(title.toLowerCase()) !== -1; // 대소문자 구분 상관없이 검색
    });

    this.setState({
      books: updateList,
    });
  }

  onSelectedBook(book) {
    this.setState({
      selectedBook : book,
    })
  }

  render() {
    return (
      <Container>
        <SerachBar onSearchTitle={this.onSearchTitle.bind(this)} />
        <Grid container spacing={2}>
          <Grid item>
            <BookList onSelectedBook={this.onSelectedBook.bind(this)} books={this.state.books} />
          </Grid>

          <Grid item>
            <BookDetail book={this.state.selectedBook} />
          </Grid>
        </Grid>
      </Container>
    )
  }
}
export default App;
