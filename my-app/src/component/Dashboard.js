import React from "react";
import Display from "./Display";

class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {
            balls:0,
            strikes:0
        }
    }

    monitors=()=>{
        if(this.state.balls === 4 || this.state.strikes === 3){
            this.setState({
                balls: 0,
                strikes: 0
            })
        }
    }

    addBalls=(e,balls)=>{
        e.preventDefault();
        this.setState({
            balls:balls+1
        })
        this.monitors();
    }

    addStrikes=(e,strikes)=>{
        e.preventDefault();
        this.setState({
            strikes:strikes+1
        })
        this.monitors();
    }

    hit =(e)=>{
        e.preventDefault();
        this.setState({
            balls: 0,
            strikes:0
        })
    }

    foul =(e, strikes)=>{
        e.preventDefault();
        if(this.state.strikes <= 1){
            this.setState({
                strikes:strikes+1
            })
        }
    }

   

    render(){
        return(
            <div>
                <Display 
                balls = {this.state.balls} 
                strikes = {this.state.strikes}
                addBalls={this.addBalls}
                addStrikes={this.addStrikes}
                hit={this.hit}
                foul ={this.foul}/>
            </div>
        );
    }

    
}

export default Dashboard;