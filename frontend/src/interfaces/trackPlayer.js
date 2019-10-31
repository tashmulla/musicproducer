import React, {Component} from 'react';
import { Button, PlayerIcon } from 'react-player-controls';
import { Container, Row, Col } from 'reactstrap';
import Divider from '@material-ui/core/Divider';
import UploadTrack from '../interfaces/uploadTrack';
import '../App.css';

class TrackPlayer extends Component {

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
                    <Container>
                        <Row>                                    
                            <Col className="top-controls">                                    

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
        </div>
        )
    }
}

export default TrackPlayer;