import React from 'react'
import { Grid } from '@material-ui/core'
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui'

import Main from './components/Main/Main'
import Details from './components/Details/Details'
import useStyles from './styles'
import { SpeechProvider } from '@speechly/react-client'


const App = () => {
  const classes = useStyles();

  const func = () => {
    var context = new AudioContext();
    context.resume(() => {
      console.log('Playback resumed successfully')
    });
  };

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems='center' justify-Content="center" style={{ height: '100vh' }}>
        <Grid items xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid items xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid items xs={12} sm={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      {/* <button onClick={func}>test</button> */}
      <SpeechProvider>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
      </SpeechProvider>
    </div>
  )
}

export default App;