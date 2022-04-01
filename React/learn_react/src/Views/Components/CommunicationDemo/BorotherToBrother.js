import React, { Component } from 'react';

class BrotherToBrother extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fatherText: '父组件的文本'
     }
  }

  changeFatherText = (msg) =>{
    this.setState({
      fatherText: msg
    })
  }

  render() { 
    return ( 
      <div>
        <h1>兄弟节点之间的通信</h1>
        {/* 参与通信的兄弟节点，通过一方修改父组件State，一方接收父组件State作为参数来达到同步更新 */}
        <BrotherA changeFunc={this.changeFatherText}/>
        <BrotherB text={this.state.fatherText}/>
      </div>
     );
  }
}

// 兄弟节点A，用来修改父组件State
class BrotherA extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  changeFatherText = () =>{
    this.props.changeFunc('这是兄弟节点A修改之后的数据')
  }

  render() { 
    return ( 
      <div style={{backgroundColor:'yellowgreen'}}>
        <h2>兄弟节点A</h2>
        <button onClick={this.changeFatherText}>点击修改父组件state</button>
      </div>
     );
  }
}

// 兄弟节点B，用来接收父组件的State（该State可以被兄弟节点A修改）
class BrotherB extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div style={{backgroundColor:'pink'}}>
        <h2>兄弟节点B</h2>
        <div>接收父组件参数（该参数可以被兄弟节点A修改）：{ this.props.text }</div>
      </div>
     );
  }
}
 
export default BrotherToBrother;