
const express = require('express');
const app = express();
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middlehandler/errorhandler');

require('dotenv').config();


const port = process.env.PORT || 5000;

app.use(express.json());



app.use('/api/contacts', contactRoutes);
app.use(errorHandler);

app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
