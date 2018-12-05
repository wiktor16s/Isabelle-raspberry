import '../scss/index.scss';
import Isabelle from './Isabelle';
import Catcher from './Catcher';
import Doiter from './Doiter';

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

const isabelle = new Isabelle();
const doiter = new Doiter(tellIt, sayGoodBye, isabelle.listener);
const catcher = new Catcher(sayHello, isabelle.listener);

window.speechSynthesis.onvoiceschanged = function () {
    isabelle.setVoiceLanguage("Google polski");
}

isabelle.setter();
catcher.setter();

export default isabelle;