import {getInitialData} from '../utils/api';
import {showLoading, hideLoading} from "react-redux-loading-bar";
export const RECEIVE_DATA = 'RECEIVE_DATA';
const AUTHED_USER = 'dan_abramov';

const receiveData = (tweets, users, authedUser) => {
    return {
        type: RECEIVE_DATA,
        tweets,
        users,
        authedUser
    }
}

export const handleReceiveData = () => {
    return (dispatch) => {
        dispatch(showLoading());
        getInitialData().then((returnData) => {
            const {tweets, users} = returnData;
            const authedUser = AUTHED_USER;
            dispatch(receiveData(tweets, users, authedUser));
            dispatch(hideLoading());
        })
    }
}