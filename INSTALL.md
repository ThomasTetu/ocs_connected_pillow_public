# Projet OCS : Oreiller connecté

## Installation du projet

Avant de démarrer l'installation, assurez-vous d'avoir:
 * Raspberry Pi 3 & Grove Pi
 * L'ensemble des capteurs de l'oreiller connecté ([Lien vers le wiki](https://github.com/ltb-bossuyt/ocs-coussin-connecte/wiki/Description-infrastructurelle))

### Mise en place des capteurs

Il est important de connecter les capteurs et actionneurs aux bons ports afin d'assurer que le serveur NodeRed puisse intéragir avec correctement.
 * Accéléromètre : brancher sur le port I2C-1
 * Détecteur de niveau sonore : brancher sur le port A2
 * Capteur d'humidité et température : brancher sur le port D3
 * Vibreur : brancher sur le port D2
 * Microphone, Haut-parleurs : brancher sur n'importe quel port USB.

### Installation

Branchez l'oreiller connecté à l'aide d'un câble ethernet à votre ordinateur personnel. Le prototype proposé a pour identifiant *bibi*, cependant votre oreiller personnel aura *Oreiller_* suivi de son identifiant unique, noté sur l'enveloppe.

Après avoir cloné le dépôt dans /home/pi sur la raspberry, 