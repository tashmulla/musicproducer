import React, { Component } from 'react';
import { Knob } from 'react-rotary-knob';
import * as skins from 'react-rotary-knob-skin-pack';
import '../App.css';

class RotaryKnob extends Component {

    state = {
        value : 0
    }

    changeValue = (value) => {
        this.setState({value : value})
    }

    render() {
        return (
            <div>
                <Knob
                onChange={this.changeValue.bind(this)}
                min={0}
                max={100}
                value={this.state.value}
                skin={skins.s4}/>
            </div>
        )
    }
}

export default RotaryKnob;