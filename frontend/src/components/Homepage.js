import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography'

class Homepage extends Component {

    render() {
        return(
            <div>
                <span>&nbsp;&nbsp;</span>
                <Typography color='inherit' variant='body1'>
                    Welcome to your all-in-one tool for music production, built in-house.
                </Typography>
            </div>
        )
    }
}

export default Homepage;