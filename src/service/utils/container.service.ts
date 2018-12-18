/**
 * Vendor imports
 */
import * as Container from "plus.container";
import * as _ from "lodash";

/**
 * Feature imports
 */
import {ServiceContainer} from "../../business/utils/service-container.enum";
import {SERVICES} from "../../config/services.config";

/**
 * Service de container d'injection de dépendance
 */
export class ContainerService {
    /**
     * Retourne une instance d'un container avec ses dépendances.
     * @param {any} appConfiguration
     * @returns {Container}
     */
    public static createContainer(appConfiguration: any): Container {
        let container: Container = new Container();

        container.register("configuration", appConfiguration);

        _.forEach(SERVICES, (service: Object) => {
            container.register(
                service[ServiceContainer.NAME],
                service[ServiceContainer.CLASS],
                service[ServiceContainer.DEPENDENCIES]
            );
        });

        return container;
    }
}
