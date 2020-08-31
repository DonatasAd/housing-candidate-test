"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../1.number/index"));
describe('spec/number.spec.ts', function () {
    it('When [1, 2] should return number 3', function () {
        var result = index_1.default([1, 2]);
        expect(result).toEqual(2);
    });
    it('When [2, 4] should return number 3', function () {
        var result = index_1.default([2, 4]);
        expect(result).toEqual(3);
    });
    it('When [23, 18, 1, 1, 1, 1] should return number 3', function () {
        var result = index_1.default([23, 18, 1, 1, 1, 1]);
        expect(result).toEqual(8);
    });
    it('When [1, 2, 3, 4, 5] should return number 3', function () {
        var result = index_1.default([1, 2, 3, 4, 5]);
        expect(result).toEqual(3);
    });
    it('When Array is empty should return null', function () {
        var result = index_1.default([]);
        expect(result).toEqual(null);
    });
});
