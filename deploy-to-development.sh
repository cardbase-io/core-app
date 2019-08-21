#!/usr/bin/env bash

ng build  && firebase deploy --project development --only hosting:core-app


