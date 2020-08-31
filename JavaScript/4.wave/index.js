"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wave(str) {
    var lowerCase = str.toLowerCase();
    var result = [];
    for (var i = 0; i < lowerCase.length; i++) {
        if (lowerCase[i] === ' ')
            continue;
        var upperCase = lowerCase[i].toUpperCase();
        var lettersBefore = lowerCase.slice(0, i);
        var lettersAfter = lowerCase.slice(i + 1, lowerCase.length);
        result.push("" + lettersBefore + upperCase + lettersAfter);
    }
    return result;
}
exports.default = wave;
