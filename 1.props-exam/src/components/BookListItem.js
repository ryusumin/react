import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import { Paper, Grid, Typography } from '@mui/material';

const styles = {
    image: {
        width: 128,
        height: 164,
    },
    textArea: {
        width: 390
    },
}

class BookListItem extends Component {
    // class 기반의 컴포넌트는 render() 메서드를 재정의
    // 리턴구문이 필요하다 class - render - return
    render() {
        // 책 한권의 정보가 들어있다라는 전제로 구성하면 됨
        const { book, classes } = this.props;
        return (
            <Paper>
                <Grid container spacing={2}>
                    <Grid item>
                        <img className={classes.image} src={book.imgUrl} alt="profile" />
                    </Grid>
                    <Grid item className={classes.textArea}>
                        <Typography component='h5' variant="h5" >
                            {book.title}
                        </Typography>
                        <Typography gutterBottom>
                            {book.author}
                        </Typography>
                        <Typography color="secondary">
                            {book.introduce}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}
export default withStyles(styles)(BookListItem);