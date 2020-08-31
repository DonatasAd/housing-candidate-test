"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function number(numbers) {
    if (numbers.length > 0) {
        var avarage = numbers.reduce(function (a, b) { return a + b; }) / numbers.length;
        return Math.round(avarage);
    }
    return null;
}
exports.default = number;
