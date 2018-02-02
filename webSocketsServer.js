var app = require('http').createServer()
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8000);

var users = {};

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });

    socket.on('login', function(data) {
        if (data.username) {
            users[data.username] = {
                songsSubmitted: []
            };
            socket.emit('users:list', JSON.stringify(Object.keys(users)))
        } else {
            socket.emit('error', { message: 'Username is not OK.' });
        }
    });
});
