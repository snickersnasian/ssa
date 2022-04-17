const { Router } = require('express')
const router = Router()
const Ticket = require('../models/Ticket')
const QRCode = require('qrcode')
const { sendMail } = require('../mailer')


// /api/tickets/createTicket
router.post('/createTicket', async (req, res) => {
    try {

        const hostUrl = req.protocol + '://' + req.get('host')

        const year  = new Date().getFullYear()

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

        const ticketUrl = `${hostUrl}/ticket/${ticketId}`

        const qr = await QRCode.toDataURL(ticketUrl)

        const mailBody = 
            `
            <head>
            </head>
            <body style="width: 600px;height: 800px;margin: 0 auto 50px;">
                <div class="header" style="margin-bottom: 60px;">
                    <div class="title" style="width: 374px;height: 60px;font-family: 'Helvetica Neue', sans-serif;font-style: italic;text-transform: uppercase;font-weight: 300;font-size: 30px;line-height: 30px;color:#BF0202;"><p >${event}</p></div>
                    <div class="role" style="width: 300px;height: 42px;padding-left: 40px;text-transform: uppercase;font-family: 'Helvetica Neue', sans-serif;font-style: italic;font-weight: 300;font-size: 35px;line-height: 42px;"><p>${firstName} ${lastName}</p></div>
                </div>

                <div class="event" style="height: 43px;margin-bottom: 10px;font-family: 'Helvetica Neue', sans-serif;font-style: normal;font-weight: 700;font-size: 35px;line-height: 43px;text-align: center;letter-spacing: 0.05em;color: #000000;"><p>Отсканируйте QR</p></div>

                <div class="qr" style="width: 329px;height: 329px;background: #898989;margin: 0 auto 70px;">
                    <img style="width: 329px;height: 329px;" src=${qr}></img>
                </div>

                <div class="place" style="margin-bottom: 30px;">
                    <p style="font-family: 'Helvetica Neue', sans-serif;font-size: 20px;font-style: italic;font-weight: 700;line-height: 24px;letter-spacing: 0em;text-align: center;">${time}</p>
                    <p style="font-family: 'Helvetica Neue', sans-serif;font-size: 20px;font-style: italic;font-weight: 400;line-height: 24px;letter-spacing: 0em;text-align: center;">${place}</p>
                </div>

                <div class="footer" style="font-family: Helvetica;width: 580px;height: 25px;margin: 0 auto;display: flex;justify-content: space-between;font-size: 15px;font-style: normal;font-weight: 400;line-height: 22px;letter-spacing: 0em;text-align: left;color: #6B6B6B;">
                    <p>ССА</p>
                    <p>Event</p>
                    <p>${year}</p>
                </div>
            </body>

            `

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