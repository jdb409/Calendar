const db = require('./conn');
const { Event } = require('./index');

const seed = () => {
    return db.sync({
        force: true
    })
        .then(() => {
            Promise.all([
                Event.create({
                    title: "Event 1",
                    description: "description 1",
                    startDate: "020118",
                    endDate: "020118",
                    startTime: "0130",
                    endTime: "0230",
                    allDay: false
                })
            ])
        })
}

module.exports = seed;