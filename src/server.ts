import express, { Application, Router} from "express";
import bodyParser from "body-parser";
import skejiRouter from "./routers/skejiRouter";
import pool from "./dbconfig/dbconnector";

class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }

    private config() {
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(bodyParser.json({limit: "1mb"}));
    }

    private dbConnect() {
        pool.connect(function(err, client, done) {
            if (err) throw err;
            console.log('Connected');
        });
    }

    private routerConfig() {
        this.app.use("/skeji", skejiRouter);
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        })
    }
}

export default Server;