import * as express from "express";
import * as request from "request";
import * as Container from "plus.container";

export class SensorAccessController {

    /*
    * TODO: set access routes as constants
     */

    public getAccelerometerData(req: express.Request, res: express.Response, next: express.NextFunction): void {
        const accelerometerUrl = "http://bibi.local:1880/accelerometer";
        request.get(accelerometerUrl, (error, response, body) => {
            if (error) {
                return next(error);
            } else {
                res.header({"Content-Type": "application/json"});
                res.send(body);
            }
        });
    }

    public getLoudnessData(req: express.Request, res: express.Response, next: express.NextFunction): void {
        const loudnessUrl = "http://bibi.local:1880/loudness";
        request.get(loudnessUrl , (error, response, body) => {
            if (error) {
                return next(error);
            } else {
                res.header({"Content-Type": "application/json"});
                res.send(body);
            }
        });
    }

    public getTemperatureData(req: express.Request, res: express.Response, next: express.NextFunction): void {
        const temperatureUrl = "http://bibi.local:1880/temperature";
        request.get(temperatureUrl, (error, response, body) => {
            if (error) {
                return next(error);
            } else {
                res.header({"Content-Type": "application/json"});
                res.send(body);
            }
        });
    }

    public getHumidityData(req: express.Request, res: express.Response, next: express.NextFunction): void {
        const humidityUrl = "http://bibi.local:1880/humidity";
        request.get(humidityUrl, (error, response, body) => {
            if (error) {
                return next(error);
            } else {
                res.header({"Content-Type": "application/json"});
                res.send(body);
            }
        });
    }
}
