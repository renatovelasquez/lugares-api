const sinon = require('sinon');

const {lugaresMock, filteredLugaresMock} = require('./lugares');

const getAllStub = sinon.stub();
getAllStub.withArgs('lugares').resolves(lugaresMock);

const addressQuery = {address: {$in: ['Megacenter']}};
getAllStub.withArgs('lugares', addressQuery).resolves(filteredLugaresMock('Megacenter'));

const createStub = sinon.stub().resolves(lugaresMock[0].venue.name);

class MongoLibMock {
    obtieneTodo(collection, query) {
        return getAllStub(collection, query);
    }

    crea(collection, data) {
        return createStub(collection, data);
    }
}

module.exports = {
    getAllStub,
    createStub,
    MongoLibMock
};