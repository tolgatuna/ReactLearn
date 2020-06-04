import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import LoadingSpinner from "./LoadingSpinner";

class App extends React.Component {
    state = {lat: null, err: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({err: err.message})
        );
    }

    renterContent() {
        if (this.state.err && !this.state.lat) {
            return <div>ERROR: {this.state.err}</div>;
        } else if (!this.state.err && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        } else {
            return <LoadingSpinner message='Loading Location...'/>
        }
    }

    render() {
        return (
            <div style={{border: 'solid red 2px'}}>
                {this.renterContent()}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
