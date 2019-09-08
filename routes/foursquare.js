const express = require('express');
const FoursquareService = require('../services/foursquare');

const { lugarPalabraBusqueda, lugarBusqueda } = require('../utils/schemas/lugares');
const validationHandler = require('../utils/middleware/validationHandler');

const cacheResponse = require('../utils/cacheResponse');
const { FIVE_MINUTES_IN_SECONDS } = require('../utils/variables');

function foursquareApi(app) {
  const router = express.Router();
  app.use('/api', router);

  router.get('/locacion', async function(req, res, next) {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    try {
      const ipc = req.header('x-forwarded-for') || req.connection.remoteAddress || await FoursquareService.fetchIP();
      const locacion = await FoursquareService.fetchDireccion(ipc);
      res.status(200).json({
        locacion: locacion,
        message: 'datos locacion'
      });
    } catch (e) {
      next(e);
    }
  });

  router.get('/lugares', async function(req, res, next) {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    try {
      const ipc = req.header('x-forwarded-for') || req.connection.remoteAddress || await FoursquareService.fetchIP();
      const locacion = await FoursquareService.fetchDireccion(ipc);
      const lugares = await FoursquareService.fetchBusquedaLugares(locacion.latitude, locacion.longitude);
      res.status(200).json({
        lugares: lugares.response.groups[0].items,
        message: 'datos lugares'
      });
    } catch (e) {
      next(e);
    }
  });

  router.get('/lugares/:query/:lugar', validationHandler({
    query: lugarPalabraBusqueda,
    lugar: lugarBusqueda
  }, 'params'), async function(req, res, next) {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    const { query, lugar } = req.params;
    try {
      const lugares = await FoursquareService.fetchBusquedaLugaresQueryLugar({ query, lugar });
      res.status(200).json({
        lugares: lugares.response.groups[0].items,
        message: `Lugares sobre ${query} en ${lugar}`
      });
    } catch (e) {
      next(e);
    }
  });

  router.get('/reporte', async function(req, res, next) {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    try {
      const ip = await FoursquareService.fetchIP();
      const locacion = await FoursquareService.fetchDireccion(ip);
      const lugares = await FoursquareService.fetchBusquedaTendencia(locacion.latitude, locacion.longitude);

      (lugares.response.venues).forEach(function(item) {
        console.log(lugares.response.venues.size());
        const reporte = FoursquareService.fetchReporteLugar(item.id, lugares.meta.requestId);
        console.log(reporte);
        res.status(200).json({
          reporte: reporte,
          message: 'reporte lugar'
        });
      });
    } catch (e) {
      next(e);
    }
  });
}

module.exports = foursquareApi;