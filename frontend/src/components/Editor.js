import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography'

class Editor extends Component {

    render() {
        return(
            <div>
                <span>&nbsp;&nbsp;</span>
                <Typography color='inherit' variant='body1'>
                    Edit your tracks here.
                </Typography>
            </div>
        )
    }
}

export default Editor;