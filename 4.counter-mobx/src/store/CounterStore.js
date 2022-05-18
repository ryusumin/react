import { observable,  action, makeObservable } from 'mobx';

class CounterStore {

    constructor() { //MobX 6에서 추가된 내용임
        makeObservable(this);
    }

    @observable
    _count = 5;


    // get 메서드는 사용하는 쪽에서 마치 property처럼 사용할 수 있음
    get count() {
        return this._count;
    }

    @action
    increment() {
        this._count ++;
        console.log("increment : " + this._count);
    }

    @action
    decrement() {
        this._count --;
        console.log("decrement : " + this._count);
    }

}
// export default CounterStore; 사용하는 곳에서 new 해서 사용해야 함
export default new CounterStore();