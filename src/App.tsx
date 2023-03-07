import React, { useState } from "react";
import { calculateOptimalStopping } from "./utils";
import "./App.css";
import { Button, ChakraProvider, Container, Text } from "@chakra-ui/react";
import SliderComponent from "./Slider/Slider.component";

const App = () => {
  const [numberOfTries, setNumberOfTries] = useState(25);
  const [rejection, setRejection] = useState(0);
  const [lookback, setLookback] = useState(0);

  const [optimalStopping, setOptimalStopping] = useState(-1);

  return (
    <ChakraProvider>
      <Container className='App'>
        <Text className='App-title'>
          How long should you keep looking non-commitaly ?
        </Text>
        <Container>
          <SliderComponent
            title='Number of tries'
            value={numberOfTries}
            setValue={setNumberOfTries}
            min={0}
            max={100}
            step={1}
            label={`${Math.trunc(numberOfTries)}`}
          />
          <SliderComponent
            title='Probability of being rejected'
            value={rejection}
            setValue={setRejection}
            min={0}
            max={1}
            step={0.01}
            label={`${Math.trunc(100 * rejection)}%`}
            percentage
          />
          <SliderComponent
            title='Probability of success after coming back'
            value={lookback}
            setValue={setLookback}
            min={0}
            max={1}
            step={0.01}
            label={`${Math.trunc(100 * lookback)}%`}
            percentage
          />
        </Container>

        <Button
          className='App-button'
          onClick={() =>
            setOptimalStopping(
              calculateOptimalStopping({ numberOfTries, rejection, lookback })
            )
          }>
          Calculate
        </Button>
        {optimalStopping !== -1 ? (
          <Text>
            You should commit to the best person after {optimalStopping}{" "}
            relations
          </Text>
        ) : (
          <></>
        )}
      </Container>
    </ChakraProvider>
  );
};

export default App;
