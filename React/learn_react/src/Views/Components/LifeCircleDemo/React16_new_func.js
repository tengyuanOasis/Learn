import React, { Component, PropTypes } from 'react';

class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            aaa: 1
        }
    }

    /**
     * [getDerivedStateFromProps description]
     * 该函数在shouldComponentUpdate----> 之前 <----执行。
     * 不仅仅具有componentWillReceiveProps的能力，自身组件state变化时，该钩子函数也会被触发。
     * @param  {[type]} nextProps [传入后的prop数据，即最新的props]
     * @param  {[type]} prevState [相对于合并的state来说的前一个状态]
     * @return {[type]}           [把某数据合并到当前状态中]
     * @static  静态函数 ,其没有this指向，所以无权操作实例，所以更安全，而且消耗性能低。
     */
    static getDerivedStateFromProps(nextProps, prevState) {

       // console.log('nextProps: ', nextProps, '---父向子传递的数据');
       // console.log('prevState: ', prevState, '---当前状态的合并');
        return { x: nextProps.a } // 合并到当前组件的state

    }

    render() {
        console.log("render", '---数据更新');
        return <div id='div2'>子组件-{this.props.a}</div>
    }

    /************************************************************************************
                                    在 render 之后执行的钩子  
    *************************************************************************************/
    // 更新之前
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate','---获取当前属性和state状态')
        console.log('prevProps:', prevProps,)
        console.log('prevState:', prevState)
        console.log('-------------------分界线---------------------');
        return { x: 1 }  //给下面update函数传数据

    }

    // 更新之后 snapshot能够得到 getSnapshotBeforeUpdate 的返回值
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate','---得到属性以及state状态')
        console.log('prevProps:', prevProps)
        console.log('prevState:', prevState)
        console.log('snapshot:', snapshot,'---return 后面的数据')
    }

}

export default Item;