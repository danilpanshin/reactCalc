import React, { Component } from 'react';

const Result = (props) =>  {
    return (
        <div className="u-full-width result">
            <h2>Световой поток светильника:</h2>
            <p>{props.total}</p>
        </div>
        );
};
 
export default Result;