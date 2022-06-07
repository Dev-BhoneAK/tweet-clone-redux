import tweets from './tweet';
import users from './user';
import authedUser from './authedUser';
import {combineReducers} from "redux";
import {loadingBarReducer} from "react-redux-loading-bar";

export default combineReducers({
    authedUser,
    users,
    tweets,
    loadingBar: loadingBarReducer
});