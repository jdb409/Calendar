import axios from 'axios';

const GET_EVENTS = "GET_EVENTS";

const getEvents = (events) => {
    return {
        type: GET_EVENTS,
        events
    }
}


export const getEventsFromServer = () => {
    return (dispatch) => {
        axios.get(`/api/events`)
            .then(res => res.data)
            .then(events => {
                dispatch(getEvents(events))
            })
    }
}

// export const postRecord = (record, userId) => {
//     record.userId = userId;
//     console.log('postRecord', userId);
//     return () => {
//         axios.post(`/api/matchinfo/${userId}`, record)
//             .then(res => res.data)
//             .then(() => {
//                 console.log('hello');
//                 getRecordsFromServer(userId)
//             })
//     }
// }

export default function (state = {}, action) {
    switch (action.type) {
        case GET_EVENTS:
            return Object.assign({}, state, action.events);
        default:
            return state;
    }

}