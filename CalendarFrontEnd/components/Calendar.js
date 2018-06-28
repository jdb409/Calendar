import React, { Component } from 'react';
import { connect } from 'react-redux';
import Day from './Day';

class Calendar extends Component {
    constructor() {
        super();
    }
    
    render() {
        const weeks = [1, 2, 3, 4];
        const days = [1, 2, 3, 4, 5, 6, 7];
        const {events} = this.props;
        return (
            <div id='calendar'>
                {
                    weeks.map(week => {
                        return (
                            <ul key={week}
                                className='week'
                            >
                                {
                                    days.map(day => {
                                        let date = (7 * (week - 1) + day)
                                        return (
                                            <li
                                                key={date}
                                                className = 'day'
                                            ><Day date={date} events = {events ? events[date] || events[`0${date}`]: []}/></li>
                                        )
                                    })
                                }
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = ({events}) => events;

// const mapDispatchToProps = (dispatch) => {
//     return{
//         getEventsFromServer: () => {
//             dispatch(getEventsFromServer());
//         }
//     }
// }

export default connect(mapStateToProps, null)(Calendar);
