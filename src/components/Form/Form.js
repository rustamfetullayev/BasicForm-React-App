import React, { Component } from 'react';
import Input from '../Input/Input';
import './Form.css';

class Form extends Component {

    render() {
        const options = ['AZE', 'TUR', 'RUS', 'UK', 'USA'];

        return (
            <div className='form-layout'>
                <div className='Form'>
                    <form onSubmit={this.props.addNewUser}>
                        <Input inputtype='input' placeHolder='Enter your fullname...' Type='text' labelText='Fullname' val={this.props.fullname} whenChange={this.props.changeHandler} name='fullname' />
                        <Input inputtype='input' placeHolder='Enter your email address...' Type='email' labelText='Email' val={this.props.email} whenChange={this.props.changeHandler} name='email' />
                        <Input inputtype='input' placeHolder='Enter your age...' Type='number' labelText='Age' val={this.props.age} whenChange={this.props.changeHandler} name='age' />
                        <Input inputtype='textarea' placeHolder='Enter something about you...' labelText='About' val={this.props.about} whenChange={this.props.changeHandler} name='about' />
                        <Input inputtype='select' options={options} labelText='Country' placeHolder='Select country' val={this.props.countryID} whenChange={this.props.changeHandler} name='countryID' />
                        {
                            (this.props.fullname.trim() && this.props.age && this.props.about.trim() && this.props.countryID) ?
                                <button type='submit' className='btn btn-success w-100'>ADD</button>
                                :
                                null
                        }
                    </form>
                    <button className='far fa-times-circle close' onClick={this.props.toogleForm}></button>
                </div>
            </div>
        )
    }
}

export default Form;