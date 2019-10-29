import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

export default function VocalSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={50}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={5}
        min={0}
        max={100}
      />
      </div>
  );
}