import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-player-controls';
import { Container, Row, Col } from 'reactstrap';
import Divider from '@material-ui/core/Divider';
import '../App.css';
const uploadREST = "http://localhost:7090/edits/upload";

class UploadTrack extends Component {

    constructor() {
        super()

        this.state = {
            selectedFile : null
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event) {

        const files = event.target.files[0]
        if (this.maxFiles(event) && this.checkFileType(event)) {
            this.setState({
                selectedFile : files
            })
        }
    }

    onClickHandler = () => {
        const data = new FormData() 
        data.append('attachment', this.state.selectedFile)

        axios.post(
            uploadREST,
            data, {

            })
      .then(res => { 
        console.log(res)
      })
    }

    maxFiles = (event) =>{
        let files = event.target.files
            if (files.length > 1) { 
               const message = "The upload exceeds the 1 file max limit."
               event.target.value = null
               console.log(message)
              return false;
          }
        return true;
     }

     checkFileType = (event) => {
         let files = event.target.files[0]
         console.log(files)
         const types = ["text/plain"]
         let err = ""

         if (!types.includes(files.type)) {
             err = files.type + " is not a supported format\n"
         }

         if (err !== "") {
             event.target.value = null
             console.log(err)
             return false;
         }

         return true;
     };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col className="upload-track">
                            <input
                                type="file"
                                name="file"
                                id="choose-button"
                                className="choose-track"
                                onChange={this.onChangeHandler}
                            />
                            <Divider width="1px" className="upload-divider-1"/>

                            <Button className="upload-button" onClick={() => this.onClickHandler()}>
                                    Upload
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default UploadTrack;