import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import ListContainer from './list-container';
import AddItem from "./add-item";
import todoData from '../todo-data';
import Modal from "./modal";

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            todoData: todoData
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }

    addItem(item){
        item.complete = false;
        this.setState({
            todoData: [item, ...this.state.todoData] //adds original array into new array after you add your new item
        })
    }

    deleteItem(index){
        const tempData = this.state.todoData.slice(); //replicate the array

        tempData.splice(index, 1);

        this.setState({
            todoData: tempData
        })
    }

    toggleComplete(index){
        const tempData = this.state.todoData.slice();

        tempData[index].complete = !tempData[index].complete; //sets it opposite to whatever it was

        this.setState({
            todoData: tempData
        })
    }

    render() {
        const { todoData } = this.state;

        return (
            <div className="container">
                <h1 className="center-align">To Do List</h1>
                <AddItem add={this.addItem}/>
                <ListContainer list={todoData} delete={this.deleteItem} toggleComplete={this.toggleComplete}/>
            </div>
        );
    }
}

export default App;
