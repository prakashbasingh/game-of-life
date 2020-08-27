import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Box from "./Box"


class Grid extends Component {

    render() {
        // setting grid size passed in from parent component Main
        const width = (this.props.cols * 16);
        // creating empty array and later adding stuff that will sho win the grid
        let rowsArr = [];

        let boxClassName = "";
        //looping over every single box in the grid 
        for (let i = 0; i < this.props.rows; i++){
            for (let j = 0; j < this.props.cols; j++) {
                let boxId = i + " " + j; // this will creat id of each box 
                // console.log(boxId)
                // now checking if the box is true or false if true one color if false another color
                boxClassName =  this.props.mainGrid[i][j] ? "boxes on" : "boxes off";
                //now pushing all into the new array in Box component
                rowsArr.push(
                    <Box boxClassName={boxClassName}
                         key={boxId}
                         boxId={boxId}
                         row={i}
                         col={j}
                         selectBox={this.props.selectBox}
                    />
                )

            }
        }
        return (
            <div className="grid" style={{width: width}}>
                {rowsArr}
            </div>
        )
    }
}

export default Grid