#!/usr/bin/env bash

ng build  --service-worker true --ngsw-config-path ngsw-config.json && firebase deploy --project development --only hosting:core-app


