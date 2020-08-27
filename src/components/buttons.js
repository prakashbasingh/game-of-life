import React, { Component } from 'react';
import styled from "styled-components"

const Button = styled.button`
  color: black;
  background-color: gold;
  height: 30px;
  width: 100px;
  border-radius: 1rem;
    &:hover{
        color: red;
        background-color: LightSkyBlue;
        font-weight: bold;
        box-shadow: 0 0 5px 5px gold;
    }
`

class Buttons extends Component {
    render(){
        return(
            <div className="buttons">
                <Button className="click" onClick={this.props.playButton}> Play Game </Button>
                <Button className="click" onClick={this.props.pauseButton}> Pause Game </Button>
                <Button className="click" onClick={this.props.slowButton}> Slow </Button>
                <Button className="click" onClick={this.props.fastButton}> Fast </Button>
                <Button className="click" onClick={this.props.clearButton}> Clear Grid </Button>
                <Button className="click" onClick={this.props.fillBox}> Fill Grid </Button>
            </div>
        )
    }


}
export default Buttons