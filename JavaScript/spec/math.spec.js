"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../3.math/index"));
describe('spec/number.spec.ts', function () {
    it('When 65, 60, 75, 55, 60, 63, 64, 45 should return number 86', function () {
        var result = index_1.default(65, 60, 75, 55, 60, 63, 64, 45);
        expect(result).toEqual(86.84037079607617);
    });
    it('When 10 should return number 5', function () {
        var result = index_1.default(10);
        expect(result).toEqual(5);
    });
    it('When 0 should return number 0', function () {
        var result = index_1.default(0);
        expect(result).toEqual(0);
    });
    it('When no argument should return number 0', function () {
        var result = index_1.default();
        expect(result).toEqual(0);
    });
});
