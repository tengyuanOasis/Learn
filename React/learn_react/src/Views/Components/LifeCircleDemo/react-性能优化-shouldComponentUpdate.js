import React, { Component, PropTypes } from 'react';

class Item extends Component {

    constructor() {
        super();
        this.state = {
            a: 1,
            b: 1
        }
        this.fna = () => {
            this.setState({ a: new Date().getTime() })
        }
        this.fnb = function() {
            this.setState({ b: new Date().getTime() })
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.a !== nextState.a) {
            console.log('a-->', this.state.a,'b-->',this.state.b );
            return true;
        } else {
            console.log('a-->', this.state.a,'b-->',this.state.b );
            return false;
        }
    }
    render() {
        return <div>
            a: {this.state.a}<br />
            b: {this.state.b}<br />
            <input type="button" value="改变a" onClick={this.fna} />
            <input type="button" value="改变b" onClick={()=>this.fnb()} />
        </div>;
    }

}

export default Item;