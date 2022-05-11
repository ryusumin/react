import React, { Component } from "react";
import { Box, Button } from '@material-ui/core'; 

class Counter extends Component {

    // State에 대한 초기화 : 일반적으로 constructor에서 할 수 있음
    constructor() {
        super();
        this.state ={
            count : 5,
        }
    }

    increment() { // 증가함수
        this.setState({ // state 값을 변경해줄 때 this.setState에 메서드 이용
            count : this.state.count + 1,
        })
    }

    decrement() { // 감소함수
        this.setState({
            count : this.state.count -1,
        })
    }
    render() {
 
        return (
            <div>
                <Button variant="contained" color="primary" size="large" onClick={this.increment.bind(this)}> + </Button>
                <Box component="span" m={5}>  {this.state.count}  </Box>
                <Button variant="contained" color="primary" size="large" onClick={this.decrement.bind(this)}> - </Button>
            </div>
        )
    }
}
export default Counter;