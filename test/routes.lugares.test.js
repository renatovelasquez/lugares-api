const assert = require('assert');
const proxyquire = require('proxyquire');

const {lugaresMock, LugarServiceMock} = require('../utils/mocks/lugares');
const testServer = require('../utils/testServer');

describe('routes - lugares', function () {
    const route = proxyquire('../routes/foursquare', {
        '../services/foursquare': LugarServiceMock
    });

    const request = testServer(route);
    describe('GET /lugares', function () {
        it('la respuesta deberia ser con el estado 200', function (done) {
            request.get('/api/lugares/perfume/calacoto').expect(200, done);
        });

        it('La respuesta deberia ser la lista de lugares', function (done) {
            request.get('/api/lugares/perfume/calacoto').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: lugaresMock,
                    message: 'Lugares sobre perfume en calacoto'
                });
                done();
            });
        })
    });
});