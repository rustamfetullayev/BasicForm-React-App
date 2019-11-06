import React, { Component } from 'react';
import Table from '../../components/Table/Table';
import Form from '../../components/Form/Form';
import Alert from '../../components/Alert/Alert';
import current_server from '../Axios/Axios';
import Loader from '../../components/Loader/Loader';


class UserControler extends Component {
    state = {
        fullname: '',
        email: '',
        age: 0,
        about: '',
        countryID: 0,
        persons: [],
        isFormShow: false,
        isLoading: true,
        alertComponent: null
    }

    componentDidMount() {
        current_server.get('/persons.json').then(response => {
            let persons = Object.values(response.data);
            this.setState({ persons: persons, isLoading: false })
        });
    }

    changeHandler = (event) => {
        let keyName = event.target.name;
        if (keyName === 'age') {
            if (event.target.value.length > 2) {
                return false;
            }
        }
        this.setState({
            [keyName]: event.target.value
        })
    }

    addNewUser = (event) => {
        event.preventDefault();
        let persons = this.state.persons;
        if (this.state.persons.find(p => p.email === this.state.email)) {
            this.setState({
                alertComponent: (
                    <Alert toogle={this.toogleAlert} type='danger' text='The user who has this email address is already exist.' />
                )
            })
        }
        else {
            let newPerson = {
                about: this.state.about,
                age: this.state.age,
                country: this.state.countryID,
                email: this.state.email,
                fullname: this.state.fullname
            }

            current_server.post('/persons.json', newPerson).then(response => console.log(response)).catch(error => console.log(error));
            persons.push(newPerson);
            this.setState(
                {
                    fullname: '',
                    email: '',
                    age: 0,
                    about: '',
                    countryID: 0,
                    persons: persons,
                    alertComponent: (
                        <Alert toogle={this.toogleAlert} type='success' text='The new user created successfully.' />
                    )
                }
            )
        }
    }

    toogleForm = () => {
        this.setState({
            isFormShow: !this.state.isFormShow
        })
    }

    toogleAlert = () => {
        this.setState({
            alertComponent: null
        })
    }

    render() {
        return (
            <div className='container'>
                {this.state.isLoading ?
                    <div className='row'>
                        <Loader />
                    </div>
                    :
                    <div className='row'>
                        {this.state.alertComponent}
                        {this.state.isFormShow ?
                            <Form
                                fullname={this.state.fullname}
                                email={this.state.email}
                                age={this.state.age}
                                about={this.state.about}
                                countryID={this.state.countryID}
                                changeHandler={this.changeHandler}
                                addNewUser={this.addNewUser}
                                toogleForm={this.toogleForm} />
                            :
                            null
                        }
                        {
                            this.state.persons.length !== 0 ?
                                <Table tableName='Users' data={this.state.persons} toogleForm={this.toogleForm} />
                                :
                                null
                        }
                    </div>
                }
            </div>
        )
    }
}

export default UserControler;