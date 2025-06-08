import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.json({ message: 'cool, the server is running properly! ' });
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});

