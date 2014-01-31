twine-gamepad
=============

This is a Twine extension that lets you play your game with a gamepad. It uses
the HTML5 Gamepad API, which is supported in some versions of Firefox and
Chrome. Use the analog stick and D-pad to select links and press any face button
to visit them.

See the `example.tws` story file for a real-world usage example.

## Usage

1. Edit `twine_gamepad.twee`.
2. Make sure paths to `gamepad.min.js` and `twine_gamepad.js` look correct
   relative to your story's final export path.
3. Modify the "selected link" CSS style if desired.
4. Add `twine_gamepad.twee` to your story's StoryIncludes passage.
5. Build your story.
6. Package your story or deploy it to a website along with the `gamepad.min.js`
   and `twine_gamepad.js` files.

You may also specify the "selected link" CSS style in your main story file's
stylesheet. If you do, you may need to use `!important` to override the
library's defaults.

```css
a.gamepadSelected {
  border: 2px dotted white !important;
}
```

## Alternate single-file usage

Alternately, you may copy the contents of `gamepad.min.js` and
`twine_gamepad.js` directly into a single `script` passage in your story. Make
sure `gamepad.min.js` comes before `twine_gamepad.js`. Make sure to add a CSS
rule to your stylesheet for `a.gamepadSelected` to make it appear selected.

Maybe the separate-file method is bonkers and this is the way it should be by
default in `twine_gamepad.twee`.

## Thanks

Thanks to @kallaspriit for the excellent [HTML5-JavaScript-Gamepad-Controller-Library](https://github.com/kallaspriit/HTML5-JavaScript-Gamepad-Controller-Library).
