import React, {Component} from 'react';
import '../assets/css/modal.css';

class Modal extends Component{
    constructor(props){
        super(props);

        this.state = {
            visible: false
        }

        this.handleConfirmMessage = this.handleConfirmMessage.bind(this);
    }

    handleConfirmMessage(){
        this.props.callBack();
        //this function is used to call back the delete function after user confirms
        this.setState({
            visible: false
        })

    }

    render(){

        const button = <button onClick={() => this.setState({visible: true})} className={this.props.className ? this.props.className : 'btn'}>
            {this.props.children ? this.props.children : "click me"}
        </button>

        if(this.state.visible) {
            return (
                <span>
                    {button}
                    <div className="confirm-modal valign-wrapper center-align">
                        <div className="modal-content">
                            <div className="card">
                                <div className="card-content">
                                    {this.props.text}
                                </div>
                                <div className="card-action">
                                    <button onClick={this.handleConfirmMessage} className="btn green">Confirm</button>
                                    <button onClick={() => this.setState({visible: false})} className="btn red">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
            );
        }
        return button;
    }
}

export default Modal;