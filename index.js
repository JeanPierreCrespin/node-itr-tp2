const express = require('express')
const app = express();
const tareaRoutes = require('./routes/tareaRoutes')
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))
app.use(express.json())

//routes
app.get('/', (req, res) => {
  res.send('Admin tareas')
})

app.use(tareaRoutes)

app.listen(5000, () => {
    console.log(`Servidor en ejecución en el puerto 5000`);
  });
