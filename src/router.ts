/**
 * Vendor imports
 */
import * as express from "express";
import {HomeController} from "./controller/home.controller";
import {TutuController} from "./controller/tutu.controller";
import {SensorAccessController} from "./controller/sensoraccess.controller";

/**
 * Feature imports
 */

/**
 * Routeur de l'API
 */
export class Router {

    /**
     * L'application
     */
    private app: express.Application;

    /**
     * Router constructor
     * @param {e.Application} app
     */
    constructor(app: express.Application) {
        this.app = app;
    }

    /**
     * Insert les routes
     */
    public insertRoutes(): void {
        this.insertHomeRoute();
        this.insertTutuRoute();
        this.insertSensorAccessRoutes();
    }

    private insertHomeRoute(): void {
        const homeController: HomeController = new HomeController();

        this.app.get("/", homeController.retrieveHome);
    }

    private insertSensorAccessRoutes(): void {
        const sensorAccessRoutes: SensorAccessController = new SensorAccessController();

        this.app.get("/sensors/accelerometer", sensorAccessRoutes.getAccelerometerData);
        this.app.get("/sensors/loudness", sensorAccessRoutes.getLoudnessData);
        this.app.get("/sensors/temperature", sensorAccessRoutes.getTemperatureData);
        this.app.get("/sensors/humidity", sensorAccessRoutes.getHumidityData);
    }

    private insertTutuRoute(): void {
        const tutuController: TutuController = new TutuController();
        this.app.get("/tutu", tutuController.tutu);
    }
}
