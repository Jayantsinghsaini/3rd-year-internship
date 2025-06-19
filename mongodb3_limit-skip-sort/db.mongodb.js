use('mydb'); // use the 'mydb' database

// Get the first 3 documents
db.folder.find().limit(3);

// Skip the first 2 documents and return the rest
db.folder.find().skip(2);

// Get documents sorted by age in ascending order
db.folder.find().sort({ age: 1 });

// Get documents sorted by name in descending order
db.folder.find().sort({ name: -1 });

// Combine sort, skip, and limit: skip 1, sort by age descending, limit to 2
db.folder.find().sort({ age: -1 }).skip(1).limit(2);
