//our connect server
let express = require('express');
//let port =3000;
 
let app = express();

const localport = 3000;

let port = process.env.port || localport ;
//app.listen(3000);

app.set('port',port);

app.listen(port);

console.log(`Server listening at port: ${port}`);
app.use('/hello', (req, res, next) => {
    // req.url starts with "/foo"
   
    res.send('hello world');
    //res.redirect("index.html");
    next();
  });

//main  route
app.use('/', (req, res, next) => {
    // req.url starts with "/foo"
   
    res.send('welcome ji');
    next();
  });

  module.exports = app;