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
} from '../Types.js'


//CAP 29