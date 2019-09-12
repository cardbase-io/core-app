#!/usr/bin/env bash

ng build --configuration="demo" &&  firebase deploy --project demon --only hosting:core-app
