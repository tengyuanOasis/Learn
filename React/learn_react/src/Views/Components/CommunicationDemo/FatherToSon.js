import React, { Component } from 'react';

// 父组件
class FatherToSon extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fatherText: '这是父组件的文本'
     }
  }
  changeSonText = () =>{
    this.setState({ fatherText: '父组件改变之后的Text'  });
  }

  render() { 
    return ( 
      <div>
        <h1>父子组件通信</h1>
        {/* 点击改变父组件传参 */}
        <button onClick={this.changeSonText}>点击改变传参数</button>
        {/* 向子组件传递参数 */}
        <SonComponent text={this.state.fatherText} />
      </div>
     );
  }
}

// 子组件
class SonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div style={{backgroundColor:'yellowGreen'}}>
        <h2>子组件</h2>
        {/* 通过this.props.text调用父组件传递过来长参数 */}
        <div>接收父组件传递过来的参数：{ this.props.text }</div>
      </div>
     );
  }
}
 
export default FatherToSon;