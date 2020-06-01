import * as types from './types'

export const signIn = (userId) => ({type: types.SIGN_IN, payload: userId})
export const signOut = () => ({type: types.SIGN_OUT})