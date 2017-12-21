import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import axios from 'axios';
import ListContainer from './list-container';
import AddItem from "./add-item";
import Modal from "./modal";

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=pizzaandbeer';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            todoData: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }

    componentDidMount(){
        this.getData();
    }

    // getData(){
    //     axios.get(`${BASE_URL}/todos${API_KEY}`).then((resp) => {
    //         console.log('Axios response:', resp);
    //
    //         this.setState({
    //             todoData: resp.data.todos
    //         });
    //     });
    // }

    async getData(){
        const result = await axios.get(`${BASE_URL}/todos${API_KEY}`);

        this.setState({
            todoData: result.data.todos
        })
    }
    //about is ES2017 code - only works with babel

    // addItem(item){
    //     item.complete = false;
    //
    //     axios.post(`${BASE_URL}/todos${API_KEY}`, item).then((resp) => {
    //         console.log('Add Response:', resp);
    //
    //         this.getData();
    //     });
    // }

    async addItem(item){
        await axios.post(`${BASE_URL}/todos${API_KEY}`, item);

        this.getData();     //allows you to render new item to the dom(i.e. resets the state)
    }

    // deleteItem(item){
    //     const tempData = this.state.todoData.slice(); //replicate the array
    //
    //     tempData.splice(index, 1);
    //
    //     this.setState({
    //         todoData: tempData
    //     })
    // }
    async deleteItem(id){
        await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

        this.getData();
    }

    async toggleComplete(id){
        await axios.put(`${BASE_URL}/todos/${id + API_KEY}`);       //tech would use patch in this case if backend was setup to use it
                                                                    //put is used to change all the data, patch for a piece of it
        this.getData();
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
