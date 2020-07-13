
import {combineReducers} from 'redux';
import posts from './posts';
// using a reducer for the auth section
import auth from './auth';

export default combineReducers({
    posts,
    auth,
})