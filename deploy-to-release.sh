#!/usr/bin/env bash

ng build --configuration="release" && firebase deploy --project release
