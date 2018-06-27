import React, { Component } from 'react';
import axios from 'axios';

class CreateEvent extends Component {
    constructor(props) {
        super(props);
        let date = new Date();
        let currentTime = `${this.addZero(date.getHours())}:${this.addZero(date.getMinutes())}`;
        // let fomattedMonth = (date.getMonth().length > 1 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`)
        let currentDate = `${date.getFullYear()}-02-${this.addZero(props.date)}`;
        this.state = {
            title: '',
            description: '',
            startDate: currentDate,
            endDate: currentDate,
            startTime: currentTime,
            endTime: currentTime,
            allDay: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addZero(dateStr){
        if (String(dateStr).length < 2){
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
        console.log(this.state);
        axios.post('/api/events', this.state)
        .then(() => {
            console.log('posted');
        })
        .catch(err => {
            console.log(err);
        })
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
                    <input className='form-control' name='startDate' value={startDate} onChange={handleChange} type='date' disabled/>
                    <label htmlFor="endDate"><h4>End Date</h4></label>
                    <input className='form-control' name='endDate' value={endDate} type='date' onChange={handleChange} />
                    <label htmlFor="startTime"><h4>Start Time</h4></label>
                    <input className='form-control' name='startTime' value={startTime} type='time' onChange={handleChange} />
                    <label htmlFor="endTime"><h4>End Time</h4></label>
                    <input className='form-control' name='endTime' value={endTime} type='time' onChange={handleChange} />
                    <input className='form-input-check' name='allDay' value={allDay} type='checkbox' onChange={handleChange} />
                    <label htmlFor="allDay"><h4>  All Day Event</h4></label>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateEvent;