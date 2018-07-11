const express = require('express');

const app = express();
const dev = app.get('env') !== 'production';

app.get('/api/customers', (req, res) => {
   const customers = [
       {id: 1, firstName: 'Glen', lastName: 'Hughes'},
       {id: 2, firstName: 'Tim', lastName: 'Gill'},
       {id: 3, firstName: 'Chris', lastName: 'Sumner'}
   ];

   res.json(customers);
});

const port = 5000;

app.listen(port, () => {console.log(`Server started on port ${port}`)});

