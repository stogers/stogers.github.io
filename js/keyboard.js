'use strict';

var qwerty = [
      {
         "name": "TLDE",
         "base": "`",
         "shift": "~"
      },
      {
         "name": "AE01",
         "base": "1",
         "shift": "!"
      },
      {
         "name": "AE02",
         "base": "2",
         "shift": "@"
      },
      {
         "name": "AE03",
         "base": "3",
         "shift": "#"
      },
      {
         "name": "AE04",
         "base": "4",
         "shift": "$"
      },
      {
         "name": "AE05",
         "base": "5",
         "shift": "%"
      },
      {
         "name": "AE06",
         "base": "6",
         "shift": "^"
      },
      {
         "name": "AE07",
         "base": "7",
         "shift": "&"
      },
      {
         "name": "AE08",
         "base": "8",
         "shift": "*"
      },
      {
         "name": "AE09",
         "base": "9",
         "shift": "("
      },
      {
         "name": "AE10",
         "base": "0",
         "shift": ")"
      },
      {
         "name": "AE11",
         "base": "-",
         "shift": "_"
      },
      {
         "name": "AE12",
         "base": "=",
         "shift": "+"
      },
      {
         "name": "AD01",
         "base": "q",
         "shift": "Q"
      },
      {
         "name": "AD02",
         "base": "w",
         "shift": "W"
      },
      {
         "name": "AD03",
         "base": "e",
         "shift": "E"
      },
      {
         "name": "AD04",
         "base": "r",
         "shift": "R"
      },
      {
         "name": "AD05",
         "base": "t",
         "shift": "T"
      },
      {
         "name": "AD06",
         "base": "y",
         "shift": "Y"
      },
      {
         "name": "AD07",
         "base": "u",
         "shift": "U"
      },
      {
         "name": "AD08",
         "base": "i",
         "shift": "I"
      },
      {
         "name": "AD09",
         "base": "o",
         "shift": "O"
      },
      {
         "name": "AD10",
         "base": "p",
         "shift": "P"
      },
      {
         "name": "AD11",
         "base": "[",
         "shift": "{"
      },
      {
         "name": "AD12",
         "base": "]",
         "shift": "}"
      },
      {
         "name": "AC01",
         "base": "a",
         "shift": "A"
      },
      {
         "name": "AC02",
         "base": "s",
         "shift": "S"
      },
      {
         "name": "AC03",
         "base": "d",
         "shift": "D"
      },
      {
         "name": "AC04",
         "base": "f",
         "shift": "F"
      },
      {
         "name": "AC05",
         "base": "g",
         "shift": "G"
      },
      {
         "name": "AC06",
         "base": "h",
         "shift": "H"
      },
      {
         "name": "AC07",
         "base": "j",
         "shift": "J"
      },
      {
         "name": "AC08",
         "base": "k",
         "shift": "K"
      },
      {
         "name": "AC09",
         "base": "l",
         "shift": "L"
      },
      {
         "name": "AC10",
         "base": ";",
         "shift": ":"
      },
      {
         "name": "AC11",
         "base": "'",
         "shift": "\""
      },
      {
         "name": "BKSL",
         "base": "\\",
         "shift": "|"
      },
      {
         "name": "LSGT",
         "base": "\\",
         "shift": "|"
      },
      {
         "name": "AB01",
         "base": "z",
         "shift": "Z"
      },
      {
         "name": "AB02",
         "base": "x",
         "shift": "X"
      },
      {
         "name": "AB03",
         "base": "c",
         "shift": "C"
      },
      {
         "name": "AB04",
         "base": "v",
         "shift": "V"
      },
      {
         "name": "AB05",
         "base": "b",
         "shift": "B"
      },
      {
         "name": "AB06",
         "base": "n",
         "shift": "N"
      },
      {
         "name": "AB07",
         "base": "m",
         "shift": "M"
      },
      {
         "name": "AB08",
         "base": ",",
         "shift": "<"
      },
      {
         "name": "AB09",
         "base": ".",
         "shift": ">"
      },
      {
         "name": "AB10",
         "base": "/",
         "shift": "?"
      },
      {
         "name": "SPCE",
         "base": "",
         "shift": ""
      }
   ]

