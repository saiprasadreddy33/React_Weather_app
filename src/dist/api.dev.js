"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WEATHER_API_KEY = exports.WEATHER_API_URL = exports.GEO_API_URL = exports.geoApiOptions = void 0;
var geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5001167beemsh5b6fa382d411bf6p1d35dejsn6b6e6b192acc",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
  }
};
exports.geoApiOptions = geoApiOptions;
var GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
exports.GEO_API_URL = GEO_API_URL;
var WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
exports.WEATHER_API_URL = WEATHER_API_URL;
var WEATHER_API_KEY = "6f5adfbdc0cf49969896399a9fafd1da";
exports.WEATHER_API_KEY = WEATHER_API_KEY;
//# sourceMappingURL=api.dev.js.map
