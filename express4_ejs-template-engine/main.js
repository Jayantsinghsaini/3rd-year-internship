let express = require('express');
let app = express();
let port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let navBar = "jayant's bar"
  res.render('index.ejs', {foo: navBar});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));