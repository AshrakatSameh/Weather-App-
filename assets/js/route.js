'use strict'

import {updateWeather, error404} from './app.js';

const defaultLocation = "#/weather?lat=30.0443879&lon=31.2357257"

const currentLocation = () => {
    window.navigator.geolocation.getCurrentPosition(res => {
        const {latitude, longitude} = res.coords;

        updateWeather(`lat=${latitude}`, `lon=${longitude}`);
    }, err => {
        window.location.hash = defaultLocation;
    })
}

// query: searched query
// updateWeather(lat, lon)
const searchedLocation = query => updateWeather(...query.split('&'));


const routes = new Map([
    ['/current-location', currentLocation],
    ['/weather', searchedLocation]
]);


const checkHash = () => {
    const requestUrl = window.location.hash.slice(1);

    const [route, query] = requestUrl.includes ? requestUrl.split('?') : [requestUrl];

    routes.get(route) ? routes.get(route)(query) : error404();
}

window.addEventListener('hashchange', checkHash);

window.addEventListener('load', () => {
    if(!window.location.hash) {
        window.location.hash = '#/current-location'
    } else {
        checkHash();
    }
})