import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Grid from "./Grid"
import Buttons from "./buttons"


class Main extends Component{
    // setting state using constructor and super()
    constructor(){
        super();
        this.speed = 500;
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
    // method to fill grid box 
    fillBox = () => {
        let gridCopy = arrayClone(this.state.gridFull);
        // iterating through each box of the grid
        for(let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                // now using math function filling boxes with 0 or 1 
                if(Math.floor(Math.random() * 5)  === 1){
                    gridCopy[i][j] = true
                }
            }
        }
        this.setState({
            gridFull: gridCopy
        })
    }

    playButton = () => {
        clearInterval(this.intervalId)
        this.intervalId = setInterval(this.play, this.speed)
    }

    pauseButton = () => {
        clearInterval(this.intervalId)
    }

    fastButton = () => {
        this.speed = 100
        this.playButton()
    }

    slowButton = () => {
        this.speed = 1000
        this.playButton()
    }

    clearButton = () => {
        let grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
        this.setState({
            gridFull: grid,
            generation: 0
        })
    }

    // building play function
    play = ()=> {
        // creating two grid and checking what it initial look like  
        let gridFirst = this.state.gridFull;
        //then changing the bos in the grid and setting on new clone grid
        let gridSecond = arrayClone(this.state.gridFull);

        // these two for loop will allow go through every box in the grid
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                // now counting neighbor
                let count = 0
                if (i > 0) if (gridFirst[i - 1][j]) count++;
                if (i > 0 && j > 0) if (gridFirst[i - 1][j - 1]) count++;
                if (i > 0 && j < this.cols - 1) if (gridFirst[i - 1][j + 1]) count++;
                if (j < this.cols - 1) if (gridFirst[i][j + 1]) count++;
                if (j > 0) if (gridFirst[i][j - 1]) count++;
                if (i < this.rows - 1) if (gridFirst[i + 1][j]) count++;
                if (i < this.rows - 1 && j > 0) if (gridFirst[i + 1][j - 1]) count++;
                if (i < this.rows - 1 && j < this.cols - 1) if (gridFirst[i + 1][j + 1]) count++;

                // now applying the game of life rules
                if (gridFirst[i][j] && (count < 2 || count > 3)) gridSecond[i][j] = false;
                if (!gridFirst[i][j] && count === 3) gridSecond[i][j] = true;
            }
        }
        this.setState({
            gridFull: gridSecond,
            generation: this.state.generation + 1
        });
    }

    // lifecycle method to run the fill box method and it will fill the box randomly with 0 and 1
    componentDidMount() {
        this.fillBox()
        this.playButton()
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
                <Buttons playButton={this.playButton}
                         pauseButton={this.pauseButton}
                         slowButton={this.slowButton}
                         fastButton={this.fastButton}
                         clearButton={this.clearButton}
                         fillBox={this.fillBox}
                         gridSize={this.gridSize}
                />
            </div>
        )
    }
}

function arrayClone(arr){
    return JSON.parse(JSON.stringify(arr))
}

export default Main