var gKeyboard = (function(window, document, undefined) {
  var layoutId = '';
  var layoutDoc = null;     // xml layout document
  var keymap = new Array(); // [ (charString, keyRef) ]
  var keymod = new Array(); // [ (charString, modifierRef) ]
  var usrInputTimeout = 150;
  var usrInputStyle = 'color: white; background-color: black;';
  var ui = {
    layout: null,
    variant: null,
    keyboard: null,
    shape: null,
    hints: null,
    hands: null
  }; // ui.activeKey and ui.activeMod are added dynamically

  function init() {
    for (var id in ui) {
      ui[id] = document.getElementById(id);
    }

    keymap = new Array();
    var kbLayout = 'qwerty';
    setLayout(kbLayout);
  }

  function setShape(value) {
    if (value == 'pc105') {
      document.getElementById('key_AE01').className = 'left5';
      document.getElementById('key_AE02').className = 'left5';
      document.getElementById('key_AE03').className = 'left4';
      document.getElementById('key_AE04').className = 'left3';
      document.getElementById('key_AE05').className = 'left2';
      document.getElementById('key_AE06').className = 'left2';
      document.getElementById('key_AE07').className = 'right2';
      document.getElementById('key_AE08').className = 'right2';
      document.getElementById('key_AE09').className = 'right3';
      document.getElementById('key_AE10').className = 'right4';
    } else {
      document.getElementById('key_AE01').className = 'left5';
      document.getElementById('key_AE02').className = 'left4';
      document.getElementById('key_AE03').className = 'left3';
      document.getElementById('key_AE04').className = 'left2';
      document.getElementById('key_AE05').className = 'left2';
      document.getElementById('key_AE06').className = 'right2';
      document.getElementById('key_AE07').className = 'right2';
      document.getElementById('key_AE08').className = 'right3';
      document.getElementById('key_AE09').className = 'right4';
      document.getElementById('key_AE10').className = 'right5';
    }
    STORAGE.setItem('kbShape', value);
    SELECT.setValue(ui.shape, value);
    ui.keyboard.className = value;
  }

  function showHints(on) {
    document.body.className = on ? 'hints' : '';
    ui.hints.checked = on;
    STORAGE.setItem('kbHints', (on ? 'on' : 'off'));
  }

  function setLayout(kbLayout) {
    setVariant("us");
  }

  function setVariant(variantID) {
    // var variant = layoutDoc.getElementById(variantID);
    // getElementById doesn't work on these XML files and I can't see why *sigh*
    // So this here's a dirty getElementById:

    // fill the graphical keyboard
    var keys = qwerty
    for (var i = 0; i < keys.length; i++) {
      drawKey(keys[i]);
    }
  }

  function drawKey(dict) {
    var name = dict['name'];
    var base = dict['base'];
    var shift = dict['shift'];
    var element = document.getElementById('key_' + name);
    if (!element)
      return;

    // fill <li> element
    element.innerHTML = '';
    // create <strong> for 'shift'
    var strong = document.createElement('strong');
    var strongStr = document.createTextNode(shift);
    strong.appendChild(strongStr);
    element.appendChild(strong);
    // append <em> for 'base' if necessary (not a letter)
    if (shift.toLowerCase() != base) {
      var em = document.createElement('em');
      var emStr = document.createTextNode(base);
      em.appendChild(emStr);
      element.appendChild(em);
    }

    // store current key in the main hash table
    keymap[base] = element;
    keymap[shift] = element;
    if (base != shift) {
      var id = 'key_' + (/^left/.test(element.className) ? 'RTSH' : 'LFSH');
      keymod[shift] = document.getElementById(id);
    }
  }

  function pressKey(keyChar) {
    // highlight the key that has been pressed
    var key = keymap[keyChar];
    if (key) {
      key.style.cssText = usrInputStyle;
      setTimeout(function() {
        key.style.cssText = '';
        key.className = key.className.replace(' active', '')
      }, usrInputTimeout);
    }
  }

  function highlightKey(keyChar) {
    // remove last key's highlighting
    if (ui.activeKey) {
      var className = ui.activeKey.className.replace(/\s.*$/, '');
      ui.activeKey.className = className;
    }
    if (ui.activeMod) {
      ui.activeMod.className = 'specialKey';
    }

    // highlight the new key and the corresponding finger
    var key = keymap[keyChar];
    if (key) {
      // ui.hands.className = key.className;
      ui.activeKey = key;
      key.className += ' active';
    }

    // highlight the modifier, if any
    var mod = keymod[keyChar];
    if (mod) {
      // ui.hands.className += ' shift';
      ui.activeMod = mod;
      mod.className += ' active';
    }
  }

  return {
    init: init,
    getLayout: function() { return layoutId; },
    setLayout: setLayout,
    highlightKey: highlightKey,
    pressKey: pressKey
  };
})(this, document);

