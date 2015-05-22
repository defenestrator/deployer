#!/usr/bin/env bash

REPO='git@github.com:defenestrator/hatches-api.git';
RELEASE_DIR='/var/www/releases';
APP_DIR='/var/www/app';
RELEASE="release_`date +%Y%m%d%H%M%s`";

# Fetch Latest Cod, delicious cod.
cd $RELEASE_DIR;
git clone -b master $REPO $RELEASE;
echo "That's all folks";
