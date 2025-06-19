use('mydb'); // use the 'mydb' database

// Read all documents in the 'folder' collection
db.folder.find();

// Read documents with age greater than 18
db.folder.find({ age: { $gt: 18 } });

// Read documents where 'district' is 'kuchaman'
db.folder.find({ "address.district": "kuchaman" });

// Read documents with 'math' as a subject
db.folder.find({ subject: "math" });

// Read one specific document (e.g., name is 'jayant')
db.folder.findOne({ name: "jayant" });
