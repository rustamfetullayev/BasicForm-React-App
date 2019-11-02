import React, {Component} from 'react';
import UserController from '../../containers/UserController/UserController';

class Layout extends Component{
    render(){
        return(
            <React.Fragment>
                <UserController />
            </React.Fragment>
        )
    }
}

export default Layout;