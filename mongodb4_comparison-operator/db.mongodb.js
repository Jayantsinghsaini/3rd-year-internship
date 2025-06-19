use('mydb'); // use the 'mydb' database

// Find documents where age is greater than 18
db.folder.find({ age: { $gt: 18 } });

// Find documents where age is less than or equal to 14
db.folder.find({ age: { $lte: 14 } });

// Find documents where age is not equal to 20
db.folder.find({ age: { $ne: 20 } });

// Find documents where age is between 15 and 21 (inclusive)
db.folder.find({ age: { $gte: 15, $lte: 21 } });

// Find documents where name is in the list
db.folder.find({ name: { $in: ["jayant", "suhani"] } });

// Find documents where district is not in the list
db.folder.find({ "address.district": { $nin: ["alwar", "jaipur"] } });
