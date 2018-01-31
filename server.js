//our connect server
let express = require('express');
let port =3000;
 
let app = express();

app.listen(3000);

console.log(`Server listening at port: ${port}`);

app.use('/hello', (req, res, next) => {
    // req.url starts with "/foo"
   
    res.end('hello world');
    next();
  });

//main  route
app.use('/', (req, res, next) => {
    // req.url starts with "/foo"
   
    res.end('welcome ji');
    next();
  });

  