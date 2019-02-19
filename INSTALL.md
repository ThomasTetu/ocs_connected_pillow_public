# Projet OCS : Oreiller connecté

## Installation du projet

Avant de démarrer l'installation, assurez-vous d'avoir:
 * Raspberry Pi 3 & Grove Pi
 * L'ensemble des capteurs de l'oreiller connecté ([Lien vers le wiki](https://github.com/ltb-bossuyt/ocs-coussin-connecte/wiki/Description-infrastructurelle))

### Mise en place des capteurs

Il est important de connecter les capteurs et actionneurs aux bons ports afin d'assurer que le serveur Node-RED puisse intéragir avec correctement.
 * Accéléromètre : brancher sur le port I2C-1
 * Détecteur de niveau sonore : brancher sur le port A2
 * Capteur d'humidité et température : brancher sur le port D3
 * Vibreur : brancher sur le port D2
 * Microphone, Haut-parleurs : brancher sur n'importe quel port USB.

### Installation

Branchez l'oreiller connecté à l'aide d'un câble ethernet à votre ordinateur personnel. Le prototype proposé a pour identifiant *bibi*, cependant votre oreiller personnel aura *Oreiller_* suivi de son identifiant unique, noté sur l'enveloppe physique de l'oreiller. Une connexion en SSH vous permettra d'effectuer les actions nécessaires à la suite du tutoriel. Le mot de passe du prototype est *bibi*.

Après avoir cloné le dépôt dans /home/pi sur la raspberry, vous pouvez exécuter install.sh, ce qui permettra d'installer un serveur NodeRed, ainsi qu'un broker MQTT (Mosquitto). Vous pouvez vérifier que Node-RED est correctement installé et qu'il se lance automatiquement au démarrage de l'oreiller avec la commande suivante. 
```
$ systemctl status nodered
● nodered.service - Node-RED graphical event wiring tool
   Loaded: loaded (/lib/systemd/system/nodered.service; enabled; vendor preset: enabled)
   Active: active (running) since Mon 2019-02-18 20:42:52 UTC; 13h ago
```

Il faut maintenant installer les modules Node-RED nécessaires. Se connecter à bibi.local:1880 sur son explorateur internet pour accéder aux flows Node-RED. Menu en haut à droite, Manage Palette, puis installer les modules suivants :
 * [node-red-contrib-i2c](https://flows.nodered.org/node/node-red-contrib-i2c)
 * [node-red-contrib-grovepi](https://flows.nodered.org/node/node-red-contrib-grovepi)
 Ensuite, pour importer le flow, le fichier est présent sur le dépôt, dans le dossier node-red. Ouvrir le fichier flow.json à l'aide d'un éditeur de texte, copier la sauvegarde, puis Export dans le menu Node-RED, Clipboard, et coller le flow.

Vous pouvez vérifier que Mosquitto est correctement installé et qu'il se lance automatiquement au démarrage de l'oreiller avec la commande suivante. 
```
$ systemctl status mosquitto
● mosquitto.service - LSB: mosquitto MQTT v3.1 message broker
   Loaded: loaded (/etc/init.d/mosquitto; generated; vendor preset: enabled)
   Active: active (running) since Mon 2019-02-18 20:42:52 UTC; 13h ago
```