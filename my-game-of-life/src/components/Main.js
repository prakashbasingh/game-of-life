import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from "./Grid"


class Main extends Component{
    // setting state using constructor and super()
    constructor(){
        super();
        this.speed = 100;
        this.rows = 30;
        this.cols = 30;

        this.state = {
            generation: 0,
            // creating an array that is big as rows and fill that array mapping with another array which is big as this.cols each element in that elements are set to be false(every unit of the grids are turned off at the start)
            gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
        }
    }

    selectBox = (row, col) => {
        // making copy of the gridFull array
        let gridCopy = arrayClone(this.state.gridFull);
        // when we click on box setting to opposite state. if it is true and clicked set it to false and vice versa
        gridCopy[row][col] = !gridCopy[row][col];
        //now updating grid state
        this.setState({
            gridFull: gridCopy
        })
    }

    render(){
        return (
            <div>
                {/* passing state variables as props to Grid components */}
                <Grid gridFull = {this.state.gridFull} // passing full Grid
                      rows = {this.rows} // passing the rows
                      cols = {this.cols} // passing the columns
                      selectBox={this.selectBox} //passing select box method
                />

                <h4>Generation: {this.state.generation} </h4>

            </div>
        )
    }
}

function arrayClone(arr){
    return JSON.parse(JSON.stringify(arr))
}

export default Main