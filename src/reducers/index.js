
import {combineReducers} from 'redux';
import posts from './posts';
// using a reducer for the auth section
import auth from './auth';
import profile from './profile';
import friends from './friends';

export default combineReducers({
    posts,
    auth,
    profile,
    friends
})