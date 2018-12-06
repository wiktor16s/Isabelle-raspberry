class DoiterCommands {
    constructor(tellIt, sayGoodBye, listener, socket) {
        this.socket = socket;
        this.listener = listener;
        this.tellIt = tellIt;
        this.sayGoodBye = sayGoodBye;

        this.username = ' ';
        this.jokesArray = new Array(
            "Jak można stracić na wadze? Kupić wagę za sto tysięcy, a sprzedać za pięćdziesiąt... ",
            "Po czym poznać rosyjskiego sportowca? Dłubie w nosie oszczepem",
            "Jak nazywa się niemiec wystający spod wody? Peryszkop. "
        );
        this.randomJoke = this.randomJoke.bind(this);
        this.goToCatcher = this.goToCatcher.bind(this);
        this.whatTime = this.whatTime.bind(this);
        this.whatDate = this.whatDate.bind(this);
        this.myNameIs = this.myNameIs.bind(this);
        this.whoAreYou = this.whoAreYou.bind(this);
        this.joke = this.joke.bind(this);
        this.sayMyName = this.sayMyName.bind(this);
        this.turnOn = this.turnOn.bind(this);
        this.tunrOff = this.tunrOff.bind(this);


        this.Commands = {
            '(która) godzina': this.whatTime,
            '(to wszystko) dziękuję': this.goToCatcher,
            'data': this.whatDate,
            'jak masz na imię': this.whoAreYou,
            'mam na imię *tag': this.myNameIs,
            '(powiedz) dowcip': this.joke,
            'jak mam na imię': this.sayMyName,
            'włącz *tag': this.turnOn,
            'wyłącz *tag': this.tunrOff
        };
    }

    whatTime() {
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        this.tellIt("jest " + hours + ":" + minutes);
    }
    whatDate() {
        let currentDate = new Date();
        this.tellIt("dzisiaj mamy " + currentDate.getDay() + "." + currentDate.getMonth() + "." + currentDate.getFullYear());
    }

    goToCatcher() {
        this.listener.removeCommands();
        this.listener.pause();
        this.sayGoodBye();
    }

    whoAreYou() {
        this.tellIt("Mam na imię Isabelle.")
    }

    myNameIs(username) {
        this.username = username;
        this.tellIt("miło mi cię poznać, " + this.username);
    }

    joke() {
        this.tellIt(this.jokesArray[this.randomJoke()]);
    }

    randomJoke() {
        let rand = Math.round(Math.random() * (this.jokesArray.length - 1));
        return rand;
    }

    sayMyName() {
        if (this.username != ' ') {
            this.tellIt("Masz na imię " + this.username);
        } else {
            this.tellIt("Jeszcze się nie podzieliłeś ze mną swoim imieniem. Przedstaw się proszę.");
        }
    }

    turnOn(device) {
        document.getElementById(device).checked = true;
        this.socket.emit('turnOn', device);
        this.tellIt("włączono " + device);
    }

    tunrOff(device) {
        document.getElementById(device).checked = false;
        this.socket.emit('turnOff', device);
        this.tellIt("wyłączono " + device);
    }

}
export default DoiterCommands;