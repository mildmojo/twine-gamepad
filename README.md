twine-gamepad
=============

Twine-gamepad is a [Twine](https://twinery.org) v1 extension that lets you play
your game with a gamepad. It uses the [HTML5 Gamepad API](https://developer.mozilla.org/en-US/docs/Web/Guide/API/Gamepad),
which is supported in modern versions of Firefox and Chrome. Use the analog stick
and D-pad to select links; down and right will select the next link in reading
order, up and left will select the previous link. Press a face button to visit
the highlighted link.

Originally developed for use in the Global Game Jam 2014 entry, "Get a Clue"
([play](http://get-a-clue.herokuapp.com),
[source](https://github.com/benjamingold/GGJ14GetAClue/)). As of 2018, the Unity
web plugin is now defunct, so that game doesn't work properly anymore.

## Demo

Try the gamepad-enabled [example story](https://mildmojo.github.io/twine-gamepad/)
(built from `example.tws` included here).

Or try it directly in your own Twine story with zero modifications! Go
[over here](https://mildmojo.github.io/twine-gamepad/bookmarklet.html), bookmark
the bookmarklet link, open up your story in your browser, then click the
bookmark to add twine-gamepad. Pick up a controller, press a button, and try it
out. If that gives you no love, try the Troubleshooting section below.

## Usage

0. Save a copy of `twine_gamepad.twee` alongside your Twine story file (
   [single file](https://raw.github.com/mildmojo/twine-gamepad/master/twine_gamepad.twee),
   [zip of all files](https://github.com/mildmojo/twine-gamepad/archive/master.zip),
   or clone this repo with git).
1. Add this text to your Twine story's StoryIncludes passage: `twine_gamepad.twee`
2. Build your story.

## Styling

You might want to change the [default style](/src/style.css) that shows up when
you select a link with your gamepad. You can override the default CSS style in
a `stylesheet`-tagged passage in your main story file. If you do, you may need
to use `!important` to override this extension's defaults. Here's an example:

```css
/* Default stylesheet adds 2px padding to keep nearby text from jittering when
 * a 2px border is added to selected links. Remove it.
 */
a.internalLink, a.externalLink {
  padding: 0 !important;
}

/* Change the "selected link" style to underlining. */
a.gamepadSelected {
  border: none !important;
  text-decoration: underline;
}
```

See the `example.tws` story file for a real-world usage example.

## Alternate usage without StoryIncludes

Alternately, you may copy the contents of `gamepad.min.js` and `twine_gamepad.js`
directly into a single `script`-tagged passage in your story, and `style.css`
directly into a `stylesheet`-tagged passage.

## Troubleshooting

The HTML5 Gamepad API is a new and exciting feature, so it's not yet
well-supported. If your gamepad doesn't work, try the following:

- Try a [gamepad test page](https://luser.github.io/gamepadtest/)! If it works
  there, it'll work with twine-gamepad.
- Make sure your browser supports the HTML5 Gamepad API. As of 2014/02/03, this
  means recent versions of Firefox 24+ (see below), nightly Canary builds of
  Chrome, or modern consoles (Xbox One, PlayStation 4, Wii U). The
  [node-webkit](https://github.com/rogerwang/node-webkit) framework for making
  desktop apps out of HTML5/JS apps (like Twine) ships with gamepad support out
  of the box. I'm having trouble locating a definitive list of supported browsers.
- If your browser is VERY, VERY OLD, make sure the Gamepad API is enabled in your
  browser. In Firefox, you need to enable the `dom.gamepad.enabled` preference by
  visiting `about:config`. In nightly builds of Chrome, you may need to visit
  `chrome://flags` to enable the gamepad.
- Press a face button on the gamepad. For security against
  [browser fingerprinting](https://panopticlick.eff.org/), browsers don't let
  javascript access gamepads until the user "opts in" by pressing a button.
- Make sure the browser supports your gamepad. Some versions of Chrome and
  node-webkit for Windows only support XInput-compatible gamepads (like Xbox 360
  gamepads), for example.
- Try that [gamepad test page](https://luser.github.io/gamepadtest/) again!

## Development

The `build.sh` script automates combining src/* into a single .twee file to be
included in Twine stories. It will minify javascript if you have
[uglify-js](https://github.com/mishoo/UglifyJS) installed. After you modify
`src/twine_gamepad.js`, for example, run `build.sh` to update
`twine_gamepad.twee`.

## Thanks

Thanks to @kallaspriit for the excellent [HTML5-JavaScript-Gamepad-Controller-Library](https://github.com/kallaspriit/HTML5-JavaScript-Gamepad-Controller-Library) included here.
