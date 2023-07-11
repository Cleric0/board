import {TodoStore} from './todo.store'

export class RootStore {
  todoStore

  constructor() {
    this.todoStore = new TodoStore()
  }
}

export const rootStore = new RootStore()
