#! /bin/bash -xe

rm -rf out
mkdir out
echo "Running tests..."
java -jar lib/js.jar -opt -1 lib/envjs.bootstrap.js SpecRunner.html


echo "Running jshint..."
java -jar lib/js.jar jshint-rhino.js *.js shadow=true,loopfunc=true

