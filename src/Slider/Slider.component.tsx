import {
  Container,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Props } from "./Slider.types";
import "./Slider.css";

const SliderComponent = ({
  title,
  value,
  setValue,
  min,
  max,
  step,
  label,
  percentage,
}: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Container className='Slider'>
      <Text className='Title'>{title}</Text>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(value) => setValue(value)}
        onMouseEnter={() => setShowTooltip(true)}
        onChangeStart={() => setShowTooltip(true)}
        onChangeEnd={() => setShowTooltip(false)}
        onMouseLeave={() => setShowTooltip(false)}>
        <SliderMark value={0.25 * max} mt='1' ml='-2.5' fontSize='sm'>
          {percentage ? `${25 * max}%` : 0.25 * max}
        </SliderMark>
        <SliderMark value={0.5 * max} mt='1' ml='-2.5' fontSize='sm'>
          {percentage ? `${50 * max}%` : 0.5 * max}
        </SliderMark>
        <SliderMark value={0.75 * max} mt='1' ml='-2.5' fontSize='sm'>
          {percentage ? `${75 * max}%` : 0.75 * max}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg='teal.500'
          color='white'
          placement='top'
          isOpen={showTooltip}
          label={label}>
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Container>
  );
};

export default SliderComponent;
