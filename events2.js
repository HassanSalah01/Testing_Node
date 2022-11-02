const eventEmitter = require("events");
const { EventEmitter } = require("stream");

const event = new eventEmitter();

const randomNumber = Math.floor(Math.random() * 2);

event.on("done", () => {
    console.log("WELCOME HOME !!!!");
});

if (randomNumber == 1) {
    event.emit("done");
}
