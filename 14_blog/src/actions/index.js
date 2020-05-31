import JsonPlaceHolder from "../apis/JsonPlaceHolder";
import * as ActionTypes from "./ActionTypes";
import _ from 'lodash'

export const fetchPosts = () => async dispatch => {
    let response = await JsonPlaceHolder.get('/posts');
    dispatch({type: ActionTypes.FETCH_POSTS, payload: response.data})
}

// POPULAR WAY:
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const posts = getState().posts;
    const uniqueUsers = _.uniq(_.map(posts, 'userId'));
    uniqueUsers.forEach(user => dispatch(fetchUser(user)));
}

export const fetchUser = (id) => async dispatch => {
    const response = await JsonPlaceHolder.get(`/users/${id}`);
    dispatch({type: ActionTypes.FETCH_USER, payload: response.data});
}




// FIRST WAY:
// export const fetchUser = (id) => dispatch => {
//     _fetchUser(id, dispatch);
// }
//
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await JsonPlaceHolder.get(`/users/${id}`);
//     dispatch({type: ActionTypes.FETCH_USER, payload: response.data});
// })