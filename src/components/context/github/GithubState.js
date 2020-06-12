import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import {
    SEARCH_USER,
    SET_LOADING,
    CLEAR_USER,
    GET_USER,
    GET_REPOS,
} from '../../Type'

const GithubState = props => {
    const initialState = {
        users: [],
        user: [],
        repos: [],
        loading: false
    }
//CAP 29
    const [state, dispatch] = useReducer(GithubReducer, initialState);
//Search user
//Get user
//Get repos
//Clear Users
//Set Loading

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;