import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '../interfaces/Slider';
import { Button, PlayerIcon } from 'react-player-controls'
import { Container, Row, Col } from 'reactstrap';
import '../App.css';
import Divider from '@material-ui/core/Divider';
import UploadTrack from '../interfaces/uploadTrack';
import RotaryKnob from '../interfaces/rotaryKnob';

class Editor extends Component {

    previousTrack = () => {
        console.log("Previous track");
    }

    playTrack = () => {
        console.log("Playing track");
    }

    pauseTrack = () => {
        console.log("Pausing track");
    }

    nextTrack = () => {
        console.log("Next track");
    }
      
    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Container className="controls">
                            <Row>                                    
                                <Col className="top-controls">                                    

                                    <UploadTrack />

                                    <Divider width="550px" className="editor-divider-2" />                           
                                    <Button onClick={() => this.previousTrack()} className="previous-button">
                                        <PlayerIcon.Previous
                                        width={20}
                                        height={20}/>
                                    </Button>
                                    <Button onClick={() => this.playTrack()} className="play-button">
                                        <PlayerIcon.Play
                                        width={20}
                                        height={20}/>
                                    </Button>
                                    <Button onClick={() => this.pauseTrack()} className="pause-button">
                                        <PlayerIcon.Pause                                        
                                        width={20}
                                        height={20}/>
                                    </Button>
                                    <Button onClick={() => this.nextTrack()} className="next-button">
                                        <PlayerIcon.Next                                        
                                        width={20}
                                        height={20}/>
                                    </Button>       
                                </Col>                                 
                            </Row>                    
                        </Container>
                    </Row>
                </Container>

                <div className="sliders">
                    <Container>
                        <Row>
                            <Col>
                                <Typography style={{color:"white"}}>
                                    Vocals
                                </Typography>
                            <Slider/>
                            </Col>
                            <span>&nbsp;&nbsp;</span>
                            <Col>
                                <Typography style={{color:"white"}}>
                                    Crossfade
                                </Typography>
                                <Slider/>
                            </Col>
                            <span>&nbsp;&nbsp;</span>
                            <Col>
                                <Typography style={{color:"white"}}>
                                    Gain
                                </Typography>
                                <Slider/>
                            </Col>
                            <span>&nbsp;&nbsp;</span>
                            <Col>
                                <Typography style={{color:"white"}}>
                                    Fade
                                </Typography>
                                <Slider/>
                            </Col>
                            <div className="knobs">
                                <Col>
                                    <Typography style={{color:"white",
                                                        fontSize:"10px",
                                                        textAlign: "center",
                                                        fontWeight: "bold"}}>
                                        PREAMP
                                    </Typography>
                                    <RotaryKnob />
                                </Col>
                                <Divider width="20px"/>
                                <Col>
                                    <Typography style={{color:"white",
                                                        fontSize:"10px",
                                                        textAlign:"center",
                                                        fontWeight: "bold"}}>
                                        LIFT
                                    </Typography>
                                    <RotaryKnob />
                                </Col>
                                <Divider width="20px"/>
                                <Col>
                                    <Typography style={{color:"white",
                                                        fontSize:"10px",
                                                        textAlign: "center",
                                                        fontWeight: "bold"}}>
                                        FADE
                                    </Typography>
                                    <RotaryKnob />
                                </Col>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Editor;