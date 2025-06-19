use('mydb'); // use the 'mydb' database

// Update one document: change age of 'jayant' to 22
db.folder.updateOne(
    { name: "jayant" },
    { $set: { age: 22 } }
);

// Update many documents: set 'verified' to true where district is 'kuchaman'
db.folder.updateMany(
    { "address.district": "kuchaman" },
    { $set: { verified: true } }
);

// Increment age of 'david' by 1
db.folder.updateOne(
    { name: "david" },
    { $inc: { age: 1 } }
);

// Rename field 'class' to 'year' in all documents
db.folder.updateMany(
    {},
    { $rename: { "class": "year" } }
);

// Add a subject to 'suhani' if it doesn’t already exist
db.folder.updateOne(
    { name: "suhani" },
    { $addToSet: { subject: "english literature" } }
);
