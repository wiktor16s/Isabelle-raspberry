import DoiterCommands from './doiterCommands';

class Doiter {
    constructor(tellIt, sayGoodBye, listener) {
        this.listener = listener;
        this.tellIt = tellIt;
        this.sayGoodBye = sayGoodBye;
        this.doiterCommands = new DoiterCommands(tellIt, sayGoodBye, this.listener);
    }

    setter() {
        this.listener.addCommands(this.doiterCommands.Commands);
        this.listener.resume()
    }
}

export default Doiter;