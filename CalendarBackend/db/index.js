const db = require('./conn');
const Event = require('./Event');

const seed = () => {
    return db.sync({
        force: true
    })
        .then(() => {
            Promise.all([
                Event.create({
                    title: "Event 1",
                    description: "description 1",
                    startDate: "2018-02-26",
                    endDate: "2018-02-26",
                    startTime: "0130",
                    endTime: "0230",
                    allDay: false
                }),
                Event.create({
                    title: "Event 2",
                    description: "description 1",
                    startDate: "2018-02-26",
                    endDate: "2018-02-26",
                    startTime: "0130",
                    endTime: "0230",
                    allDay: false
                }),
                Event.create({
                    title: "Event 3",
                    description: "description 1",
                    startDate: "2018-02-06",
                    endDate: "2018-02-06",
                    startTime: "0130",
                    endTime: "0230",
                    allDay: false
                }),
                Event.create({
                    title: "Event 4",
                    description: "description 1",
                    startDate: "2018-02-06",
                    endDate: "2018-02-06",
                    startTime: "0130",
                    endTime: "0230",
                    allDay: false
                })
            ])
        })
}


module.exports = {
    db, Event, seed
}