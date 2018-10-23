/**
 * Vendor imports
 */
import * as express from "express";

/**
 * Exemple de contrôleur
 * Route : "/"
 */
export class HomeController {

    /**
     *
     * @param {e.Request} request
     * @param {e.Response} response
     */
    public retrieveHome(request: express.Request, response: express.Response): void {
        response.send("Accueil");
    }
}
