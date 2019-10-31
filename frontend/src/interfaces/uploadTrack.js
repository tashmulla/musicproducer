import React, { Component } from 'react';
import axios from 'axios';
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
                <input type="file" name="file" onChange={this.onChangeHandler}/>
                <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
            </div>

        );
    }
}

export default UploadTrack;