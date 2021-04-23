const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.resolve('__dir', '..', '..', 'dist')))

app.use((req, res, next) => res.sendFile(path.resolve('__dir', '..', '..', 'dist')));

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log('Server started on port ${port}');
})