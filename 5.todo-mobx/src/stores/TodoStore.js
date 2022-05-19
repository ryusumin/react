import { observable, action, computed, makeObservable, toJS } from 'mobx';

class TodoStore {

    //   mobX6 부터 makeObservable 함수를 통해 생성자에서 makeObservable를 지정해줘야 데이터 변경이 반영된다.
    constructor() {
        makeObservable(this);
    }

    @observable
    _todo = {} // private로 생각  id, title, data

    // todo 데이터들을 담을 todos 배열객체 
    @observable
    _todos = [];

    // get 메서드, 데이터만 만들어 놓고 return (다른 곳에 내보내기 위해서) 
    get todo() {
        return this._todo;
    }
    
    //   observervable로 관리하는 데이터들은, mobx가 정의한 observervable데이터로 랩핑이된다.
    //   computed 를 사용하게 되면, tods가 호출될때마다 toJS를 계속해서 호출될텐데, computed를사용시에, observervable데이터가 변경이 일어나지 않으면 최종으로 캐싱하고 있는 데이터를 리턴한다.
    //   get메소드에서 observervable데이터에 대한 특정연산이 진행될때는 꼭 computed사용해야한다.
    @computed
    get todos() {
        // return this._todos; // 잘 들어감 아래에
        // return this._todos ? this._todos.slice() : [];
        return toJS(this._todos);
    }

    // todo  설정
    @action
    setTodoProps(name, value) {
        this._todo = {
            ...this._todo,
            [name]: value,
        };
    }

    @action
    addTodo(todo) {
        this._todos.push(todo);
    }
}
export default new TodoStore();