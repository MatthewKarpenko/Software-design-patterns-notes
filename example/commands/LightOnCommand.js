'use strict';

class LightOnCommand extends Command {
    constructor(light) {
        super();

        this.light = light;
    }
    
    /** @override*/
    execute() {
        this.light.on();
    }

    /** @override*/
    unexecute() {
        this.light.off();
    }


}