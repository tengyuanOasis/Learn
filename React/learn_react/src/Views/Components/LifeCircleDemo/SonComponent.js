import React, { Component } from 'react';

export default class SonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    console.log('子组件constructor...')
  }

  static getDerivedStateFromProps(){
    console.log('子组件getDerivedStateFromProps...')
    return null
  }

  componentDidMount(){
    console.log('子组件componentDidMount...')
  }

  componentDidUpdate(){
    console.log('子组件componentDidUpdate...')
  }

  getSnapshotBeforeUpdate(){
    console.log('子组件getSnapshotBrforeUpdate...')
    return null
  }

  render() { 
    console.log('子组件render...')
    return ( 
      <div>
        <h1>子组件文案：{this.props.sonText}</h1>
      </div>
     );
  }
}
 
