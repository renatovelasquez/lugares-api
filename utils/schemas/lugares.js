const joi = require('@hapi/joi');

const lugarPalabraBusqueda = joi.string().max(20);
const lugarBusqueda = joi.string().max(20);

module.exports = {
  lugarPalabraBusqueda,
  lugarBusqueda
};