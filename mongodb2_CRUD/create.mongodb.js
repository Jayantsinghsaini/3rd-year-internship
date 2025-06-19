use('mydb') // use the 'mydb' database

// create one document
db.folder.insertOne({
    name: "jayant",
    age: 21,
    class: "3rd year",
    address: { state: "rajasthan", district: "kuchaman", localArea: "dalla balaji" },
    subject: ["html", "css", "js"]
})

// create many documents
db.folder.insertMany([
    {
        name: "david",
        age: 14,
        class: "9th",
        address: { state: "rajasthan", district: "alwar", localArea: "baseth" },
        subject: ["math", "social science", "english"]
    },
    {
        name: "suhani",
        age: 20,
        class: "1rd year",
        address: { state: "rajasthan", district: "kuchaman", localArea: "dalla balaji" },
        subject: ["physics", "chemisty", "math"]
    },
    {
        name: "sanjana",
        age: 19,
        class: "1rd year",
        address: { state: "rajasthan", district: "alwar", localArea: "baseth" },
        subject: ["art"]
    },
    {
        name: "namo",
        age: 12,
        class: "6th",
        address: { state: "rajasthan", district: "kuchaman", localArea: "dalla balaji" },
        subject: ["hindi", "english"]
    }
])


