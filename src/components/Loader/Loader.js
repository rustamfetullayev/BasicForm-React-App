import React from 'react';
import './Loader.css';

const  loader = () => {
    return(
        <div id='loader'>
            <img src={require('../../assets/images/35.gif')} alt=''/>
        </div>
    )
}

export default loader;