import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '../interfaces/Slider';
import { Button, PlayerIcon } from 'react-player-controls'
import { Container, Row, Col } from 'reactstrap';
import '../App.css';
import Divider from '@material-ui/core/Divider';
import UploadTrack from '../interfaces/uploadTrack';

class Editor extends Component {
      
    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Container className="controls">
                            <Row>                                    
                                <Col className="top-controls">
                                    <Divider width="50px" className="first-divider"/>
                                    <Button className="upload" onClick={() => alert('Upload')}
                                        style={{fontSize:15, fontWeight:"bold"}}>
                                            Upload
                                    </Button>
                                    <Divider width="10px" className="second-divider" />
                                    <Button className="save" onClick={() => alert('Save')}
                                         style={{fontSize:15, fontWeight:"bold"}}>
                                             Save
                                    </Button>
                                    <Divider width="550px" className="third-divider" />                           
                                    <Button onClick={() => alert('clicked')} className="previous-button">
                                        <PlayerIcon.Previous
                                        width={40}
                                        height={40}/>
                                    </Button>
                                    <Button onClick={() => alert('clicked')} className="play-button">
                                        <PlayerIcon.Play
                                        
                                        width={40}
                                        height={40}/>
                                    </Button>
                                    <Button onClick={() => alert('clicked')} className="pause-button">
                                        <PlayerIcon.Pause
                                        
                                        width={40}
                                        height={40}/>
                                    </Button>
                                    <Button onClick={() => alert('clicked')} className="next-button">
                                        <PlayerIcon.Next
                                        
                                        width={40}
                                        height={40}/>
                                    </Button>       
                                </Col>                                 
                            </Row>                    
                        </Container>
                    </Row>
                </Container>

                <div>
                <UploadTrack />
                </div>

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