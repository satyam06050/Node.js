const getContacts = (req, res) => {
  
  res.status(200).json({message: " Get all contactsss" });
};
const postContact = (req, res) => {
  console.log(req.body);
  const{name,email,phone}=req.body;
  if(!name || !email || !phone){
    res.status(400);
    throw new Error("All fields are required");
  }
 res.status(201).json({message: " Create contacts"});
};
const updateContact = (req, res) => {
  
  res.status(200).json({message: `Update Contacts for ${req.params.id}`});
};
const deleteContact = (req, res) => {
    res.status(200).json({message: `del Contacts for ${req.params.id}`});
  
};
module.exports ={getContacts,postContact,updateContact,deleteContact};
