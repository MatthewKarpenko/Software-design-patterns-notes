'use strict';

class LightOffCommand extends Command {
    constructor(light) {
        super();

        this.light = light;
    }
    
    /** @override*/
    execute() {
        this.light.off();
    }

    /** @override*/
    unexecute() {
        this.light.on();
    }


}