var _0x2362 = ['buzz\x20color\x20-\x20', 'endValue', 'Fizz\x20', 'backgroundColor', 'innerText', 'element', 'value', 'innerHTML', 'Divs\x20cleared', 'Buzz', 'Generate\x20custom\x20divs', 'Fizz', 'an1', 'removeChild', 'class', 'buzz\x20value\x20-\x20', 'width', 'style', 'Adding\x20listeners', 'fizzValue', 'div', 'log', 'height', 'setAttribute', 'an2', 'noneColor', 'Empty', 'Button\x20hit', 'FizzBuzz⭐', 'getElementById', 'appendChild', 'className', 'oninput', 'FizzBuzz', 'firstChild'];
var _0x536b = function(_0x2362eb, _0x536bda) {
    _0x2362eb = _0x2362eb - 0x0;
    var _0x12b2e0 = _0x2362[_0x2362eb];
    return _0x12b2e0;
};
console[_0x536b('0x15')]('Script\x20started');

function innit() {
    console[_0x536b('0x15')](_0x536b('0x12'));
    addListeners();
    document[_0x536b('0x1d')]('nr');
    var _0x36473d = document['getElementById'](_0x536b('0xc'));
    _0x36473d['addEventListener']('click', onClickClear);
    var _0x538930 = document[_0x536b('0x1d')](_0x536b('0x18'));
    _0x538930['addEventListener']('click', onClickCustom);
}
var sl1 = document[_0x536b('0x1d')]('elWidth');
var sl1Value = document['getElementById']('elWidthOutput');
sl1[_0x536b('0x7')] = sl1Value[_0x536b('0x6')];
sl1[_0x536b('0x20')] = function() {
    sl1Value[_0x536b('0x7')] = this['value'];
};
var sl2 = document[_0x536b('0x1d')]('elHeight');
var sl2Value = document['getElementById']('elHeightOutput');
sl2[_0x536b('0x7')] = sl2Value[_0x536b('0x6')];
sl2[_0x536b('0x20')] = function() {
    sl2Value['innerHTML'] = this[_0x536b('0x6')];
};

function onClick() {
    onClickClear();
    console[_0x536b('0x15')](_0x536b('0x1b'));
    for (let _0x4061a4 = 0x1; _0x4061a4 < 0x65; _0x4061a4++) {
        const _0x547938 = document['createElement']('div');
        _0x547938[_0x536b('0x1f')] = 'element' + _0x4061a4;
        nr[_0x536b('0x1e')](_0x547938);
        if (_0x4061a4 % 0x3 === 0x0 && _0x4061a4 % 0x5 === 0x0) {
            _0x547938['setAttribute']('id', _0x536b('0x5') + _0x4061a4);
            _0x547938[_0x536b('0x17')]('class', _0x536b('0x21'));
            _0x547938[_0x536b('0x4')] = _0x536b('0x1c') + _0x4061a4;
        } else if (_0x4061a4 % 0x3 === 0x0 && _0x4061a4 % 0x5 !== 0x0) {
            _0x547938['setAttribute']('id', _0x536b('0x5') + _0x4061a4);
            _0x547938['setAttribute']('class', _0x536b('0xb'));
            _0x547938['innerText'] = 'Fizz🔺' + _0x4061a4;
        } else if (_0x4061a4 % 0x5 === 0x0 && _0x4061a4 % 0x3 !== 0x0) {
            _0x547938[_0x536b('0x17')]('id', 'element' + _0x4061a4);
            _0x547938['setAttribute'](_0x536b('0xe'), 'Buzz');
            _0x547938[_0x536b('0x4')] = 'Buzz🔻' + _0x4061a4;
        } else if (_0x4061a4 % 0x3 !== 0x0 && _0x4061a4 % 0x5 !== 0x0) {
            _0x547938[_0x536b('0x17')]('id', _0x536b('0x5') + _0x4061a4);
            _0x547938[_0x536b('0x17')]('class', 'Empty');
            _0x547938['innerText'] = _0x4061a4;
        }
    }
}

function onClickClear() {
    while (nr[_0x536b('0x22')]) {
        nr[_0x536b('0xd')](nr[_0x536b('0x22')]);
    }
    console[_0x536b('0x15')](_0x536b('0x8'));
}

