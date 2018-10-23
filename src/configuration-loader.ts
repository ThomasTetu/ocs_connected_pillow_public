/**
 * Vendor imports
 */
import * as _ from "lodash";

/**
 * Feature imports
 */
import { NodeEnvironment } from "./business/utils/node-environment";
import { environmentsConfiguration } from "./config/environments.config";

/**
 * Loader de la configuration de l'application
 */
export class ConfigurationLoader {
    /**
     * Charge la configuration
     * @param {string} environment
     * @returns {any}
     */
    public static loadConfiguration(environment: string) {
        if (environment === undefined) {
            throw "Environment undefined.";
        }

        let serverConfiguration = null;

        _.forEach(environmentsConfiguration, (configuration: Object, nodeEnvironment: NodeEnvironment) => {
            if (environment === nodeEnvironment) {
                serverConfiguration = configuration;
            }
        });

        return serverConfiguration;
    }
}
