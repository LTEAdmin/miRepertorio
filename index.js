import express from 'express';
import router from './routes/routes.js';
const app=express();
const port = process.env.PORT || 3000;

//midelleware para rutas
app.use('/', router);

app.listen(port, console.log(`Example app listening on port http://localhost:${port}`));

