import React from 'react';

class Add extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newValue: '',
            addButtonDisbaled: true,
        };

        this.onInputChange = (e)=>{
            const {value} = e.target;
            this.setState({
                newValue: value,
                addButtonDisbaled: value === undefined || value.trim() === '' ? true : false
            })
        }

        this.addNewClicked  = ()=>{
            const {newValue} = this.state;
            try{
                this.setState({newValue: '', addButtonDisbaled: true})
                this.props.onAdd({
                    id: Math.random() * 1000,
                    title: newValue,
                    completed: false,
                })
            }catch(e){
                // some comment
            }
        }
    }
    render(){
        const {newValue, addButtonDisbaled} = this.state;
        return (
            <div className="new-todo-container">
                <span>{this.props.text}</span>
                <input onChange={this.onInputChange} value={newValue} placeholder="write some todo item" /> 
                <button disabled={addButtonDisbaled} style={{ background: addButtonDisbaled ? '#666666' : '#4BB543' }}  onClick={this.addNewClicked}>New</button>
            </div>
        );
    }
}
export default Add;