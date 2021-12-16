import React, { Component } from 'react';
import { Toolbar } from './Toolbar';

export const { Provider, Consumer} = React.createContext({})

export class ContextDemo extends React.Component {

  state = {
    toggle: true,
    handleToggle: () => this.handleToggle()
  }

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <Provider value={this.state}>
        <Toolbar />
      </Provider>
    )
  }
}