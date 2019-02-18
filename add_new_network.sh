#!/bin/bash
file="/etc/wpa_supplicant/wpa_supplicant.conf"
echo "" >> $file
echo "network={" >> $file
echo "  ssid=\"$1\"" >> $file
echo "  psk=\"$2\"" >> $file
echo "}" >> $file
cat $file