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

    @observable
    _searchText = '';

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

    get searchText() {
        return this._searchText;
    }

    // todo  설정
    @action
    setTodoProps(name, value) {
        this._todo = {
            ...this._todo,
            [name]: value,
        };
    }

    // 사용자가 입력한 값
    @action
    setSearchText(searchText) {
        this._searchText = searchText;
    }

    @action
    addTodo(todo) {
        this._todos.push(todo);
    }

    // 내용 클릭 시 title, Date에 나타남
    @action
    seletedTodo(todo) {
        this._todo = todo;
    }

    @action
    updateTodo() {
        // 변경해야할 것 찾아야함
        let foundTodo = this._todos.find((todo) => todo.id === this._todo.id);
        foundTodo.title = this._todo.title;
        foundTodo.date = this._todo.date;

        this._todo = {};
    }

    @action
    removeTodo() {
        let index = this._todos.findIndex((todo) => todo.id === this._todo.id);
        if(index > -1) {
            this._todos.splice(index, 1); // 제거하겠다
        }

        this._todo = {};
    }
}
export default new TodoStore();