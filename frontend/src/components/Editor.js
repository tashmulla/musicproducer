import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '../interfaces/Slider';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';
import Divider from '@material-ui/core/Divider';
import UploadTrack from '../interfaces/uploadTrack';
import RotaryKnob from '../interfaces/rotaryKnob';
import TrackPlayer from '../interfaces/trackPlayer';

class Editor extends Component {
      
    render() {
        return(
            <div>

                <Container>
                    <Row>
                        <Col className="audio-controls">
                            <UploadTrack />
                            <TrackPlayer/>
                        </Col>
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