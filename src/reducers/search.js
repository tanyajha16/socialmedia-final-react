import {
  
  FETCH_SEARCH_RESULTS_FAILURE,
  FETCH_SEARCH_RESULTS_SUCCESS,
  FETCH_SEARCH_RESULTS_LOADING,
} from '../actions/actionTypes';

const initialSeachState = {
  results: [],
  error:null,
  success:null,
  inProgress:false,

};

export default function search(state = initialSeachState, action) {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        results: action.users,
        success:true,
        inProgress:false,
      };
    case FETCH_SEARCH_RESULTS_FAILURE:
      return {
        ...state,
        error: action.error,
        inProgress:false,
      };
    case FETCH_SEARCH_RESULTS_LOADING: {
      return {
        ...state,
        inProgress:true
      };
    }
    default:
      return state;
  }
}
