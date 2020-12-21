function test() {
    var message = 'hi';
}
test();
console.log(message);

function test() {
    message = 'hi';
}
test();
console.log(message);

for(var i = 0; i<5; ++i){
    setTimeout(()=>console.log(i), 0)
}

for(let i = 0; i<5; ++i){
    setTimeout(()=>console.log(i), 0)
}

let message;
console.log(message == undefined);