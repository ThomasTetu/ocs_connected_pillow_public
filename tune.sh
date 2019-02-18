#!/bin/bash
if [ "$1" == "uv" ];
then
    amixer -q sset PCM $2%+
elif [ "$1" == "dv" ];
then
    amixer -q sset PCM $2%-
elif [ "$1" == "m" ];
then
    amixer -q set PCM mute
elif [ "$1" == "um" ];
then
    amixer -q set PCM unmute
fi

vol=$(awk -F"[][]" '/dB/ { print $2 }' <(amixer sget PCM))
ismute=$(awk -F"[][]" '/dB/ { print $6 }' <(amixer sget PCM))
echo $vol | cut -d % -f 1
echo -n $ismute