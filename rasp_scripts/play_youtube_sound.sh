#!/bin/bash
youtube-dl --extract-audio --audio-format mp3 --id $1
pkill mpg123
mpg123 $1.mp3
rm $1.mp3