import '../scss/index.scss';
import Isabelle from './Isabelle';
import Catcher from './Catcher';
import Doiter from './Doiter';
import io from 'socket.io-client';

let sayHello = function () {
    isabelle.say("Tak, słucham?");
    doiter.setter();
}

let sayGoodBye = function () {
    isabelle.say("Do usłyszenia!");
    catcher.setter();
}

let tellIt = function (utter) {
    isabelle.say(utter);
}

const socket = new io();
const isabelle = new Isabelle();
const doiter = new Doiter(tellIt, sayGoodBye, isabelle.listener, socket);
const catcher = new Catcher(sayHello, isabelle.listener);

window.speechSynthesis.onvoiceschanged = function () {
    isabelle.setVoiceLanguage("Google polski");
}

isabelle.setter();
catcher.setter();

export default isabelle;