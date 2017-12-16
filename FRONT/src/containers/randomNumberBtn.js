import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRandomNumber } from '../actions/actionIndex.js'


class RandomNumberBtn extends Component {
    componentDidMount(){
        getRandomNumber();
    }
    
    render(){
        return (
            <button className="btn btn-secondary" onClick={this.props.getRandomNumber}>Randomize!</button>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getRandomNumber}, dispatch);
}

export default connect(null, mapDispatchToProps)(RandomNumberBtn);