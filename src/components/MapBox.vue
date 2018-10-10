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
        center: [116.413005, 39.973209],
      }
    },
    mounted() {
      this.map = initMap('mapBox', this.level, this.center);
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
  #mapBox {
    width: 600px;
    height: 500px;
    border: 1px solid #ddd;
    margin: 20px auto;
  }
</style>
