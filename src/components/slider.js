import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

const marks = [
  {
    value: 0,
    label: 'Asteroids',
  },
  {
    value: 33,
    label: 'Exoplantes',
  },
  {
    value: 66,
    label: 'Mars rover',
  },
  {
    value: 100,
    label: 'Outter space',
  },
]

function valuetext(value) {
  return `${value}°C`
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1
}

export default function DiscreteSliderValues() {
  return (
    <Box sx={{ width: '75%' }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  )
}
