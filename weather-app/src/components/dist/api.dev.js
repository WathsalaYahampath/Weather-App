"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WEATHER_API_KEY = exports.WEATHER_API_URL = exports.GEO_API_URL = exports.geoApiOptions = void 0;
var geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3e0d1c2bc9msh16c207c4f39efe7p1a5884jsn462f041eb139',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};
exports.geoApiOptions = geoApiOptions;
var GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
exports.GEO_API_URL = GEO_API_URL;
var WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
exports.WEATHER_API_URL = WEATHER_API_URL;
var WEATHER_API_KEY = "6720c47f0670942154dd846123cf25d5";
exports.WEATHER_API_KEY = WEATHER_API_KEY;
//# sourceMappingURL=api.dev.js.map
