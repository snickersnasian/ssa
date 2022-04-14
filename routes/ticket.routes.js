const { Router } = require('express')
const router = Router()
const Ticket = require('../models/Ticket')


// /api/tickets/createTicket
router.post('/createTicket', async (req, res) => {
    try {

        console.log(req.body)

        if (Object.keys(req.body).length !== 6) {
            return res.status(400).json({
                message: 'Error. Body not found or missed fields'
            })
        }
         
        const { 
            firstName, 
            lastName, 
            mail,
            event, 
            place,
            time
        } = req.body

        const ticket = new Ticket({
            firstName: firstName,
            lastName: lastName,
            mail: mail,
            event: event,
            place: place,
            time: time 
        })

        const response = await ticket.save()
        const ticketId = response.id

        res.json({
            message: 'ticket created',
            ticketId: ticketId
        })

    } catch (err) { 
        res.status(400).json({
            message: err.message
        })
    }
})


// /api/tickets/getTicket/:id
router.get('/getTicket/:id', async (req, res) => {
    try {

        console.log(req.params)

        const ticketId = req.params.id


        const ticket = await Ticket.findOne({_id: ticketId})

        // if (!ticket) {
        //     return res.json({
        //         message: 'Ticket not found.'
        //     })
        // }

        res.json({
            message: 'Ticket found.',
            ticket: ticket
        })

    } catch (err) {
        res.json({
            message: err.message
        })
    }
})


module.exports = router