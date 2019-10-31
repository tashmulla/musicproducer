import React from 'react';
import Slider from '@material-ui/core/Slider';
import { styled } from '@material-ui/core/styles';

const styledSlider = styled(Slider)({
  width: 250,
  border: 0,
  borderRadius: 3,
  color: 'rgb(228, 166, 52)'
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