import React from 'react';

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
        };
        this.removeTodo = ()=>{
            try{
                this.props.onDelete(this.props.todo.id);
            }catch(e){
                // hello
            }
        }
        this.completeTodo = ()=>{
            try{
                const todo = this.props.todo;
                todo.completed = true;
                this.props.onComplete(todo);
            }catch(e){
                // hello
            }
        }
        
    }
    render(){
        return (
            <div className="todo-item">
                <span>{this.props.todo.title}</span>
                <button style={{background:'#D01118', color: 'white'}} onClick={this.removeTodo}>×</button>
                {
                    !this.props.todo.completed ?
                    <button style={{background:'#4BB543', color: 'white'}} onClick={this.completeTodo}>✓</button>
                    : ''
                }
            </div>
        );
    }
}
export default TodoItem;