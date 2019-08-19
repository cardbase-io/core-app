#!/usr/bin/env bash

ng build --configuration="production" && firebase deploy --project production

