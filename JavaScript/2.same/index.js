"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function same(str) {
    var lowerCase = str.toLowerCase();
    var d = (lowerCase.match(/d/g) || []).length;
    var k = (lowerCase.match(/k/g) || []).length;
    return d === k;
}
exports.default = same;
