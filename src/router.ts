/**
 * Vendor imports
 */
import * as express from "express";
import { HomeController } from "./controller/home.controller";
import {TutuController} from "./controller/tutu.controller";

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
    }

    private insertHomeRoute(): void {
        const homeController: HomeController = new HomeController();

        this.app.get("/", homeController.retrieveHome);
    }

    private insertTutuRoute(): void {
        const tutuController: TutuController = new TutuController();
        this.app.get("/tutu", tutuController.tutu);
    }
}
