'use strict';

//this class is a representation of an invoker.

class RemoteController {

    constructor(light, onCmd, offCmd) {
        this.ligth = light;

        this.on = new onCmd(light);
        this.off = new offCmd(light);
    }
    
    clickOn() {
        this.on.execute();
    }

    clickOff() {
        this.off.execute();
    }
}