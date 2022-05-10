/* eslint-disable */
import React, { Component } from "react";
import { List, ListItem, Container } from '@mui/material';
// 아래에서 위로 버전 변경됨
// import { List, ListItem} from '@material-ui/core'
// import List from '@matereial-ui/core.List';
// import ListItem from '@matreial-ui/core.ListItem';

import BookListItem from "./BookListItem";

class BookList extends Component {
    // 클래스 기반의 BookList 컴퍼넌트를 만들었기 때문에 this.props라는 객체가 이 컴포넌트 내에는 존재
    render() {

        // const books = this.props.books;
        const { books } = this.props;
        const bookItems = books.map(book => { // 배열
            return (
                <ListItem key={book.ISBN}>
                    <BookListItem book={book} />
                </ListItem>
            )
        });

        return (
            <Container maxWidth='sm'>
                <List>
                    {bookItems}
                </List>
            </Container>

        )
    }
}

export default BookList;