const EventEmitter = require('events');
class Gym extends EventEmitter {
    constructor() {
        super();
        const event = this;
        let countr=0;
     const myTimer=   setInterval(() => {
            if(countr<5){
                event.emit("boom");
                countr++;
            }
            else{
                event.emit("finish");
                countr=0;
                clearInterval(myTimer);
            }
        },1000)
    }
}

module.exports=Gym;