import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as helmet from 'helmet';
import * as logger from 'morgan';

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();

        this.setConfiguration();
        this.setRoutes();
    }

    private setConfiguration() {
        this.app.set('view engine', 'pug');
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(logger('dev'));
        this.app.use(helmet());
        this.app.use(express.static('public'));

    }

    private setRoutes(): void {
        this.app.get('/', function (req, res) {
            res.render('index', {
                title: 'Isabelle',
                command1: '- Isabelle?',
                command2: '- (która) godzina?',
                command3: '- data',
                command4: '- mam na imię (twoje imie)',
                command5: '- (powiedz) dowcip',
                command6: '- jak masz na imię?',
                command7: '- jak mam na imię?',
                command8: '- (to wszystko) dziękuję' 
            });
        })
    }
}

export default new Server().app;
