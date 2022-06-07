import {RECEIVE_DATA} from '../actions/shared';
import {LIKE_TWEET, SAVE_TWEET} from '../actions/tweet';
const tweets = (state= {}, action) => {
    switch (action.type) {
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.tweets
            }
        case LIKE_TWEET:
            return {
                ...state,
                [action.tweetId]: {
                    ...state[action.tweetId],
                    likes: action.hasLiked === true ? state[action.tweetId].likes.filter(likedUser => likedUser != action.likedUser):
                        state[action.tweetId].likes.concat([action.likedUser])
                }
            }
        case SAVE_TWEET:
            if(action.tweet.replyingTo !== null){
                return {
                    ...state,
                    [action.tweet.replyingTo]: {
                        ...state[action.tweet.replyingTo],
                        replies:state[action.tweet.replyingTo].replies.concat(action.tweet.id)
                    },
                    [action.tweet.id]: action.tweet
                }
            }else{
                return {
                    ...state,
                    [action.tweet.id]: action.tweet
                }
            }
        default:
            return state;
    }
}

export default tweets;