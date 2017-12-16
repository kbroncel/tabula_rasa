import React, {Component} from 'react';
import { connect } from 'react-redux';

class RandomNumber extends Component {

    render(){
        return (
            <p>{this.props.number}</p>
        );
    }
}

function mapStateToProps(state){
    return state.number
}

export default connect(mapStateToProps)(RandomNumber);