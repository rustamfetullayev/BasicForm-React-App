import React from 'react';

const input = (props) => {
    let inputElement = null;

    switch (props.inputtype) {
        case ('input'):
            inputElement = (
                <input 
                className='form-control' 
                type={props.Type} 
                placeholder={props.placeHolder} 
                onChange={props.whenChange}
                name={props.name}
                value={props.val}></input>
            )
            break;
        case ('textarea'):
            inputElement = (
                <textarea 
                className='form-control' 
                placeholder={props.placeHolder} 
                style={props.resizable ? {resize: "vertical"} : {resize:"none"}} 
                onChange={props.whenChange}
                name={props.name}
                value={props.val}></textarea>
            )
            break;
        case ('select'):
            inputElement = (
                <select className='form-control' onChange={props.whenChange} name={props.name} value={props.val}>
                    <option value='0' >{props.placeHolder}</option>
                    {props.options.map((o,index) => {
                        return(
                            <option key={index} value={o} >{o}</option>
                        )
                    })}
                </select>
            )
            break;

        default:
            inputElement = (
                <input type='text' placeholder='Default input'></input>
            )
            break;
    }

    return (
        <div className="form-group">
            <label className='form-label'>{props.labelText}</label>
            {inputElement}
        </div>
    )
}

export default input;