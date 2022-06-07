import {useState} from 'react';
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {handleSaveTweet} from '../actions/tweet';
const NewTweet = (props) => {

    const navigate = useNavigate();
    const [text, setText] = useState("");
    const {id, author} = props;
    const handleOnChange = (e) => {
        const value = e.target.value;
        setText(value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.dispatch(handleSaveTweet({text, author, replyingTo: id}));
        setText("");
        if(!id){
            navigate("/");
        }
    }

    return (
        <div>
            <h3 className="center">Compose new Tweet</h3>
            <form className={"new-tweet"} onSubmit={handleOnSubmit}>
                <textarea className="textarea" placeholder="What's happening?" maxLength="280" onChange={handleOnChange} value={text}/>
                <button className={"btn"} disabled={text === ""}>SUBMIT</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const {id} = props;
    return {
        id,
        author: state.authedUser
    }
}
export default connect(mapStateToProps)(NewTweet);