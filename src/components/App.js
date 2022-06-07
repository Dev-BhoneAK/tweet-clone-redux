import {Route, Routes, Link} from 'react-router-dom';
import {useEffect, Fragment} from "react";
import {connect} from "react-redux";
import {handleReceiveData} from "../actions/shared";
import Nav from './Nav';
import Home from './Home';
import NewTweet from './NewTweet';
import TweetDetail from "./TweetDetail";
import LoadingBar from "react-redux-loading-bar";
// const App = (props) => {
//
//     useEffect(() => {
//         console.log('use Effect');
//         props.dispatch(handleReceiveData());
//     }, [])
//     return (
//         <div className={"container"}>
//             <Nav />
//             <Routes>
//                 <Route path='/' exact element={<Home />} />
//                 <Route path='/new' element={<NewTweet />} />
//                 <Route path="/tweet/:id" element={<TweetDetail />}/>
//             </Routes>
//         </div>
//     );
// }
//
// export default connect()(App);

const App = (props) => {
    useEffect(() => {
        console.log('use Effect');
        props.dispatch(handleReceiveData());
    }, []);

    return (
        <Fragment>
            <LoadingBar />
            <div className="container">
                <Nav />
                {props.loading === true ? null : (
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/tweet/:id" element={<TweetDetail />} />
                        <Route path="/new" element={<NewTweet />} />
                    </Routes>
                )}
            </div>
        </Fragment>
    );
};

const mapStateToProps = ({ authedUser }) => ({
    loading: authedUser === null,
});

export default connect(mapStateToProps)(App);