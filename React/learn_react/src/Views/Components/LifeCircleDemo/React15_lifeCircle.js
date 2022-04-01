import React, { Component, PropTypes } from 'react';

class Item extends Component {
	/************************************************************************************
	              					   创建阶段
	*************************************************************************************/

    constructor() {
        super();
        console.log("constructor");
    }
    componentWillMount() {
        console.log("componentWillMount在渲染前调用");
    }
    render() {
        console.log("render");
        return <div id='div2'>子组件-{this.props.a}</div>
    }
    componentDidMount() {
        console.log("componentDidMount在第一次渲染后调用");
    }

    /************************************************************************************
                  					 运行中阶段
    *************************************************************************************/

     componentWillReceiveProps(newProps) {
        console.log(`componentWillReceiveProps: ${newProps}
        在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。`)
    }
    shouldComponentUpdate(newProps, newState) {
        console.log(`shouldComponentUpdate: ${newProps} newState: ${newState} 
        返回一个布尔值。在组件接收到新的props或者state时被调用。
        在初始化时或者使用forceUpdate时不被调用。可以在你确认不需要更新组件时使用。`)
        return true;    // true表示更新组件；false表示不更新组件
    }
    componentWillUpdate(nextProps, nextState) {
        console.log(`componentWillUpdate: ${nextProps} nextState:${nextState} 
        在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。`);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(`componentDidUpdate:${prevProps} prevState:${prevState} 
        在组件完成更新后立即调用。在初始化时不会被调用。`)
    }

	 /************************************************************************************
                  				   销毁阶段	
    *************************************************************************************/
     
    componentWillUnmount() {
        console.log('在组件从 DOM 中移除的时候立刻被调用')
    }

}

export default Item;