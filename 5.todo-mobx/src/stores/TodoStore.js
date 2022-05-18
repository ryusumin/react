import { observable, action, computed, makeObservable } from 'mobx';

class TodoStore {

    constructor() { // 데이터 변경이 되었을 때 변경이 됨
        makeObservable(this);
    }

    @observable
    _todo = {} // private로 생각  id, title, data

    // get 메서드, 데이터만 만들어 놓고 return
    get todo() {
        return this._todo;
    }

    @action
    setTodoProps(name, value) {
        this._todo = {
            ...this._todo,
            // name이 title이면 title이 들어가고 data면 data가 들어가도록
            [name] : value
        }
    }
}
export default new TodoStore();