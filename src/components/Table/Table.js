import React from 'react';

const table = (props) => {
    return (
        <div className='col-md-12 pt-3 pb-3'>
            <h2 className='text-center'>Table of {props.tableName}</h2>
            <table className='table table-hover table-bordered'>
                <thead>
                    <tr className='text-center'>
                        {Object.keys(props.data[0]).map((k, index) => {
                            return (
                                <th key={index}>{k.toUpperCase()}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((p, index) => {
                        return (
                            <tr className='text-center' key={index}>
                                {Object.values(p).map((v,index) => {
                                    return(
                                        <td key={index}>{v}</td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button className='fas fa-plus-circle add-user' onClick={props.toogleForm}></button>
        </div>
    )
}

export default table;