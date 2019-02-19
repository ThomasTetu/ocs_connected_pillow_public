#!/bin/bash

# Install Node-RED
bash <(curl -sL https://raw.githubusercontent.com/node-red/raspbian-deb-package/master/resources/update-nodejs-and-nodered)
# Make Node-RED run on system boot
sudo systemctl enable nodered.service

# Install Mosquitto
sudo apt install mosquitto
# Make Mosquitto run on system boot
sudo systemctl enable mosquitto.service
