const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Nodemailer server is running!');
});

app.post('/post', (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'portfolioemail11@gmail.com',
      pass: 'kttxnntfzmvvptds'
    }
  });

  const mailOptions = {
    from: req.body.email,
    to: 'portfolioemail11@gmail.com',
    text: `From: ${req.body.email}\n\n${req.body.message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log('Email sent');
      res.json({ status: 'success' });
    }
  });
});

app.listen(PORT, (res, err) => {
  if (err) {
    console.log('Server failed.');
  } else {
    console.log(`nodemailer is listening at http://localhost:${PORT}`);
  }
});
