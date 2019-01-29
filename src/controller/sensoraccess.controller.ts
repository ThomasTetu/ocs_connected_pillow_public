import * as express from "express";
import * as request from "request";
import * as Container from "plus.container";

export class SensorAccessController {

    /*
    * TODO: set access routes as constants
     */

    private ip = "http://192.168.1.141:1880";

    public getAccelerometerData(req: express.Request, res: express.Response, next: express.NextFunction): void {
        const accelerometerUrl = this.ip + "/accelerometer";
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
        const loudnessUrl =  this.ip + "/loudness";
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
        const temperatureUrl =  this.ip + "/temperature";
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
        const humidityUrl =  this.ip + "/humidity";
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
