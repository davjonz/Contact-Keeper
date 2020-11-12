// Server-side programs use CommonJS not ECMAscript 2015 (6). CommonJS doesn't have an import method. It uses
// require() to grab files as seen below
const express = require('express');
const connectDB = require('./config/db');

// Connect Database
connectDB();

const app = express();

app.get('/', (req, res) => 
  res.json({ msg: 'Welcome to the Contact Keeper API'})
);

// Dine Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });

