const express = require('express');
const routes = require('../routes/routes');


module.exports = (app) => {
    //setting
    app.set('port',process.env.PORT || 3000);
    
   //middelware
   app.use(express.json())
    //static
    
    //rutas
    routes(app);
    


    return app;
}