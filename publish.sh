#!/bin/bash

echo "***********Start************"
echo "getting current version"
npm view nodebb-plugin-npm version
echo -e "Please provide new version :\c"
read version;
echo "updating the version...."
npm version $version
echo "version updated to $version successfully"
echo "Starting publishing..."
npm publish
echo "*******Package published successfully******"

