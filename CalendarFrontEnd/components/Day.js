import React, { Component } from 'react';

class Day extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='card'>
                <div className='card-header'>
                    {this.props.date}
                </div>
                <div className='card-body'>
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}

export default Day;