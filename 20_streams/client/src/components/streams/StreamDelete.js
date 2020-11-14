import React, {Component} from "react";
import Modal from "../Modal";
import history from "../../history";
import {connect} from "react-redux";
import {deleteStream, fetchStream} from "../../actions";
import {Link} from "react-router-dom";

class StreamDelete extends Component {
    componentDidMount() {
        this.streamID = this.props.match.params.id;
        this.props.fetchStream(this.streamID);
    }

    renderActions() {
        return (
            <>
                <button onClick={() => this.props.deleteStream(this.streamID)} className='ui button negative'>Delete</button>
                <Link className='ui button' onClick={() => history.push('/')}>Cancel</Link>
            </>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?';
        }
        return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`
    }

    render() {
        return (
            <Modal
                title='Delete Stream'
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(
    mapStateToProps,
    {fetchStream, deleteStream}
)(StreamDelete);