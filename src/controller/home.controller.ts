/**
 * Vendor imports
 */
import * as express from "express";
import * as path from "path";
import * as Container from "plus.container";

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
    public retrieveHome(req: express.Request, res: express.Response, next: express.NextFunction): void {
        // Container de l'application qui contient les dépendances du serveur
        const container: Container = req.app.settings.container;
        // On récupère la configuration de l'application depuis le container
        const configuration: any = container.get("configuration");
        res.render(__dirname + "/../tpl/index");
    }
}
