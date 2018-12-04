// @flow

import invariant from 'invariant';
import { push } from "react-router-redux";
import { initStore } from "./store";

class Store {
  _store: ?{
    dispatch: (Object) => void,
  };
  constructor() {
    this._store = null;
  }

  init() {
    this._store = initStore();
  }

  getStore() {
    invariant(this._store, "Redux store accessed before initialization");
    return this._store;
  }

  dispatch(data: Object) {
    this.getStore().dispatch(data);
  }

  changeRoute(path: string) {
    this.dispatch(push(path));
  }
}

const instance = new Store();
export default instance;
export const dispatch = (data: Object) => {
  instance.dispatch(data);
};
