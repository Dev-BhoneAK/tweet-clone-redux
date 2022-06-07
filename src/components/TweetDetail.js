import Tweet from "./Tweet";
import NewTweet from "./NewTweet";
import {connect} from 'react-redux';
import {useLocation, useNavigate, useParams} from "react-router-dom";

const withRouter = (Component) => {
    console.log('in router');
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    };

    return ComponentWithRouterProp;
};

const TweetDetail = (props) => {
    const {id, tweet, replies} = props;
    return (
        <div>
            <Tweet id={id}/>
            <NewTweet id={id}/>
            {replies.length > 0 && <h3 className="center">Replies</h3>}
            <ul>
                {replies.map(reply => (
                    <li key={reply}>
                        <Tweet id={reply}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    console.log('in mapStateToProps');
    const {id} = props.router.params;
    console.log('TWEET ', state.tweets[id]);
    return {
        id,
        tweet: state.tweets[id],
        replies: state.tweets[id] ? state.tweets[id].replies.sort((a, b) => state.tweets[b].timestamp - state.tweets[a].timestamp): []
    }
}

export default withRouter(connect(mapStateToProps)(TweetDetail));