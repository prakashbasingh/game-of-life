import React, { Component } from 'react';




class Buttons extends Component {
    render(){
        return(
            <div className="center">
                <button onClick={this.props.playButton}> Play Game </button>
                <button onClick={this.props.pauseButton}> Pause Game </button>
                <button onClick={this.props.slowButton}> Slow </button>
                <button onClick={this.props.fastButton}> Fast </button>
                <button onClick={this.props.clearButton}> Clear Grid </button>
                <button onClick={this.props.fillBox}> Fill Grid </button>
                <button onClick={this.props}>Grid Size</button>

            </div>
        )
    }


}
export default Buttons