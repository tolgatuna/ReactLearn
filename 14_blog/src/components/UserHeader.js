import React, {Component} from 'react';
import {connect} from "react-redux";

class UserHeader extends Component {
    componentDidMount() {
        console.log('UserHeader - componentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('UserHeader - componentDidUpdate');
    }

    render() {
        console.log('UserHeader - render');
        if (!this.props.user) {return null;}
        return (
            <div className='header'>
                {this.props.user.name}
            </div>
        );

    }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.userId)};
}

export default connect(
    mapStateToProps
)(UserHeader);