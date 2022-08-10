export const helloWorld = {
    method: 'get',
    path: '/hello',
    handler: (req, res) => {
        res.send('Hello World from routes!');
    },
}

export const helloUser = {
    method: 'get',
    path: '/hello/:userName',
    handler: (req, res) => {
        res.send(`Hello ${req.params.userName} from routes!`);
    },
}