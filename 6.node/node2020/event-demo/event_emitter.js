const EventEmitter = require('events')

class Player extends EventEmitter{}

let player = new Player();

player.on('play', (track)=>{
    console.log(`正在播放: 《${track}》`)
})

player.emit('play', '精绝古城')