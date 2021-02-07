/* const http = require('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World')
    });

server.listen(3000,() => {
    console.log('Server on port 3000')
}); */

const express = require('express');
const morgan = require('morgan');
const app = express();

//Settings
app.set('appName','Express Tutorial');
app.set('port','3000');
app.set('view engine','ejs');

/* function logger(req,res,next){
    console.log('Route received: '+req.protocol+'://'+req.get('host')+req.originalUrl);
    next();
} */

//Middlewares
app.use(express.json());
app.use(morgan('dev'));


//Routes
/* app.all('/user',(req,res, next)=>{
    console.log('Por aqui paso');
    next();
}); */

app.get('/user',(req,res)=>{
    res.send('Get request recibida')
});

app.post('/about',(req,res)=>{
    res.send('Post request recibida')
});

app.put('/contact/:id',(req,res)=>{
    console.log(req.body);
    res.send('User '+req.params.id+' updated')
});

app.delete('/user/:id',(req,res)=>{
    res.send('User '+req.params.id+' deleted')
});

app.get('/user',(req,res)=>{
    res.json({
        username:'Martin',
        lastname:'Tyncho'
    })
});

app.post('/user/:id',(req,res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Post request recibida')
});

app.get('/',(req,res)=>{
    const data = [{name: 'John'},{name: 'Martin'},{name: 'Valentina'}]
    res.render('index.ejs',{people: data});
});

app.use(express.static('public'));

app.listen(app.get('port'), () =>{
    console.log(app.get('appName'));
    console.log('Server on port ',app.get('port'));
});