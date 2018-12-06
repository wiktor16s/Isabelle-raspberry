import DoiterCommands from './doiterCommands';

class Doiter {
    constructor(tellIt, sayGoodBye, listener, socket) {
        this.socket = socket;
        this.listener = listener;
        this.tellIt = tellIt;
        this.sayGoodBye = sayGoodBye;
        this.doiterCommands = new DoiterCommands(tellIt, sayGoodBye, this.listener, this.socket);
    }

    setter() {
        this.listener.addCommands(this.doiterCommands.Commands);
        this.listener.resume()
    }
}

export default Doiter;