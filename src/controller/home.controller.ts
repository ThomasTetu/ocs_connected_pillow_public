/**
 * Vendor imports
 */
import * as express from "express";
import * as request from "request";
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
        // On récupère l'URL de google
        const googleUrl = configuration.URL_GOOGLE;
        request.get(googleUrl, (error, response, body) => {
            if (error) {
                return next(error);
            } else {
                res.send(body);
            }
        });
        // response.send("Accueil");
    }
}
