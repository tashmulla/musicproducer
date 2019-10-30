import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '../interfaces/Slider';
import ContainedButtons from '../interfaces/buttons/playButton';
import { Button, PlayerIcon } from 'react-player-controls'
import { Container, Row, Col } from 'reactstrap';
import '../App.css';
import Divider from '@material-ui/core/Divider';

class Editor extends Component {
      
    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Container className="controls">
                            <Row>                                    
                                <Col className="top-controls">
                                    <Divider width="50"/>
                                    <Button className="upload"
                                        style={{fontSize:15, fontWeight:"bold"}}>
                                            Upload Track
                                    </Button> 
                                    <Divider width="550"/>                           
                                    <Button onClick={() => alert('clicked')}>
                                        <PlayerIcon.Previous
                                        className="previous-button"
                                        width={40}
                                        height={40}/>
                                    </Button>
                                    <Button onClick={() => alert('clicked')}>
                                        <PlayerIcon.Play
                                        className="play-button"
                                        width={40}
                                        height={40}/>
                                    </Button>
                                    <Button onClick={() => alert('clicked')}>
                                        <PlayerIcon.Pause
                                        className="pause-button"
                                        width={40}
                                        height={40}/>
                                    </Button>
                                    <Button onClick={() => alert('clicked')}>
                                        <PlayerIcon.Next
                                        className="next-button"
                                        width={40}
                                        height={40}/>
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
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Editor;