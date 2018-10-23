/**
 * Vendor imports
 */
import * as express from "express";
import * as Container from "plus.container";
import { json, urlencoded } from "body-parser";

/**
 * Technicals imports
 */
import { Router } from "./router";
import { ConfigurationLoader } from "./configuration-loader";
import { HeaderMiddleware } from "./middleware/header.middleware";
import { ContainerService } from "./service/utils/container.service";

/**
 * Application
 * @type {Express}
 */
const app: express.Application = express();

app.use(json());

app.use(urlencoded({
    extended: true,
}));


/**
 * Récupération de la variable environnement depuis NODE_ENV
 * - DEV
 * - PROD
 * @type {string}
 */
const environment: string = process.env.NODE_ENV;

// Configuration de l'API
let serverConfiguration = ConfigurationLoader.loadConfiguration(environment);

// Enregistre les services de l'API.
const container: Container = ContainerService.createContainer(serverConfiguration);
app.set("container", container);

// Set headers to allow cross origin request.
app.use(HeaderMiddleware.initHeaders);

/**
 * Router de l'application
 * @type {Router}
 */
const router: Router = new Router(app);
router.insertRoutes();

/**
 * Port d'écoute de l'application
 * @type {string | number}
 */
const port = process.env.PORT || serverConfiguration.SERVER_PORT;
app.listen(port);