import { NodeEnvironment } from "../business/utils/node-environment";
import { devConfig } from "./environment/dev.environment";
import { devWindowsConfig } from "./environment/dev.windows.environment";
import { prodConfig } from "./environment/prod.environment";

/**
 * Configuration des environnements en fonction de l'environnement
 * @type {{}}
 */
export const environmentsConfiguration = {
    [NodeEnvironment.DEV]: devConfig,
    [NodeEnvironment.DEV_WINDOWS]: devWindowsConfig,
    [NodeEnvironment.PROD]: prodConfig
};
