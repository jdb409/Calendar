import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postEvent, updateEvent } from '../store/events';

class CreateEvent extends Component {
    constructor(props) {
        super(props);
        let date = new Date();
        let currentTime = `${this.addZero(date.getHours())}:${this.addZero(date.getMinutes())}`;
        // let fomattedMonth = (date.getMonth().length > 1 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`)
        let currentDate = `${date.getFullYear()}-02-${this.addZero(props.date)}`;
        if (props.event) {
            this.state = {
                title: props.event.title,
                description: props.event.description,
                startDate: props.event.startDate,
                endDate: props.event.endDate,
                startTime: props.event.startTime,
                endTime: props.event.endTime,
                allDay: props.event.allDay
            }
        } else {
            this.state = {
                title: '',
                description: '',
                startDate: currentDate,
                endDate: currentDate,
                startTime: currentTime,
                endTime: currentTime,
                allDay: false
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    addZero(dateStr) {
        if (String(dateStr).length < 2) {
            return `0${dateStr}`
        } else {
            return dateStr;
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }



    handleSubmit(e) {
        e.preventDefault();

        if (this.props.event) {
            this.props.updateEvent(this.props.event.id, this.state);
            return;
        } else {
            console.log('submit')
            this.props.postEvent(this.state)
        }
    }

    render() {
        const { title, description, startDate, startTime, endDate, endTime, allDay } = this.state;
        const { handleChange, handleSubmit } = this;
        return (
            <div className='form-modal'>
                <form className='form-group event-form' onSubmit={handleSubmit}>
                    <label htmlFor="title"><h4>Title</h4></label>
                    <input className='form-control' name='title' type='title' value={title} onChange={handleChange} />
                    <label htmlFor="description"><h4>Description</h4></label>
                    <input className='form-control' name='description' type='description' value={description} onChange={handleChange} />
                    <label htmlFor="startDate"><h4>Start Date</h4></label>
                    <input className='form-control' name='startDate' value={startDate} onChange={handleChange} type='date' disabled={this.props.event ? null : "true"} />
                    <label htmlFor="endDate"><h4>End Date</h4></label>
                    <input className='form-control' name='endDate' value={endDate} type='date' onChange={handleChange} />
                    <label htmlFor="startTime"><h4>Start Time</h4></label>
                    <input className='form-control' name='startTime' value={startTime} type='time' onChange={handleChange} />
                    <label htmlFor="endTime"><h4>End Time</h4></label>
                    <input className='form-control' name='endTime' value={endTime} type='time' onChange={handleChange} />
                    <input className='form-input-check' name='allDay' value={allDay} type='checkbox' onChange={handleChange} />
                    <label htmlFor="allDay"><h4>  All Day Event</h4></label>
                    <br />
                    <button onClick={this.props.onCloseModal}>Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postEvent: (event) => {
            dispatch(postEvent(event));
        },
        updateEvent: (eventId, event) => {
            dispatch(updateEvent(eventId, event));
        },
    }
}

export default connect(null, mapDispatchToProps)(CreateEvent);