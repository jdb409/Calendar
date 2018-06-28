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

export const postEvent = (event) => {
    return (dispatch) => {
        axios.post('/api/events', event)
            .then(() => {
                dispatch(getEventsFromServer());
            })
            .catch(err => {
                console.log(err);
            })
    }
}


export const updateEvent = (eventId,event) => {
    console.log('update', event);
    return (dispatch) => {
        axios.put(`/api/events/${eventId}`, event)
            .then(() => {
                dispatch(getEventsFromServer());
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const deleteEvent = (eventId) => {
    return (dispatch) => {
        axios.delete(`/api/events/${eventId}`)
            .then(() => {
                dispatch(getEventsFromServer());
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export default function (state = {}, action) {
    switch (action.type) {
        case GET_EVENTS:
            return Object.assign({}, state, action.events);
        
        default:
            return state;
    }

}