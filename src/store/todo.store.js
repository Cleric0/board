import {makeAutoObservable} from "mobx";
import { v4 as uuidv4 } from 'uuid';

export class TodoStore {
  INNITIAL_TODOS =[
    {
      // dop: 68,
      id:uuidv4(), 
      text: 'Login page – performance issues', 
      status:'Backlog', 
      description:'wolvaldan', 
      label:'continuing. In our case, the function will need to wait after the '}, 
  {
      // dop: 688,
      id:uuidv4(), 
      text: 'Sprint bugfix', 
      status:'Backlog', 
      description:'wolvaldan', 
      label:'continuing. In our case, the function will need to wait after the '}, 
  {
      // dop: 6843,
      id:uuidv4(), 
      text: 'Shop page – performance issues', 
      status:'Ready', 
      description:'wolvaldan', 
      label:'continuing. In our case, the function will need to wait after the '}, 
  {
      // dop: 684364,
      id:uuidv4(), 
      text: 'Checkout bugfix', 
      status:'Ready', 
      description:'wolvaldan', 
      label:'continuing. In our case, the function will need to wait after the '},
  {
      // dop: 68436437,
      id:uuidv4(), 
      text: 'Shop bug1', 
      status:'Ready', 
      description:'wolvaldan', 
      label:'continuing. In our case, the function will need to wait after the '},
  {
      // dop: 6843646,
      id:uuidv4(), 
      text: 'Shop bug2', 
      status:'Ready', 
      description:'wolvaldan', 
      label:'continuing. In our case, the function will need to wait after the '},
      {
      //  dop: 6843644659,
      id:uuidv4(), 
      text: 'Shop page – performance issues', 
      status:'Ready', 
      description:'wolvaldan', 
      label:'continuing. In our case, the function will need to wait after the '},
      {
          // dop: 68436455,
      id:uuidv4(), 
      text: 'User page – performance issues', 
      status:'In progress', 
      description:'wolvaldan', 
      label:'continuing. In our case, the function will need to wait after the '},
  {
      // dop: 68436476,
      id:uuidv4(), 
      text: 'Auth bugfix', 
      status:'In progress', 
      description:'wolvaldan', 
      label:'continuing. In our case, the function will need to wait after the '},
  {
      // dop: 68436423,
      id:uuidv4(), 
      text: 'continuing. In our case, the function will need to wait after the ', 
      status:'Finished', 
      description:'wolvaldan', 
      label:'continuing. In our case, the function will need to wait after the '},
  {
      // dop: 6843649,
      id:uuidv4(), 
      text: 'Main page bugfix', 
      status:'Finished', 
      description:'wolvaldan', 
      label:'continuing. In our case, the function will need to wait after the '},
  ]
  todos = []

  // selectedStatus

  constructor() {
    makeAutoObservable(this)
    this.todos = this.loadTodos() || [...this.INNITIAL_TODOS]
    // this.selectedStatus = this.todos[0].id
  } 
    
  // setSelectedStatus(status) {
  //   this.selectedStatus = status
  // }

  addTodo(text) {
    this.todos.push({
      text,
      label: text,
      // статусы должны отличаться у каждого элемента, вообще лучше использовать id в качестве value для option элементов и выполнять поиск по id, т.к. оно всегда уникально
      status: 'Backlog',
      description: 'wolvaldan',
      id: uuidv4(),
    })
    this.saveTodos()
  }

  changeStatus(id, status) {
    const item = this.todos.find((todo) => todo.id === id)
    if (item) {
      item.status = status
    }
    
    this.saveTodos()
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  loadTodos() {
    try {
    return JSON.parse(localStorage.getItem('todos'))
  } catch (e) {
    return undefined
  }
}
}
