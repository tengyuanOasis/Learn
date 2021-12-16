import React, { Component } from 'react';
import SonComponent from './SonComponent';
import { Button } from 'antd';

export class LifeCircleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fatherText: '父组件生命周期测试',
      sonText: '子组件接收参数'
     }
    console.log('父组件constructor...')
  }

  static getDerivedStateFromProps(){
    console.log('父组件getDerivedStateFromProps...')
    return null
  }

  componentDidMount(){
    console.log('父组件componentDidMount...')
  }

  componentDidUpdate(){
    console.log('父组件componentDidUpdate...')
  }

  getSnapshotBeforeUpdate(){
    console.log('父组件getSnapshotBrforeUpdate...')
    return null
  }

  changeFatherText = () =>{
    this.setState({
      fatherText: '父组件改变之后的文案'
    })
  }

  changeSonText = () =>{
    this.setState({
      sonText: '子组件改变之后的文案'
    })
  }

  render() { 
    console.log('父组件render...')
    return ( 
      <div>
        <h1>父组件:</h1>
        <h1>父组件文案：{ this.state.fatherText }</h1>
        <Button onClick={this.changeFatherText}>父组件改变State</Button>
        <Button onClick={this.changeSonText}>改变子组件State</Button>

        <hr />
        <h1>子组件:</h1>
        <SonComponent sonText={ this.state.sonText }/>
      </div>
     );
  }
}
 