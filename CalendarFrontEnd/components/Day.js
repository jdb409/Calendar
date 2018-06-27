import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

import CreateEvent from './CreateEvent';

class Day extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
        this.onCloseModal = this.onCloseModal.bind(this);
        this.onOpenModal = this.onOpenModal.bind(this);
    }

    onOpenModal() {
        this.setState({ open: true });
    };

    onCloseModal() {
        this.setState({ open: false });
    };


    render() {
        const { open } = this.state;
        const { date, events } = this.props;
        return (
            <div className='card day-card'>
                <div className='card-header'>
                    {date}
                </div>
                <div className='card-body'>
                    <ul id='days-events'>
                        {events && events.map(event => {
                            return (
                                <li key = {event.id}>{event.title}</li>
                            )
                        })}
                    </ul>
                    <button
                        className="btn btn-sm btn-primary add-event"
                        onClick={this.onOpenModal}
                    >Add Event</button>
                    <Modal
                        open={open}
                        onClose={this.onCloseModal} center
                    >
                        <h1>Add Event</h1>
                        <p>---------------------------------------------------------------------------</p>
                        <CreateEvent date={date} />
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Day;