const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

describe.only('utils - buildMessage', function () {
    describe('cuando recibe una lista de lugares', function () {
        it('deberia retornar el respectivo mensaje', function () {
            const result = buildMessage();
            const expected = 'datos lugares';
            assert.strictEqual(result, expected);
        })
    })
    describe('cuando recibe una lista de lugares segun una consulta y el lugar', function () {
        it('deberia retornar el respectivo mensaje', function () {
            const result = buildMessage('perfume', 'calacoto');
            const expect = 'Lugares sobre perfume en calacoto';
            assert.strictEqual(result, expect);
        })
    });
});