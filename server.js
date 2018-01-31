//our connect server
let connect = require('connect');
let port =3000;
 
let app = connect();

app.listen(3000);

console.log(`Server listening at port: ${port}`);

app.use('/hello', (req, res, next) => {
    // req.url starts with "/foo"
    res.setHeader('Content-Type','text/plain');
    res.end('hello world');
    next();
  });

//main  route
app.use('/', (req, res, next) => {
    // req.url starts with "/foo"
    res.setHeader('Content-Type','text/plain');
    res.end('welcome ji');
    next();
  });

  