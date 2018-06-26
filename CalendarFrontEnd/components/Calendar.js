import React, { Component } from 'react';
import Day from './Day';

class Calendar extends Component {
    constructor() {
        super();
    }

    render() {
        const weeks = [1, 2, 3, 4];
        const days = [1, 2, 3, 4, 5, 6, 7];
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
                                        return (
                                            <li
                                                key={(7 * (week - 1) + day)}
                                                className = 'day'
                                            ><Day date={(7 * (week - 1) + day)} /></li>
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

export default Calendar;