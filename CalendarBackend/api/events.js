const router = require('express').Router();
const { Event } = require('../db');

router.get('/', (req, res) => {
    Event.findAll()
        .then(events => {
            const groupByDay = events.reduce((memo, current) => {
                let startDate = current.startDate.split('-')[2];
                let endDate = current.endDate.split('-')[2];
                // console.log(date, String(Number(startDate) + 1).padStart(2, '0'));
                if (!memo[startDate]) {
                    memo[startDate] = [];
                }
                memo[startDate].push(current);
                if (startDate != endDate && !isNaN(startDate)) {
                    console.log(current);

                    do {
                        startDate = String(Number(startDate) + 1).padStart(2, '0');
                        
                        let formatted = current.startDate.split('-');
                        formatted.splice(2,1);
                        formatted.push(startDate)
                        console.log(current.startDate)
                        current.startDate = formatted.join("-");

                        if (!memo[startDate]) {
                            memo[startDate] = [];
                        }
                        memo[startDate].push(current);

                    } while (startDate != endDate)
                }

                return memo;
            }, {})

            res.status(200).send({ events: groupByDay });
        })
        .catch(err => {
            console.log(`err getting: api/events line 10`, err);
            res.send(err);
        })
})

router.post('/', (req, res) => {
    Event.create(req.body)
        .then(() => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.log(`err posting: api/events line 21`, err);
            res.send(err);
        })
})

router.put('/:id', (req, res) => {
    Event.findById(req.params.id)
        .then(event => {
            return event.update(req.body)
        })
        .then(() => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.log(`err update: api/events line 35`, err);
            res.send(err);
        })
})

router.delete('/:id', (req, res) => {
    console.log(req.params.id)
    Event.findById(req.params.id)
        .then(event => {
            return event.destroy();
        })
        .then(() => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.log(`err delete: api/events line 49`, err);
            res.send(err);
        })

})

module.exports = router;