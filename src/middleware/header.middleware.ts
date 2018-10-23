/**
 * Vendor imports
 */
import * as express from "express";
import * as _ from "lodash";
import * as Container from "plus.container";

/**
 * Middleware de chargement des headers pour les requêtes.
 */
export class HeaderMiddleware {
    /**
     * Assigne les headers de l'application
     * @type {(request: e.Request, response: e.Response, next: e.NextFunction) => void}
     */
    public static initHeaders(request: express.Request, response: express.Response, next: express.NextFunction): void {
        const CONTAINER: Container = request.app.settings.container;
        const SERVER_CONFIGURATION: any = CONTAINER.get("configuration");

        _.forEach(SERVER_CONFIGURATION.HEADERS, (value, field) => {
            response.header(field, value);
        });

        next();
    }
}
