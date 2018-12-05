const listener = require('annyang');

class Isabelle {
    constructor() {
        this.name = 'Isabelle';
        this.voices = [];
        this.utterance = new SpeechSynthesisUtterance();
        this.synth = window.speechSynthesis;
        this.voiceURI;
        this.listener = listener;
    }

    setter(voiceNumber) {

        this.listener.setLanguage('pl');
         this.listener.start({
            autoRestart: true,
            continuous: true
        });
        this.listener.resume();
        //this.listener.debug();
        this.voices = this.synth.getVoices();
        this.utterance.voice = this.voices[voiceNumber];
        this.utterance.rate = 1;
    }

    say(textToSpeech) {
        this.utterance.text = textToSpeech;
        this.synth.speak(this.utterance);

        this.utterance.onend = function (event) {
            listener.resume();
            console.log("done");
        }

    }
    setVoiceLanguage(lang) { // Microsoft Paulina Desktop - Polish || Google polski
        this.setter(0);
        this.say("");
        for (let i = 0; i < this.voices.length; i++) {
            if (this.voices[i].voiceURI == lang) {
                this.setter(i);
                return i;
            }
        }
    }
}

export default Isabelle;