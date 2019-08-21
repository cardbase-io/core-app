#!/usr/bin/env bash

ng build --configuration="production" && firebase deploy --project production --only hosting:core-app

