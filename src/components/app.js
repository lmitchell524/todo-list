import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import ListContainer from './list-container';
import AddItem from "./add-item";
import todoData from '../todo-data';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            todoData: todoData
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem(item){
        item.complete = false;
        this.setState({
            todoData: [item, ...this.state.todoData] //adds original array into new array after you add your new item
        })
    }

    render() {
        const { todoData } = this.state;

        return (
            <div className="container">
                <h1 className="center-align">To Do List</h1>
                <AddItem add={this.addItem}/>
                <ListContainer list={todoData}/>
            </div>
        );
    }
}

export default App;
