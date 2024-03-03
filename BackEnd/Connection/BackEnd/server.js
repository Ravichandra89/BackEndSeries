import express from "express"
const app = express();

// app.get('/',(req,res) => {
//     res.send("Server is ready");
// })

// Get jokes
app.get('/api/jokes',(req,res) => {
    const jokes = [
        {
            id: 1,
            title: 'Joke 1',
            content : 'This is joke',
        },
        {
            id: 2,
            title: 'Joke 2',
            content : 'This is another joke',
        },
        {
            id: 3,
            title: 'Joke 3',
            content : 'This is another joke 3',
        },
        {
            id: 4,
            title: 'Joke 4',
            content : 'This is another joke 4',
        },
        {
            id: 5,
            title: 'Joke 5',
            content : 'This is another joke 5',
        },
        {
            id: 6,
            title: 'Joke 6',
            content : 'This is another joke 6',
        },
        {
            id: 7,
            title: 'Joke 7',
            content : 'This is another joke 7',
        }
    ]

    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});