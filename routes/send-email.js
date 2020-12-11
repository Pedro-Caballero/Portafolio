const { Router } = require('express'); // me decuelve un objeto
const router = Router();
const nodemailer = require('nodemailer');

router.post('/email', async(req, res) => {
    const { nombre, email, mensaje } = req.body;

    contentHTML = `

        <h1>Información</h1>
        <ul>
            <li>Nombre: ${nombre} </li>
            <li>Email: ${email} </li>
        </ul>
        <p>Mensaje: ${mensaje}</p>
    `;

    const transporte = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'pedro.caballero.ram@gmail.com',
            pass: '2015600258'
        },
        tls: {
            rejectUnauthorized: true
        }
    });

    const info = await transporte.sendMail({
        from: "'Página web informes' <pedro.caballero.ram@gmail.com>",
        to: 'pedro-caba10@outlook.com',
        subject: 'Informes de página web',
        html: contentHTML
    });

    console.log('Mensaje enviado', info.messageId);
    res.redirect('/');
    // res.send("<script>alert('Mensaje Enviado')</script>");
});

module.exports = router;