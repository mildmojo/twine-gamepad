twine-gamepad
=============

This is a Twine extension that lets you play your game with a gamepad. It uses
the HTML5 Gamepad API, which is supported in some versions of Firefox and
Chrome. Use the analog stick and D-pad to select links and press any face button
to visit them.

You may need to enable the Gamepad API in your browser for this extension to
work. In Firefox, visit `about:config` and set `dom.gamepad.enabled` to `true`.
In Chrome, visit `chrome://flags` and enable the Gamepad API. Test your gamepad
with a [web](http://luser.github.io/gamepadtest/) [demo](http://html5gamepad.com/).

## Usage

1. Add `twine_gamepad.twee` to your story's StoryIncludes passage.
2. Build your story.

You may also specify the "selected link" CSS style in your main story file's
stylesheet. If you do, you may need to use `!important` to override this
extension's defaults.

```css
a.gamepadSelected {
  border: 2px dotted white !important;
}
```

See the `example.tws` story file for a real-world usage example.

## Alternate usage without StoryIncludes

Alternately, you may copy the contents of `gamepad.min.js` and
`twine_gamepad.js` directly into a single `script` passage in your story. Make
sure `gamepad.min.js` comes before `twine_gamepad.js`. Make sure to add a CSS
rule to your stylesheet for `a.gamepadSelected` to make it appear selected.

## Development

The `build.sh` script automates combining src/* into a single .twee file to be
included in Twine stories. It will minify javascript if you have
[uglify-js](https://github.com/mishoo/UglifyJS) installed. After you modify
`src/twine_gamepad.js`, for example, run `build.sh` to update
`twine_gamepad.twee`.

## Thanks

Thanks to @kallaspriit for the excellent [HTML5-JavaScript-Gamepad-Controller-Library](https://github.com/kallaspriit/HTML5-JavaScript-Gamepad-Controller-Library) included here.
