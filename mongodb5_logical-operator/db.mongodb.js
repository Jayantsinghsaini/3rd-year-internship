use('mydb'); // use the 'mydb' database

// Find documents where age > 18 AND district is 'kuchaman'
db.folder.find({
    $and: [
        { age: { $gt: 18 } },
        { "address.district": "kuchaman" }
    ]
});

// Find documents where age < 15 OR subject includes 'art'
db.folder.find({
    $or: [
        { age: { $lt: 15 } },
        { subject: "art" }
    ]
});

// Find documents where NOT (age > 20)
db.folder.find({
    age: { $not: { $gt: 20 } }
});

// Find documents where EITHER age > 18 OR subject includes 'math', BUT NOT BOTH
db.folder.find({
    $nor: [
        { age: { $gt: 18 } },
        { subject: "math" }
    ]
});
