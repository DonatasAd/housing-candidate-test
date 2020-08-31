"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../4.wave/index"));
describe('spec/wave.spec.ts', function () {
    it('When "hello" should return wave hello', function () {
        var result = index_1.default('hello');
        expect(result[0]).toEqual('Hello');
        expect(result[1]).toEqual('hEllo');
        expect(result[2]).toEqual('heLlo');
        expect(result[3]).toEqual('helLo');
        expect(result[4]).toEqual('hellO');
    });
    it('When "HEY" should return wave hey', function () {
        var result = index_1.default('HEY');
        expect(result[0]).toEqual('Hey');
        expect(result[1]).toEqual('hEy');
        expect(result[2]).toEqual('heY');
    });
    it('When " h e y " should return wave hey with empty spaces around letters', function () {
        var result = index_1.default(' h e y ');
        expect(result[0]).toEqual(' H e y ');
        expect(result[1]).toEqual(' h E y ');
        expect(result[2]).toEqual(' h e Y ');
    });
    it('When string is empty should return []', function () {
        var result = index_1.default(' h e y ');
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBeGreaterThan(0);
    });
    it('When string is empty should return wave hey', function () {
        var result = index_1.default('');
        expect(result).toBeDefined(false);
    });
});
