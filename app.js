const express = require('express');
const mainRoutes = require('./routers/main');

const app = express();

app.use(express.static("public"));

app.use(mainRoutes);

app.use(mainRoutes);

app.listen(3027, () =>{
    console.log('Conectado a localhost:3027');
});
