import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Box extends Component{
    selectBox = () => {
        // here calling select box method and passing in rows and columns from the parent components
        this.props.selectBox(this.props.row, this.props.col);
    }


    render() {
        return (
            <div className={this.props.boxClassName}
                 id={this.props.id}
                 onClick={this.selectBox}
            />
        );
    }
}

export default Box