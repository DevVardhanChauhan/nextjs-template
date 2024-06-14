#!/bin/bash

rm -rf .git

git init

git branch -m main

git add .

git reset init.sh

git commit -m "Init"

rm init.sh
