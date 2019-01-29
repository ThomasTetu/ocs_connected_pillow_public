import * as express from "express";
import * as request from "request";
import * as Container from "plus.container";

export class SensorAccessController {

    /*
    * TODO: set access routes as constants
     */

    public getAccelerometerData(req: express.Request, res: express.Response, next: express.NextFunction): void {
        const container: Container = req.app.settings.container;
        const ip: string = container.get("configuration").URL_RASP;

        const accelerometerUrl = ip + "/accelerometer";
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
        const container: Container = req.app.settings.container;
        const ip: string = container.get("configuration").URL_RASP;

        const loudnessUrl =  ip + "/loudness";
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
        const container: Container = req.app.settings.container;
        const ip: string = container.get("configuration").URL_RASP;

        const temperatureUrl =  ip + "/temperature";
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
        const container: Container = req.app.settings.container;
        const ip: string = container.get("configuration").URL_RASP;

        const humidityUrl =  ip + "/humidity";
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
