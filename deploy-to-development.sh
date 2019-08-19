#!/usr/bin/env bash

ng build --configuration="development" && firebase deploy --project development
