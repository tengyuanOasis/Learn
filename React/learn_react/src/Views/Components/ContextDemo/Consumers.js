import React from 'react';
import { Consumer} from './index.js' 

export class Consumers extends React.Component {
  render() {
    return <Consumer>
      {
        ({ toggle, handleToggle}) =>
          <button onClick={() => handleToggle()}>
            {toggle ? '✔' : '❌'}
          </button>
      }
    </Consumer>
  }
}