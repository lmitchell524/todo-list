import React, {Component} from 'react';
import ListItem from './listItem';

class ListContainer extends Component{
    render(){
        console.log('Data:', this.props.list);

        const list = this.props.list.map((item, index) => {
            return <ListItem item={item} delete={this.props.delete} key={index} complete={this.props.toggleComplete}/>
        })

        return(
            <div>
                <ul className="collection">
                    {list.length ? list : <li className="collection-item center-align">No Items Available</li>}
                </ul>
            </div>
        )
    }
}

export default ListContainer;