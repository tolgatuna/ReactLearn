import * as types from './types'
import streamsApi from "../apis/streamsApi";
import history from "../history";

export const signIn = (userId) => ({type: types.SIGN_IN, payload: userId})
export const signOut = () => ({type: types.SIGN_OUT})

export const fetchStreams = () => async dispatch => {
    let response = await streamsApi.get('/streams');
    dispatch({type: types.FETCH_STREAMS, payload: response.data});
}

export const fetchStream = id => async dispatch => {
    let response = await streamsApi.get(`/streams/${id}`);
    dispatch({type: types.FETCH_STREAM, payload: response.data});
}

export const createStream = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth;
    let response = await streamsApi.post('/streams', {...formValues, userId});

    dispatch({type: types.CREATE_STREAM, payload: response.data});
    history.push('/')
}

export const editStream = (id, formValue) => async dispatch => {
    let response = await streamsApi.patch(`/streams/${id}`, formValue);
    dispatch({type: types.EDIT_STREAM, payload: response.data});
    history.push('/');
}

export const deleteStream = (id) => async dispatch => {
    await streamsApi.delete(`/streams/${id}`);
    dispatch({type: types.DELETE_STREAM, payload: id});
    history.push('/');
}
