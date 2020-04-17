document.body.onkeydown = function (e) {
    var keys = {
        // 37: 'left',
        // 39: 'right',
        // 40: 'down',
        // 38: 'rotate',
        // 32: 'drop'
        'Numpad4': 'left', // 4
        'Numpad6': 'right', // 6
        'Numpad8': 'rotate', // 5
        'Numpad5': 'down', // 8
        'Numpad2': 'down', // 2
        'NumpadEnter': 'drop', // enter

    };
    console.log(e);
    if (typeof keys[e.code] !== 'undefined') {
        keyPress(keys[e.code]);
        render();
        e.preventDefault();
    }
};
