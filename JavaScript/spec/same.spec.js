"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../2.same/index"));
describe('spec/same.spec.ts', function () {
    it('When "ddkk" should return true', function () {
        var result = index_1.default('ddkk');
        expect(result).toEqual(true);
    });
    it('When "dkkdd" should return false', function () {
        var result = index_1.default('dkkdd');
        expect(result).toEqual(false);
    });
    it('When "ddkKm" should return true', function () {
        var result = index_1.default('ddkKm');
        expect(result).toEqual(true);
    });
    it('When "dmm" should return false', function () {
        var result = index_1.default('dmm');
        expect(result).toEqual(false);
    });
    it('When "eSss" should return true', function () {
        var result = index_1.default('eSss');
        expect(result).toEqual(true);
    });
    it('When string is empty should return true', function () {
        var result = index_1.default('');
        expect(result).toEqual(true);
    });
});
