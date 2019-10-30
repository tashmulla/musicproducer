import React from 'react';
import Slider from '@material-ui/core/Slider';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const styledSlider = styled(Slider)({
  width: 250,
  border: 0,
  borderRadius: 3,
  color: 'yellow'
});

export default function VocalSlider() {

  const SliderStyle = styledSlider;

  return (
    <div>
      <SliderStyle
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