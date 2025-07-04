const express = require('express');
const router = express.Router();
const {getContacts,postContact,updateContact,deleteContact} = require("../controllers/contactController");

router.route('/').get(getContacts);
router.route('/').post(postContact);
router.route('/:id').put(updateContact);
router.route('/:id').delete(deleteContact);

module.exports = router;
