require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {    
    console.log(req.hostname)
    res.send("<iframe src='https://goodfirstissue.dev/' height='700' width='1200'></iframe>");
});

app.get('/:test/sub/:name', (req, res) => {
    console.log(req.params);
    res.send("Hello TEst");
});


// Node JS events module
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


eventEmitter.once('prime', (start, end) => {
    console.log(`prime ${start} to ${end}`);
})
eventEmitter.once('start', (start, end) => {
    console.log(`prime ${start} to ${end}`);
})

const secondListener = (start, end) => {
    console.log(`prime 2nd listener`);
};

eventEmitter.on('prime', secondListener);
eventEmitter.addListener('prime', secondListener)

eventEmitter.emit('prime', 2, 50);
eventEmitter.off('prime', secondListener)
// eventEmitter.removeListener('prime', secondListener)
// eventEmitter.removeAllListeners('prime');
eventEmitter.emit('prime', 2, 50);
eventEmitter.emit('prime', 2, 50);
console.log(eventEmitter.eventNames());     // jitne bhi events hai unka ek array de dega

const server = app.listen(3000, async () => {
    console.log('Server is running on 3000');
})


// on() jo hai ye ke listener hai, ye event leta hai, aur uss event ke hote hi callback fn chala deta hai
// process.on('SIGTERM', () => {
//     server.close(() => {
//         console.log('Server terminated');
//     })
// })

// process.kill(process.pid, 'SIGTERM')

