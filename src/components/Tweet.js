import {TiArrowBackOutline, TiHeartFullOutline, TiHeartOutline} from 'react-icons/ti';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {handleLikeTweet} from '../actions/tweet';
import {formatDate, formatTweet} from '../utils/helpers';

const Tweet = (props) => {

    const {tweet, authedUser} = props;

    const {id, likes, replies, text, timestamp, name, avatar, hasLiked, parent} = tweet;

    const handleLike = (e) => {
        e.preventDefault();
        console.log('authed user ', authedUser);
        props.dispatch(handleLikeTweet({id, hasLiked, authedUser}));
    }

    const toParent = (e) => {
        e.preventDefault();
    }
    return (
      <Link to={`/tweet/${id}`} className="tweet">
          <img src={avatar} alt="Avatar" className={"avatar"}/>
          <div className="tweet-info">
              <div>
                  <span>{name}</span>
                  <div>{formatDate(timestamp)}</div>
                  {parent && (
                      <button
                          className="replying-to"
                          onClick={(e) => toParent(e, parent.id)}
                      >
                          Replying to @{parent.author}
                      </button>
                  )}
                  <p>{text}</p>
              </div>
              <div className="tweet-icons">
                  <TiArrowBackOutline className="tweet-icon" />
                  <span>{replies}</span>
                  <button className="heart-button" onClick={handleLike}>
                      {hasLiked === true ? (
                          <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
                      ) : (
                          <TiHeartOutline className="tweet-icon" />
                      )}
                  </button>
                  <span>{likes}</span>
              </div>
          </div>
      </Link>
    );
}

const mapStateToProps = (state, {id}) => {
    const tweet = state.tweets[id];
    const author = state.users[tweet.author];
    return {
        authedUser: state.authedUser,
        tweet: formatTweet(tweet, author, state.authedUser, state.tweets[tweet.replyingTo]),
    }
}

export default connect(mapStateToProps)(Tweet);