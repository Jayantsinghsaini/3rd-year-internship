use('mydb'); // use the 'mydb' database

// Delete one document: where name is 'namo'
db.folder.deleteOne({ name: "namo" });

// Delete many documents: where district is 'alwar'
db.folder.deleteMany({ "address.district": "alwar" });

// Delete all documents (use with caution)
db.folder.deleteMany({});
