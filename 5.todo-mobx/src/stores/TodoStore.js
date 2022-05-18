import { observable, action, computed } from 'mobx';

class TodoStore {

    @observable
    _todo = {
        title: 'test',
    } // id, title, data

    // get 메서드, 데이터만 만들어 놓고 return
    get todo() {
        return this._todo;
    }
}
export default new TodoStore();