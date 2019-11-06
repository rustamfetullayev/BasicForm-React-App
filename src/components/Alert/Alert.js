import React, { Component } from 'react';
import './Alert.css';

class Alert extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='alert-layout'>
                    <div className='Alert'>
                        <div className='content'>
                            <div className={'alert alert-' + this.props.type} role='alert'>{this.props.text}</div>
                        </div>
                        <button className='btn btn-light w-100' onClick={this.props.toogle}>OK</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Alert;