import React from "react";
import {signIn, signOut} from "../actions";
import {connect} from 'react-redux';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '23336377499-b4eb0novgci1te4970nqbuehhfm2bs8s.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    singInWithGoogle = () => {
        this.auth.signIn();
    }

    singOutFromGoogle = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        const {isSignedIn} = this.props.auth;
        if (isSignedIn === null) {
            return null;
        } else if (isSignedIn) {
            return (
                <button onClick={this.singOutFromGoogle} className='ui red google button'>
                    <i className='google icon'/>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.singInWithGoogle} className='ui red google button'>
                    <i className='google icon'/>
                    Sign In With Google
                </button>
            );
        }
    }

    render() {
        return this.renderAuthButton();
    }
}

export default connect(
    ({auth}) => ({auth}),
    {signIn, signOut}
)(GoogleAuth);