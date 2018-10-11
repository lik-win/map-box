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
      dragRotate: true
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

/*
  添加源
 */
export const addSource = function (sourceid, data) {
  map.addSource(sourceid, {
    type: 'geojson',
    data: data
  })
};

/*
  根据数据源添加层
 */
export const addSourceLayer = function (groupid, source, obj) {
  let layer = {
    id: groupid,
    type: obj.type,
    source: source
  };
  if (obj.layout) {
    layer.layout = obj.layout;
  }
  if (obj.paint) {
    layer.paint = obj.paint;
  }
  map.addLayer(layer);
};

/*
更新数据
 */
export const setSourceData = function (sourceid, _data) {
  let source = map.getSource(sourceid);
  let data = _data;
  if (!_data) {
    data = {
      type: 'FeatureCollection',
      features: []
    };
  }
  if (source) {
    source.setData(data);
  } else {
    map.addSource(sourceid, {
      type: 'geojson',
      data: data
    })
  }
};

export const addNormalSourceLayer = function ({
                                                id,
                                                sourceid,
                                                type,
                                                style
                                              }) {
  if (map.getLayer(id)) {
    return;
  }
  setSourceData(sourceid, null);
  switch (type) {
    case 'symbol':
      addMarkers(id, sourceid, style);
      break;
    case 'line':
      addLines(id, sourceid, style);
      break;
  }
};

/*
  添加 marker
 */
export const addMarkers = function (groupid, sourceid, style) {
  let imageurl = style['icon-image'];
  map.loadImage(imageurl, (error, image) => {
    if (error) {
      console.log(error, imageurl);
    } else {
      map.addImage(sourceid, image);
      addSourceLayer(groupid, sourceid, {
        type: 'symbol',
        layout: {
          'icon-image': sourceid,
          'icon-size': style['icon-size'] || 1 // 图标大小
        }
      });
    }
  });
};
/*
  添加 line
 */
export const addLines = function (groupid, sourceid, style) {
  addSourceLayer(groupid, sourceid, {
    type: 'line',
    layout: {
      'line-join': style['line-join'] || 'round',
      'line-cap': style['line-cap'] || 'round'
    },
    paint: {
      'line-opacity': style['line-opacity'] || 0.5,
      'line-color': style['line-color'] || '#888',
      'line-width': style['line-width'] || 5
    }
  });
};

export default {
  initMap,
  addNormalSourceLayer,
  setSourceData
};
