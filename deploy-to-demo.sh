#!/usr/bin/env bash

ng build --configuration="demo" &&  firebase deploy --project demo --only hosting:core-app
