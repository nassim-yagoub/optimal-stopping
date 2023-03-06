import React, { useState } from 'react';
import { Button, Card, Container, Divider, Header, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { calculateOptimalStopping } from './utils';
import './App.css';

const App = () => {
  const [numberOfTries, setNumberOfTries] = useState(10);
  const [rejection, setRejection] = useState(0);
  const [lookback, setLookback] = useState(0);

  const [optimalStopping, setOptimalStopping] = useState(-1);

  return (
    <Container className='App'>
      <Header className='App-header'>
        <Header>How long should you keep looking non-commitaly ?</Header>
        <Divider/>
        <Card.Group textAlign='center'>
          <Card>
            <Card.Content textAlign='center'>
              <Card.Header>Number of tries</Card.Header>
              <Card.Description>
                <Input
                  type='range'
                  min={0}
                  max={100}
                  step={5}
                  value={numberOfTries}
                  // @ts-ignore
                  onChange={(event) => setNumberOfTries(+event.target.value)}
                />
                <p>{numberOfTries}</p>
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content textAlign='center'>
              <Card.Header>Probability of being rejected</Card.Header>
              <Card.Description>
                <Input
                  type='range'
                  min={0}
                  max={1}
                  step={0.05}
                  value={rejection}
                  // @ts-ignore
                  onChange={(event) => setRejection(+event.target.value)}
                />
                <p>{100*rejection}%</p>
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content textAlign='center'>
              <Card.Header>Probability of success after coming back</Card.Header>
              <Card.Description>
                <Input
                  type='range'
                  min={0}
                  max={1}
                  step={0.05}
                  value={lookback}
                  // @ts-ignore
                  onChange={(event) => setLookback(+event.target.value)}
                />
                <p>{100*lookback}%</p>
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
        <Divider/>
        <Button onClick={() => setOptimalStopping(calculateOptimalStopping({numberOfTries, rejection, lookback}))}>
          Calculate
        </Button>
        <Divider/>
        {optimalStopping !== -1 ? 
          <p>Result is: {optimalStopping}</p>
          : <></>
        }
      </Header>
    </Container>
  );
}

export default App;
