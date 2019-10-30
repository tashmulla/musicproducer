import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      marginLeft: "50"
    },
    input: {
      display: 'none',
    },
  }));
  
  export default function ContainedButtons() {
    const classes = useStyles();
  
    return (
      <div>
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span" className={classes.button}>
            Play
          </Button>
        </label>
      </div>
    );
  }