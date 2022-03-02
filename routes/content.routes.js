const { Router } = require('express')
const router = Router()
const Event = require('../models/Event')


// /api/content/events
router.get('/events', async (req, res) => {
    try {
        const occasion = await Event.find()
        res.send(occasion)
    } catch (err) {
        res.json({
            message: err.message
        })
    }
})




// /api/content/events/eventId
router.get('/events/:id', async (req, res) => {
    try {

        const id = req.params.id

        if (!id) {
            return res.send('id error')
        }
    
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.send('query error')
        }

        const event = await Event.findById(id)

        res.send(event)



    } catch (err) {
        res.json({
            message: err.message
        })
    }
})

// /api/content/events
router.post('/events', async (req, res) => {
    try {
        

        res.json({
            message: 'none'
        })

    } catch (err) {
        res.json({
            message: err.message
        })
    }
})


module.exports = router