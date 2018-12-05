class Catcher {
    constructor(sayHallo, listener) {
        this.listener = listener;
        this.sayHallo = sayHallo;
        this.hotword = this.hotword.bind(this);
        this.isHotword = false;
        this.hotwordCommand = {
            'Isabel *tag': this.hotword,
            'Isabel': this.hotword,
            '*tag Isabel': this.hotword,
        };
    }

    setter() {
        this.listener.addCommands(this.hotwordCommand);
        this.listener.resume();
    }

    hotword(tag) {
        tag = "";
        this.listener.removeCommands();
        this.listener.pause();
        this.isHotword = true;
        this.sayHallo();
    }
}
export default Catcher;