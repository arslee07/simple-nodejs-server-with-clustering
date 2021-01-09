import express from 'express';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    const query = JSON.stringify(req.query);
    res.send(`Your query is: ${query}`);
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});