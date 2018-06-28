import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';

import CreateEvent from './CreateEvent';
import { deleteEvent } from '../store/events';

class EventDetail extends Component {

    constructor() {
        super();
        this.state = {
            addEventModal: false,
        }
        this.onCloseAddModal = this.onCloseAddModal.bind(this);
        this.onOpenAddModal = this.onOpenAddModal.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    onOpenAddModal(e) {
        this.setState({ addEventModal: true });
    };

    onCloseAddModal() {
        this.setState({ addEventModal: false });
    };

    handleDelete() {
        console.log('asdf')
        this.props.onCloseDetailModal();
        this.props.deleteEvent(this.props.event.id);
    }
    render() {
        const {addEventModal} = this.state;
        const { event } = this.props;
        return (
            <div className='card event-modal'>
                <div className='card-header'>
                    <h2>{event.title}</h2>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Start Date: {event.startDate}</li>
                    <li className="list-group-item">End Date: {event.endDate}</li>
                    <li className="list-group-item">Start Time: {event.startTime}</li>
                    <li className="list-group-item">End Time: {event.endTime}</li>
                    <li className="list-group-item">Description: {event.description}</li>
                </ul>
                <div className='card-footer flex-footer'>

                    <button
                        className='btn btn-success'
                        onClick={this.onOpenAddModal}
                    >Update</button>
                    <Modal
                        open={addEventModal}
                        onClose={this.onCloseAddModal} center
                    >
                        <CreateEvent event={event} onCloseModal={this.onCloseAddModal} />
                    </Modal>

                    <button onClick={this.handleDelete} className='btn btn-danger'>Delete</button>
                </div>
            </div>


        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEvent: (eventId) => {
            dispatch(deleteEvent(eventId));
        },
    }
}

export default connect(null, mapDispatchToProps)(EventDetail);