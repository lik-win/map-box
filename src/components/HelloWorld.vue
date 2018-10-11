<template>
  <div class="wrap">
    <map-box
      @map-loaded="mapLoaded"
    ></map-box>
  </div>
</template>

<script>
  import {
    addNormalSourceLayer,
    setSourceData
  } from '../assets/javascript/map.js';
  import MapBox from './MapBox';

  export default {
    name: 'HelloWorld',
    data() {
      return {}
    },
    methods: {
      mapLoaded() {
        let features = {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [116.413005, 39.973209]
              }
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [116.483465, 39.913445]
              }
            }
          ]
        };
        let sourceid = 'cat';
        addNormalSourceLayer({
          id: 'point',
          type: 'symbol',
          sourceid: sourceid,
          style: {
            'icon-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png',
            'icon-size': 0.2
          }
        });
        setSourceData(sourceid, features);

        // 添加线
        let lineFeature = {
          'type': 'Feature',
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [116.413005, 39.973209],
              [116.483465, 39.913445]
            ]
          }
        };
        let lineSource = 'lineSource';
        addNormalSourceLayer({
          id: lineSource,
          type: 'line',
          sourceid: lineSource,
          style: {
            'line-join': 'round',
            'line-cap': 'round',
            'line-color': '#888',
            'line-width': 3
          }
        });
        setSourceData(lineSource, lineFeature);

        // 添加面
        let polygonSrouceid = 'polygon';
        let polygonFeature = {
          'type': 'Feature',
          'geometry': {
            'type': 'Polygon',
            'coordinates': [
              [
                [
                  116.441446,
                  39.927898
                ],
                [
                  116.441464,
                  39.926595
                ],
                [
                  116.443503,
                  39.926567
                ],
                [
                  116.443552,
                  39.927058
                ],
                [
                  116.444109,
                  39.927898
                ]
              ]
            ]
          }
        };
        addNormalSourceLayer({
          id: polygonSrouceid,
          type: 'fill',
          sourceid: polygonSrouceid,
          style: {
            'fill-color': 'red'
          }
        });
        setSourceData(polygonSrouceid, polygonFeature);
      }
    },
    components: {
      'map-box': MapBox
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .wrap {
    width: 100%;
    height: 100%;
  }
</style>
