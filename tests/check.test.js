import { check } from '../public/js/check.js';

test('returns true for "cattac"', () => {
    expect(check('cattac')).toBe(true);
});

test('returns true for "cattacCATTACcAttAc"', () => {
    expect(check('cattacCATTACcAttAc')).toBe(true);
});

test('returns true for "CATcattacTAC"', () => {
    expect(check('CATcattacTAC')).toBe(true);
});

test('returns false for "taccat"', () => {
    expect(check('taccat')).toBe(false);
});

test('returns false for "catTAC"', () => {
    expect(check('catTAC')).toBe(false);
});

test('returns false for "cAtcattActac"', () => {
    expect(check('cAtcattActac')).toBe(false);
});

test('returns false for "catcatcattactac"', () => {
    expect(check('catcatcattactac')).toBe(false);
});

test('returns false for "empty string"', () => {
    expect(check('')).toBe(false);
});

test('returns false for "initial close bracat"', () => {
    expect(check('tac')).toBe(false);
});

test('returns false for "random string"', () => {
    expect(check('hello world')).toBe(false);
});
