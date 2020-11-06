import React from 'react';
import _ from 'lodash';

import './main.css'
import TodoList from './components/TodoList'
class App extends React.Component {
   
    render(){
        return  (
            <TodoList />
        );
    }
}

export default App;

