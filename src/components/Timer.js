import React from 'react'
import './timer.css'

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            isTimerActive: false
        }
        setInterval(() => {
            if (this.state.isTimerActive) this.setState((prevState) => ({ time: prevState.time + 1 }))
        }, 1000);
    }

    getTime = () => {
        var d = new Date(this.state.time * 1000);
        return d.toLocaleTimeString().slice(3);
    }
    startTimer = () => {
        this.setState({ isTimerActive: !this.state.isTimerActive })
    }
    stopTimer = () => {
        this.setState((prevState) => ({ isTimerActive: false,time : 0 }))
    }

    


    render() {
        return <div className="container">
            <h1>{this.getTime()}</h1>
            <button onClick={() => this.startTimer()} style={this.state.isTimerActive ? {borderColor : 'DarkCyan'} : null}>  {this.state.isTimerActive ? "Pause" : "Start"}   </button>
            <button onClick={()=>this.stopTimer()}>Stop</button>
        </div>;
    }
}

export default Timer