import React, { Component } from 'react';
import Car from './cars'

class Mycars extends Component{

    noCopy = () =>{
        alert('cope pas')
    }
    
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>

                <p onCopy={this.noCopy}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

                <Car color="red">Ford</Car>
                <Car>Mercedes</Car>
                <Car color="green"></Car>
            </div>
        )
        
    }
}

export default Mycars;