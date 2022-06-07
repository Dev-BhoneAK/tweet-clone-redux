import {saveLikeToggle} from '../utils/api';
import {saveTweet as saveTweetApi} from '../utils/api';
export const LIKE_TWEET = 'LIKE_TWEET';
export const SAVE_TWEET = 'SAVE_TWEET';

const likeTweet = (info) => {
    return {
        type: LIKE_TWEET,
        tweetId: info.id,
        hasLiked: info.hasLiked,
        likedUser: info.authedUser
    }
}

const saveTweet = (formattedTweet) => {
    return {
        type: SAVE_TWEET,
        tweet: formattedTweet
    }
}

export const handleLikeTweet = (info) => {
    return (dispatch) => {
        dispatch(likeTweet(info));
        saveLikeToggle(info).catch(() => {
            dispatch(likeTweet(info));
        });
    }
}

export const handleSaveTweet = (info) => {
    return (dispatch) => {
        saveTweetApi(info).then((formattedTweet) => {
            dispatch(saveTweet(formattedTweet));
        })
    }
}