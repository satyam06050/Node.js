const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  
  res.status(200).json({message: " Get all contactsss"});
});
router.post('/', (req, res) => {
  
  res.status(200).json({message: " Create contacts"});
});
router.put('/:id', (req, res) => {
  
  res.status(200).json({message: `Update Contacts for ${req.params.id}`});
});
router.delete('/:id', (req, res) => {
  
  res.status(200).json({message: `del Contacts for ${req.params.id}`});
});

module.exports = router;
