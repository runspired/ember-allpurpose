export default function (callback, time) {
    var delay = time ? parseInt(time, 10) : 0,

        //stores the time of last callback execution for
        // play/pause behavior and firefox shunt
        lastExecution = (new Date()).getTime(),

        timeout = false,

        //execute the callback and setup the next one
        once = function () {
            callback();
            timeout = setTimeout(
                once,
                delay
            );
        },

        //shunt for firefox, which executes setTimeout
        // up to 50% early
        checkExecution = function () {
            var time = (new Date()).getTime() - lastExecution;
            if (time >= delay) {
                return true;
            }
            timeout = setTimeout(
                once,
                time
            );
            return false;
        },

        //stores the amount of time elapsed prior to a pause
        timeElapsed = 0;

    //initiate the callback loop
    timeout = setTimeout(
        once,
        delay
    );

    Object.defineProperty(
        this,
        'delay',
        {
            get : function () { return delay; },
            set : function (v) { delay = parseInt(v, 10); }
        }
    );

    this.reset = function () {
        if (timeout !== false) {
            clearTimeout(timeout);
            timeout = false;
            timeElapsed = 0;
            lastExecution = (new Date()).getTime();
            timeout = setTimeout(once, delay);
        }
    };

    this.pause = function () {
        if (timeout !== false) {
            clearTimeout(timeout);
            timeout = false;
            timeElapsed = (new Date()).getTime() - lastExecution;
        }
    };

    this.play = function () {
        lastExecution = (new Date()).getTime() - timeElapsed;
        timeout = setTimeout(once, Math.max(0, delay - timeElapsed));
        timeElapsed = 0;
    };

}