function onClickCustom() {
    onClickClear();
    console[_0x536b('0x15')]('Divs\x20cleared');
    console['log'](_0x536b('0xa'));
    var _0x425b02 = document[_0x536b('0x1d')]('startValue')['value'];
    var _0x4beb02 = document[_0x536b('0x1d')](_0x536b('0x1'))['value'];
    var _0x41c46b = document['getElementById'](_0x536b('0x13'))['value'];
    var _0x5268d6 = document['getElementById']('buzzValue')[_0x536b('0x6')];
    var _0x19d1b4 = document[_0x536b('0x1d')]('fizzColor')[_0x536b('0x6')];
    var _0x446845 = document['getElementById']('buzzColor')[_0x536b('0x6')];
    var _0x397fb3 = document[_0x536b('0x1d')]('fizzBuzzColor')[_0x536b('0x6')];
    var _0x30aa70 = document[_0x536b('0x1d')](_0x536b('0x19'))['value'];
    console[_0x536b('0x15')]('start\x20value\x20-\x20' + _0x425b02);
    console['log']('end\x20value\x20-\x20' + _0x4beb02);
    console[_0x536b('0x15')]('fizz\x20value\x20-\x20' + _0x41c46b);
    console[_0x536b('0x15')](_0x536b('0xf') + _0x5268d6);
    console['log']('fizz\x20color\x20-\x20' + _0x19d1b4);
    console[_0x536b('0x15')](_0x536b('0x0') + _0x446845);
    console['log']('fizzbuzz\x20color\x20-\x20' + _0x397fb3);
    console['log']('none\x20color\x20-\x20' + _0x30aa70);
    for (_0x425b02; _0x425b02 <= _0x4beb02; _0x425b02++) {
        const _0x451e9c = document['createElement'](_0x536b('0x14'));
        _0x451e9c['id'] = 'element' + _0x425b02;
        nr[_0x536b('0x1e')](_0x451e9c);
        if (_0x425b02 % _0x41c46b === 0x0 && _0x425b02 % _0x5268d6 === 0x0) {
            _0x451e9c['setAttribute']('id', 'element' + _0x425b02);
            _0x451e9c[_0x536b('0x17')]('class', _0x536b('0x21'));
            _0x451e9c['innerText'] = 'FizzBuzz\x20' + _0x425b02;
            _0x451e9c[_0x536b('0x11')]['backgroundColor'] = _0x397fb3;
            _0x451e9c['style']['width'] = sl1[_0x536b('0x6')] + 'px';
            _0x451e9c['style'][_0x536b('0x16')] = sl2['value'] + 'px';
        } else if (_0x425b02 % _0x41c46b === 0x0 && _0x425b02 % _0x5268d6 !== 0x0) {
            _0x451e9c['setAttribute']('id', 'element' + _0x425b02);
            _0x451e9c['setAttribute']('class', _0x536b('0xb'));
            _0x451e9c[_0x536b('0x4')] = _0x536b('0x2') + _0x425b02;
            _0x451e9c['style'][_0x536b('0x3')] = _0x19d1b4;
            _0x451e9c[_0x536b('0x11')][_0x536b('0x10')] = sl1[_0x536b('0x6')] + 'px';
            _0x451e9c[_0x536b('0x11')]['height'] = sl2[_0x536b('0x6')] + 'px';
        } else if (_0x425b02 % _0x5268d6 === 0x0 && _0x425b02 % _0x41c46b !== 0x0) {
            _0x451e9c[_0x536b('0x17')]('id', 'element' + _0x425b02);
            _0x451e9c['setAttribute'](_0x536b('0xe'), _0x536b('0x9'));
            _0x451e9c['innerText'] = 'Buzz\x20' + _0x425b02;
            _0x451e9c[_0x536b('0x11')]['backgroundColor'] = _0x446845;
            _0x451e9c[_0x536b('0x11')][_0x536b('0x10')] = sl1[_0x536b('0x6')] + 'px';
            _0x451e9c['style']['height'] = sl2[_0x536b('0x6')] + 'px';
        } else if (_0x425b02 % _0x41c46b !== 0x0 && _0x425b02 % _0x5268d6 !== 0x0) {
            _0x451e9c['setAttribute']('id', _0x536b('0x5') + _0x425b02);
            _0x451e9c['setAttribute'](_0x536b('0xe'), _0x536b('0x1a'));
            _0x451e9c[_0x536b('0x4')] = _0x425b02;
            _0x451e9c['style']['backgroundColor'] = _0x30aa70;
            _0x451e9c['style']['width'] = sl1['value'] + 'px';
            _0x451e9c['style'][_0x536b('0x16')] = sl2['value'] + 'px';
        }
    }
}

function addListeners() {
    const _0x29ad2d = document['getElementById']('an');
    _0x29ad2d['onclick'] = onClick;
}
innit();
