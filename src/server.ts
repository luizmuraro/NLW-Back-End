import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    // JSON

    response.json([
        'Ronaldo',
        'Ronaldinho',
        'Romario',
        'Romarinho'
    ]);
});

app.listen(3333);