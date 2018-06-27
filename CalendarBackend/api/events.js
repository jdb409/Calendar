const router = require('express').Router();
const { Event } = require('../db');

router.get('/', (req, res) => {
    Event.findAll()
        .then(events => {
            const groupByDay = events.reduce((memo, current) => {
                let date = current.startDate.split('-')[2];
                if (!memo[date]) {
                    memo[date] = [];
                }
                memo[date].push(current);
                return memo;
            }, {})

            res.status(200).send({events:groupByDay});
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