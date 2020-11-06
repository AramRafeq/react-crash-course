import React from 'react';
import _ from 'lodash';

import '../main.css'
import Add from './Add'
import TodoItem from './TodoItem'
class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todoItems: [],
        }
        this.onNewItemAdded = (todo) =>{
            this.setState((prevState)=>{
                return {
                    todoItems: [ ...prevState.todoItems, todo ]
                }
            })
        }
        this.deleteItemClicked = (id)=>{
           let todos = this.state.todoItems;
            _.remove(todos, o=> o.id === id)
            this.setState({
                todoItems: todos
            })
        }
        this.completeItemClicked = (todoItem)=>{
           let todos = this.state.todoItems;
            todos[todoItem.index] = todoItem;
            this.setState({
                todoItems: todos
            })
        }
    }
    
    render(){
        const {todoItems} = this.state;
        return  (
            <div className="todo-container">
                <Add onAdd={this.onNewItemAdded} />
                <div className="todo-list-container">
                    {
                        todoItems.length === 0 ?
                        (<h3 style={{fontFamily: 'monospace', textAlign:'center', color:'red'}}>No Todo Items Were Found :(</h3>)
                        : (<h3 style={{fontFamily: 'monospace'}}>My List</h3>)
                    }                    
                    {
                        todoItems.map((item, index)=> <TodoItem onComplete={this.completeItemClicked} onDelete={this.deleteItemClicked} todo={ {...item, index} } />)
                    }
                    
                </div>
            </div>
        );
    }
}

export default TodoList;

