
const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(express.json());

const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contacts', contactRoutes);

app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
