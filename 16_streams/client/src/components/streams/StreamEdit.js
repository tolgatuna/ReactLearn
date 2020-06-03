import _ from 'lodash';
import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchStream, editStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {
    componentDidMount() {
        this.streamId = this.props.match.params.id
        this.props.fetchStream(this.streamId);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.streamId, formValues);
    }

    render() {
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(
    mapStateToProps,
    {fetchStream, editStream}
)(StreamEdit);