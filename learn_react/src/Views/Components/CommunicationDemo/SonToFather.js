import React, { Component } from 'react';

// 父组件
class SonToFather extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fatherText: '父组件Text'
     }
  }

  // 父组件自身修改state的方法
  changeSelfText = (msg) =>{
    this.setState({
      fatherText: msg
    })
  }

  render() { 
    return ( 
      <div>
        <h1>子组件向父组件通信</h1>
        <div>父组件参数：{this.state.fatherText }</div>
        {/* 向子组件传递修改自身state的方法 */}
        <SonComponent changeFunc={this.changeSelfText}/>
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

  // 出发btn事件，调用父组件传递过来的函数，并传递参数
  // 通过调用父组件自己函数，传递参数来修改父组件的state
  changeFatherText = () =>{
    this.props.changeFunc('子组件传递过来的参数')
  }

  render() { 
    return ( 
      <div style={{backgroundColor:'yellowgreen'}}> 
        <h2>子组件</h2>
        <button onClick={this.changeFatherText}>点击该改变父元素参数</button>
      </div>
     );
  }
}
 
export default SonToFather;