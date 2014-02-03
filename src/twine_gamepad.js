/* @license
The MIT License (MIT)

Copyright (c) 2014 mildmojo

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function(exports) {
  var Gamepad;
  if ((typeof(module) !== 'undefined') && module.exports) {
    Gamepad = require('gamepad');
  } else {
    Gamepad = window.Gamepad;
  }
  var gamepad = new Gamepad();
  var axes = { LEFT_STICK_X: 0, LEFT_STICK_Y: 0 };
  var DEADZONE = 0.5;

  gamepad.bind(Gamepad.Event.CONNECTED, function(device) {
    console.log('Gamepad connected.');
  });

  gamepad.bind(Gamepad.Event.DISCONNECTED, function(device) {
    console.log('Gamepad disconnected.');
  });

  gamepad.bind(Gamepad.Event.BUTTON_DOWN, function(e) {
    switch(e.control) {
      case 'DPAD_DOWN':
      case 'DPAD_RIGHT':
        nextLink();
        break;
      case 'DPAD_UP':
      case 'DPAD_LEFT':
        prevLink();
        break;
      case 'FACE_1':
      case 'FACE_2':
      case 'FACE_3':
      case 'FACE_4':
        jQuery('a.internalLink.gamepadSelected').click();
        break;
    }
  });

  // Treat axes as buttons; register presses and releases.
  gamepad.bind(Gamepad.Event.AXIS_CHANGED, function(data) {
    var newValue = 0;
    if (Math.abs(data.value) > DEADZONE) {
      newValue = data.value < 0 ? -1 : 1;
      if (axes[data.axis] !== newValue) {
        if (data.axis === 'LEFT_STICK_X') {
          if (newValue === -1) {
            gamepad._fire(Gamepad.Event.BUTTON_DOWN, {control: 'DPAD_LEFT'});
          } else {
            gamepad._fire(Gamepad.Event.BUTTON_DOWN, {control: 'DPAD_RIGHT'});
          }
        } else if (data.axis === 'LEFT_STICK_Y') {
          if (newValue === 1) {
            gamepad._fire(Gamepad.Event.BUTTON_DOWN, {control: 'DPAD_DOWN'});
          } else {
            gamepad._fire(Gamepad.Event.BUTTON_DOWN, {control: 'DPAD_UP'});
          }
        }
      }
    }
    axes[data.axis] = newValue;
  });

  gamepad.init();

  function nextLink() {
    var links = jQuery('div.passage.body a');
    var newIndex = 0;
    var $last = jQuery(links[links.length - 1]);
    if (links.is('.gamepadSelected') && ! $last.is('.gamepadSelected')) {
      links.each(function(_idx, el) {
        var $el = jQuery(el);
        if ($el.is('.gamepadSelected')) {
          $el.removeClass('gamepadSelected');
          newIndex = _idx + 1;
        }
      });
    } else if ($last.is('.gamepadSelected')) {
      $last.removeClass('gamepadSelected');
    }
    jQuery(links[newIndex]).addClass('gamepadSelected');
  }

  function prevLink() {
    var links = jQuery('div.passage.body a');
    var newIndex = 0;
    var $first = jQuery(links[0]);
    if (links.is('.gamepadSelected')) {
      if ($first.is('.gamepadSelected')) {
        $first.removeClass('gamepadSelected');
        newIndex = links.length - 1;
      } else {
        links.each(function(_idx, el) {
          var $el = jQuery(el);
          if ($el.is('.gamepadSelected')) {
            $el.removeClass('gamepadSelected');
            newIndex = _idx - 1;
          }
        });
      }
    }
    jQuery(links[newIndex]).addClass('gamepadSelected');
  }

})(((typeof(module) !== 'undefined') && module.exports) || window);
