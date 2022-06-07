import Tweet from "./Tweet";
import {connect} from "react-redux";

const Home = (props) => {
    return (
        <div>
            <h3 className="center">Your Timeline</h3>
            <ul className="dashboard-list">
                {props.tweets.map(tweet => (
                    <li key={tweet}>
                        <Tweet id={tweet}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        tweets: Object.keys(state.tweets).sort((a,b) => state.tweets[b].timestamp - state.tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(Home);