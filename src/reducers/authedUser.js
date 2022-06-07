import {RECEIVE_DATA} from '../actions/shared';

// const authedUser = (state = null, action) => {
//     switch (action.type) {
//         case RECEIVE_DATA:
//             return action.authedUser;
//         default:
//             return state;
//     }
// }

export default function authedUser(state = null, action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.authedUser;
        default:
            return state;
    }
}
// export default authedUser;