const fetch = require('node-fetch');
const { N_LUGARES_CERCANOS, URL_IP_DATA, URL_FS, URL_IP } = require('../utils/variables');
const { config } = require('../config');
const moment = require('moment');
const debug = require('debug')('app:server');

const CLIENT_ID = config.clientIdFoursquare;
const CLIENT_SECRET = config.clientSecretFoursquare;

class FoursquareService {

  static async fetchBusquedaLugares(lat, lon) {
    const url = `${URL_FS}explore?ll=${lat},${lon}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&limit=${N_LUGARES_CERCANOS}&v=${moment().format('YYYYMMDD')}`;
    debug(url);
    const res = await fetch(url);
    if (!res.ok) {
      throw Error(res.status); // 404
    }
    const data = await res.json();
    return data || {};
  }

  static async fetchIP() {
    const res = await fetch(URL_IP);
    if (!res.ok) {
      throw Error(res.status); // 404
    }
    const data = await res.json();
    return data.ip;
  }

  static async fetchDireccion(ip) {
    const url = `${URL_IP_DATA}${ip}`;
    debug(url);
    const res = await fetch(url);
    if (!res.ok) {
      throw Error(res.status); // 404
    }
    const data = await res.json();
    return data || {};
  }

  static async fetchBusquedaLugaresQueryLugar({ query, lugar }) {
    const url = encodeURI(`${URL_FS}explore?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${moment().format('YYYYMMDD')}&near=${lugar}&query=${query}`);
    const res = await fetch(url);
    debug(res);
    if (!res.ok) {
      throw Error(res.status); // 404
    }
    const data = await res.json();
    return data || {};
  }

  static async fetchBusquedaTendencia(lat, lon) {
    const url = `${URL_FS}trending?ll=${lat},${lon}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&limit=${N_LUGARES_CERCANOS}&v=${moment().format('YYYYMMDD')}`;
    debug(url);
    const res = await fetch(url);
    if (!res.ok) {
      throw Error(res.status); // 404
    }
    const data = await res.json();
    return data || {};
  }

  static async fetchReporteLugar(id, requestId) {
    const myPost = {
      requestId: requestId,
      type: 'currentLocation',
      visitSignature: '7e0d0767775312154b'
    };
    const url = `${URL_FS}${id}/select?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${moment().format('YYYYMMDD')}`;
    debug(url);
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myPost)
    });
    debug(res);
    if (!res.ok) {
      throw Error(res.status); // 404
    }
    const data = await res.json();
    return data || {};
  }
}

module.exports = FoursquareService;