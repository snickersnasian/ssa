const { Router } = require('express')
const router = Router()
const Ticket = require('../models/Ticket')
const QRCode = require('qrcode')
const { sendMail } = require('../mailer')


// /api/tickets/createTicket
router.post('/createTicket', async (req, res) => {
    try {

        const hostUrl = req.protocol + '://' + req.get('host')

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

        const ticketUrl = `${hostUrl}/api/tickets/getTicket/${ticketId}`

        const qr = await QRCode.toDataURL(ticketUrl)

        const mailBody = 
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <style>
                    h1 {
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <div className="message">
                    <h1>Вы зарегистрированы на ${event}</h1> 
                    <h2>Место: ${place}</h2> 
                    <h2>Дата: ${time}</h2>

                    <p>Имя: ${firstName}</p> 
                    <p>Фамилия: ${lastName}</p>
                    <img src=${qr}></img>
                </div>
            </body>
            </html>`

        const result = await sendMail(mail, "Регистрания на мероприятие: " + event, mailBody)

        if (!result.messageSent) {
            Ticket.findByIdAndDelete(ticketId)
            
            return res.status(400).json({
                message: "Can't create ticket."
            })
        }

        res.status(200).json({
            message: 'Ticket created',
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