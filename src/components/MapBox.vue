<template>
  <div id="mapBox">
  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl';

  export default {
    name: 'MapBox',
    data() {
      return {}
    },
    mounted() {
      mapboxgl.accessToken = 'pk.eyJ1IjoibGlrd2luIiwiYSI6ImNqOXplZ3FsNzFnaDkycXFyOHd6OW1ybHoifQ.d1R23sNwRggOpJeP99M61Q';
      if (!mapboxgl.supported()) {
        alert('Your browser does not support Mapbox GL');
      } else {
        const map = new mapboxgl.Map({
          container: 'mapBox',
          style: 'mapbox://styles/mapbox/streets-v9',
          center: [-74.50, 40],
          zoom: 9
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #mapBox {
    width: 600px;
    height: 500px;
    border: 1px solid #ddd;
    margin: 20px auto;
  }
</style>
