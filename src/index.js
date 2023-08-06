import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { SpeechProvider } from '@speechly/react-client'
import { Provider } from './context/context'
import App from './App'

ReactDOM.render(
    <SpeechProvider appId='f7b0a6ad-f7b4-4351-8c7d-431b071013a6' language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);