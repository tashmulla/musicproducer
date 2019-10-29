import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '../interfaces/Slider';
import Button from '../interfaces/Button';
import '../App.css';

class Editor extends Component {
      
    render() {
        return(
            <div className="editor">

                <div className="upload-button">
                    <Button />
                </div>
                <div className="vocal-slider">
                <Typography style={{color:"white"}}>
                    Vocals
                </Typography>
                <Slider/>
                </div>

                <span>&nbsp;&nbsp;</span>
                <div className="crossfade-slider">
                <Typography style={{color:"white"}}>
                    Crossfade
                </Typography>
                <Slider/>
                </div>

                <span>&nbsp;&nbsp;</span>
                <div className="gain-slider">
                <Typography style={{color:"white"}}>
                    Gain
                </Typography>
                <Slider/>
                </div>

            </div>
        )
    }
}

export default Editor;