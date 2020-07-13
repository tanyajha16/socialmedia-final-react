import {UPDATE_POSTS} from './actionTypes';
import {APIUrls} from '../helpers/urls';

export function fetchPosts() {
  return (dispatch) => {
    const url = APIUrls.fetchPosts();
    fetch(url)
      .then((response) => {
        console.log('response', response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // to save the posts in the store we have to dispatch an action
        dispatch(updatePosts(data.data.posts));
      });
  };
}

export function updatePosts(posts)
{
    return{
        type:UPDATE_POSTS,
        posts:posts
    }
}
