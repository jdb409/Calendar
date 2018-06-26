import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Calendar from './Calendar';


const Main = () => {

    return (
        <div id = 'flex-wrapper'>
            <Calendar />
        </div>
    )

}

export default Main;