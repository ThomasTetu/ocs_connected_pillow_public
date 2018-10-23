# Architecture du serveur

 * **app.ts :** Point d'entrée du serveur.
 * **configuration-loader.ts :** Classe permettant le chargement de la configuration du serveur
 * **router.ts :** Classe définissant les différentes routes du serveur.
 * **tsconfig.json :** Fichier de configuration de TypeScript.

## business
Ces classes représentent les différents objets du serveur.

## config
Fichiers de configuration du serveur
### environment
Différentes configuration du serveur en mode développement/production
  * dev.environment.ts
  * prod.environment.ts

### nodemon
  * **dev.nodemon.json :** Configuration de nodemon en environnement de développpeemnt

## controller
Todo

## middleware
Todo

## services
Les services permettent de fournir des ressources à l'application.

### utils
  * **container.service.ts :** Service du container d'injection de dépendances