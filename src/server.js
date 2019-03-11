const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ChatKit = require('@pusher/chatkit-server');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const pusher = new Pusher({
    appId: '731137',
    key: 'b1f58865d1adbc8b900f',
    secret: '4f2542adaaea6fd67adf',
    cluster: 'us2',
    encrypted: true
});

const chatkit = new ChatKit.default({
    instanceLocator:'v1:us1:6c5562d9-218b-4c9d-965b-4c022e54c544',
    key:'558475b4-2853-466d-8b71-3be333e0fea2:X8L5so0UAgSJy9u5Fc3LKTg8fplwTNJ/8v5BE9K0bv0='

})

app.post('/users', (req,res)=>{

    const{username} =req.body

    chatkit.createUser({
        name:username,
        id:username

    }).then(()=> res.sendStatus(201)).catch(error => {
        if(error.error_description === 'services/chat/user_already_exists')
        {
            res.sendStatus(200)
        }else{
            res.status(error.statusCode).json(error)
        }
    })

})

app.set('PORT', process.env.PORT || 5000);

app.post('/message', (req, res) => {
    const payload = req.body;
    pusher.trigger('chat', 'message', payload);
    res.send(payload)
});

app.listen(app.get('PORT'), () =>
    console.log('Listening at ' + app.get('PORT')))