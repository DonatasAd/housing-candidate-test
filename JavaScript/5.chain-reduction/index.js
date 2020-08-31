"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function chainReduction(text) {
    return Array.from(text).reduce(function (a, b) {
        var lastLetter = a.slice(-1);
        var isLastLetterCap = lastLetter === lastLetter.toUpperCase();
        var isNextLetterCap = b === b.toUpperCase();
        if (lastLetter.toLowerCase() === b.toLowerCase() && isLastLetterCap !== isNextLetterCap) {
            return a.substring(0, a.length - 1);
        }
        return a + b;
    });
}
exports.default = chainReduction;
