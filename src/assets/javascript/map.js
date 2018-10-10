import Vue from 'vue';
import mapboxgl from 'mapbox-gl';

export let map = null;

mapboxgl.accessToken = 'pk.eyJ1IjoibGlrd2luIiwiYSI6ImNqOXplZ3FsNzFnaDkycXFyOHd6OW1ybHoifQ.d1R23sNwRggOpJeP99M61Q';

export const initMap = function (id, zoom, center) {
  const simple = {
    version: 8,
    sources: {
      'osm-tiles': {
        type: 'raster',
        tiles: [
          'https://mt0.google.cn/vt/lyrs=m&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=G',
          'https://mt1.google.cn/vt/lyrs=m&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=G',
          'https://mt2.google.cn/vt/lyrs=m&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=G',
          'https://mt3.google.cn/vt/lyrs=m&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=G'
        ],
        tileSize: 256,
        minzoom: 3,
        maxzoom: 18
      }
    },
    layers: [
      {
        id: 'baseLayer',
        type: 'raster',
        source: 'osm-tiles'
      }
    ]
  };

  if (!mapboxgl.supported()) {
    alert('Your browser does not support Mapbox GL');
  } else {
    map = new mapboxgl.Map({
      container: id,
      style: simple,
      zoom: zoom,
      center: center,
      minZoom: 3,
      maxZoom: 18,
      // dragRotate: true
    });
    map.addControl(new mapboxgl.NavigationControl());
    var scale = new mapboxgl.ScaleControl({
      maxWidth: 100,
      unit: 'metric'
    });
    map.addControl(scale, 'bottom-right');
    return map;
  }
};

export default {
  initMap
};
