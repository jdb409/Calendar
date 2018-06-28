import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

import CreateEvent from './CreateEvent';
import EventDetail from './EventDetail';

class Day extends Component {
    constructor() {
        super();
        this.state = {
            addEventModal: false,
            eventDetailModal: false
        }
        this.onCloseAddModal = this.onCloseAddModal.bind(this);
        this.onOpenAddModal = this.onOpenAddModal.bind(this);
        this.onCloseDetailModal = this.onCloseDetailModal.bind(this);
        this.onOpenDetailModal = this.onOpenDetailModal.bind(this);
    }

    onOpenAddModal(e) {
        this.setState({ addEventModal: true });
    };

    onCloseAddModal() {
        this.setState({ addEventModal: false });
    };

    onOpenDetailModal(e) {
        this.setState({ eventDetailModal: true });
    };

    onCloseDetailModal() {
        this.setState({ eventDetailModal: false });
    };




    render() {
        const { addEventModal, eventDetailModal } = this.state;
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
                                <li key={event.id}>
                                    <button
                                        onClick={this.onOpenDetailModal}
                                    >{event.title}
                                    </button>
                                    <Modal
                                        open={eventDetailModal}
                                        onClose={this.onCloseDetailModal} center
                                    >
                                        <EventDetail event = {event} onCloseDetailModal = {this.onCloseDetailModal} />
                                    </Modal>
                                </li>
                            )
                        })}
                    </ul>
                    <button
                        className="btn btn-sm btn-primary add-event"
                        name='asdf'
                        onClick={this.onOpenAddModal}
                    >Add Event</button>
                    <Modal
                        open={addEventModal}
                        onClose={this.onCloseAddModal} center
                    >
                        <h1>Add Event</h1>
                        <p>---------------------------------------------------------------------------</p>
                        <CreateEvent date={date} onCloseModal = {this.onCloseAddModal}/>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Day;