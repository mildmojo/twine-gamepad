#!/bin/bash

MINIFIED_FILE='src/twine_gamepad_full.min.js'
CSS_FILE='src/style.css'

if command -v uglifyjs >/dev/null 2>&1
then
  uglifyjs --comments -c -o $MINIFIED_FILE src/gamepad.min.js src/twine_gamepad.js
else
  echo 'uglify-js not found, defaulting to straight concatenation'
  cat src/gamepad.min.js src/twine_gamepad.js > $MINIFIED_FILE
fi

echo ':: Style - selected link [stylesheet]' > twine_gamepad.twee
cat "$CSS_FILE" >> twine_gamepad.twee
echo >> twine_gamepad.twee
echo ':: Script loader [script]' >> twine_gamepad.twee
echo '// requires jQuery' >> twine_gamepad.twee
cat "$MINIFIED_FILE" >> twine_gamepad.twee
