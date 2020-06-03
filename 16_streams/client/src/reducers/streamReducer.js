import * as actionTypes from "../actions/types";
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_STREAMS:
            let newStates = _.mapKeys(action.payload, 'id');
            return {...state, ...newStates};
        case actionTypes.FETCH_STREAM:
        case actionTypes.CREATE_STREAM:
        case actionTypes.EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case actionTypes.DELETE_STREAM:
            return _.omit(state, action.payload)
        default:
            return state;
    }
};