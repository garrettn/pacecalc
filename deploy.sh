#!/usr/bin/env bash

if [ "$TRAVIS" = "true" ]
then
  git config --global user.name "Travis CI"
  git config --global user.email "travis@travis-ci.org"
  ./node_modules/.bin/gh-pages \
    --silent \
    --repo https://$GH_TOKEN@github.com/$GH_REPO.git
else
  ./node_modules/.bin/gh-pages
fi
