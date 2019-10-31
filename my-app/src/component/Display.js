import React from "react";

class Display extends React.Component{
    constructor(){
        super();
        this.state = {
            balls: 0,
            strikes: 0
        }
    }

    componentDidUpdate=(prevProps)=>{
        if(this.props.balls !== prevProps.balls || this.props.strikes !== prevProps.strikes){
            this.setState({
                balls:this.props.balls,
                strikes: this.props.strikes
            })
        }
    }
    componentDidMount=()=>{
        this.setState({
            balls: this.props.balls,
            strikes: this.props.strikes
        })
    }

    render(){
        return(
            <form className="App">
                <div className="flex">
                    <label>Ball:</label>
                    <div>{this.state.balls}</div>
                    <button 
                    onClick={(e)=>this.props.addBalls(e,this.state.balls)}>Increase balls</button>
                </div>
                <div className="flex">
                    <label>Strikes:</label>
                    <div>{this.state.strikes}</div>
                    <button
                    onClick={(e)=>this.props.addStrikes(e,this.state.strikes)}>Increase strikes</button>
                </div>
                <button onClick={(e)=>this.props.hit(e)}>Hit!</button>
                <button onClick={(e)=>this.props.foul(e, this.state.strikes)}>Foul!</button>
            </form>
        );
    }
}

export default Display;