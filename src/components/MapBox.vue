<template>
  <div id='mapBox'></div>
</template>

<script>
  import {
    initMap
  } from '../assets/javascript/map.js';

  export default {
    name: 'MapBox',
    data() {
      return {
        map: null,
        level: 11,
        center: [116.413005, 39.973209]
      }
    },
    mounted() {
      this.map = initMap('mapBox', this.level, this.center);
      this.map.on('load', () => {
        this.$emit('map-loaded');
      });
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
  #mapBox {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    box-sizing: border-box;
  }
</style>
