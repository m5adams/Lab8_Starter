// unit.test.js

const { exportAllDeclaration } = require('@babel/types');
const { TestWatcher } = require('@jest/core');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//Phone numbers
test('Test phone number 1', () => {
    expect(functions.isPhoneNumber('951-123-4567')).toBe(true);
});

test('Test phone number 2', () => {
    expect(functions.isPhoneNumber('951-123-4567')).toBe(true);
});

test('Test phone number 3', () => {
    expect(functions.isPhoneNumber('951')).toBe(false);
});

test('Test phone number 4', () => {
    expect(functions.isPhoneNumber('9/27/01')).toBe(false);
});

//Passwords
test('Test password 1', () => {
    expect(functions.isStrongPassword('SwagMaster101')).toBe(true);
});

test('Test password 2', () => {
    expect(functions.isStrongPassword('Swag_hehe1')).toBe(true);
});

test('Test password 3', () => {
    expect(functions.isStrongPassword('111')).toBe(false);
});

test('Test password 4', () => {
    expect(functions.isStrongPassword('aaa')).toBe(false);
});

//Email
test('Test email 1', () => {
    expect(functions.isEmail('mirai@ucsd.edu')).toBe(true);
});

test('Test email 2', () => {
    expect(functions.isEmail('mirai@yahoo.com')).toBe(true);
});

test('Test email 3', () => {
    expect(functions.isEmail('mirai')).toBe(false);
});

test('Test email 4', () => {
    expect(functions.isEmail('@yahoo.com')).toBe(false);
});

//Dates
test('Test date 1', () => {
    expect(functions.isDate('09/27/2001')).toBe(true);
});

test('Test date 2', () => {
    expect(functions.isDate('10/04/2004')).toBe(true);
});

test('Test date 3', () => {
    expect(functions.isDate('9-27-2001')).toBe(false);
});

test('Test date 4', () => {
    expect(functions.isDate('5')).toBe(false);
});

// Colors
test('Test color 1', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('Test color 2', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});

test('Test color 3', () => {
    expect(functions.isHexColor('#FFFFFF000000')).toBe(false);
});

test('Test color 4', () => {
    expect(functions.isHexColor('#F')).toBe(false);
});

