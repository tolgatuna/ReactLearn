import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPostsAndUsers} from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    render() {
        return <div className='ui relaxed divided list'>
            {this.props.posts.map(post => (
                <div className='item' key={post.id}>
                    <i className='large middle aligned icon user'/>
                    <div className='content'>
                        <div className='description'>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                    <UserHeader userId={post.userId}/>
                </div>
            ))}</div>;
    }
}

const mapStateToProps = ({posts}) => {
    return {posts}
}

export default connect(
    mapStateToProps,
    {fetchPostsAndUsers}
)(PostList);
