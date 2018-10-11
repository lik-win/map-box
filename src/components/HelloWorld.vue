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
