git add .
git commit -m "update"
git push
cp ./examples/src/modexie/* ./dist
sleep 3
npm config delete registry
npm version minor
npm publish