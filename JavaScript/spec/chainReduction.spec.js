"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../5.chain-reduction/index"));
var fs_1 = __importDefault(require("fs"));
var text = fs_1.default.readFileSync(process.cwd() + '/5.chain-reduction/input.txt', 'utf8');
describe('spec/chainReduction.spec.ts', function () {
    it('When "uU" should return empty string', function () {
        var result = index_1.default('uU');
        expect(result).toEqual('');
    });
    it('When "urRU" should return empty string', function () {
        var result = index_1.default('urRU');
        expect(result).toEqual('');
    });
    it('When "uuRU" should return "uuRU"', function () {
        var result = index_1.default('uuRU');
        expect(result).toEqual('uuRU');
    });
    it('When "uuRUUR" should return "uuRUUR"', function () {
        var result = index_1.default('uuRUUR');
        expect(result).toEqual('uuRUUR');
    });
    it('When "ebcBdDbDCBdDdbEB" should return "ebcDCBdbEB"', function () {
        var result = index_1.default('ebcBdDbDCBdDdbEB');
        expect(result).toEqual('ebcDCBdbEB');
    });
    it('When text from file should return 9348', function () {
        var result = index_1.default(text);
        expect(result.length).toEqual(9348);
    });
});
