#!/usr/bin/env bash

#deploy script modified from https://gist.github.com/domenic/ec8b0fc8ab45f39403dd

set -e # exit with nonzero exit code if anything fails

if [ "$TRAVIS" = "true" ]
then
  git config --global user.name "Travis CI"
  git config --global user.email "travis@travis-ci"
  ORIGIN=https://$GH_TOKEN@$GH_REPO.git
else
  ORIGIN=$(git remote get-url origin) # get-url requires Git >= 2.6.0
fi

BUILD=$(git rev-parse --short HEAD)

# go to the dist directory and create a *new* Git repo
cd dist
git init

# The first and only commit to this new Git repo contains all the
# files present with the commit message "Deploy build [commit hash]".
git add .
git commit -m "Deploy build ${BUILD}"

# Force push from the current repo's master branch to the remote
# repo's gh-pages branch. (All previous history on the gh-pages branch
# will be lost, since we are overwriting it.) We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
git push --force --quiet "${ORIGIN}" master:gh-pages > /dev/null 2>&1

echo "Successfully deployed!"
