import {FETCH_SEARCH_RESULTS_SUCCESS, FETCH_SEARCH_RESULTS_LOADING, FETCH_SEARCH_RESULTS_FAILURE} from './actionTypes';
import {getAuthTokenFromLocalStorage} from '../helpers/utils';
import {APIUrls} from '../helpers/urls';

export function searchResultsSuccess (users)
{
    return {
        type:FETCH_SEARCH_RESULTS_SUCCESS,
         users,
    };
}

export function searchResultsFailure(error)
{
    return{
        type:FETCH_SEARCH_RESULTS_FAILURE,
        error,
    };

}

export function searchResultsLoading ()

{
    return{
        type:FETCH_SEARCH_RESULTS_LOADING,
    }
}

export function searchUsers(searchText)
{
    return (dispatch) => {
        const url = APIUrls.userSearch(searchText);
    
        fetch(url, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
          },
         
        })
          .then((repsonse) => repsonse.json())
          
          .then((data) => {
            console.log("search data",data);
            if(data.success)
            {
                dispatch(searchResultsSuccess(data.data.users))
               
            }
            else{
                dispatch(searchResultsSuccess([])) 
            }
          });
      };
    }
    