import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Calendar from './Calendar';

import { getEventsFromServer } from '../store/events';



class Main extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getEventsFromServer();
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1 id='month'><strong>February</strong></h1>
                <div id='flex-wrapper'>
                    <Calendar />
                </div>
            </div>
        )
    }

}

const mapStateToProps = ({ events }) => events;

const mapDispatchToProps = (dispatch) => {
    return {
        getEventsFromServer: () => {
            dispatch(getEventsFromServer());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);