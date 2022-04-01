import React, { Component } from 'react';

export class Son extends Component {
  constructor(props) {
    super(props)
    this.state = {age:0}
  }

  // componentWillReceiveProps(nextporps) {
  //   if (nextporps.age !== this.state.age) {
  //     this.setState({
  //       age: nextporps.age 
  //     });
  //   }
  // }

static getDerivedStateFromProps(props, state) {
    if (props.age !== state.age) {
      return { age: props.age }
      // 类似setStae
      // this.setState({
      //   age: props.age
      // });
    }
    return null
  }

  render() {
    return (
      <div>
        son'age is {this.state.age}
      </div>
    );
  }
}
