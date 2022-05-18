import React, { Component } from "react";
import { Button, List, ListItemText } from '@material-ui/core';
import axios from "axios";

class UserList extends Component {

    // 생성자 초기화
    constructor(props) {
        super(props);

        this.state = {
            users: [{
                id: '',
                name: '',
            }],
            title : '',
        }
    }

    loadUsers() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({
                    users : response.data
                });
            });
    }

    // nextProps : Props로 UserList라는 값을 넣음(App.js) titles
    // prevState : title : ''
    // state에 동기화
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.title !== prevState.title) {
            return {title:nextProps.title}
        }
        return null;
    }
    
    //  Component들이 Mount 이후 componentDidMount가 호출이 되어 서버로부터 데이터를 가지고 나온 다음 스테이트에 셋팅
    componentDidMount() {
        this.loadUsers();
    }

    render() {

        const userList = this.state.users.map(user => {
            return <ListItemText primary={user.name} key={user.id} />
        });

        return (
            <div>
                <h1>{this.state.title}</h1>
                {/* <Button 
                    onClick = {this.loadUsers.bind(this)}
                variant="contained" color="primary">Load</Button> */}
                <List>
                    {userList}
                </List>
            </div>
        )
    }
}
export default UserList;